const defaultAnswers = [
  {
    id: "pipeline-gap",
    title: "下一年技术部门编制缺口预测 (基于项目Pipeline)",
    keywords: ["技术部门", "编制", "缺口", "pipeline", "人员", "下一年", "项目"],
    source: "项目管理平台",
    creator: "李敏",
    createdAt: "2025-07-03 12:23",
    chartTitle: "下一年技术部门编制缺口预测数据",
    defaultChart: "bar",
    chartData: [
      { label: "1月", value: 55, group: "交付缺口" },
      { label: "2月", value: 83, group: "研发缺口" },
      { label: "3月", value: 26, group: "交付缺口" },
      { label: "4月", value: 15, group: "研发缺口" },
      { label: "5月", value: 56, group: "交付缺口" },
      { label: "6月", value: 56, group: "研发缺口" },
      { label: "7月", value: 25, group: "交付缺口" },
      { label: "8月", value: 30, group: "研发缺口" },
      { label: "9月", value: 68, group: "交付缺口" },
      { label: "10月", value: 41, group: "研发缺口" },
      { label: "11月", value: 25, group: "交付缺口" },
      { label: "12月", value: 48, group: "研发缺口" },
    ],
    sections: [
      {
        heading: "一、背景与意义",
        body: "基于项目 Pipeline 预测下一年技术部门编制缺口时，需要结合项目规模、模块数量、交付周期、技术栈变化和人员流动情况综合判断。大型项目集中启动时，研发、测试、数据工程和实施支持岗位往往会形成阶段性缺口。",
      },
      {
        heading: "二、当前存在的主要问题",
        bullets: [
          "项目需求和实际投入人力之间缺少统一的换算口径，导致人力预测波动较大。",
          "历史项目的模块复杂度、延期原因和岗位投入数据还需要持续沉淀。",
          "若人工智能、大数据等新技术应用增多，专业岗位缺口会被进一步放大。",
        ],
      },
      {
        heading: "三、推进建设的具体措施",
        body: "建议建立“项目类型 + 功能模块 + 岗位系数”的预测模型，并将离职率、招聘周期、关键岗位培养周期纳入计算。峰值月份前至少提前一个季度启动招聘池和跨团队支援预案。",
      },
    ],
    guesses: [
      { label: "哪些月份技术编制缺口最高？", body: "2月、9月和5月是预测缺口较高的月份，其中2月达到83，9月达到68。建议对这几个峰值月份提前锁定核心岗位候选人，并配置临时支援池。", chart: "bar" },
      { label: "按岗位拆分下一年人员需求", body: "建议优先拆分为研发工程师、测试工程师、数据工程师、实施支持和项目经理五类。AI与数据类项目占比提升时，数据工程师与算法支持岗位需单列储备指标。", chart: "table" },
      { label: "给出招聘节奏建议", body: "建议按“提前一个季度建池、提前两个月定人、上线前一个月补齐”的节奏推进。2月缺口可在上一年12月完成候选人储备，9月缺口可在6月至7月启动集中招聘。", chart: "area" },
    ],
  },
  {
    id: "finance-2024",
    title: "2024财务收入报表统计",
    keywords: ["2024", "财务", "收入", "报表", "模板", "真实性", "异常月份"],
    source: "财务共享中心",
    creator: "王佳",
    createdAt: "2025-01-16 09:40",
    chartTitle: "2024财务收入月度趋势",
    defaultChart: "line",
    chartData: [
      { label: "1月", value: 42, group: "收入" },
      { label: "2月", value: 48, group: "收入" },
      { label: "3月", value: 53, group: "收入" },
      { label: "4月", value: 49, group: "收入" },
      { label: "5月", value: 57, group: "收入" },
      { label: "6月", value: 63, group: "收入" },
      { label: "7月", value: 61, group: "收入" },
      { label: "8月", value: 66, group: "收入" },
      { label: "9月", value: 72, group: "收入" },
      { label: "10月", value: 74, group: "收入" },
      { label: "11月", value: 79, group: "收入" },
      { label: "12月", value: 88, group: "收入" },
    ],
    sections: [
      {
        heading: "一、收入概览",
        body: "2024年收入整体呈稳步上升趋势，三季度后增长更明显。若用于经营复盘，需要同步关注回款周期、合同确认口径和一次性收入占比，避免只用收入总额判断业务质量。",
      },
      {
        heading: "二、真实性影响因素",
        bullets: [
          "收入确认时间、合同变更和跨期结算会影响报表口径。",
          "手工录入、系统同步延迟和重复开票会带来数据偏差。",
          "建议将收入报表与合同、发票、回款流水做三方校验。",
        ],
      },
      {
        heading: "三、常见处理建议",
        body: "对异常月份可设置阈值预警，对大额收入增加穿透明细，同时保留版本记录和审批链路，便于后续审计与复盘。",
      },
    ],
    guesses: [
      { label: "提供一份收入报表模板", body: "模板建议包含月份、合同收入、已开票金额、已回款金额、递延收入、收入确认口径、异常说明和责任人。这样既能做统计，也能支持审计追溯。", chart: "table" },
      { label: "收入真实性受哪些因素影响？", body: "主要受收入确认口径、跨期合同、系统同步延迟、重复开票、手工调整和回款匹配不一致影响。建议针对大额、跨期和异常增长月份做穿透校验。", chart: "pie" },
      { label: "如何处理异常月份？", body: "先判断异常来自业务增长、一次性合同还是数据错误；再核对合同、发票与回款流水；最后沉淀异常原因和处理结果，作为后续预警规则。", chart: "area" },
    ],
  },
  {
    id: "monitoring",
    title: "数据监测与优化策略",
    keywords: ["数据监测", "优化", "策略", "指标", "预警", "健康度"],
    source: "运营数据平台",
    creator: "陈晨",
    createdAt: "2025-06-20 15:18",
    chartTitle: "核心指标健康度分布",
    defaultChart: "pie",
    chartData: [
      { label: "稳定", value: 58, group: "状态" },
      { label: "波动", value: 24, group: "状态" },
      { label: "预警", value: 12, group: "状态" },
      { label: "缺失", value: 6, group: "状态" },
    ],
    sections: [
      {
        heading: "一、监测目标",
        body: "围绕关键业务指标建立日常监测视图，重点观察指标完整性、异常波动、趋势变化和数据延迟。监测结果应能直接定位到责任系统和处理人。",
      },
      {
        heading: "二、优化方向",
        bullets: [
          "为核心指标设置分级阈值，并区分提醒、预警和阻断三类动作。",
          "将异常归因拆成数据源、计算逻辑、业务变化和系统同步四类。",
          "每周沉淀异常样本，反向优化规则库和数据质量校验。",
        ],
      },
    ],
    guesses: [
      { label: "哪些指标需要优先预警？", body: "优先预警会直接影响经营判断或交付节奏的指标，例如收入、回款、项目延期率、数据缺失率和关键系统同步时延。", chart: "radar" },
      { label: "输出数据质量巡检表", body: "巡检表应包含指标名称、数据源、更新频率、最近更新时间、缺失率、异常阈值、负责人和处理状态。", chart: "table" },
      { label: "给出优化策略优先级", body: "优先级建议按影响面排序：先治理核心指标缺失，再治理同步延迟，随后优化异常归因，最后补齐可视化复盘视图。", chart: "bar" },
    ],
  },
  {
    id: "workday",
    title: "工作日统计",
    keywords: ["工作日", "统计", "考勤", "日历", "排期"],
    source: "人事日历",
    creator: "赵越",
    createdAt: "2025-05-08 10:06",
    chartTitle: "季度工作日分布",
    defaultChart: "bar",
    chartData: [
      { label: "一季度", value: 62, group: "工作日" },
      { label: "二季度", value: 63, group: "工作日" },
      { label: "三季度", value: 66, group: "工作日" },
      { label: "四季度", value: 64, group: "工作日" },
    ],
    sections: [
      {
        heading: "一、统计说明",
        body: "基于标准工作日历统计，全年工作日分布较均衡。三季度工作日略高，适合安排周期较长的开发与集中交付类任务。",
      },
      {
        heading: "二、使用建议",
        bullets: [
          "月度计划建议同步考虑节假日、调休和团队请假峰值。",
          "跨季度项目可优先避开节假日密集月份，降低排期风险。",
        ],
      },
    ],
    guesses: [
      { label: "生成季度排期建议", body: "一、二季度适合启动与需求澄清，三季度工作日较多，可承接开发与集中交付，四季度应预留验收和复盘时间。", chart: "bar" },
      { label: "按月份拆分工作日", body: "可按月份输出工作日、节假日、调休日和请假高峰提醒，作为项目排期和人力测算的基础输入。", chart: "table" },
      { label: "识别项目排期风险", body: "风险主要来自节假日前后效率波动、跨团队依赖、人力集中请假和验收窗口不足。建议关键节点至少预留10%的缓冲。", chart: "radar" },
    ],
  },
  {
    id: "sales-forecast",
    title: "销售目标完成率预测",
    keywords: ["销售", "目标", "完成率", "预测", "商机", "pipeline"],
    source: "CRM商机系统",
    creator: "刘洋",
    createdAt: "2025-07-09 16:05",
    chartTitle: "区域销售目标完成率",
    defaultChart: "area",
    chartData: [
      { label: "华东", value: 92, group: "区域" },
      { label: "华南", value: 78, group: "区域" },
      { label: "华北", value: 85, group: "区域" },
      { label: "西南", value: 66, group: "区域" },
      { label: "西北", value: 58, group: "区域" },
      { label: "海外", value: 73, group: "区域" },
    ],
    sections: [
      {
        heading: "一、预测结论",
        body: "华东和华北区域目标完成概率较高，西北和西南区域存在明显缺口。若想提升整体完成率，应优先提升高价值商机推进速度，并对低活跃商机做阶段性清理。",
      },
      {
        heading: "二、关键影响因素",
        bullets: [
          "商机金额、销售阶段、预计签约日期和历史赢率共同影响预测结果。",
          "低活跃商机若长期停留在方案阶段，会拉低总体预测可信度。",
          "重点客户续约节点对季度完成率影响较大，需要单独跟进。",
        ],
      },
    ],
    guesses: [
      { label: "哪些区域需要补救？", body: "西北和西南区域低于70%，需要针对重点客户制定加速方案；华南虽接近目标，但仍需关注大单签约风险。", chart: "bar" },
      { label: "按商机阶段拆分", body: "建议拆为初步接触、方案确认、商务谈判、合同审批和赢单五类，并分别计算转化率与平均停留天数。", chart: "table" },
      { label: "预测季度销售趋势", body: "从商机活跃度看，三季度末会形成高峰，四季度初应提前补充线索池，避免后续商机断层。", chart: "line" },
    ],
  },
  {
    id: "customer-churn",
    title: "客户流失风险分层",
    keywords: ["客户", "流失", "风险", "分层", "续约", "留存"],
    source: "客户成功平台",
    creator: "孙琪",
    createdAt: "2025-07-11 11:32",
    chartTitle: "客户流失风险分层占比",
    defaultChart: "radar",
    chartData: [
      { label: "使用频率", value: 72, group: "留存因子" },
      { label: "续约意向", value: 54, group: "留存因子" },
      { label: "服务满意度", value: 68, group: "留存因子" },
      { label: "工单响应", value: 81, group: "留存因子" },
      { label: "合同金额", value: 60, group: "留存因子" },
      { label: "竞品接触", value: 36, group: "留存因子" },
    ],
    sections: [
      {
        heading: "一、风险识别",
        body: "客户流失风险主要由低使用频率、续约意向下降、服务满意度波动和竞品接触增加共同触发。模型应优先识别高金额且续约窗口临近的客户。",
      },
      {
        heading: "二、运营建议",
        bullets: [
          "对高风险客户建立客户成功经理专项跟进清单。",
          "对中风险客户提供培训、功能回访和价值复盘材料。",
          "对低风险客户沉淀成功案例，辅助续约和增购。",
        ],
      },
    ],
    guesses: [
      { label: "列出高风险客户跟进策略", body: "高风险客户应在7天内完成一次管理层沟通、一次使用数据复盘和一份续约价值证明，必要时引入产品专家支持。", chart: "table" },
      { label: "哪些因子影响最大？", body: "续约意向和竞品接触对流失风险影响最大，其次是使用频率。建议把这三项纳入红黄灯预警。", chart: "radar" },
      { label: "生成客户留存看板", body: "看板建议包含客户分层、风险标签、最近登录、工单响应、续约日期和责任人，便于客户成功团队每日巡检。", chart: "pie" },
    ],
  },
  {
    id: "inventory",
    title: "库存周转与缺货预警",
    keywords: ["库存", "周转", "缺货", "预警", "供应链", "SKU"],
    source: "供应链数据仓库",
    creator: "高远",
    createdAt: "2025-07-15 14:10",
    chartTitle: "重点品类库存周转天数",
    defaultChart: "bar",
    chartData: [
      { label: "服务器", value: 48, group: "硬件" },
      { label: "存储", value: 64, group: "硬件" },
      { label: "网络设备", value: 38, group: "硬件" },
      { label: "显示器", value: 72, group: "外设" },
      { label: "笔记本", value: 29, group: "终端" },
      { label: "配件", value: 51, group: "外设" },
      { label: "耗材", value: 18, group: "耗材" },
    ],
    sections: [
      {
        heading: "一、库存现状",
        body: "显示器和存储类产品周转天数偏高，笔记本和耗材周转较快。若促销或项目交付集中到来，低周转天数品类需要提前补货。",
      },
      {
        heading: "二、预警建议",
        bullets: [
          "对高周转慢品类设置库存占用预警，避免资金沉淀。",
          "对低周转天数但需求波动大的品类设置缺货预警。",
          "联动销售预测和采购周期，动态调整安全库存。",
        ],
      },
    ],
    guesses: [
      { label: "哪些品类可能缺货？", body: "笔记本和耗材周转较快，如果近两周需求继续上升，需要提前启动补货。网络设备也应结合项目交付清单进一步确认。", chart: "area" },
      { label: "输出SKU补货优先级", body: "补货优先级建议按需求增长率、当前库存、采购提前期和项目锁定量综合排序。", chart: "table" },
      { label: "查看库存结构占比", body: "库存结构可按硬件、终端、外设和耗材四类查看，占比高且周转慢的品类需要重点消化。", chart: "pie" },
    ],
  },
  {
    id: "marketing-funnel",
    title: "营销漏斗转化分析",
    keywords: ["营销", "漏斗", "转化", "线索", "投放", "渠道"],
    source: "营销自动化平台",
    creator: "周宁",
    createdAt: "2025-07-18 09:26",
    chartTitle: "营销漏斗阶段转化率",
    defaultChart: "area",
    chartData: [
      { label: "曝光", value: 100, group: "漏斗" },
      { label: "点击", value: 64, group: "漏斗" },
      { label: "留资", value: 42, group: "漏斗" },
      { label: "MQL", value: 31, group: "漏斗" },
      { label: "SQL", value: 20, group: "漏斗" },
      { label: "商机", value: 12, group: "漏斗" },
      { label: "赢单", value: 6, group: "漏斗" },
    ],
    sections: [
      {
        heading: "一、漏斗表现",
        body: "点击到留资阶段转化下降最明显，说明落地页承接、表单字段和内容匹配度可能存在优化空间。SQL到商机阶段也需要销售跟进质量配合。",
      },
      {
        heading: "二、优化方向",
        bullets: [
          "拆分不同渠道的线索成本和转化质量，避免只看获客量。",
          "对落地页首屏信息、表单字段数量和CTA进行A/B测试。",
          "将高意向线索快速同步给销售，缩短首次响应时间。",
        ],
      },
    ],
    guesses: [
      { label: "哪个阶段掉量最明显？", body: "点击到留资阶段掉量最明显，建议优先优化落地页信息密度、表单字段和行动按钮位置。", chart: "bar" },
      { label: "按渠道看转化质量", body: "建议对搜索、信息流、活动、私域和合作渠道分别查看留资率、SQL率和赢单率。", chart: "table" },
      { label: "生成投放优化建议", body: "应将预算从低质量高点击渠道迁移到高SQL率渠道，同时保留少量预算做新素材测试。", chart: "radar" },
    ],
  },
  {
    id: "service-sla",
    title: "客服工单SLA趋势",
    keywords: ["客服", "工单", "SLA", "响应", "满意度", "服务"],
    source: "客服工单系统",
    creator: "韩璐",
    createdAt: "2025-07-19 18:44",
    chartTitle: "工单SLA达成率月度趋势",
    defaultChart: "line",
    chartData: [
      { label: "1月", value: 91, group: "SLA" },
      { label: "2月", value: 88, group: "SLA" },
      { label: "3月", value: 92, group: "SLA" },
      { label: "4月", value: 86, group: "SLA" },
      { label: "5月", value: 89, group: "SLA" },
      { label: "6月", value: 93, group: "SLA" },
      { label: "7月", value: 95, group: "SLA" },
      { label: "8月", value: 90, group: "SLA" },
    ],
    sections: [
      {
        heading: "一、服务表现",
        body: "整体SLA达成率保持在较高水平，但4月和2月出现低点，需要结合节假日、人员排班和产品故障工单量进行复盘。",
      },
      {
        heading: "二、改善建议",
        bullets: [
          "对高频问题建立知识库模板，减少重复处理时长。",
          "高峰期启用自动分流与优先级队列，保障关键客户响应。",
          "将满意度和SLA一起看，避免只追求速度而牺牲质量。",
        ],
      },
    ],
    guesses: [
      { label: "哪些月份SLA低于目标？", body: "2月、4月和5月低于90%或接近警戒线，需要重点复盘人员排班、故障峰值和知识库命中率。", chart: "line" },
      { label: "按问题类型拆分", body: "建议拆分为账号权限、系统故障、业务咨询、数据异常和实施支持五类，分别查看响应时长。", chart: "table" },
      { label: "生成服务改善清单", body: "改善清单包括完善知识库、优化分流规则、设置高峰排班、对重复工单做产品修复闭环。", chart: "radar" },
    ],
  },
  {
    id: "budget-cost",
    title: "预算成本偏差分析",
    keywords: ["预算", "成本", "偏差", "费用", "经营", "控制"],
    source: "经营分析系统",
    creator: "何青",
    createdAt: "2025-07-21 08:55",
    chartTitle: "部门预算使用率",
    defaultChart: "radar",
    chartData: [
      { label: "研发", value: 96, group: "部门" },
      { label: "销售", value: 88, group: "部门" },
      { label: "市场", value: 112, group: "部门" },
      { label: "交付", value: 81, group: "部门" },
      { label: "行政", value: 73, group: "部门" },
      { label: "客服", value: 79, group: "部门" },
    ],
    sections: [
      {
        heading: "一、偏差判断",
        body: "市场部门预算使用率已超过100%，研发接近上限，需要进一步拆分费用明细。交付、行政和客服仍有预算空间，可结合下季度计划动态调整。",
      },
      {
        heading: "二、控制建议",
        bullets: [
          "对超过预算阈值的部门启用费用审批加签。",
          "对低使用率部门确认是否存在计划延期或预算冗余。",
          "建立月度预算偏差复盘机制，及时调整经营动作。",
        ],
      },
    ],
    guesses: [
      { label: "哪些部门超预算？", body: "市场部门已超预算，研发接近上限。建议重点核查市场投放、活动费用和研发外包成本。", chart: "bar" },
      { label: "输出费用明细表", body: "费用明细表建议包含部门、预算、实际、偏差率、主要原因、责任人和纠偏措施。", chart: "table" },
      { label: "预测下季度成本压力", body: "若市场投放延续当前节奏，下季度预算压力会继续上升；研发成本则取决于外包和云资源使用峰值。", chart: "area" },
    ],
  },
];

