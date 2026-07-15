from __future__ import annotations

import hashlib
import json
import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "database"
DB = DATA / "mnt_terminal.db"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as fh:
        for block in iter(lambda: fh.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def main() -> None:
    manifest = json.loads((DATA / "manifest.json").read_text(encoding="utf-8"))
    errors = []
    for item in manifest["documents"]:
        file = DATA / item["relative_path"]
        if not file.exists():
            errors.append(f"Missing: {item['relative_path']}")
        elif sha256(file) != item["sha256"]:
            errors.append(f"Checksum mismatch: {item['relative_path']}")

    conn = sqlite3.connect(DB)
    integrity = conn.execute("PRAGMA integrity_check").fetchone()[0]
    counts = {
        "documents": conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0],
        "roles": conn.execute("SELECT COUNT(*) FROM roles").fetchone()[0],
        "users": conn.execute("SELECT COUNT(*) FROM users").fetchone()[0],
        "products": conn.execute("SELECT COUNT(*) FROM product_presets").fetchone()[0],
    }
    conn.close()
    if integrity != "ok":
        errors.append(f"SQLite integrity: {integrity}")
    if counts != {"documents": 14, "roles": 6, "users": 15, "products": 12}:
        errors.append(f"Unexpected database counts: {counts}")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Verified: SQLite integrity ok; {counts}; all PDF SHA-256 checks passed.")


if __name__ == "__main__":
    main()
