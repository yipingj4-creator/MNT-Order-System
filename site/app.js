const STAGES = ["sales", "production_director", "general_manager", "finance_director", "production_assistant"];
const STAGE_NAMES = { sales: "销售确认", production_director: "生产总监", general_manager: "总经理", finance_director: "财务总监", production_assistant: "生产助理", completed: "已完成" };
const MENU = { dashboard: ["⌂", "工作台"], orders: ["▤", "生产单"], production_progress: ["◷", "生产进度表"], products: ["⌘", "产品配置库"], backup: ["▣", "备份数据库"] };
const PROGRESS_VIEW_ROLES = ["sales", "production_director", "general_manager", "finance_director", "production_assistant"];
const CONFIG_FIELDS = [
  ["size", "尺寸"],
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["spindleEnabled", "是否需要主轴"],
  ["spindleBrand", "主轴品牌"], ["spindle", "主轴功率"], ["speed", "转速 / 切割速度"], ["cooling", "主轴冷却"],
  ["toolChange", "换刀方式"], ["toolMagazine", "刀库形式"], ["toolStations", "刀库工位"],
  ["toolCount", "通用刀座数量"], ["knifeModelNote", "刀的型号"], ["system", "系统"], ["ccd", "CCD"],
  ["drive", "伺服电机 / 驱动"], ["inverter", "变频器品牌"], ["reducer", "减速机"], ["guide", "导轨"],
  ["transmissionX", "X轴传动方式"], ["transmissionY", "Y轴传动方式"], ["transmissionZ", "Z轴传动方式"],
  ["table", "台面（材质）"], ["vacuum", "真空吸附"], ["pump", "真空泵"], ["dustHood", "吸尘罩"], ["dustCleaner", "吸尘器"],
  ["sheetMetal", "钣金"], ["waterCooler", "水冷机"],
  ["cFeedRack", "C系列送料架"], ["cReceiveRack", "C系列收料架"], ["computer", "电脑"],
  ["cabinet", "电控柜配线"], ["packing", "包装要求"],
  ["logo", "改 Logo"], ["appearance", "外观修改"]
];
const LASER_CONFIG_FIELDS = [
  ["workingArea", "加工范围"],
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["laserPower", "激光功率"], ["laserSource", "激光器"], ["cuttingHead", "激光切割头"],
  ["laserControl", "激光控制系统"], ["servoSystem", "伺服系统"], ["laserTransmission", "传动系统"], ["laserGuide", "导轨"],
  ["exchangeTable", "交换平台"], ["enclosure", "防护结构"], ["dustSystem", "除尘系统"], ["chiller", "冷水机"],
  ["tubeRange", "管材范围"], ["chuckSystem", "卡盘系统"], ["visionSystem", "视觉定位系统"], ["machineSize", "设备尺寸"],
  ["packing", "包装要求"], ["logo", "改 Logo"], ["appearance", "外观修改"]
];
const CO2_CONFIG_FIELDS = [
  ["workingArea", "加工范围"],
  ["voltage", "电源要求 - 电压"], ["hertz", "电源要求 - 赫兹"], ["phase", "电源要求 - 几相电"], ["powerNote", "电源要求 - 备注"],
  ["co2Power", "CO2 激光功率"], ["laserTube", "激光管"], ["coolingSystem", "冷却系统"],
  ["cuttingDepth", "最大切割厚度"], ["workingPlatform", "工作台面"], ["motorSystem", "电机与驱动"], ["co2Transmission", "传动方式"],
  ["co2Guide", "导轨"], ["co2Control", "控制系统"], ["autoFocus", "自动对焦"], ["ccdCamera", "CCD 相机"],
  ["exhaustSystem", "排烟系统"], ["feedingRack", "送料架"], ["machineSize", "设备尺寸"], ["packing", "包装要求"],
  ["co2Note", "其他配置备注"], ["logo", "改 Logo"], ["appearance", "外观修改"]
];
const OPTION_FIELDS = {
  voltage: ["110V", "220V", "380V", "415V", "440V", "定制"],
  hertz: ["50Hz", "60Hz", "50/60Hz"],
  phase: ["单相", "三相"],
  speed: ["18000RPM", "24000RPM", "40000RPM", "21000RPM"],
  spindleEnabled: ["有", "无"],
  spindleBrand: ["前程", "荣华", "尚客", "淞源", "华雕", "顺通", "备注"],
  guide: ["国产导轨（T3）", "乐品导轨", "上银导轨"],
  system: ["兴多维", "乐宇", "维宏"],
  drive: ["雷赛", "汇川", "台达", "安川", "新代", "维宏", "混合伺服（按标配）"],
  transmissionX: ["丝杆", "齿轮齿条", "皮带"],
  transmissionY: ["丝杆", "齿轮齿条", "皮带"],
  transmissionZ: ["丝杆", "齿轮齿条", "皮带"],
  inverter: ["酷马", "兆元", "备注"],
  reducer: ["无", "卓兰", "摩多利", "备注"],
  toolChange: ["不换刀", "换刀"],
  toolMagazine: ["无", "圆盘刀库", "直排刀库"],
  toolStations: ["无", "四工位", "六工位", "九工位", "十二工位", "定制工位"],
  cooling: ["风冷", "水冷"],
  waterCooler: ["不需要", "3000", "5000"],
  dustHood: ["要", "不要"],
  dustCleaner: ["不需要", "3kW 布袋吸尘", "5.5kW 欧标吸尘", "家用吸尘"],
  pump: ["无", "7.5kW", "5.5kW", "2.2kW", "9kW", "11kW", "备注"],
  packing: ["打木箱", "软包装", "其他备注"],
  table: ["铝蜂窝台面", "铝型材台面", "刀条台面", "黑芯板", "PVC"],
  cabinet: ["标配", "施耐德", "其他"]
};
OPTION_FIELDS.vacuum = ["四分区", "六分区", "八分区", "真空仓", "不要"];
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
  ["router", "主轴铣刀"], ["electric_oscillating", "电动震动刀"], ["pneumatic_oscillating", "气动震动刀"], ["drag", "托刀"],
  ["creasing", "压痕刀"], ["rotary", "圆刀"], ["kiss_cut", "半切刀"], ["bevel", "斜切刀"]
];
function standardToolDefaults(product) {
  const defaults = Object.fromEntries(TOOL_TYPES.map(([key]) => [key, "0"]));
  if (product?.series === "C系列") {
    defaults.electric_oscillating = "1";
    defaults.creasing = "1";
  } else {
    defaults.router = "1";
  }
  if (String(product?.model || "").startsWith("T7-")) {
    defaults.router = "1";
    defaults.electric_oscillating = "1";
    defaults.drag = "1";
  }
  return defaults;
}
const QUOTATION_ROLES = ["sales", "finance_director", "general_manager"];
const isFiberSeries = (series) => series === "M系列" || series === "X-fiber系列";
const isCo2Series = (series) => series === "X-fabric（X-1814）系列" || series === "X-CO2系列";
const isLaserSeries = (series) => isFiberSeries(series) || isCo2Series(series);
const configFieldsFor = (productOrOrder) => isFiberSeries(productOrOrder?.series) ? LASER_CONFIG_FIELDS : isCo2Series(productOrOrder?.series) ? CO2_CONFIG_FIELDS : CONFIG_FIELDS;
const SPINDLE_DEPENDENT_KEYS = ["spindleBrand", "spindle", "speed", "cooling", "toolChange", "toolMagazine", "toolStations"];
const KNIFE_MODEL_OPTIONS = ["电动震动刀", "气动刀", "托刀", "压痕刀", "圆刀", "半切刀", "斜切刀"];
const visibleConfigFieldsFor = (order) => configFieldsFor(order).filter(([key]) => order?.config?.spindleEnabled === "无" ? !SPINDLE_DEPENDENT_KEYS.includes(key) : true);