const answers = Array.isArray(window.aiDemoAnswers) && window.aiDemoAnswers.length ? window.aiDemoAnswers : defaultAnswers;
const demoFixedChartType = typeof window.aiDemoFixedChartType === "string" ? window.aiDemoFixedChartType : "";
const demoStaticChartTypes = Array.isArray(window.aiDemoStaticChartTypes) ? window.aiDemoStaticChartTypes.filter(Boolean) : [];
const demoShowMetricCards = window.aiDemoShowMetricCards !== false;
const demoQuestionTitle = typeof window.aiDemoQuestionTitle === "string" && window.aiDemoQuestionTitle.trim()
  ? window.aiDemoQuestionTitle.trim()
  : "猜你想问";
const demoStaticGuessCharts = window.aiDemoStaticGuessCharts === true;
const demoAnswerMetaPlacement = window.aiDemoAnswerMetaPlacement === "bottom" ? "bottom" : "top";
const demoCompactActions = window.aiDemoCompactActions === true;

const chartTypes = [
  { type: "line", label: "线图", icon: "M4 17l5-6 4 3 7-9" },
  { type: "bar", label: "柱状图", icon: "M6 19V9M12 19V5M18 19v-8" },
  { type: "area", label: "面积图", icon: "M4 17l5-6 4 3 7-9V19H4Z" },
  { type: "pie", label: "饼图", icon: "M12 3v9h9M20.5 12A8.5 8.5 0 1 1 12 3" },
  { type: "radar", label: "雷达图", icon: "M12 3l8 5v8l-8 5-8-5V8l8-5Z" },
  { type: "table", label: "表格", icon: "M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" },
];

