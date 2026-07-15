const STAGES = ["sales", "production_director", "general_manager", "finance_director", "production_assistant"];
const STAGE_NAMES = { sales: "销售确认", production_director: "生产总监", general_manager: "总经理", finance_director: "财务总监", production_assistant: "生产助理", completed: "已完成" };
const MENU = { dashboard: ["⌂", "工作台"], orders: ["▤", "生产单"], products: ["⌘", "产品配置库"], backup: ["▣", "备份数据库"] };
const CONFIG_FIELDS = [
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["waterCooler", "水冷机"], ["size", "尺寸"], ["vacuum", "真空吸附台面"],
  ["sheetMetal", "钣金"], ["spindle", "主轴功率"], ["pump", "气泵"],
  ["speed", "转速 / 切割速度"], ["dust", "吸尘"], ["spindleBrand", "主轴品牌"], ["toolCount", "通用刀座数量"],
  ["guide", "导轨"], ["system", "系统"],
  ["drive", "伺服电机 / 驱动"], ["cFeedRack", "C系列送料架"], ["cReceiveRack", "C系列收料架"], ["transmission", "传动方式"], ["computer", "电脑"],
  ["inverter", "变频器"], ["logo", "改 Logo"], ["reducer", "减速机"], ["appearance", "外观修改"],
  ["toolChange", "换刀方式"], ["packing", "包装要求"], ["toolMagazine", "刀库形式"], ["table", "台面"],
  ["toolStations", "刀库工位"], ["ccd", "CCD"], ["cooling", "主轴冷却"], ["cabinet", "电控柜配线"]
];
const LASER_CONFIG_FIELDS = [
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["workingArea", "加工范围"], ["laserPower", "激光功率"], ["laserSource", "激光器"], ["cuttingHead", "激光切割头"],
  ["laserControl", "激光控制系统"], ["servoSystem", "伺服系统"], ["laserTransmission", "传动系统"], ["laserGuide", "导轨"],
  ["exchangeTable", "交换平台"], ["enclosure", "防护结构"], ["dustSystem", "除尘系统"], ["chiller", "冷水机"],
  ["tubeRange", "管材范围"], ["chuckSystem", "卡盘系统"], ["visionSystem", "视觉定位系统"], ["machineSize", "设备尺寸"],
  ["logo", "改 Logo"], ["appearance", "外观修改"], ["packing", "包装要求"]
];
const CO2_CONFIG_FIELDS = [
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["workingArea", "加工范围"], ["co2Power", "CO2 激光功率"], ["laserTube", "激光管"], ["coolingSystem", "冷却系统"],
  ["cuttingDepth", "最大切割厚度"], ["workingPlatform", "工作台面"], ["motorSystem", "电机与驱动"], ["co2Transmission", "传动方式"],
  ["co2Guide", "导轨"], ["co2Control", "控制系统"], ["autoFocus", "自动对焦"], ["ccdCamera", "CCD 相机"],
  ["exhaustSystem", "排烟系统"], ["feedingRack", "送料架"], ["machineSize", "设备尺寸"], ["logo", "改 Logo"],
  ["appearance", "外观修改"], ["packing", "包装要求"], ["co2Note", "其他配置备注"]
];
const OPTION_FIELDS = {
  voltage: ["110V", "220V", "380V", "415V", "440V", "定制"],
  hertz: ["50Hz", "60Hz", "50/60Hz"],
  phase: ["单相", "三相"],
  speed: ["18000RPM", "24000RPM", "40000RPM", "21000RPM"],
  guide: ["国产导轨（T3）", "乐品导轨", "上银导轨"],
  system: ["兴多维", "乐宇", "维宏"],
  drive: ["雷赛", "汇川", "安川", "新代", "维宏"],
  transmission: ["丝杆", "齿轮齿条", "皮带"],
  inverter: ["有", "没有"],
  reducer: ["有", "没有", "同步伺服电机配置"],
  toolChange: ["不换刀", "换刀"],
  toolMagazine: ["无", "圆盘刀库", "直排刀库"],
  toolStations: ["无", "六工位", "九工位", "定制工位"],
  cooling: ["风冷", "水冷"],
  waterCooler: ["不需要", "3000", "5000"],
  dust: ["不需要", "3kW 布袋吸尘", "5.5kW 欧标吸尘", "家用吸尘"],
  packing: ["打木箱", "软包装", "其他备注"],
  table: ["铝蜂窝台面", "刀条台面", "黑芯板", "PVC"],
  cabinet: ["标配", "施耐德", "其他"]
};
OPTION_FIELDS.vacuum = ["4分区", "不分区", "备注"];
OPTION_FIELDS.toolCount = ["0", "1个", "2个"];
OPTION_FIELDS.ccd = ["需要", "不需要"];
OPTION_FIELDS.logo = ["否", "是"];
OPTION_FIELDS.appearance = ["标准", "修改"];
OPTION_FIELDS.cFeedRack = ["需要", "不需要"];
OPTION_FIELDS.cReceiveRack = ["需要", "不需要"];
OPTION_FIELDS.laserPower = ["1000W", "1500W", "2000W", "3000W", "6000W", "12000W", "15000W", "客户自备"];
OPTION_FIELDS.laserSource = ["锐科 Raycus", "创鑫 MAX", "IPG", "客户自备", "其他"];
OPTION_FIELDS.cuttingHead = ["Raytools", "欧斯普瑞 OSPRI", "BM110", "BT240S", "BT220 手动调焦", "客户自备", "其他"];
OPTION_FIELDS.laserControl = ["FSCUT2000C", "FSCUT3000S", "维宏 Weihong", "AheadTechs XC 系列", "其他"];
OPTION_FIELDS.servoSystem = ["富士", "台达 Delta", "雷赛 Leadshine", "进口伺服", "直线电机", "其他"];
OPTION_FIELDS.exchangeTable = ["不需要", "标准交换平台", "爬坡式交换平台"];
OPTION_FIELDS.enclosure = ["开放式", "半封闭", "全封闭"];
OPTION_FIELDS.dustSystem = ["分区抽风除尘", "多腔室靶位除尘", "客户自备", "其他"];
OPTION_FIELDS.chiller = ["特域 S&A", "客户自备", "其他"];
OPTION_FIELDS.visionSystem = ["不需要", "需要（5MP 视觉定位）"];
OPTION_FIELDS.co2Power = ["80W", "100W", "130W", "150W", "180W", "300W", "450W", "其他"];
OPTION_FIELDS.laserTube = ["CDWG", "EFR", "北京 F300 金属封装", "其他"];
OPTION_FIELDS.coolingSystem = ["标准水箱水泵", "特域 S&A 冷水机", "定制精密温控冷却"];
OPTION_FIELDS.workingPlatform = ["刀条台面", "蜂窝台面", "输送带台面", "其他"];
OPTION_FIELDS.motorSystem = ["三相步进电机", "双步进电机", "雷赛伺服", "伺服电机"];
OPTION_FIELDS.co2Transmission = ["皮带", "丝杆", "直线导轨 + 3M 皮带", "滚珠丝杆 + 直线导轨"];
OPTION_FIELDS.co2Control = ["RD6442 脱机系统", "RDWORKS V8", "其他"];
OPTION_FIELDS.autoFocus = ["不需要", "需要"];
OPTION_FIELDS.ccdCamera = ["不需要", "需要（RD CCD）"];
OPTION_FIELDS.exhaustSystem = ["离心风机排烟", "双排烟系统", "客户自备", "其他"];
OPTION_FIELDS.feedingRack = ["不需要", "需要"];
const SPINDLE_COMMON = ["3.2kW", "4kW", "4.5kW", "5.5kW", "7.5kW", "9kW", "11kW"];
const TOOL_TYPES = [
  ["router", "主轴铣刀"], ["electric_oscillating", "电动震动刀"], ["pneumatic_oscillating", "气动震动刀"], ["drag", "拖刀"],
  ["creasing", "压痕刀"], ["rotary", "圆刀"], ["kiss_cut", "半切刀"], ["bevel", "斜切刀"]
];
const QUOTATION_ROLES = ["sales", "finance_director", "general_manager"];
const isFiberSeries = (series) => series === "M系列" || series === "X-fiber系列";
const isCo2Series = (series) => series === "X-fabric（X-1814）系列" || series === "X-CO2系列";
const isLaserSeries = (series) => isFiberSeries(series) || isCo2Series(series);
const configFieldsFor = (productOrOrder) => isFiberSeries(productOrOrder?.series) ? LASER_CONFIG_FIELDS : isCo2Series(productOrOrder?.series) ? CO2_CONFIG_FIELDS : CONFIG_FIELDS;