const $ = (s) => document.querySelector(s);
const esc = (v = "") => String(v).replace(/[&<>'"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
const now = () => new Date().toLocaleString("zh-CN", { hour12: false });
const dateOnly = (d = new Date()) => new Date(d).toISOString().slice(0, 10);
const storage = {
  get: () => JSON.parse(localStorage.getItem("mnt_orders_v2") || "[]"),
  set: (v) => {
    localStorage.setItem("mnt_orders_v2", JSON.stringify(v));
    if (session?.token) syncOrdersToCloud(v);
  }
};

let roles = {}, users = [], products = [], session = null, page = "dashboard", selectedOrder = null, pendingAction = null, orderRefreshTimer = null, cloudSavePromise = Promise.resolve();

function syncOrdersToCloud(orders = storage.get()) {
  cloudSavePromise = cloudSavePromise.then(() => fetch("/api/orders", {
    method: "PUT", headers: { ...authHeaders(), "content-type": "application/json" }, body: JSON.stringify({ orders })
  })).then((response) => { if (!response.ok) throw new Error("云端订单保存失败"); }).catch(() => toast("云端同步失败，请检查网络后重试"));
  return cloudSavePromise;
}

async function syncOrdersFromCloud({ refreshView = false } = {}) {
  if (!session?.token) return;
  const response = await fetch("/api/orders", { headers: authHeaders(), cache: "no-store" }).catch(() => null);
  if (!response?.ok) return;
  const result = await response.json();
  const remote = Array.isArray(result.orders) ? result.orders : [];
  const local = storage.get();
  if (!remote.length && local.length) await syncOrdersToCloud(local);
  else if (JSON.stringify(remote) !== JSON.stringify(local)) {
    localStorage.setItem("mnt_orders_v2", JSON.stringify(remote));
    migrateOrders();
    if (refreshView) navigate(page);
  }
}

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
  const p = products.find((x) => x.model === "T7-3020") || products[0];
  const cfg = productConfig(p);
  const orders = [
    makeOrder({ id: "MNT-20260708001", customer: "ACME Signworks", country: "美国", salespersonId: "stella", salesperson: "Stella", product: p, config: cfg, currentStage: "production_director", status: "审批中", orderDate: "2026-07-08", deliveryDate: "2026-08-07" }),
    makeOrder({ id: "MNT-20260710002", customer: "Demo Furniture GmbH", country: "德国", salespersonId: "alina", salesperson: "Alina", product: products.find((x) => x.model === "T6-1325"), currentStage: "general_manager", status: "审批中" }),
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
    nameplate: x.nameplate || "无", series: p.series, model: p.model, quantity: Number(x.quantity || 1), source: p.source, config: x.config || productConfig(p),
    special: x.special || "无", internalNote: x.internalNote || "无", currentStage: x.currentStage || "sales", status: x.status || "草稿",
    resumeAfterSales: null, pendingSalesChanges: null, locked: x.currentStage === "completed", postProductionChanges: { config: [], attachments: [] }, productionProgress: [], updatedAt: now(), createdAt: now(),
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
  const transmission = String(p.transmission).includes("丝杆") ? "丝杆" : String(p.transmission).includes("皮带") || String(p.transmission).includes("同步带") ? "皮带" : "齿轮齿条";
  const vacuum = String(p.vacuum).includes("不需要") ? "不要" : String(p.vacuum).includes("八") ? "八分区" : String(p.vacuum).includes("六") ? "六分区" : "四分区";
  const config = {
    voltage, hertz, phase: "三相", powerNote: "", waterCooler: "不需要", size: p.size,
    sheetMetal: "标准", vacuum, pump: String(p.pump).includes("不需要") ? "无" : (p.pump || "无"),
    spindle: p.series === "C系列" ? "800W" : (spindleMap[spindleNumber] || "4kW"),
    speed: String(p.speed).includes("18000") ? "18000RPM" : String(p.speed).includes("40000") ? "40000RPM" : String(p.speed).includes("21000") ? "21000RPM" : "24000RPM",
    dustHood: "不要", dustCleaner: "不需要", spindleEnabled: "有", spindleBrand: "前程", toolCount: "0", knifeModelNote: "", guide: p.model.includes("T3") ? "国产导轨（T3）" : "上银导轨", tool: p.tool,
    system: p.series === "C系列" ? "兴多维" : "维宏", drive: String(p.drive).includes("汇川") ? "汇川" : "汇川", cFeedRack: "不需要", cReceiveRack: "不需要",
    transmissionX: transmission, transmissionY: transmission, transmissionZ: transmission,
    computer: "不需要", inverter: p.series === "C系列" ? "备注：没有" : "酷马", logo: "否", reducer: "无",
    appearance: "标准", toolChange: (p.model.includes("ATC") || String(p.spindle || "").includes("ATC") || String(p.tool || "").includes("刀库")) ? "换刀" : "不换刀", packing: "打木箱", toolMagazine: (p.model.includes("ATC") || String(p.spindle || "").includes("ATC") || String(p.tool || "").includes("刀库")) ? "直排刀库" : "无",
    table: String(p.table).includes("蜂窝") ? "铝蜂窝台面" : p.series === "C系列" ? "刀条台面" : "黑芯板",
    toolStations: p.model.includes("T7") ? "六工位" : "无", ccd: "不需要", cooling: p.cooling === "水冷" ? "水冷" : "风冷", cabinet: "标配"
  };
  Object.assign(config, p.configDefaults || {});
  const standardTools = standardToolDefaults(p);
  TOOL_TYPES.forEach(([key]) => { config[`tool_${key}_standard`] = standardTools[key]; });
  config.extraToolsPurchase = "";
  config.extraBladesPurchase = "";
  config.extraToolsPurchaseOption = "无";
  config.extraBladesPurchaseOption = "无";
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
  const legacyTransmission = config.transmission || base.transmissionX;
  if (!config.transmissionX) next.transmissionX = legacyTransmission;
  if (!config.transmissionY) next.transmissionY = legacyTransmission;
  if (!config.transmissionZ) next.transmissionZ = legacyTransmission;
  if (!config.dustHood) next.dustHood = "不要";
  if (!config.dustCleaner) next.dustCleaner = config.dust || "不需要";
  if (next.inverter === "有") next.inverter = "酷马";
  if (next.inverter === "没有") next.inverter = "备注：没有";
  if (next.pump === "不需要") next.pump = "无";
  if (next.vacuum === "4分区") next.vacuum = "四分区";
  if (next.vacuum === "不分区") next.vacuum = "不要";
  return next;
}

function migrateOrders() {
  const orders = storage.get(); let changed = false;
  orders.forEach((o) => {
    const normalized = normalizeConfig(o.config || {}, products.find((p) => p.model === o.model));
    if (JSON.stringify(normalized) !== JSON.stringify(o.config || {})) { o.config = normalized; changed = true; }
    if (!o.quantity) { o.quantity = 1; changed = true; }
    if (!o.postProductionChanges) { o.postProductionChanges = { config: [], attachments: [] }; changed = true; }
    if (!Array.isArray(o.productionProgress)) { o.productionProgress = []; changed = true; }
    if (o.status === "已完成" && !o.backupArchivedAt) { o.backupArchivedAt = o.updatedAt || o.createdAt || now(); changed = true; }
  });
  if (changed) storage.set(orders);
}

function choicesFor(key, product) {
  if (key === "spindle") return product.series === "C系列" ? ["800W", "1.8kW", ...SPINDLE_COMMON] : SPINDLE_COMMON;
  return OPTION_FIELDS[key] || null;
}

const optionNeedsNote = (value = "") => ["其他", "备注", "定制", "客户自备"].some((word) => String(value).includes(word));
function optionValueParts(value, choices) {
  const raw = String(value || "");
  const notedOption = choices.find((option) => optionNeedsNote(option) && raw.startsWith(`${option}：`));
  return notedOption ? { selected: notedOption, note: raw.slice(notedOption.length + 1) } : { selected: raw, note: "" };
}

function configInput(key, label, value, product) {
  const choices = choicesFor(key, product);
  const dependent = SPINDLE_DEPENDENT_KEYS.includes(key) ? " spindle-dependent" : "";
  if (key === "knifeModelNote") {
    const selected = new Set(String(value || "").split(/[、,，]/).map((item) => item.trim()).filter(Boolean));
    return `<fieldset style="grid-column:1/-1;margin:0;border:1px solid var(--line);border-radius:10px;padding:11px 13px"><legend style="padding:0 5px;font-size:13px;font-weight:700">${label}（可多选）</legend><div style="display:grid;grid-template-columns:repeat(4,minmax(120px,1fr));gap:8px">${KNIFE_MODEL_OPTIONS.map((option) => `<label style="display:flex;align-items:center;gap:7px;margin:0;padding:8px 10px;border:1px solid var(--line);border-radius:8px"><input style="width:auto;margin:0" type="checkbox" name="cfg_${key}" value="${option}"${selected.has(option) ? " checked" : ""}><span>${option}</span></label>`).join("")}</div></fieldset>`;
  }
  if (!choices) return `<label class="${dependent.trim()}">${label}<input name="cfg_${key}" value="${esc(value || "")}"></label>`;
  const parts = optionValueParts(value, choices);
  const all = parts.selected && !choices.includes(parts.selected) ? [...choices, parts.selected] : choices;
  const showNote = optionNeedsNote(parts.selected);
  return `<label class="option-field${dependent}">${label}<select name="cfg_${key}" data-option-note="${key}">${all.map((option) => `<option${option === parts.selected ? " selected" : ""}>${esc(option)}</option>`).join("")}</select><input class="option-note${showNote ? "" : " hidden"}" name="cfg_${key}_note" value="${esc(parts.note)}" placeholder="请填写备注内容"></label>`;
}

function bindOptionNotes() {
  document.querySelectorAll("[data-option-note]").forEach((select) => {
    const input = select.parentElement.querySelector(".option-note");
    const sync = () => { const visible = optionNeedsNote(select.value); input.classList.toggle("hidden", !visible); input.required = visible; if (!visible) input.value = ""; };
    select.addEventListener("change", sync); sync();
  });
}

function bindSpindleToggle() {
  const select = document.querySelector('[name="cfg_spindleEnabled"]');
  if (!select) return;
  const sync = () => document.querySelectorAll(".spindle-dependent").forEach((label) => {
    const hidden = select.value === "无";
    label.classList.toggle("hidden", hidden);
    label.querySelectorAll("input,select,textarea").forEach((field) => { field.disabled = hidden; });
  });
  select.addEventListener("change", sync);
  sync();
}

function configValueFromForm(fd, key) {
  if (key === "knifeModelNote") return fd.getAll(`cfg_${key}`).map(String).join("、");
  const value = String(fd.get(`cfg_${key}`) || "");
  const note = String(fd.get(`cfg_${key}_note`) || "").trim();
  return optionNeedsNote(value) && note ? `${value}：${note}` : value;
}

function toolMatrixInputs(config) {
  const quantities = Array.from({ length: 10 }, (_, i) => String(i));
  const select = (name, value) => `<select name="${name}">${quantities.map((q) => `<option${q === String(value) ? " selected" : ""}>${q}</option>`).join("")}</select>`;
  return `<div class="tool-matrix standard-tools compact-tools"><div class="tool-pair-grid">${TOOL_TYPES.map(([key, name]) => `<div class="tool-card"><span>${name}</span>${select(`cfg_tool_${key}_standard`, config[`tool_${key}_standard`] ?? "0")}</div>`).join("")}</div></div>`;
}

function extraToolMatrixInputs(config) {
  const block = (kind, label, option, value) => `<div class="extra-purchase-block"><label>${label}<select name="cfg_${kind}Option" data-extra-purchase="${kind}"><option${option !== "另购" ? " selected" : ""}>无</option><option${option === "另购" ? " selected" : ""}>另购</option></select></label><label class="extra-purchase-note${option === "另购" ? "" : " hidden"}" data-extra-note="${kind}">${label}内容<textarea name="cfg_${kind}" rows="4" placeholder="请填写名称、规格、数量及其他要求">${esc(value || "")}</textarea></label></div>`;
  return `<div class="form-grid two extra-purchase-boxes">${block("extraToolsPurchase", "刀具另购", config.extraToolsPurchaseOption || (config.extraToolsPurchase ? "另购" : "无"), config.extraToolsPurchase)}${block("extraBladesPurchase", "刀片另购", config.extraBladesPurchaseOption || (config.extraBladesPurchase ? "另购" : "无"), config.extraBladesPurchase)}</div>`;
}
function bindExtraPurchaseOptions() {
  document.querySelectorAll("[data-extra-purchase]").forEach((select) => {
    const sync = () => document.querySelector(`[data-extra-note="${select.dataset.extraPurchase}"]`)?.classList.toggle("hidden", select.value !== "另购");
    select.addEventListener("change", sync); sync();
  });
}

function standardToolMatrixDetail(config, changed = []) {
  return `<div class="tool-matrix detail-tools standard-tools compact-tools"><div class="tool-pair-grid">${TOOL_TYPES.map(([key, name]) => `<div class="tool-card"><span>${changeStar(changed.includes(`tool_${key}_standard`))}${name}</span><b>${esc(config[`tool_${key}_standard`] ?? "0")}</b></div>`).join("")}</div></div>`;
}

function extraToolMatrixDetail(config, changed = []) {
  const tools = config.extraToolsPurchaseOption === "另购" || config.extraToolsPurchase ? config.extraToolsPurchase || "另购（未填写内容）" : "无";
  const blades = config.extraBladesPurchaseOption === "另购" || config.extraBladesPurchase ? config.extraBladesPurchase || "另购（未填写内容）" : "无";
  return `<div class="info-grid extra-purchase-detail">${infoCell(`${changeStar(changed.includes("extraToolsPurchase") || changed.includes("extraToolsPurchaseOption"))}刀具另购`, tools)}${infoCell(`${changeStar(changed.includes("extraBladesPurchase") || changed.includes("extraBladesPurchaseOption"))}刀片另购`, blades)}</div>`;
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
  if (uploaded.length) updateOrder(orderId, (o) => {
    o.attachments = { ...(o.attachments || {}), ...Object.fromEntries(uploaded.map((a) => [a.category, a])) };
    if (o.status === "已完成") {
      o.postProductionChanges ||= { config: [], attachments: [] };
      o.postProductionChanges.attachments = [...new Set([...(o.postProductionChanges.attachments || []), ...uploaded.map((a) => a.category)])];
      o.postProductionChanges.lastBy = session.user.name;
      o.postProductionChanges.lastAt = now();
      o.history.push(event("生产完成后销售更新附件", session.user.name, `生产单 ${o.id} 已修改：${uploaded.map((a) => attachmentLabels[a.category] || a.name).join("、")}，请注意`));
    }
  });
}

const changeStar = (changed) => changed ? `<span class="change-star" title="生产确认后修改">★</span>` : "";
const hasPostProductionChanges = (order) => Boolean(order.postProductionChanges?.config?.length || order.postProductionChanges?.attachments?.length);
const attachmentLabels = { logo: "Logo附件", appearance: "外观修改附件", quotation: "报价文件" };
function configLabel(order, key) {
  if (key === "model") return "型号";
  if (key === "quantity") return "购买机器数量";
  if (key === "extraToolsPurchase") return "刀具另购";
  if (key === "extraBladesPurchase") return "刀片另购";
  if (key === "extraToolsPurchaseOption") return "刀具另购选项";
  if (key === "extraBladesPurchaseOption") return "刀片另购选项";
  const field = configFieldsFor(order).find(([fieldKey]) => fieldKey === key);
  if (field) return field[1];
  for (const [toolKey, toolName] of TOOL_TYPES) {
    if (key === `tool_${toolKey}_standard`) return `${toolName}标配数量`;
    if (key === `tool_${toolKey}_standardNote`) return `${toolName}标配备注`;
    if (key === `tool_${toolKey}_extra`) return `${toolName}另购数量`;
    if (key === `tool_${toolKey}_extraNote`) return `${toolName}另购备注`;
  }
  return key;
}
function postProductionChangeSummary(order) {
  const labels = [
    ...(order.postProductionChanges?.config || []).map((key) => configLabel(order, key)),
    ...(order.postProductionChanges?.attachments || []).map((key) => attachmentLabels[key] || key)
  ];
  return [...new Set(labels)];
}

function attachmentPanel(order) {
  const definitions = [["logo", "Logo 附件"], ["appearance", "外观修改附件"], ...(canViewQuotation() ? [["quotation", "报价文件"]] : [])];
  return `<section class="panel"><div class="panel-head"><div><h3>附件</h3><p class="muted form-help">Logo 与外观修改附件同步给全部权限查看。</p></div></div><div class="attachment-grid">${definitions.map(([key, label]) => { const file = order.attachments?.[key]; const changed = order.postProductionChanges?.attachments?.includes(key); return `<article class="attachment-card"><span>${changeStar(changed)}${label}</span>${file ? `<strong>${esc(file.name)}</strong><small>${esc(file.uploadedBy || "-")} · ${esc(file.uploadedAt || "")}</small><button class="secondary" data-download="${key}">下载附件</button>` : `<strong class="muted">未上传</strong>`}</article>`; }).join("")}</div></section>`;
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
function canViewProductionProgress(o) { return PROGRESS_VIEW_ROLES.includes(session.user.role) && (session.user.role !== "sales" || o.salespersonId === session.user.id); }
function completedProgressOrders() { return visibleOrders().filter((o) => o.status === "已完成" && canViewProductionProgress(o)); }
function statusClass(o) { return o.status === "已完成" ? "done" : o.resumeAfterSales ? "returned" : o.status === "审批中" ? "wait" : ""; }
function toast(msg) { const el = $("#toast"); el.textContent = msg; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2300); }

function setupLogin() {
  const roleSelect = $("#role-select");
  roleSelect.innerHTML = Object.values(roles).map((r) => `<option value="${r.id}">${r.name}</option>`).join("");
  const fillUsers = (preferredUserId = "") => {
    const available = users.filter((u) => u.role === roleSelect.value);
    $("#user-select").innerHTML = available.map((u) => `<option value="${u.id}">${u.name}</option>`).join("");
    if (preferredUserId && available.some((u) => u.id === preferredUserId)) $("#user-select").value = preferredUserId;
  };
  const rememberedUser = users.find((u) => u.id === localStorage.getItem("mnt_last_login_user"));
  if (rememberedUser) roleSelect.value = rememberedUser.role;
  roleSelect.addEventListener("change", () => fillUsers());
  fillUsers(rememberedUser?.id);
  $("#toggle-password").onclick = () => { const i = $("#password"); i.type = i.type === "password" ? "text" : "password"; };
  $("#login-form").onsubmit = async (e) => {
    e.preventDefault(); const user = users.find((u) => u.id === $("#user-select").value);
    $("#login-error").textContent = "";
    const response = await fetch("/api/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: user?.id, password: $("#password").value }) }).catch(() => null);
    if (!response?.ok) { $("#login-error").textContent = "账号或密码不正确"; return; }
    const result = await response.json(); session = { user: result.user, token: result.token };
    sessionStorage.setItem("mnt_session", JSON.stringify(session));
    localStorage.setItem("mnt_last_login_user", result.user.id);
    await openApp();
  };
}

async function openApp() {
  await syncOrdersFromCloud();
  $("#login-view").classList.add("hidden"); $("#app-view").classList.remove("hidden");
  $("#side-user").textContent = session.user.name; $("#side-role").textContent = roles[session.user.role].name; $("#avatar").textContent = session.user.name.slice(0, 1);
  $("#today").textContent = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(new Date());
  $("#new-order").classList.toggle("hidden", !currentRole().canCreate); buildNav(); navigate("dashboard");
  clearInterval(orderRefreshTimer);
  orderRefreshTimer = setInterval(() => syncOrdersFromCloud({ refreshView: true }), 12000);
}

function buildNav() {
  const progressRoles = ["sales", "production_director", "general_manager", "finance_director", "production_assistant"];
  const menus = [...(currentRole().menus || [])];
  if (progressRoles.includes(session.user.role) && !menus.includes("production_progress")) {
    const productsIndex = menus.indexOf("products");
    menus.splice(productsIndex >= 0 ? productsIndex : menus.length, 0, "production_progress");
  }
  $("#nav").innerHTML = menus.map((m) => `<button class="nav-button" data-page="${m}"><i>${MENU[m][0]}</i>${MENU[m][1]}</button>`).join("");
  $("#nav").onclick = (e) => { const b = e.target.closest("[data-page]"); if (b) navigate(b.dataset.page); };
}

function navigate(next) {
  page = next; selectedOrder = null; $("#page-name").textContent = MENU[next]?.[1] || "生产单详情"; $("#page-title").textContent = MENU[next]?.[1] || "生产单详情";
  document.querySelectorAll(".nav-button").forEach((x) => x.classList.toggle("active", x.dataset.page === next));
  if (next === "dashboard") renderDashboard(); else if (next === "orders") renderOrders(); else if (next === "production_progress") renderProductionProgress(); else if (next === "products") renderProducts(); else if (next === "backup") renderBackup();
  $(".sidebar").classList.remove("open");
}

function renderDashboard() {
  const orders = visibleOrders(), waiting = orders.filter((o) => o.currentStage === session.user.role).length, returned = orders.filter((o) => o.currentStage === "sales" && o.resumeAfterSales).length;
  const today = new Date();
  const yearPrefix = String(today.getFullYear());
  const monthPrefix = `${yearPrefix}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  const managerTotals = session.user.role === "general_manager" ? `<article class="metric"><span>本月订单总量</span><strong>${orders.filter((o) => String(o.orderDate || o.createdAt || "").startsWith(monthPrefix)).length}</strong><em>${monthPrefix}</em></article><article class="metric"><span>年度订单总量</span><strong>${orders.filter((o) => String(o.orderDate || o.createdAt || "").startsWith(yearPrefix)).length}</strong><em>${yearPrefix} 年</em></article>` : "";
  const salesChangeAlerts = session.user.role === "sales" ? orders.filter((o) => o.currentStage === "sales" && o.resumeAfterSales).map((o) => `<button class="sales-alert" data-order="${o.id}"><strong>生产单 ${esc(o.id)} 已由${esc(o.pendingSalesChanges?.stage || "审批环节")}修改：${esc((o.pendingSalesChanges?.fields || ["生产单内容"]).join("、"))}，请确认</strong><span>${esc(o.pendingSalesChanges?.by || o.changeBy || "")} · ${esc(o.pendingSalesChanges?.at || o.updatedAt)}</span></button>`).join("") : "";
  $("#content").innerHTML = `<section class="hero-strip"><div><p class="eyebrow">${esc(currentRole().name)} MODULE</p><h3>${esc(session.user.name)}，欢迎回来</h3><p>${waiting ? `有 ${waiting} 张生产单等待你的确认。` : "当前没有待审批事项，所有流程正常推进。"}</p></div><span class="badge ${waiting ? "wait" : "done"}">${waiting ? "待处理" : "流程正常"}</span></section>
  ${salesChangeAlerts ? `<section class="sales-alert-list"><h3>生产单修改提醒</h3>${salesChangeAlerts}</section>` : ""}
  <section class="metric-grid"><article class="metric"><span>全部生产单</span><strong>${orders.length}</strong><em>当前可见范围</em></article><article class="metric"><span>待我审批</span><strong>${waiting}</strong><em>按权限隔离</em></article><article class="metric"><span>销售重确认</span><strong>${returned}</strong><em>配置变更回流</em></article><article class="metric"><span>已完成</span><strong>${orders.filter((o) => o.status === "已完成").length}</strong><em>可导出打印</em></article>${managerTotals}</section>
  <section class="panel"><div class="panel-head"><h3>最近生产单</h3><button class="text-button" data-go="orders">查看全部 →</button></div>${orderTable(orders.slice(0, 6))}</section>`;
  bindOrderLinks(); $("[data-go='orders']")?.addEventListener("click", () => navigate("orders"));
}

function progressAction(o) {
  return o.status === "已完成" && canViewProductionProgress(o) ? `<button class="secondary" data-progress="${o.id}">生产进度</button>` : "";
}

function orderTable(orders) {
  if (!orders.length) return `<div class="empty"><strong>暂无生产单</strong>创建第一张生产单后会显示在这里。</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>生产单号</th><th>客户</th><th>销售</th><th>机型</th><th>数量</th><th>当前环节</th><th>状态</th><th>交付日期</th><th></th></tr></thead><tbody>${orders.map((o) => `<tr><td><button class="order-link" data-order="${o.id}">${changeStar(hasPostProductionChanges(o))}${o.id}</button></td><td>${esc(o.customer || "-")}</td><td>${esc(o.salesperson)}</td><td>${esc(o.model)}</td><td>${esc(o.quantity || 1)}</td><td>${STAGE_NAMES[o.currentStage]}</td><td><span class="badge ${statusClass(o)}">${esc(o.status)}</span></td><td>${o.deliveryDate}</td><td><div class="actions"><button class="secondary" data-order="${o.id}">查看</button>${progressAction(o)}</div></td></tr>`).join("")}</tbody></table></div>`;
}

function renderOrders() {
  $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><h3>生产单列表</h3><p class="muted" style="margin:5px 0 0;font-size:11px">按当前账号权限显示</p></div><span class="badge">${visibleOrders().length} 条记录</span></div>${orderTable(visibleOrders())}</section>`;
  bindOrderLinks();
}

function bindOrderLinks() {
  document.querySelectorAll("[data-order]").forEach((b) => b.onclick = () => renderOrderDetail(b.dataset.order));
  document.querySelectorAll("[data-progress]").forEach((b) => b.onclick = () => openProductionProgress(b.dataset.progress));
}

function latestProgress(o) { return [...(o.productionProgress || [])].sort((a, b) => String(b.at).localeCompare(String(a.at)))[0]; }
function progressLabel(entry) { return entry?.type === "unchanged" ? "不变" : "有进展"; }
function renderProductionProgress() {
  const all = completedProgressOrders();
  $("#content").innerHTML = `<section class="hero-strip"><div><p class="eyebrow">PRODUCTION PROGRESS</p><h3>生产进度表</h3><p>生产助理每日打卡；全部历史记录长期保留并同步给有权限的人员。</p></div><span class="badge done">${all.length} 张生产单</span></section><section class="panel"><div class="panel-head"><div><h3>已进入生产的生产单</h3><p class="muted" style="margin:5px 0 0;font-size:11px">销售仅查看本人订单，其他授权部门查看全部</p></div></div><div class="table-wrap"><table><thead><tr><th>生产单号</th><th>客户</th><th>销售</th><th>机型</th><th>交付日期</th><th>最后打卡</th><th>最新进展</th><th></th></tr></thead><tbody>${all.map((o) => { const last = latestProgress(o); return `<tr><td><button class="order-link" data-order="${o.id}">${esc(o.id)}</button></td><td>${esc(o.customer || "-")}</td><td>${esc(o.salesperson)}</td><td>${esc(o.model)}</td><td>${esc(o.deliveryDate)}</td><td>${last ? `${esc(last.date)} · ${progressLabel(last)}` : "尚未打卡"}</td><td class="progress-summary">${esc(last?.text || (last?.type === "unchanged" ? "今日无变化" : "-"))}</td><td><button class="primary" data-progress="${o.id}">${session.user.role === "production_assistant" ? "查看 / 打卡" : "查看进度"}</button></td></tr>`; }).join("")}</tbody></table></div>${all.length ? "" : `<div class="empty"><strong>暂无已完成审批的生产单</strong>生产助理最终确认后会显示在这里。</div>`}</section>`;
  bindOrderLinks();
}

function openProductionProgress(orderId) {
  const o = storage.get().find((item) => item.id === orderId);
  if (!o || o.status !== "已完成" || !canViewProductionProgress(o)) return toast("当前账号无权查看该生产进度");
  const entries = [...(o.productionProgress || [])].sort((a, b) => String(b.at).localeCompare(String(a.at)));
  $("#progress-dialog-title").textContent = `${o.id} · 生产进度`;
  $("#progress-order-copy").textContent = `${o.customer || "-"} · ${o.model} · 销售：${o.salesperson}`;
  $("#progress-entry-form").classList.toggle("hidden", session.user.role !== "production_assistant");
  $("#progress-type").value = "progress"; $("#progress-text").value = ""; $("#progress-text-wrap").classList.remove("hidden");
  $("#progress-history").innerHTML = entries.length ? entries.map((entry) => `<article class="progress-entry"><div><span class="badge ${entry.type === "unchanged" ? "" : "done"}">${progressLabel(entry)}</span><strong>${esc(entry.date)}</strong><time>${esc(entry.at)}</time></div><p>${esc(entry.text || "今日生产情况不变")}</p><small>打卡人：${esc(entry.by || "生产助理")}</small></article>`).join("") : `<div class="empty"><strong>暂无打卡记录</strong>生产助理完成首次打卡后显示在这里。</div>`;
  $("#progress-dialog").dataset.orderId = o.id; $("#progress-dialog").showModal();
}

function saveProductionProgress(e) {
  e.preventDefault();
  if (session.user.role !== "production_assistant") return;
  const orderId = $("#progress-dialog").dataset.orderId, type = $("#progress-type").value, text = $("#progress-text").value.trim();
  if (type === "progress" && !text) return toast("请填写今日生产进展");
  const today = dateOnly();
  updateOrder(orderId, (o) => {
    if (!Array.isArray(o.productionProgress)) o.productionProgress = [];
    const entry = { date: today, type, text: type === "unchanged" ? "" : text, by: session.user.name, byId: session.user.id, at: now() };
    const existing = o.productionProgress.findIndex((item) => item.date === today);
    if (existing >= 0) o.productionProgress[existing] = entry; else o.productionProgress.push(entry);
    o.history.push(event("生产进度每日打卡", session.user.name, type === "unchanged" ? "今日生产情况不变" : text));
  });
  openProductionProgress(orderId); toast("今日生产进度已保存并同步");
}
function stageProgress(o) { return STAGES.map((s, i) => { const cur = o.currentStage === "completed" ? 99 : STAGES.indexOf(o.currentStage); const cls = i < cur || o.currentStage === "completed" ? "done" : i === cur ? "current" : ""; return `<div class="progress-step ${cls}"><i></i>${STAGE_NAMES[s]}</div>`; }).join(""); }

function renderOrderDetail(id) {
  const o = storage.get().find((x) => x.id === id); if (!o) return; selectedOrder = id;
  $("#page-name").textContent = "生产单"; $("#page-title").textContent = o.id;
  const canAct = o.currentStage === session.user.role && currentRole().canApprove;
  const canSalesEdit = session.user.role === "sales" && o.salespersonId === session.user.id && (o.currentStage === "sales" || o.status === "已完成");
  const canPrint = o.status === "已完成";
  const canDelete = session.user.role === "sales" && o.salespersonId === session.user.id;
  $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><span class="badge ${statusClass(o)}">${o.status}</span><span class="muted" style="font-size:11px;margin-left:8px">最后更新 ${o.updatedAt}</span></div><div class="actions"><button class="secondary" id="back-orders">← 返回列表</button>${canDelete ? `<button class="danger" id="delete-order">删除生产单</button>` : ""}${canPrint ? `<button class="primary" id="print-order">导出 / 打印</button>` : ""}</div></div><div style="padding:22px"><div class="progress">${stageProgress(o)}</div></div></section>
  ${o.resumeAfterSales ? `<p class="notice sales-change-notice"><strong>生产单 ${esc(o.id)} 已由${esc(o.pendingSalesChanges?.stage || "审批环节")} ${esc(o.pendingSalesChanges?.by || o.changeBy || "")} 修改：${esc((o.pendingSalesChanges?.fields || ["生产单内容"]).join("、"))}，请销售确认。</strong><br><span>修改时间：${esc(o.pendingSalesChanges?.at || o.updatedAt)}${o.pendingSalesChanges?.reason ? `　修改原因：${esc(o.pendingSalesChanges.reason)}` : ""}。确认后将直接进入“${STAGE_NAMES[o.resumeAfterSales]}”。</span></p>` : ""}
  ${hasPostProductionChanges(o) ? `<p class="notice post-production-notice">${changeStar(true)} <strong>生产单 ${esc(o.id)} 已修改：${esc(postProductionChangeSummary(o).join("、"))}，请注意。</strong><br><span>修改人：${esc(o.postProductionChanges?.lastBy || o.salesperson)}　修改时间：${esc(o.postProductionChanges?.lastAt || o.updatedAt)}。红色五角星为生产确认后的修改内容，所有权限页面同步显示。</span></p>` : ""}
  <div class="detail-grid"><div><section class="panel"><div class="panel-head"><h3>客户与机器信息</h3>${canSalesEdit ? `<button id="edit-order" class="secondary">${o.status === "已完成" ? "生产确认后修改" : "编辑生产单"}</button>` : ""}</div><div class="info-grid">${infoCell("客户", o.customer)}${infoCell("国家/地区", o.country)}${infoCell("销售", o.salesperson)}${infoCell("下单日期", o.orderDate)}${infoCell("交付日期", o.deliveryDate)}${infoCell("铭牌内容", o.nameplate)}${infoCell("系列", o.series)}${infoCell(`${changeStar(o.postProductionChanges?.config?.includes("model"))}型号`, o.model)}${infoCell(`${changeStar(o.postProductionChanges?.config?.includes("quantity"))}购买机器数量`, o.quantity || 1)}</div></section>
  <section class="panel"><div class="panel-head"><h3>${isFiberSeries(o.series) ? "光纤激光配置清单" : isCo2Series(o.series) ? "CO2 激光配置清单" : "配置清单"}</h3></div><div class="config-grid">${visibleConfigFieldsFor(o).map(([k, n]) => `<div class="config-row"><span>${changeStar(o.postProductionChanges?.config?.includes(k))}${n}</span><strong>${esc(o.config[k] || "-")}</strong></div>`).join("")}</div></section>
  ${isLaserSeries(o.series) ? "" : `<section class="panel"><div class="panel-head"><h3>刀具刀片另购</h3></div>${extraToolMatrixDetail(o.config, o.postProductionChanges?.config || [])}</section>`}
  ${attachmentPanel(o)}
  <section class="panel"><div class="panel-head"><h3>生产要求</h3></div><div class="info-grid">${infoCell("客户特殊要求", o.special)}${infoCell("内部备注", o.internalNote)}</div></section></div>
  <aside><section class="panel" style="margin-top:0"><div class="panel-head"><h3>当前操作</h3></div><div class="approval-card">${approvalBlock(o, canAct, canSalesEdit)}${o.status === "已完成" && canViewProductionProgress(o) ? `<button class="primary progress-open-wide" data-progress="${o.id}">${session.user.role === "production_assistant" ? "查看 / 填写生产进度" : "查看生产进度"}</button>` : ""}</div></section><section class="panel"><div class="panel-head"><h3>审批记录</h3></div><div class="timeline">${[...o.history].reverse().map((h) => `<div class="event"><strong>${esc(h.title)}</strong><p>${esc(h.by)}${h.note ? ` · ${esc(h.note)}` : ""}</p><time>${h.at}</time></div>`).join("")}</div></section></aside></div>`;
  $("#back-orders").onclick = () => navigate("orders"); $("#print-order")?.addEventListener("click", () => printOrder(o)); $("#edit-order")?.addEventListener("click", () => openOrderForm(o));
  $("#delete-order")?.addEventListener("click", () => confirmDeleteOrder(o));
  $("#approve-order")?.addEventListener("click", () => confirmApproval(o)); $("#modify-order")?.addEventListener("click", () => openOrderForm(o, true));
  document.querySelectorAll("[data-download]").forEach((button) => button.onclick = () => downloadAttachment(o, button.dataset.download));
  document.querySelectorAll("[data-progress]").forEach((button) => button.onclick = () => openProductionProgress(button.dataset.progress));
}

function infoCell(label, value) { return `<div class="info-cell"><span>${label}</span><strong>${esc(value || "-")}</strong></div>`; }
function approvalBlock(o, canAct, canSalesEdit) {
  if (o.status === "已完成") return `<span class="badge done">审批完成</span><p class="muted" style="font-size:11px;line-height:1.7">${canSalesEdit ? "生产已确认；销售仍可修改配置和附件，修改内容会显示红色五角星。" : "生产已确认；可查看、导出打印，销售后续修改会同步显示红色五角星。"}</p>`;
  if (!canAct) return `<p class="muted" style="font-size:11px;line-height:1.7">当前等待“${STAGE_NAMES[o.currentStage]}”处理。审批按钮只对对应模块账号显示。</p>`;
  const salesCopy = o.resumeAfterSales ? `确认本次配置修改，并直接提交至“${STAGE_NAMES[o.resumeAfterSales]}”。` : "确认客户与配置内容，提交生产总监审批。";
  return `<p class="muted" style="font-size:11px;line-height:1.7">${session.user.role === "sales" ? salesCopy : `确认配置无误后进入下一环节；如修改配置，将自动返回销售重新确认。`}</p><div class="actions"><button id="approve-order" class="primary">${session.user.role === "sales" ? "销售确认" : "确认并通过"}</button>${session.user.role !== "sales" ? `<button id="modify-order" class="secondary">修改配置</button>` : ""}</div>`;
}

function confirmApproval(o) {
  const salesResume = session.user.role === "sales" && o.resumeAfterSales;
  const idx = STAGES.indexOf(o.currentStage); const next = salesResume ? o.resumeAfterSales : (idx === STAGES.length - 1 ? "completed" : STAGES[idx + 1]);
  openConfirm("确认审批", next === "completed" ? "完成后生产单将锁定并允许导出打印。" : `生产单将进入“${STAGE_NAMES[next]}”。`, (note) => {
    updateOrder(o.id, (x) => { x.currentStage = next; x.status = next === "completed" ? "已完成" : "审批中"; x.locked = next === "completed"; if (next === "completed") x.backupArchivedAt = now(); x.history.push(event(`${STAGE_NAMES[session.user.role]}已确认`, session.user.name, note || "确认无误")); if (next === "completed") x.history.push(event("已录入备份数据库", session.user.name, "生产助理确认后自动归档")); x.resumeAfterSales = null; x.changeBy = null; x.pendingSalesChanges = null; });
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
  <section class="form-section"><h4>机器信息</h4><div class="form-grid two"><label>系列<select name="series" id="form-series">${[...new Set(products.map((p) => p.series))].map((series) => `<option>${series}</option>`).join("")}</select></label><label>型号<select name="model" id="form-model"></select></label><label>购买机器数量<input name="quantity" type="number" min="1" step="1" value="${esc(order?.quantity || 1)}" required></label></div></section>
  <section class="form-section"><h4>配置清单</h4><div class="form-grid two" id="config-inputs"></div></section>
  <section class="form-section"><h4>附件与报价</h4><div class="form-grid"><label>Logo 附件<input name="logoFile" type="file" accept="image/*,.pdf,.ai,.cdr,.psd"></label><label>外观修改附件<input name="appearanceFile" type="file" accept="image/*,.pdf,.ai,.cdr,.psd,.dwg,.dxf"></label>${canViewQuotation() ? `<label>导入报价文件<input name="quotationFile" type="file" accept="image/*,.jpg,.jpeg,.png,.webp,.gif,.bmp,.tif,.tiff,.pdf,.xlsx,.xls,.doc,.docx,.csv"></label>` : ""}</div><p class="muted form-help">单个附件最大 15MB。报价文件支持图片、PDF、Excel、Word 和 CSV，仅销售、财务总监和总经理可见。</p></section>
  <section class="form-section"><h4>生产要求</h4><div class="form-grid two"><label>客户特殊要求<textarea name="special" rows="3">${esc(order?.special || "无")}</textarea></label><label>内部备注<textarea name="internalNote" rows="3">${esc(order?.internalNote || "无")}</textarea></label></div></section>
  <section class="form-section" id="extra-tool-section"><h4>刀具刀片另购</h4><p class="muted form-help">分别填写需要另购的刀具和刀片，可注明名称、规格、数量及要求。</p><div id="extra-tool-inputs"></div></section>
  ${reviewerEdit ? `<section class="form-section"><label>修改原因<textarea name="changeReason" rows="3" required placeholder="请说明修改内容，销售确认时会看到"></textarea></label></section>` : ""}
  <div class="dialog-actions"><button type="button" class="secondary close-dialog">取消</button><button class="primary" type="submit">${reviewerEdit ? "保存并返回销售" : editing ? "保存修改" : "创建生产单"}</button></div>`;
  $("#form-series").value = order?.series || selectedProduct.series;
  const fillModels = (keepModel) => { const list = products.filter((p) => p.series === $("#form-series").value); $("#form-model").innerHTML = list.map((p) => `<option>${p.model}</option>`).join(""); if (keepModel && list.some((p) => p.model === keepModel)) $("#form-model").value = keepModel; applyProduct(keepModel ? order?.config : null); };
  const applyProduct = (keepConfig = null) => { const p = products.find((x) => x.model === $("#form-model").value) || selectedProduct; const cfg = normalizeConfig(keepConfig || productConfig(p), p); $("#config-inputs").innerHTML = configFieldsFor(p).map(([k,n]) => configInput(k, n, cfg[k], p)).join(""); bindOptionNotes(); bindSpindleToggle(); $("#extra-tool-section").classList.toggle("hidden", isLaserSeries(p.series)); $("#extra-tool-inputs").innerHTML = isLaserSeries(p.series) ? "" : extraToolMatrixInputs(cfg); bindExtraPurchaseOptions(); };
  fillModels(order?.model); $("#form-series").onchange = () => fillModels(); $("#form-model").onchange = () => applyProduct();
  $("#order-form").onsubmit = async (e) => { e.preventDefault(); const form = e.currentTarget; const submit = form.querySelector("button[type='submit']"); submit.disabled = true; submit.textContent = "正在保存…"; const fd = new FormData(form); const p = products.find((x) => x.model === fd.get("model")); const config = Object.fromEntries(configFieldsFor(p).map(([k]) => [k, configValueFromForm(fd, k)])); if (!isLaserSeries(p.series)) { config.extraToolsPurchaseOption = fd.get("cfg_extraToolsPurchaseOption") || "无"; config.extraBladesPurchaseOption = fd.get("cfg_extraBladesPurchaseOption") || "无"; config.extraToolsPurchase = config.extraToolsPurchaseOption === "另购" ? fd.get("cfg_extraToolsPurchase") || "" : ""; config.extraBladesPurchase = config.extraBladesPurchaseOption === "另购" ? fd.get("cfg_extraBladesPurchase") || "" : ""; }
    if (!editing) { const o = makeOrder({ customer: fd.get("customer"), country: fd.get("country"), nameplate: fd.get("nameplate"), orderDate: fd.get("orderDate"), deliveryDate: fd.get("deliveryDate"), quantity: fd.get("quantity"), product: p, config, special: fd.get("special"), internalNote: fd.get("internalNote") }); const all = storage.get(); all.unshift(o); storage.set(all); try { await uploadOrderFiles(o.id, form); } catch (error) { toast(error.message); } $("#order-dialog").close(); renderOrderDetail(o.id); toast("生产单已创建，请销售确认"); return; }
    const reviewerAttachmentChanges = reviewerEdit ? [["logoFile", "Logo附件"], ["appearanceFile", "外观修改附件"], ["quotationFile", "报价文件"]].filter(([field]) => form.elements[field]?.files?.length).map(([, label]) => label) : [];
    updateOrder(order.id, (x) => {
      const postProductionEdit = x.status === "已完成";
      const changedFields = [];
      const changedLabels = [];
      const compareField = (key, label, nextValue) => { if (String(x[key] ?? "") !== String(nextValue ?? "")) changedLabels.push(label); };
      compareField("customer", "客户", fd.get("customer"));
      compareField("country", "国家/地区", fd.get("country"));
      compareField("nameplate", "铭牌内容", fd.get("nameplate"));
      compareField("orderDate", "下单日期", fd.get("orderDate"));
      compareField("deliveryDate", "交付日期", fd.get("deliveryDate"));
      compareField("series", "系列", p.series);
      compareField("special", "客户特殊要求", fd.get("special"));
      compareField("internalNote", "内部备注", fd.get("internalNote"));
      if (x.model !== p.model) changedFields.push("model");
      if (Number(x.quantity || 1) !== Number(fd.get("quantity") || 1)) changedFields.push("quantity");
      const configKeys = new Set([...Object.keys(x.config || {}), ...Object.keys(config || {})].filter((key) => !key.endsWith("_standardNote") && !key.endsWith("_extra") && !key.endsWith("_extraNote")));
      configKeys.forEach((key) => { if (String(x.config?.[key] ?? "") !== String(config?.[key] ?? "")) changedFields.push(key); });
      changedLabels.push(...changedFields.map((key) => configLabel({ ...x, series: p.series, model: p.model, config }, key)), ...reviewerAttachmentChanges);
      Object.assign(x, { customer: fd.get("customer"), country: fd.get("country"), nameplate: fd.get("nameplate"), orderDate: fd.get("orderDate"), deliveryDate: fd.get("deliveryDate"), series: p.series, model: p.model, quantity: Number(fd.get("quantity") || 1), source: p.source, config, special: fd.get("special"), internalNote: fd.get("internalNote") });
      if (postProductionEdit) {
        x.postProductionChanges ||= { config: [], attachments: [] };
        x.postProductionChanges.config = [...new Set([...(x.postProductionChanges.config || []), ...changedFields])];
        x.postProductionChanges.lastBy = session.user.name;
        x.postProductionChanges.lastAt = now();
        const labels = changedFields.length ? changedFields.map((key) => configLabel(x, key)) : ["生产单内容"];
        x.history.push(event("生产完成后销售修改", session.user.name, `生产单 ${x.id} 已修改：${[...new Set(labels)].join("、")}，请注意`));
      } else if (reviewerEdit) {
        const reviewerStage = x.currentStage;
        const reviewerIndex = STAGES.indexOf(reviewerStage);
        const uniqueLabels = [...new Set(changedLabels.length ? changedLabels : ["生产单内容"])];
        x.currentStage = "sales";
        x.status = "待销售重确认";
        x.resumeAfterSales = reviewerStage;
        x.changeBy = session.user.name;
        x.pendingSalesChanges = { stage: STAGE_NAMES[reviewerStage], by: session.user.name, at: now(), fields: uniqueLabels, reason: fd.get("changeReason") || "" };
        x.history.push(event(`${STAGE_NAMES[reviewerStage]}修改生产单`, session.user.name, `生产单 ${x.id} 已修改：${uniqueLabels.join("、")}，请销售确认${fd.get("changeReason") ? `；原因：${fd.get("changeReason")}` : ""}`));
      } else x.history.push(event("销售更新生产单", session.user.name, "配置内容已保存"));
    }); try { await uploadOrderFiles(order.id, form); } catch (error) { toast(error.message); } $("#order-dialog").close(); renderOrderDetail(order.id); toast(reviewerEdit ? "已返回销售重新确认" : "生产单已更新"); };
  $("#order-dialog").showModal(); bindDialogClose();
}

function openConfirm(title, copy, action) { $("#confirm-title").textContent = title; $("#confirm-copy").textContent = copy; $("#confirm-note").value = ""; pendingAction = action; $("#confirm-dialog").showModal(); }
function renderProducts() { $("#content").innerHTML = `<section class="panel" style="margin-top:0"><div class="panel-head"><div><h3>C / T / M / X 系列配置库</h3><p class="muted" style="margin:5px 0 0;font-size:11px">依据技术方案整理</p></div><span class="badge">${products.length} 个机型</span></div><div class="table-wrap"><table><thead><tr><th>系列</th><th>型号</th><th>工作尺寸</th><th>系统</th><th>驱动</th></tr></thead><tbody>${products.map((p) => `<tr><td><span class="badge">${p.series}</span></td><td><strong>${p.model}</strong></td><td>${p.size}</td><td>${p.system}</td><td>${p.drive}</td></tr>`).join("")}</tbody></table></div></section>`; }
function backupOrders() { return storage.get().filter((o) => o.status === "已完成" && o.backupArchivedAt); }
function renderBackup() { const all = backupOrders(); $("#content").innerHTML = `<section class="hero-strip"><div><p class="eyebrow">BACKUP DATABASE</p><h3>已归档生产单</h3><p>生产助理确认后自动录入，保存订单、配置和完整审批记录。</p></div><button id="download-backup" class="primary">下载数据库备份</button></section><section class="metric-grid"><article class="metric"><span>已归档生产单</span><strong>${all.length}</strong></article><article class="metric"><span>审批记录</span><strong>${all.reduce((n,o)=>n+o.history.length,0)}</strong></article><article class="metric"><span>最后归档</span><strong style="font-size:16px">${all[0]?.backupArchivedAt || "-"}</strong></article><article class="metric"><span>存储状态</span><strong style="font-size:18px;color:var(--success)">正常</strong></article></section><p class="notice">只有完成全部审批并由生产助理最终确认的生产单会进入备份数据库。</p>${orderTable(all)}`; $("#download-backup").onclick = downloadBackup; bindOrderLinks(); }
function downloadBackup() { const blob = new Blob([JSON.stringify({ exportedAt: now(), orders: backupOrders() }, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `mnt-backup-${dateOnly()}.json`; a.click(); URL.revokeObjectURL(a.href); toast("备份文件已生成"); }

function printOrder(o) {
  const rows = visibleConfigFieldsFor(o).map(([k,n], i) => [k,n,i]).reduce((acc, cur, i, arr) => { if (i%2===0) acc.push([cur, arr[i+1]]); return acc; }, []);
  const tools = isLaserSeries(o.series) ? "" : printSection("刀具刀片另购", [["刀具另购", o.config.extraToolsPurchaseOption === "另购" || o.config.extraToolsPurchase ? o.config.extraToolsPurchase || "另购（未填写内容）" : "无"],["刀片另购", o.config.extraBladesPurchaseOption === "另购" || o.config.extraBladesPurchase ? o.config.extraBladesPurchase || "另购（未填写内容）" : "无"]]);
  const changedNotice = hasPostProductionChanges(o) ? `<p class="print-change">★ 生产单 ${esc(o.id)} 已修改：${esc(postProductionChangeSummary(o).join("、"))}，请注意。</p>` : "";
  $("#print-sheet").innerHTML = `<header class="print-head"><div><h1>生产单</h1><p>${o.id}</p></div><span>审批完成 · 可生产</span></header>${changedNotice}${printSection("客户与交付信息", [["客户",o.customer],["销售",o.salesperson],["下单日期",o.orderDate],["交付日期",o.deliveryDate],["国家/地区",o.country],["铭牌内容",o.nameplate]])}${printSection("机器信息", [["系列",o.series],["型号",o.model],["购买机器数量",o.quantity || 1]])}<section class="print-section"><h2>${isFiberSeries(o.series) ? "光纤激光配置清单" : isCo2Series(o.series) ? "CO2 激光配置清单" : "配置清单"}</h2>${rows.map((pair)=>`<div class="print-row four"><b>${pair[0][1]}</b><span>${esc(o.config[pair[0][0]]||"-")}</span><b>${pair[1]?.[1]||""}</b><span>${pair[1]?esc(o.config[pair[1][0]]||"-"):""}</span></div>`).join("")}</section>${tools}${printSection("生产要求", [["客户特殊要求",o.special],["内部备注",o.internalNote]])}<div class="print-approvals">${STAGES.map((s)=>{const h=o.history.find((x)=>x.title.includes(STAGE_NAMES[s]));return `<div class="print-sign"><b>${STAGE_NAMES[s]}</b><span>${h?esc(h.by):"-"}</span><time>${h?.at||""}</time></div>`}).join("")}</div>`;
  window.print();
}
function printSection(title, fields) { return `<section class="print-section"><h2>${title}</h2>${fields.map(([k,v])=>`<div class="print-row"><b>${k}</b><span>${esc(v||"-")}</span></div>`).join("")}</section>`; }
function bindDialogClose() { document.querySelectorAll(".close-dialog").forEach((b) => b.onclick = () => b.closest("dialog").close()); }

async function init() {
  await loadConfig(); seed(); migrateOrders(); setupLogin(); bindDialogClose();
  $("#logout").onclick = () => { sessionStorage.removeItem("mnt_session"); location.reload(); };
  $("#mobile-menu").onclick = () => $(".sidebar").classList.toggle("open"); $("#new-order").onclick = () => openOrderForm();
  $("#confirm-action").onclick = () => { const action = pendingAction; $("#confirm-dialog").close(); pendingAction = null; action?.($("#confirm-note").value.trim()); };
  $("#progress-entry-form").onsubmit = saveProductionProgress;
  $("#progress-type").onchange = () => { const unchanged = $("#progress-type").value === "unchanged"; $("#progress-text-wrap").classList.toggle("hidden", unchanged); $("#progress-text").required = !unchanged; };
  const saved = JSON.parse(sessionStorage.getItem("mnt_session") || "null"); if (saved?.token && saved?.user && users.some((u) => u.id === saved.user.id)) { session = saved; await openApp(); }
}

init().catch((err) => { console.error(err); $("#login-error").textContent = "系统配置加载失败，请刷新页面"; });