const main = document.querySelector("#main");
const chatView = document.querySelector("#chatView");
const workspace = document.querySelector("#workspace");
const historyList = document.querySelector("#historyList");
const searchPanel = document.querySelector("#searchPanel");
const searchResults = document.querySelector("#searchResults");
const form = document.querySelector("#composerForm");
const input = document.querySelector("#questionInput");
const sendButton = document.querySelector("#sendButton");
const newChat = document.querySelector("#newChat");

let currentAnswer = null;
let turnSeed = 1;
let selectedHistoryId = "";
const conversationTurns = [];
const historyStorageKey = window.aiDemoStorageKey || "aiDataConversationHistory";
const historyLimit = 20;
const builtInHistory = [...historyList.querySelectorAll("[data-query]")].map((item, index) => ({
  id: `built-in-${index}`,
  query: item.dataset.query,
  title: item.textContent.trim(),
  answerId: item.dataset.historyAnswerId || "",
  builtIn: true,
}));
let userHistory = loadUserHistory();

function normalizeStaticChartType(type) {
  if (type === "bar" || type === "pie" || type === "table") return type;
  if (type === "radar") return "pie";
  if (type === "line" || type === "area") return "bar";
  return type ? "bar" : "";
}

function getStaticChartTypes(answer, override = null) {
  if (demoStaticGuessCharts && override) {
    const overrideCharts = Array.isArray(override.displayCharts) ? override.displayCharts : [override.chart];
    const normalizedCharts = overrideCharts.map((type) => normalizeStaticChartType(type)).filter(Boolean);
    if (normalizedCharts.length) return normalizedCharts;
  }

  if (Array.isArray(answer?.displayCharts) && answer.displayCharts.length) {
    return answer.displayCharts.filter(Boolean);
  }

  return demoStaticChartTypes;
}