const $ = (s) => document.querySelector(s);
const esc = (v = "") => String(v).replace(/[&<>'"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
const now = () => new Date().toLocaleString("zh-CN", { hour12: false });
const dateOnly = (d = new Date()) => new Date(d).toISOString().slice(0, 10);
const storage = {
  get: () => JSON.parse(localStorage.getItem("mnt_orders_v2") || "[]"),
  set: (v) => localStorage.setItem("mnt_orders_v2", JSON.stringify(v))
};

let roles = {}, users = [], products = [], session = null, page = "dashboard", selectedOrder = null, pendingAction = null;

async function loadConfig() {
  const roleIds = ["sales", "production_director", "general_manager", "finance_director", "production_assistant", "backup_database"];
  const [userRes, productRes, ...roleRes] = await Promise.all([
    fetch("/config/users.json"), fetch("/config/products.json"), ...roleIds.map((id) => fetch(`/config/roles/${id}.json`))
  ]);
  users = await userRes.json(); products = await productRes.json();
  for (let i = 0; i < roleIds.length; i++) roles[roleIds[i]] = await roleRes[i].json();
}

function seed() {
  localStorage.removeItem("mnt_orders_v1");
  return;
  if (storage.get().length) return;
  const p = products.find((x) => x.model === "T7-3020 ATC") || products[0];
  const cfg = productConfig(p);
  const orders = [
    makeOrder({ id: "MNT-20260708001", customer: "ACME Signworks", country: "美国", salespersonId: "stella", salesperson: "Stella", product: p, config: cfg, currentStage: "production_director", status: "审批中", orderDate: "2026-07-08", deliveryDate: "2026-08-07" }),
    makeOrder({ id: "MNT-20260710002", customer: "Demo Furniture GmbH", country: "德国", salespersonId: "alina", salesperson: "Alina", product: products.find((x) => x.model === "T6-1325 ATC"), currentStage: "general_manager", status: "审批中" }),
    makeOrder({ id: "MNT-20260712003", customer: "Vision Pack Ltd.", country: "英国", salespersonId: "stella", salesperson: "Stella", product: products.find((x) => x.model === "C2516T"), currentStage: "completed", status: "已完成" })
  ];
  orders[1].history.push(event("生产总监已确认", "生产总监", "配置满足生产要求"));
  orders[2].history.push(event("全部审批完成", "生产助理", "生产单已锁定，可导出打印"));
  storage.set(orders);
}

function makeOrder(x) {
  const p = x.product || products[0];
  const order = {
    id: x.id || nextId(), customer: x.customer || "", country: x.country || "", salespersonId: x.salespersonId || session?.user.id,
    salesperson: x.salesperson || session?.user.name, orderDate: x.orderDate || dateOnly(), deliveryDate: x.deliveryDate || dateOnly(Date.now() + 30 * 86400000),
    nameplate: x.nameplate || "无", series: p.series, model: p.model, source: p.source, config: x.config || productConfig(p),
    special: x.special || "无", internalNote: x.internalNote || "无", currentStage: x.currentStage || "sales", status: x.status || "草稿",
    resumeAfterSales: null, locked: x.currentStage === "completed", updatedAt: now(), createdAt: now(),
    history: [event("生产单已创建", x.salesperson || session?.user.name || "Stella", "等待销售确认")]
  };
  return order;
}

function productConfig(p) {
  const power = p.power || "";
  const voltage = power.includes("220") && !power.includes("380") ? "220V" : "380V";
  const hertz = power.includes("60") && power.includes("50") ? "50/60Hz" : power.includes("60") ? "60Hz" : "50Hz";
  if (isCo2Series(p.series)) return {
    voltage, hertz, phase: p.phase || "单相", powerNote: p.powerNote || "建议配置独立电源、可靠接地及通风空间",
    workingArea: p.workingArea || p.size, co2Power: p.co2Power || "130W", laserTube: p.laserTube || "EFR",
    coolingSystem: p.coolingSystem || "特域 S&A 冷水机", cuttingDepth: p.cuttingDepth || "按材料与功率确认",
    workingPlatform: p.workingPlatform || "蜂窝台面", motorSystem: p.motorSystem || p.drive, co2Transmission: p.co2Transmission || p.transmission,
    co2Guide: p.co2Guide || "台湾进口直线导轨", co2Control: p.co2Control || p.system, autoFocus: p.autoFocus || "不需要",
    ccdCamera: p.ccdCamera || "不需要", exhaustSystem: p.exhaustSystem || "离心风机排烟", feedingRack: p.feedingRack || "不需要",
    machineSize: p.machineSize || "以最终图纸为准", logo: "否", appearance: "标准", packing: "打木箱",
    co2Note: p.co2Note || "激光功率、台面和冷却方式需结合材料与厚度确认"
  };
  if (isFiberSeries(p.series)) return {
    voltage, hertz, phase: "三相", powerNote: p.powerNote || "AC380V，建议配置独立稳压电源和可靠接地",
    workingArea: p.workingArea || p.size, laserPower: p.laserPower || "3000W", laserSource: p.laserSource || "锐科 Raycus",
    cuttingHead: p.cuttingHead || "Raytools", laserControl: p.laserControl || p.system, servoSystem: p.servoSystem || p.drive,
    laserTransmission: p.laserTransmission || p.transmission, laserGuide: p.laserGuide || "台湾上银/同级精密导轨",
    positionAccuracy: p.positionAccuracy || "±0.05mm/m", repeatAccuracy: p.repeatAccuracy || "±0.03mm", rapidSpeed: p.rapidSpeed || p.speed,
    acceleration: p.acceleration || "0.6g", exchangeTable: p.exchangeTable || "不需要", enclosure: p.enclosure || "开放式",
    dustSystem: p.dustSystem || "分区抽风除尘", chiller: p.chiller || "特域 S&A", tubeRange: p.tubeRange || "不适用",
    chuckSystem: p.chuckSystem || "不适用", visionSystem: p.visionSystem || "不需要", machineSize: p.machineSize || "以最终图纸为准",
    machineWeight: p.machineWeight || "以最终配置为准", laserNote: p.laserNote || "辅助气体、空压机及稳压器按激光功率和材料确认",
    logo: "否", appearance: "标准", packing: "打木箱"
  };
  const spindleNumber = String(p.spindle || "").match(/[\d.]+/)?.[0];
  const spindleMap = { "3.2": "3.2kW", "4": "4kW", "4.5": "4.5kW", "5.5": "5.5kW", "6": "5.5kW", "7.5": "7.5kW", "9": "9kW", "11": "11kW" };
  const config = {
    voltage, hertz, phase: "三相", powerNote: "", waterCooler: "不需要", size: p.size,
    sheetMetal: "标准", vacuum: "4分区", pump: p.pump,
    spindle: p.series === "C系列" ? "800W" : (spindleMap[spindleNumber] || "4kW"),
    speed: String(p.speed).includes("18000") ? "18000RPM" : String(p.speed).includes("40000") ? "40000RPM" : String(p.speed).includes("21000") ? "21000RPM" : "24000RPM",
    dust: "不需要", spindleBrand: "-", toolCount: "0", guide: p.model.includes("T3") ? "国产导轨（T3）" : "上银导轨", tool: p.tool,
    system: p.series === "C系列" ? "兴多维" : "维宏", drive: String(p.drive).includes("汇川") ? "汇川" : "汇川", cFeedRack: "不需要", cReceiveRack: "不需要",
    transmission: String(p.transmission).includes("丝杆") ? "丝杆" : String(p.transmission).includes("皮带") || String(p.transmission).includes("同步带") ? "皮带" : "齿轮齿条",
    computer: "不需要", inverter: p.series === "C系列" ? "没有" : "有", logo: "否", reducer: "同步伺服电机配置",
    appearance: "标准", toolChange: p.model.includes("ATC") ? "换刀" : "不换刀", packing: "打木箱", toolMagazine: p.model.includes("ATC") ? "直排刀库" : "无",
    table: String(p.table).includes("蜂窝") ? "铝蜂窝台面" : p.series === "C系列" ? "刀条台面" : "黑芯板",
    toolStations: p.model.includes("T7") ? "六工位" : "无", ccd: "不需要", cooling: p.cooling === "水冷" ? "水冷" : "风冷", cabinet: "标配"
  };
  TOOL_TYPES.forEach(([key]) => { config[`tool_${key}_standard`] = "1"; config[`tool_${key}_standardNote`] = ""; config[`tool_${key}_extra`] = "0"; config[`tool_${key}_extraNote`] = ""; });
  return config;
}

function normalizeConfig(config = {}, product) {
  const base = productConfig(product || products[0]);
  const next = { ...base, ...config };
  if (!config.voltage && config.power) {
    next.voltage = config.power.includes("220") && !config.power.includes("380") ? "220V" : "380V";
    next.hertz = config.power.includes("60") && config.power.includes("50") ? "50/60Hz" : config.power.includes("60") ? "60Hz" : "50Hz";
    next.phase = config.power.includes("单相") ? "单相" : "三相";
    next.powerNote = "原电源配置：" + config.power;
  }
  return next;
}

function migrateOrders() {
  const orders = storage.get(); let changed = false;
  orders.forEach((o) => {
    if (!o.config?.voltage) { o.config = normalizeConfig(o.config, products.find((p) => p.model === o.model)); changed = true; }
    if (o.status === "已完成" && !o.backupArchivedAt) { o.backupArchivedAt = o.updatedAt || o.createdAt || now(); changed = true; }
  });
  if (changed) storage.set(orders);
}

function choicesFor(key, product) {
  if (key === "spindle") return product.series === "C系列" ? ["800W", "1.8kW", ...SPINDLE_COMMON] : SPINDLE_COMMON;
  return OPTION_FIELDS[key] || null;
}

function configInput(key, label, value, product) {
  const choices = choicesFor(key, product);
  if (!choices) return `<label>${label}<input name="cfg_${key}" value="${esc(value || "")}"></label>`;
  const all = value && !choices.includes(value) ? [...choices, value] : choices;
  return `<label>${label}<select name="cfg_${key}">${all.map((option) => `<option${option === value ? " selected" : ""}>${esc(option)}</option>`).join("")}</select></label>`;
}

function toolMatrixInputs(config) {
  const quantities = Array.from({ length: 10 }, (_, i) => String(i));
  const select = (name, value) => `<select name="${name}">${quantities.map((q) => `<option${q === String(value) ? " selected" : ""}>${q}</option>`).join("")}</select>`;
  return `<div class="tool-matrix"><div class="tool-row tool-head"><strong>刀片类型</strong><strong>标配数量</strong><strong>标配备注</strong><strong>另购数量</strong><strong>另购备注</strong></div>${TOOL_TYPES.map(([key, name]) => `<div class="tool-row"><span>${name}</span>${select(`cfg_tool_${key}_standard`, config[`tool_${key}_standard`] ?? "1")}<input name="cfg_tool_${key}_standardNote" value="${esc(config[`tool_${key}_standardNote`] || "")}" placeholder="备注">${select(`cfg_tool_${key}_extra`, config[`tool_${key}_extra`] ?? "0")}<input name="cfg_tool_${key}_extraNote" value="${esc(config[`tool_${key}_extraNote`] || "")}" placeholder="备注"></div>`).join("")}</div>`;
}

function toolMatrixDetail(config) {
  return `<div class="tool-matrix detail-tools"><div class="tool-row tool-head"><strong>刀片类型</strong><strong>标配</strong><strong>标配备注</strong><strong>另购</strong><strong>另购备注</strong></div>${TOOL_TYPES.map(([key, name]) => `<div class="tool-row"><span>${name}</span><b>${esc(config[`tool_${key}_standard`] ?? "1")}</b><span>${esc(config[`tool_${key}_standardNote`] || "-")}</span><b>${esc(config[`tool_${key}_extra`] ?? "0")}</b><span>${esc(config[`tool_${key}_extraNote`] || "-")}</span></div>`).join("")}</div>`;
}

function canViewQuotation() { return QUOTATION_ROLES.includes(session.user.role); }
function authHeaders(extra = {}) { return { "authorization": `Bearer ${session.token}`, ...extra }; }

async function uploadAttachment(orderId, category, file) {
  if (!file) return null;
  if (file.size > 15 * 1024 * 1024) throw new Error(`${file.name} 超过 15MB`);
  const response = await fetch(`/api/files?orderId=${encodeURIComponent(orderId)}&category=${encodeURIComponent(category)}`, {
    method: "POST",
    headers: authHeaders({ "content-type": file.type || "application/octet-stream", "x-file-name": encodeURIComponent(file.name) }),
    body: file
  });
  if (!response.ok) throw new Error((await response.text()) || "附件上传失败");
  return { category, name: file.name, type: file.type, size: file.size, uploadedBy: session.user.name, uploadedAt: now() };
}

async function uploadOrderFiles(orderId, form) {
  const specs = [["logo", "logoFile"], ["appearance", "appearanceFile"], ["quotation", "quotationFile"]];
  const uploaded = [];
  for (const [category, field] of specs) {
    const file = form.elements[field]?.files?.[0];
    if (file) uploaded.push(await uploadAttachment(orderId, category, file));
  }
  if (uploaded.length) updateOrder(orderId, (o) => { o.attachments = { ...(o.attachments || {}), ...Object.fromEntries(uploaded.map((a) => [a.category, a])) }; });
}

function attachmentPanel(order) {
  const definitions = [["logo", "Logo 附件"], ["appearance", "外观修改附件"], ...(canViewQuotation() ? [["quotation", "报价文件"]] : [])];
  return `<section class="panel"><div class="panel-head"><div><h3>附件</h3><p class="muted form-help">Logo 与外观修改附件同步给全部权限查看。</p></div></div><div class="attachment-grid">${definitions.map(([key, label]) => { const file = order.attachments?.[key]; return `<article class="attachment-card"><span>${label}</span>${file ? `<strong>${esc(file.name)}</strong><small>${esc(file.uploadedBy || "-")} · ${esc(file.uploadedAt || "")}</small><button class="secondary" data-download="${key}">下载附件</button>` : `<strong class="muted">未上传</strong>`}</article>`; }).join("")}</div></section>`;
}

async function downloadAttachment(order, category) {
  const response = await fetch(`/api/files?orderId=${encodeURIComponent(order.id)}&category=${encodeURIComponent(category)}`, { headers: authHeaders() });
  if (!response.ok) { toast(response.status === 403 ? "当前账号无权查看该文件" : "附件下载失败"); return; }
  const blob = await response.blob(); const file = order.attachments?.[category]; const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = file?.name || "attachment"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function event(title, by, note = "") { return { title, by, note, at: now() }; }
function nextId() { const d = dateOnly().replaceAll("-", ""); const count = storage.get().filter((x) => x.id.includes(d)).length + 1; return `MNT-${d}${String(count).padStart(3, "0")}`; }
function currentRole() { return roles[session.user.role]; }
function visibleOrders() { const all = storage.get(); return currentRole().scope === "own" ? all.filter((x) => x.salespersonId === session.user.id) : all; }
function statusClass(o) { return o.status === "已完成" ? "done" : o.resumeAfterSales ? "returned" : o.status === "审批中" ? "wait" : ""; }
function toast(msg) { const el = $("#toast"); el.textContent = msg; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2300); }

function setupLogin() {
  const roleSelect = $("#role-select");
  roleSelect.innerHTML = Object.values(roles).map((r) => `<option value="${r.id}">${r.name}</option>`).join("");
  const fillUsers = () => { $("#user-select").innerHTML = users.filter((u) => u.role === roleSelect.value).map((u) => `<option value="${u.id}">${u.name}</option>`).join(""); };
  roleSelect.addEventListener("change", fillUsers); fillUsers();
  $("#toggle-password").onclick = () => { const i = $("#password"); i.type = i.type === "password" ? "text" : "password"; };
  $("#login-form").onsubmit = async (e) => {
    e.preventDefault(); const user = users.find((u) => u.id === $("#user-select").value);
    $("#login-error").textContent = "";
    const response = await fetch("/api/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: user?.id, password: $("#password").value }) }).catch(() => null);
    if (!response?.ok) { $("#login-error").textContent = "账号或密码不正确"; return; }
    const result = await response.json(); session = { user: result.user, token: result.token }; sessionStorage.setItem("mnt_session", JSON.stringify(session)); openApp();
  };
}

function openApp() {
  $("#login-view").classList.add("hidden"); $("#app-view").classList.remove("hidden");
  $("#side-user").textContent = session.user.name; $("#side-role").textContent = roles[session.user.role].name; $("#avatar").textContent = session.user.name.slice(0, 1);
  $("#today").textContent = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(new Date());
  $("#new-order").classList.toggle("hidden", !currentRole().canCreate); buildNav(); navigate("dashboard");
}

function buildNav() {
  $("#nav").innerHTML = currentRole().menus.map((m) => `<button class="nav-button" data-page="${m}"><i>${MENU[m][0]}</i>${MENU[m][1]}</button>`).join("");
  $("#nav").onclick = (e) => { const b = e.target.closest("[data-page]"); if (b) navigate(b.dataset.page); };
}

function navigate(next) {
  page = next; selectedOrder = null; $("#page-name").textContent = MENU[next]?.[1] || "生产单详情"; $("#page-title").textContent = MENU[next]?.[1] || "生产单详情";
  document.querySelectorAll(".nav-button").forEach((x) => x.classList.toggle("active", x.dataset.page === next));
  if (next === "dashboard") renderDashboard(); else if (next === "orders") renderOrders(); else if (next === "products") renderProducts(); else if (next === "backup") renderBackup();
  $(".sidebar").classList.remove("open");
}

function renderDashboard() {
  const orders = visibleOrders(), waiting = orders.filter((o) => o.currentStage === session.user.role).length, returned = orders.filter((o) => o.currentStage === "sales" && o.resumeAfterSales).length;
  $("#content").innerHTML = `<section class="hero-strip"><div><p class="eyebrow">${esc(currentRole().name)} MODULE</p><h3>${esc(session.user.name)}，欢迎回来</h3><p>${waiting ? `有 ${waiting} 张生产单等待你的确认。` : "当前没有待审批事项，所有流程正常推进。"}</p></div><span class="badge ${waiting ? "wait" : "done"}">${waiting ? "待处理" : "流程正常"}</span></section>
  <section class="metric-grid"><article class="metric"><span>全部生产单</span><strong>${orders.length}</strong><em>当前可见范围</em></article><article class="metric"><span>待我审批</span><strong>${waiting}</strong><em>按权限隔离</em></article><article class="metric"><span>销售重确认</span><strong>${returned}</strong><em>配置变更回流</em></article><article class="metric"><span>已完成</span><strong>${orders.filter((o) => o.status === "已完成").length}</strong><em>可导出打印</em></article></section>
  <section class="panel"><div class="panel-head"><h3>最近生产单</h3><button class="text-button" data-go="orders">查看全部 →</button></div>${orderTable(orders.slice(0, 6))}</section>`;
  bindOrderLinks(); $("[data-go='orders']")?.addEventListener("click", () => navigate("orders"));
}

function orderTable(orders) {
  if (!orders.length) return `<div class="empty"><strong>暂无生产单</strong>创建第一张生产单后会显示在这里。</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>生产单号</th><th>客户</th><th>销售</th><th>机型</th><th>当前环节</th><th>状态</th><th>交付日期</th><th></th></tr></thead><tbody>${orders.map((o) => `<tr><td><button class="order-link" data-order="${o.id}">${o.id}</button></td><td>${esc(o.customer || "-")}</td><td>${esc(o.salesperson)}</td><td>${esc(o.model)}</td><td>${STAGE_NAMES[o.currentStage]}</td><td><span class="badge ${statusClass(o)}">${esc(o.status)}</span></td><td>${o.deliveryDate}</td><td><button class="secondary" data-order="${o.id}">查看</button></td></tr>`).join("")}</tbody></table></div>`;
}

function renderOrders() {
  $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><h3>生产单列表</h3><p class="muted" style="margin:5px 0 0;font-size:11px">按当前账号权限显示</p></div><span class="badge">${visibleOrders().length} 条记录</span></div>${orderTable(visibleOrders())}</section>`;
  bindOrderLinks();
}

function bindOrderLinks() { document.querySelectorAll("[data-order]").forEach((b) => b.onclick = () => renderOrderDetail(b.dataset.order)); }
function stageProgress(o) { return STAGES.map((s, i) => { const cur = o.currentStage === "completed" ? 99 : STAGES.indexOf(o.currentStage); const cls = i < cur || o.currentStage === "completed" ? "done" : i === cur ? "current" : ""; return `<div class="progress-step ${cls}"><i></i>${STAGE_NAMES[s]}</div>`; }).join(""); }

function renderOrderDetail(id) {
  const o = storage.get().find((x) => x.id === id); if (!o) return; selectedOrder = id;
  $("#page-name").textContent = "生产单"; $("#page-title").textContent = o.id;
  const canAct = o.currentStage === session.user.role && currentRole().canApprove;
  const canSalesEdit = session.user.role === "sales" && o.currentStage === "sales" && o.salespersonId === session.user.id;
  const canPrint = o.status === "已完成";
  const canDelete = session.user.role === "sales" && o.salespersonId === session.user.id;
  $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><span class="badge ${statusClass(o)}">${o.status}</span><span class="muted" style="font-size:11px;margin-left:8px">最后更新 ${o.updatedAt}</span></div><div class="actions"><button class="secondary" id="back-orders">← 返回列表</button>${canDelete ? `<button class="danger" id="delete-order">删除生产单</button>` : ""}${canPrint ? `<button class="primary" id="print-order">导出 / 打印</button>` : ""}</div></div><div style="padding:22px"><div class="progress">${stageProgress(o)}</div></div></section>
  ${o.resumeAfterSales ? `<p class="notice">配置已由 ${esc(o.changeBy || "审批环节")} 修改，正在等待销售重新确认。销售确认后将直接进入“${STAGE_NAMES[o.resumeAfterSales]}”。</p>` : ""}
  <div class="detail-grid"><div><section class="panel"><div class="panel-head"><h3>客户与机器信息</h3>${canSalesEdit ? `<button id="edit-order" class="secondary">编辑生产单</button>` : ""}</div><div class="info-grid">${infoCell("客户", o.customer)}${infoCell("国家/地区", o.country)}${infoCell("销售", o.salesperson)}${infoCell("下单日期", o.orderDate)}${infoCell("交付日期", o.deliveryDate)}${infoCell("铭牌内容", o.nameplate)}${infoCell("系列", o.series)}${infoCell("型号", o.model)}</div></section>
  <section class="panel"><div class="panel-head"><h3>${isFiberSeries(o.series) ? "光纤激光配置清单" : isCo2Series(o.series) ? "CO2 激光配置清单" : "配置清单"}</h3></div><div class="config-grid">${configFieldsFor(o).map(([k, n]) => `<div class="config-row"><span>${n}</span><strong>${esc(o.config[k] || "-")}</strong></div>`).join("")}</div>${isLaserSeries(o.series) ? "" : toolMatrixDetail(o.config)}</section>
  ${attachmentPanel(o)}
  <section class="panel"><div class="panel-head"><h3>生产要求</h3></div><div class="info-grid">${infoCell("客户特殊要求", o.special)}${infoCell("内部备注", o.internalNote)}</div></section></div>
  <aside><section class="panel" style="margin-top:0"><div class="panel-head"><h3>当前操作</h3></div><div class="approval-card">${approvalBlock(o, canAct, canSalesEdit)}</div></section><section class="panel"><div class="panel-head"><h3>审批记录</h3></div><div class="timeline">${[...o.history].reverse().map((h) => `<div class="event"><strong>${esc(h.title)}</strong><p>${esc(h.by)}${h.note ? ` · ${esc(h.note)}` : ""}</p><time>${h.at}</time></div>`).join("")}</div></section></aside></div>`;
  $("#back-orders").onclick = () => navigate("orders"); $("#print-order")?.addEventListener("click", () => printOrder(o)); $("#edit-order")?.addEventListener("click", () => openOrderForm(o));
  $("#delete-order")?.addEventListener("click", () => confirmDeleteOrder(o));
  $("#approve-order")?.addEventListener("click", () => confirmApproval(o)); $("#modify-order")?.addEventListener("click", () => openOrderForm(o, true));
  document.querySelectorAll("[data-download]").forEach((button) => button.onclick = () => downloadAttachment(o, button.dataset.download));
}

function infoCell(label, value) { return `<div class="info-cell"><span>${label}</span><strong>${esc(value || "-")}</strong></div>`; }
function approvalBlock(o, canAct, canSalesEdit) {
  if (o.status === "已完成") return `<span class="badge done">审批完成</span><p class="muted" style="font-size:11px;line-height:1.7">生产单已锁定，仅可查看和导出打印。</p>`;
  if (!canAct) return `<p class="muted" style="font-size:11px;line-height:1.7">当前等待“${STAGE_NAMES[o.currentStage]}”处理。审批按钮只对对应模块账号显示。</p>`;
  const salesCopy = o.resumeAfterSales ? `确认本次配置修改，并直接提交至“${STAGE_NAMES[o.resumeAfterSales]}”。` : "确认客户与配置内容，提交生产总监审批。";
  return `<p class="muted" style="font-size:11px;line-height:1.7">${session.user.role === "sales" ? salesCopy : `确认配置无误后进入下一环节；如修改配置，将自动返回销售重新确认。`}</p><div class="actions"><button id="approve-order" class="primary">${session.user.role === "sales" ? "销售确认" : "确认并通过"}</button>${session.user.role !== "sales" ? `<button id="modify-order" class="secondary">修改配置</button>` : ""}</div>`;
}

function confirmApproval(o) {
  const salesResume = session.user.role === "sales" && o.resumeAfterSales;
  const idx = STAGES.indexOf(o.currentStage); const next = salesResume ? o.resumeAfterSales : (idx === STAGES.length - 1 ? "completed" : STAGES[idx + 1]);
  openConfirm("确认审批", next === "completed" ? "完成后生产单将锁定并允许导出打印。" : `生产单将进入“${STAGE_NAMES[next]}”。`, (note) => {
    updateOrder(o.id, (x) => { x.currentStage = next; x.status = next === "completed" ? "已完成" : "审批中"; x.locked = next === "completed"; if (next === "completed") x.backupArchivedAt = now(); x.history.push(event(`${STAGE_NAMES[session.user.role]}已确认`, session.user.name, note || "确认无误")); if (next === "completed") x.history.push(event("已录入备份数据库", session.user.name, "生产助理确认后自动归档")); x.resumeAfterSales = null; x.changeBy = null; });
    renderOrderDetail(o.id); toast(next === "completed" ? "审批完成，已录入备份库，所有权限均可打印" : `已提交至${STAGE_NAMES[next]}`);
  });
}

function updateOrder(id, fn) { const all = storage.get(), o = all.find((x) => x.id === id); fn(o); o.updatedAt = now(); storage.set(all); }

function confirmDeleteOrder(order) {
  if (session.user.role !== "sales" || order.salespersonId !== session.user.id) return;
  openConfirm("删除生产单", `确定删除 ${order.id}？删除后无法恢复。`, async () => {
    await Promise.all(["logo", "appearance", "quotation"].map((category) => fetch(`/api/files?orderId=${encodeURIComponent(order.id)}&category=${category}`, { method: "DELETE", headers: authHeaders() }).catch(() => null)));
    storage.set(storage.get().filter((item) => item.id !== order.id)); navigate("orders"); toast("生产单已删除");
  });
}

function openOrderForm(order = null, reviewerEdit = false) {
  const editing = Boolean(order); const selectedProduct = order ? products.find((p) => p.model === order.model) : products[0];
  $("#order-dialog-title").textContent = reviewerEdit ? "修改配置并回销售确认" : editing ? "编辑生产单" : "新建生产单";
  $("#order-form").innerHTML = `<section class="form-section"><h4>客户与交付信息</h4><div class="form-grid"><label>客户<input name="customer" value="${esc(order?.customer)}" required></label><label>国家/地区<input name="country" value="${esc(order?.country)}"></label><label>铭牌内容<input name="nameplate" value="${esc(order?.nameplate || "无")}"></label><label>下单日期<input name="orderDate" type="date" value="${order?.orderDate || dateOnly()}" required></label><label>交付日期<input name="deliveryDate" type="date" value="${order?.deliveryDate || dateOnly(Date.now()+30*86400000)}" required></label><label>销售<input value="${esc(order?.salesperson || session.user.name)}" disabled></label></div></section>
  <section class="form-section"><h4>机器信息</h4><div class="form-grid two"><label>系列<select name="series" id="form-series">${[...new Set(products.map((p) => p.series))].map((series) => `<option>${series}</option>`).join("")}</select></label><label>型号<select name="model" id="form-model"></select></label></div></section>
  <section class="form-section"><h4>配置清单</h4><div class="form-grid two" id="config-inputs"></div></section>
  <section class="form-section" id="tool-section"><h4>刀具配置</h4><p class="muted form-help">八类刀具均可分别设置标配与另购数量；默认标配 1、另购 0。</p><div id="tool-inputs"></div></section>
  <section class="form-section"><h4>附件与报价</h4><div class="form-grid"><label>Logo 附件<input name="logoFile" type="file" accept="image/*,.pdf,.ai,.cdr,.psd"></label><label>外观修改附件<input name="appearanceFile" type="file" accept="image/*,.pdf,.ai,.cdr,.psd,.dwg,.dxf"></label>${canViewQuotation() ? `<label>导入报价文件<input name="quotationFile" type="file" accept=".pdf,.xlsx,.xls,.doc,.docx,.csv"></label>` : ""}</div><p class="muted form-help">单个附件最大 15MB。报价文件仅销售、财务总监和总经理可见。</p></section>
  <section class="form-section"><h4>生产要求</h4><div class="form-grid two"><label>客户特殊要求<textarea name="special" rows="3">${esc(order?.special || "无")}</textarea></label><label>内部备注<textarea name="internalNote" rows="3">${esc(order?.internalNote || "无")}</textarea></label></div></section>
  ${reviewerEdit ? `<section class="form-section"><label>修改原因<textarea name="changeReason" rows="3" required placeholder="请说明修改内容，销售确认时会看到"></textarea></label></section>` : ""}
  <div class="dialog-actions"><button type="button" class="secondary close-dialog">取消</button><button class="primary" type="submit">${reviewerEdit ? "保存并返回销售" : editing ? "保存修改" : "创建生产单"}</button></div>`;
  $("#form-series").value = order?.series || selectedProduct.series;
  const fillModels = (keepModel) => { const list = products.filter((p) => p.series === $("#form-series").value); $("#form-model").innerHTML = list.map((p) => `<option>${p.model}</option>`).join(""); if (keepModel && list.some((p) => p.model === keepModel)) $("#form-model").value = keepModel; applyProduct(keepModel ? order?.config : null); };
  const applyProduct = (keepConfig = null) => { const p = products.find((x) => x.model === $("#form-model").value) || selectedProduct; const cfg = normalizeConfig(keepConfig || productConfig(p), p); $("#config-inputs").innerHTML = configFieldsFor(p).map(([k,n]) => configInput(k, n, cfg[k], p)).join(""); $("#tool-section").classList.toggle("hidden", isLaserSeries(p.series)); $("#tool-inputs").innerHTML = isLaserSeries(p.series) ? "" : toolMatrixInputs(cfg); };
  fillModels(order?.model); $("#form-series").onchange = () => fillModels(); $("#form-model").onchange = () => applyProduct();
  $("#order-form").onsubmit = async (e) => { e.preventDefault(); const form = e.currentTarget; const submit = form.querySelector("button[type='submit']"); submit.disabled = true; submit.textContent = "正在保存…"; const fd = new FormData(form); const p = products.find((x) => x.model === fd.get("model")); const config = Object.fromEntries(configFieldsFor(p).map(([k]) => [k, fd.get(`cfg_${k}`)])); if (!isLaserSeries(p.series)) TOOL_TYPES.forEach(([key]) => { config[`tool_${key}_standard`] = fd.get(`cfg_tool_${key}_standard`); config[`tool_${key}_standardNote`] = fd.get(`cfg_tool_${key}_standardNote`); config[`tool_${key}_extra`] = fd.get(`cfg_tool_${key}_extra`); config[`tool_${key}_extraNote`] = fd.get(`cfg_tool_${key}_extraNote`); });
    if (!editing) { const o = makeOrder({ customer: fd.get("customer"), country: fd.get("country"), nameplate: fd.get("nameplate"), orderDate: fd.get("orderDate"), deliveryDate: fd.get("deliveryDate"), product: p, config, special: fd.get("special"), internalNote: fd.get("internalNote") }); const all = storage.get(); all.unshift(o); storage.set(all); try { await uploadOrderFiles(o.id, form); } catch (error) { toast(error.message); } $("#order-dialog").close(); renderOrderDetail(o.id); toast("生产单已创建，请销售确认"); return; }
    updateOrder(order.id, (x) => { Object.assign(x, { customer: fd.get("customer"), country: fd.get("country"), nameplate: fd.get("nameplate"), orderDate: fd.get("orderDate"), deliveryDate: fd.get("deliveryDate"), series: p.series, model: p.model, source: p.source, config, special: fd.get("special"), internalNote: fd.get("internalNote") });
      if (reviewerEdit) { const reviewerStage = x.currentStage; const reviewerIndex = STAGES.indexOf(reviewerStage); x.currentStage = "sales"; x.status = "待销售重确认"; x.resumeAfterSales = reviewerIndex === STAGES.length - 1 ? "completed" : STAGES[reviewerIndex + 1]; x.changeBy = session.user.name; x.history.push(event(`${STAGE_NAMES[reviewerStage]}修改配置`, session.user.name, fd.get("changeReason"))); } else x.history.push(event("销售更新生产单", session.user.name, "配置内容已保存"));
    }); try { await uploadOrderFiles(order.id, form); } catch (error) { toast(error.message); } $("#order-dialog").close(); renderOrderDetail(order.id); toast(reviewerEdit ? "已返回销售重新确认" : "生产单已更新"); };
  $("#order-dialog").showModal(); bindDialogClose();
}

function openConfirm(title, copy, action) { $("#confirm-title").textContent = title; $("#confirm-copy").textContent = copy; $("#confirm-note").value = ""; pendingAction = action; $("#confirm-dialog").showModal(); }
function renderProducts() { $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><h3>C / T / M / X 系列配置库</h3><p class="muted" style="margin:5px 0 0;font-size:11px">依据技术方案整理</p></div><span class="badge">${products.length} 个机型</span></div><div class="table-wrap"><table><thead><tr><th>系列</th><th>型号</th><th>工作尺寸</th><th>系统</th><th>驱动</th></tr></thead><tbody>${products.map((p) => `<tr><td><span class="badge">${p.series}</span></td><td><strong>${p.model}</strong></td><td>${p.size}</td><td>${p.system}</td><td>${p.drive}</td></tr>`).join("")}</tbody></table></div></section>`; }
function backupOrders() { return storage.get().filter((o) => o.status === "已完成" && o.backupArchivedAt); }
function renderBackup() { const all = backupOrders(); $("#content").innerHTML = `<section class="hero-strip"><div><p class="eyebrow">BACKUP DATABASE</p><h3>已归档生产单</h3><p>生产助理确认后自动录入，保存订单、配置和完整审批记录。</p></div><button id="download-backup" class="primary">下载数据库备份</button></section><section class="metric-grid"><article class="metric"><span>已归档生产单</span><strong>${all.length}</strong></article><article class="metric"><span>审批记录</span><strong>${all.reduce((n,o)=>n+o.history.length,0)}</strong></article><article class="metric"><span>最后归档</span><strong style="font-size:16px">${all[0]?.backupArchivedAt || "-"}</strong></article><article class="metric"><span>存储状态</span><strong style="font-size:18px;color:var(--success)">正常</strong></article></section><p class="notice">只有完成全部审批并由生产助理最终确认的生产单会进入备份数据库。</p>${orderTable(all)}`; $("#download-backup").onclick = downloadBackup; bindOrderLinks(); }
function downloadBackup() { const blob = new Blob([JSON.stringify({ exportedAt: now(), orders: backupOrders() }, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `mnt-backup-${dateOnly()}.json`; a.click(); URL.revokeObjectURL(a.href); toast("备份文件已生成"); }

function printOrder(o) {
  const rows = configFieldsFor(o).map(([k,n], i) => [k,n,i]).reduce((acc, cur, i, arr) => { if (i%2===0) acc.push([cur, arr[i+1]]); return acc; }, []);
  const tools = isLaserSeries(o.series) ? "" : `<section class="print-section"><h2>刀片配置</h2>${TOOL_TYPES.map(([key,name])=>`<div class="print-row four"><b>${name}</b><span>标配 ${esc(o.config[`tool_${key}_standard`]??"1")}；${esc(o.config[`tool_${key}_standardNote`]||"无备注")}</span><b>另购 ${esc(o.config[`tool_${key}_extra`]??"0")}</b><span>${esc(o.config[`tool_${key}_extraNote`]||"无备注")}</span></div>`).join("")}</section>`;
  $("#print-sheet").innerHTML = `<header class="print-head"><div><h1>生产单</h1><p>${o.id}</p></div><span>审批完成 · 可生产</span></header>${printSection("客户与交付信息", [["客户",o.customer],["销售",o.salesperson],["下单日期",o.orderDate],["交付日期",o.deliveryDate],["国家/地区",o.country],["铭牌内容",o.nameplate]])}${printSection("机器信息", [["系列",o.series],["型号",o.model]])}<section class="print-section"><h2>${isFiberSeries(o.series) ? "光纤激光配置清单" : isCo2Series(o.series) ? "CO2 激光配置清单" : "配置清单"}</h2>${rows.map((pair)=>`<div class="print-row four"><b>${pair[0][1]}</b><span>${esc(o.config[pair[0][0]]||"-")}</span><b>${pair[1]?.[1]||""}</b><span>${pair[1]?esc(o.config[pair[1][0]]||"-"):""}</span></div>`).join("")}</section>${tools}${printSection("生产要求", [["客户特殊要求",o.special],["内部备注",o.internalNote]])}<div class="print-approvals">${STAGES.map((s)=>{const h=o.history.find((x)=>x.title.includes(STAGE_NAMES[s]));return `<div class="print-sign"><b>${STAGE_NAMES[s]}</b><span>${h?esc(h.by):"-"}</span><time>${h?.at||""}</time></div>`}).join("")}</div>`; window.print();
}
function printSection(title, fields) { return `<section class="print-section"><h2>${title}</h2>${fields.map(([k,v])=>`<div class="print-row"><b>${k}</b><span>${esc(v||"-")}</span></div>`).join("")}</section>`; }
function bindDialogClose() { document.querySelectorAll(".close-dialog").forEach((b) => b.onclick = () => b.closest("dialog").close()); }

async function init() {
  await loadConfig(); seed(); migrateOrders(); setupLogin(); bindDialogClose();
  $("#logout").onclick = () => { sessionStorage.removeItem("mnt_session"); location.reload(); };
  $("#mobile-menu").onclick = () => $(".sidebar").classList.toggle("open"); $("#new-order").onclick = () => openOrderForm();
  $("#confirm-action").onclick = () => { const action = pendingAction; $("#confirm-dialog").close(); pendingAction = null; action?.($("#confirm-note").value.trim()); };
  const saved = JSON.parse(sessionStorage.getItem("mnt_session") || "null"); if (saved?.token && saved?.user && users.some((u) => u.id === saved.user.id)) { session = saved; openApp(); }
}

init().catch((err) => { console.error(err); $("#login-error").textContent = "系统配置加载失败，请刷新页面"; });