function sectionNumber(index) {
  const numbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  return numbers[index - 1] || String(index);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadUserHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(historyStorageKey) || "[]");
    return Array.isArray(parsed)
      ? parsed
          .filter((item) => item && typeof item.query === "string" && item.query.trim())
          .map((item, index) => ({
            id: item.id || `saved-${Date.now()}-${index}`,
            query: item.query.trim(),
            title: (item.title || item.query).trim(),
            answerId: item.answerId || "",
            createdAt: item.createdAt || "",
          }))
          .slice(0, historyLimit)
      : [];
  } catch {
    return [];
  }
}

function saveUserHistory() {
  try {
    localStorage.setItem(historyStorageKey, JSON.stringify(userHistory));
  } catch {
    // Local storage can be unavailable in private or restricted browser modes.
  }
}

function historyIcon() {
  if (typeof window.aiDemoHistoryIcon === "string" && window.aiDemoHistoryIcon.trim()) {
    return window.aiDemoHistoryIcon;
  }

  return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="1.8" /><path d="M7 15l3.2-3.1 2.4 2 4.3-5M4 20h16" /></svg>`;
}

function renderHistoryList() {
  const records = [...userHistory, ...builtInHistory];
  historyList.innerHTML = records
    .map((record) => `
      <a href="#" class="history-item ${record.builtIn ? "" : "history-item-new"} ${selectedHistoryId === record.id ? "active" : ""}" data-history-id="${escapeHtml(record.id)}" data-query="${escapeHtml(record.query)}" data-history-answer-id="${escapeHtml(record.answerId || "")}" title="${escapeHtml(record.query)}">
        ${historyIcon()}
        <span class="history-title">${escapeHtml(record.title)}</span>
      </a>
    `)
    .join("");
}

function addHistoryRecord(query, answer) {
  const text = query.trim();
  if (!text) return;

  const existingIndex = userHistory.findIndex((item) => item.query === text);
  if (existingIndex >= 0) userHistory.splice(existingIndex, 1);

  const record = {
    id: `user-${Date.now()}`,
    query: text,
    title: text,
    answerId: answer?.id || "",
    createdAt: new Date().toISOString(),
  };
  userHistory.unshift(record);
  userHistory = userHistory.slice(0, historyLimit);
  selectedHistoryId = record.id;
  saveUserHistory();
  renderHistoryList();
}

function scoreAnswer(answer, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return 0;

  const text = [answer.title, ...answer.keywords, answer.source, answer.chartTitle].join(" ").toLowerCase();
  let score = text.includes(normalized) ? 12 : 0;

  answer.keywords.forEach((keyword) => {
    const word = keyword.toLowerCase();
    if (normalized.includes(word) || word.includes(normalized)) score += 4;
  });

  normalized.split(/\s+/).forEach((part) => {
    if (part && text.includes(part)) score += 1;
  });

  return score;
}

function getMatches(query) {
  return answers
    .map((answer) => ({ answer, score: scoreAnswer(answer, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.answer);
}

function renderSearch(query) {
  const value = query.trim();
  if (!value) {
    searchPanel.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  const matches = getMatches(value);
  const visibleMatches = matches.length ? matches.slice(0, 6) : answers.slice(0, 6);
  searchPanel.hidden = false;
  searchResults.innerHTML = visibleMatches
    .map((answer) => `
      <button type="button" class="search-option" data-answer-id="${answer.id}">
        <span>${escapeHtml(answer.title)}</span>
        <small>${escapeHtml(answer.keywords.slice(0, 4).join(" / "))}</small>
      </button>
    `)
    .join("");
}

function renderAnswer(answer, questionText = answer.title, override = null, options = {}) {
  if (options.replaceConversation) {
    conversationTurns.length = 0;
    turnSeed = 1;
  }

  currentAnswer = answer;
  const activeChart = getStaticChartTypes(answer, override)[0] || demoFixedChartType || override?.chart || answer.defaultChart || "bar";
  const isFirstTurn = conversationTurns.length === 0;
  conversationTurns.push({
    id: `turn-${turnSeed++}`,
    answer,
    questionText,
    override,
    chartType: activeChart,
  });

  main.classList.add("has-answer");
  workspace.classList.add("is-answering");
  searchPanel.hidden = true;
  if (options.addToHistory !== false && isFirstTurn) addHistoryRecord(questionText, answer);
  if (options.selectedHistoryId !== undefined) {
    selectedHistoryId = options.selectedHistoryId;
    renderHistoryList();
  }
  renderConversation();

  input.value = "";
  updateSendState();
  requestAnimationFrame(() => main.scrollTo({ top: main.scrollHeight, behavior: "smooth" }));
}

function renderConversation() {
  chatView.innerHTML = conversationTurns.map((turn) => renderTurn(turn)).join("");
}

function renderTurn(turn) {
  const { answer, questionText, override, chartType } = turn;
  const staticChartTypes = getStaticChartTypes(answer, override);
  const metricsMarkup = demoShowMetricCards ? renderMetricCards(answer.chartData) : "";
  const sectionCount = override ? 2 : Array.isArray(answer.sections) ? answer.sections.length : 0;
  const chartHeading = `${sectionNumber(sectionCount + 1)}、${escapeHtml(answer.chartTitle)}`;
  const topMetaMarkup = demoAnswerMetaPlacement === "top" ? renderAnswerMeta(answer) : "";
  const bottomMetaMarkup = demoAnswerMetaPlacement === "bottom" ? renderAnswerRecord(answer) : "";
  const chartMarkup = staticChartTypes.length
    ? `
        <section class="chart-card chart-card-static" data-chart-card>
          ${staticChartTypes.map((type) => `
            <div class="static-chart-block static-chart-${escapeHtml(type)}">
              <div class="chart-body" data-chart-body>${renderChart(type, answer.chartData)}</div>
            </div>
          `).join("")}
        </section>
      `
    : demoFixedChartType
    ? `
        <section class="chart-card chart-card-single" data-chart-card>
          <div class="chart-body" data-chart-body>${renderChart(chartType, answer.chartData)}</div>
        </section>
      `
    : `
        <section class="chart-card" data-chart-card>
          <header class="chart-toolbar">
            <div class="chart-tabs">
              ${chartTypes.map((item) => chartButton(item, item.type === chartType)).join("")}
            </div>
            <button type="button" class="chart-expand" title="全屏查看" aria-label="全屏查看">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" />
              </svg>
            </button>
          </header>
          <div class="chart-body" data-chart-body>${renderChart(chartType, answer.chartData)}</div>
        </section>
      `;

  return `
    <article class="answer-page" data-turn-id="${turn.id}">
      <div class="query-row">
        <div class="user-query">${escapeHtml(questionText)}</div>
      </div>
      <section class="answer-content">
        <h2>${escapeHtml(override?.title || answer.title)}</h2>
        ${topMetaMarkup}
        <div class="answer-divider"></div>
        ${renderSections(answer, override)}
        ${metricsMarkup}
        <h3>${chartHeading}</h3>
        ${chartMarkup}
        ${bottomMetaMarkup}
        <section class="guess-panel" aria-label="${escapeHtml(demoQuestionTitle)}">
          <header>${escapeHtml(demoQuestionTitle)}</header>
          <div class="guess-list">
            ${answer.guesses.map((item, index) => `
              <button type="button" class="guess-item" data-guess-index="${index}">
                ${escapeHtml(item.label)}
              </button>
            `).join("")}
          </div>
        </section>
        ${renderResponseActions()}
      </section>
    </article>
  `;
}

function renderAnswerMeta(answer) {
  return `
    <div class="meta-row">
      <span>数据来源：${escapeHtml(answer.source)}</span>
      <span>创建人：<strong>${escapeHtml(answer.creator)}</strong></span>
      <span>创建时间：${escapeHtml(answer.createdAt)}</span>
    </div>
  `;
}

function renderAnswerRecord(answer) {
  return `
    <div class="answer-record" aria-label="记录信息">
      <strong>记录信息</strong>
      <span>来源：${escapeHtml(answer.source)}</span>
      <span>分析人：${escapeHtml(answer.creator)}</span>
      <span>时间：${escapeHtml(answer.createdAt)}</span>
    </div>
  `;
}

function renderSections(answer, override) {
  if (override) {
    const staticChartTypes = getStaticChartTypes(answer, override);
    const displayTip = staticChartTypes.length
      ? "当前根据问题类型固定使用一种数据展示方式，便于快速查看重点。"
      : demoFixedChartType
      ? "当前仅保留一种数据展示方式，便于快速核对明细。"
      : "可继续切换柱状图、面积图、饼图、雷达图、线图或表格查看不同展示方式。";
    return `
      <h3>一、分析结论</h3>
      <p>${escapeHtml(override.body)}</p>
      <h3>二、展示建议</h3>
      <ul>
        <li>${escapeHtml(displayTip)}</li>
        <li>若接入真实数据源，可将当前样例字段替换为接口返回的维度和指标。</li>
      </ul>
    `;
  }

  return answer.sections
    .map((section) => {
      const content = section.bullets
        ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(section.body)}</p>`;
      return `<h3>${escapeHtml(section.heading)}</h3>${content}`;
    })
    .join("");
}

function renderMetricCards(data) {
  const values = data.map((item) => item.value);
  const total = values.reduce((sum, value) => sum + value, 0);
  const avg = total / values.length;
  const maxItem = data.reduce((best, item) => (item.value > best.value ? item : best), data[0]);
  const minItem = data.reduce((best, item) => (item.value < best.value ? item : best), data[0]);

  return `
    <div class="metric-grid">
      <div class="metric-card"><span>样本数</span><strong>${data.length}</strong><em>维度/月份</em></div>
      <div class="metric-card"><span>平均值</span><strong>${avg.toFixed(1)}</strong><em>整体水平</em></div>
      <div class="metric-card"><span>最高值</span><strong>${maxItem.value}</strong><em>${escapeHtml(maxItem.label)}</em></div>
      <div class="metric-card"><span>最低值</span><strong>${minItem.value}</strong><em>${escapeHtml(minItem.label)}</em></div>
    </div>
  `;
}

function chartButton(item, active) {
  return `
    <button type="button" class="chart-tab ${active ? "active" : ""}" data-chart-type="${item.type}" title="${item.label}" aria-label="${item.label}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${item.icon}" /></svg>
    </button>
  `;
}

function renderResponseActions() {
  if (demoCompactActions) {
    return `
      <div class="response-actions response-actions-compact" aria-label="回答操作">
        ${actionIcon("M8 8V5.5A1.5 1.5 0 0 1 9.5 4h8A1.5 1.5 0 0 1 19 5.5v8A1.5 1.5 0 0 1 17.5 15H15M5.5 9h8A1.5 1.5 0 0 1 15 10.5v8A1.5 1.5 0 0 1 13.5 20h-8A1.5 1.5 0 0 1 4 18.5v-8A1.5 1.5 0 0 1 5.5 9Z", "复制")}
        ${actionIcon("M12 4v10M8 10l4 4 4-4M5 19h14", "下载")}
        ${actionIcon("M20 7v5h-5M4 17v-5h5M18 12a6 6 0 0 0-10.4-4M6 12a6 6 0 0 0 10.4 4", "刷新")}
      </div>
    `;
  }

  return `
    <div class="response-actions" aria-label="回答操作">
      ${actionIcon("M5 11v4h3l5 4V7l-5 4H5ZM17 9a4 4 0 0 1 0 6")}
      ${actionIcon("M8 8V5.5A1.5 1.5 0 0 1 9.5 4h8A1.5 1.5 0 0 1 19 5.5v8A1.5 1.5 0 0 1 17.5 15H15M5 9h8a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 13 20H5.5A1.5 1.5 0 0 1 4 18.5v-8A1.5 1.5 0 0 1 5.5 9Z")}
      ${actionIcon("M12 4v12M7 11l5 5 5-5M5 20h14")}
      ${actionIcon("M4 10a7 7 0 0 1 11.7-4.8L18 7.5M20 14a7 7 0 0 1-11.7 4.8L6 16.5")}
      ${actionIcon("M7 12 4 15l3 3M4 15h10a5 5 0 0 0 0-10h-1")}
      <span class="action-separator"></span>
      ${actionIcon("M7 11v10H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2Zm0 0 4-8h1.5A2.5 2.5 0 0 1 15 5.5V9h3.4a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.2 20H7")}
      ${actionIcon("M17 13V3h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2Zm0 0-4 8h-1.5A2.5 2.5 0 0 1 9 18.5V15H5.6a2 2 0 0 1-2-2.3l1.2-7A2 2 0 0 1 6.8 4H17")}
      <button type="button" class="share-timed">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10.4 10.3 13.6 13.7M14.2 8.4 10 14" />
        </svg>
        定时分享
      </button>
    </div>
  `;
}

function actionIcon(path, label = "") {
  const labelAttrs = label ? ` title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}"` : "";
  return `
    <button type="button" class="response-action"${labelAttrs}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" /></svg>
    </button>
  `;
}

function renderChart(type, data) {
  if (type === "area") return renderAreaChart(data);
  if (type === "pie") return renderPieChart(data);
  if (type === "radar") return renderRadarChart(data);
  if (type === "line") return renderLineChart(data);
  if (type === "table") return renderTable(data);
  return renderBarChart(data);
}

function getMax(data) {
  const rawMax = Math.max(...data.map((item) => item.value), 100);
  return Math.ceil(rawMax / 10) * 10;
}

function renderYAxis(max) {
  return [max, max * 0.75, max * 0.5, max * 0.25, 0]
    .map((value) => `<span>${Math.round(value)}</span>`)
    .join("");
}

function renderBarChart(data) {
  const max = getMax(data);
  return `
    <div class="bar-chart">
      <div class="y-axis">${renderYAxis(max)}</div>
      <div class="bar-plot">
        ${[0, 1, 2, 3, 4].map(() => `<i></i>`).join("")}
        <div class="bars" style="--items:${data.length}">
          ${data.map((item, index) => `
            <div class="bar-item">
              <div class="bar ${index % 2 ? "blue" : "teal"}" style="height:${Math.max(8, (item.value / max) * 100)}%"></div>
              <span>${escapeHtml(item.label)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function makePoints(data, width = 704, top = 28, bottom = 210) {
  const max = getMax(data);
  return data.map((item, index) => {
    const x = 38 + index * (width / Math.max(1, data.length - 1));
    const y = bottom - (item.value / max) * (bottom - top);
    return { x, y, item };
  });
}

function renderLineChart(data) {
  const points = makePoints(data);
  const path = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  return `
    <div class="line-chart">
      <svg viewBox="0 0 780 250" aria-label="线图">
        <g class="grid"><path d="M38 32H748M38 76H748M38 120H748M38 164H748M38 210H748" /></g>
        <path class="line-path" d="${path}" />
        ${points.map((point) => `<circle class="line-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4"><title>${escapeHtml(point.item.label)}：${point.item.value}</title></circle>`).join("")}
        ${points.map((point) => `<text x="${point.x.toFixed(1)}" y="238" text-anchor="middle">${escapeHtml(point.item.label)}</text>`).join("")}
      </svg>
    </div>
  `;
}

function renderAreaChart(data) {
  const points = makePoints(data);
  const line = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const area = `${line} L${points.at(-1).x.toFixed(1)},210 L${points[0].x.toFixed(1)},210 Z`;
  return `
    <div class="line-chart area-chart">
      <svg viewBox="0 0 780 250" aria-label="面积图">
        <g class="grid"><path d="M38 32H748M38 76H748M38 120H748M38 164H748M38 210H748" /></g>
        <path class="area-fill" d="${area}" />
        <path class="line-path" d="${line}" />
        ${points.map((point) => `<circle class="line-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4"><title>${escapeHtml(point.item.label)}：${point.item.value}</title></circle>`).join("")}
        ${points.map((point) => `<text x="${point.x.toFixed(1)}" y="238" text-anchor="middle">${escapeHtml(point.item.label)}</text>`).join("")}
      </svg>
    </div>
  `;
}

function renderPieChart(data) {
  const colors = ["#0877ff", "#18c6c8", "#6d7dfc", "#ffb020", "#7a5cff", "#00a887", "#ff6b6b", "#3ba776"];
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let start = 0;
  const gradient = data.map((item, index) => {
    const size = (item.value / total) * 360;
    const segment = `${colors[index % colors.length]} ${start}deg ${start + size}deg`;
    start += size;
    return segment;
  }).join(", ");

  return `
    <div class="pie-chart">
      <div class="pie" style="background: conic-gradient(${gradient})"></div>
      <div class="pie-legend">
        ${data.map((item, index) => `
          <div>
            <i style="background:${colors[index % colors.length]}"></i>
            <span>${escapeHtml(item.label)}</span>
            <strong>${Math.round((item.value / total) * 100)}%</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderRadarChart(data) {
  const values = data.slice(0, 8);
  const max = getMax(values);
  const center = 125;
  const radius = 88;
  const polygon = values.map((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / values.length;
    const distance = radius * (item.value / max);
    return `${(center + Math.cos(angle) * distance).toFixed(1)},${(center + Math.sin(angle) * distance).toFixed(1)}`;
  }).join(" ");
  const axes = values.map((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / values.length;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    const tx = center + Math.cos(angle) * (radius + 22);
    const ty = center + Math.sin(angle) * (radius + 22);
    return `<line x1="${center}" y1="${center}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" /><text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle">${escapeHtml(item.label)}</text>`;
  }).join("");

  return `
    <div class="radar-chart">
      <svg viewBox="0 0 250 250" aria-label="雷达图">
        <g class="radar-grid">
          <circle cx="125" cy="125" r="88" />
          <circle cx="125" cy="125" r="58" />
          <circle cx="125" cy="125" r="29" />
          ${axes}
        </g>
        <polygon class="radar-area" points="${polygon}" />
      </svg>
      <div class="radar-legend">
        ${values.map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>${item.value}</strong></div>`).join("")}
      </div>
    </div>
  `;
}

function renderTable(data) {
  return `
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th>维度</th>
            <th>类别</th>
            <th>数值</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((item) => `
            <tr>
              <td>${escapeHtml(item.label)}</td>
              <td>${escapeHtml(item.group)}</td>
              <td>${item.value}</td>
              <td>${item.value >= 90 ? "高位关注" : item.value >= 70 ? "持续跟进" : "正常观察"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function updateSendState() {
  const hasText = input.value.trim().length > 0;
  sendButton.classList.toggle("is-muted", main.classList.contains("has-answer") && !hasText);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    updateSendState();
    return;
  }

  const matches = getMatches(query);
  const answer = matches[0] || currentAnswer || answers[0];
  renderAnswer(answer, query);
});

input.addEventListener("input", () => {
  renderSearch(input.value);
  updateSendState();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer-id]");
  if (!button) return;
  const answer = answers.find((item) => item.id === button.dataset.answerId);
  if (answer) renderAnswer(answer, answer.title);
});

chatView.addEventListener("click", (event) => {
  const chartButtonElement = event.target.closest("[data-chart-type]");
  const turnElement = event.target.closest("[data-turn-id]");
  const turn = turnElement ? conversationTurns.find((item) => item.id === turnElement.dataset.turnId) : null;

  if (chartButtonElement && turn && !demoFixedChartType && !getStaticChartTypes(turn.answer, turn.override).length) {
    const type = chartButtonElement.dataset.chartType;
    const chartCard = chartButtonElement.closest("[data-chart-card]");
    turn.chartType = type;
    currentAnswer = turn.answer;
    chartCard.querySelectorAll(".chart-tab").forEach((button) => {
      button.classList.toggle("active", button === chartButtonElement);
    });
    chartCard.querySelector("[data-chart-body]").innerHTML = renderChart(type, turn.answer.chartData);
    return;
  }

  const guessButton = event.target.closest("[data-guess-index]");
  if (guessButton && turn) {
    const guess = turn.answer.guesses[Number(guessButton.dataset.guessIndex)];
    if (guess) renderAnswer(turn.answer, guess.label, guess);
  }
});

historyList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-query]");
  if (!item) return;
  event.preventDefault();
  const query = item.dataset.query;
  const savedAnswer = answers.find((answer) => answer.id === item.dataset.historyAnswerId);
  const answer = savedAnswer || getMatches(query)[0] || answers[0];
  renderAnswer(answer, query, null, {
    addToHistory: false,
    replaceConversation: true,
    selectedHistoryId: item.dataset.historyId,
  });
});

newChat.addEventListener("click", () => {
  main.classList.remove("has-answer");
  workspace.classList.remove("is-answering");
  conversationTurns.length = 0;
  chatView.innerHTML = "";
  input.value = "";
  searchPanel.hidden = true;
  currentAnswer = null;
  turnSeed = 1;
  selectedHistoryId = "";
  renderHistoryList();
  updateSendState();
  input.focus();
});

renderHistoryList();
updateSendState();
