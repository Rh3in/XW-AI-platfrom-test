const answers = [
  {
    id: "pipeline-gap",
    title: "统下一年技术部门编制缺口预测 (基于项目Pipeline)",
    keywords: ["技术部门", "编制", "缺口", "pipeline", "人员", "下一年", "项目"],
    source: "XXXXXXXXXX",
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
        body: "在基于项目 Pipeline 预测下一年技术部门编制缺口时，需要综合考量多方面因素。首先要明确各项目的计划与规模，分析其所需技术岗位及工作量。例如，若明年有多个大型软件开发项目，预计开发周期长、功能复杂，那么软件开发工程师岗位大概率存在编制缺口。",
      },
      {
        heading: "二、当前存在的主要问题",
        bullets: [
          "从过往项目经验看，可依据项目类型、规模与实际投入人力的关联，建立预测模型。",
          "如类似规模的项目，平均每项功能模块需配备若干开发人员、测试人员及实施支持人员。",
          "结合明年项目 Pipeline 中各项目的模块数量，就能初步估算出人员需求。",
        ],
      },
      {
        heading: "三、推进建设的具体措施",
        body: "同时，关注技术发展趋势对岗位需求的影响。若新技术在项目中应用增多，如人工智能、大数据处理等，相关专业技术人才的编制缺口可能加大。并且要考虑人员流动情况，根据过往离职率预测明年可能流失的人数，提前规划招聘与人才培养工作。",
      },
    ],
    guesses: [
      { label: "哪些月份技术编制缺口最高？", target: "pipeline-peak" },
      { label: "按岗位拆分下一年人员需求", target: "role-demand" },
      { label: "给出招聘节奏建议", target: "hiring-plan" },
    ],
  },
  {
    id: "finance-2024",
    title: "统计2024财务收入报表",
    keywords: ["2024", "财务", "收入", "报表", "模板", "真实性", "常见问题"],
    source: "财务共享中心",
    creator: "王佳",
    createdAt: "2025-01-16 09:40",
    chartTitle: "2024财务收入月度统计",
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
        body: "2024 年收入呈稳步上升趋势，三季度后增长更明显。若用于经营复盘，建议同时关注回款周期、合同确认口径和一次性收入占比，避免只用收入总额判断业务质量。",
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
      { label: "提供一份2024财务收入报表模板", target: "finance-template" },
      { label: "2024财务收入真实性受哪些因素影响？", target: "finance-risk" },
      { label: "如何处理收入报表中的异常月份？", target: "finance-anomaly" },
    ],
  },
  {
    id: "monitoring",
    title: "数据监测与优化策略",
    keywords: ["数据监测", "优化", "策略", "指标", "预警"],
    source: "运营数据平台",
    creator: "陈晨",
    createdAt: "2025-06-20 15:18",
    chartTitle: "核心指标健康度",
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
      { label: "哪些指标需要优先预警？", target: "monitoring-warning" },
      { label: "输出数据质量巡检表", target: "monitoring-table" },
      { label: "给出优化策略优先级", target: "monitoring-priority" },
    ],
  },
  {
    id: "workday",
    title: "工作日统计",
    keywords: ["工作日", "统计", "考勤", "日历"],
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
        body: "基于标准工作日历统计，全年工作日分布较均衡。三季度工作日略高，适合安排周期较长的交付类任务。",
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
      { label: "生成季度排期建议", target: "workday-plan" },
      { label: "按月份拆分工作日", target: "workday-month" },
      { label: "识别项目排期风险", target: "workday-risk" },
    ],
  },
];

const followupAnswers = {
  "pipeline-peak": {
    title: "哪些月份技术编制缺口最高？",
    body: "从预测值看，2月、9月和5月是缺口较高的月份，其中 2月达到 83，9月达到 68。建议将关键岗位招聘前置到上一季度，并为峰值月份保留外包或跨团队支援池。",
    chart: "bar",
  },
  "role-demand": {
    title: "按岗位拆分下一年人员需求",
    body: "岗位拆分建议优先关注研发工程师、测试工程师、数据工程师和实施支持。若项目 Pipeline 中 AI 与数据类项目占比提高，数据工程师和算法相关岗位应单独设置储备指标。",
    chart: "table",
  },
  "hiring-plan": {
    title: "给出招聘节奏建议",
    body: "建议按“提前一个季度建池、提前两个月定人、上线前一个月补齐”的节奏推进。2月缺口可在上一年12月完成候选人储备，9月缺口可在6月至7月启动集中招聘。",
    chart: "line",
  },
  "finance-template": {
    title: "提供一份2024财务收入报表模板",
    body: "模板建议包含月份、合同收入、已开票金额、已回款金额、递延收入、收入确认口径、异常说明和责任人。这样既能做统计，也能支持审计追溯。",
    chart: "table",
  },
  "finance-risk": {
    title: "2024财务收入真实性受哪些因素影响？",
    body: "主要受收入确认口径、跨期合同、系统同步延迟、重复开票、手工调整和回款匹配不一致影响。建议针对大额、跨期和异常增长月份做穿透校验。",
    chart: "pie",
  },
  "finance-anomaly": {
    title: "如何处理收入报表中的异常月份？",
    body: "先判断异常来自业务增长、一次性合同还是数据错误；再核对合同、发票与回款流水；最后沉淀异常原因和处理结果，作为后续预警规则。",
    chart: "line",
  },
  "monitoring-warning": {
    title: "哪些指标需要优先预警？",
    body: "优先预警会直接影响经营判断或交付节奏的指标，例如收入、回款、项目延期率、数据缺失率和关键系统同步时延。",
    chart: "pie",
  },
  "monitoring-table": {
    title: "输出数据质量巡检表",
    body: "巡检表应包含指标名称、数据源、更新频率、最近更新时间、缺失率、异常阈值、负责人和处理状态。",
    chart: "table",
  },
  "monitoring-priority": {
    title: "给出优化策略优先级",
    body: "优先级建议按影响面排序：先治理核心指标缺失，再治理同步延迟，随后优化异常归因，最后补齐可视化复盘视图。",
    chart: "bar",
  },
  "workday-plan": {
    title: "生成季度排期建议",
    body: "一、二季度适合启动与需求澄清，三季度工作日较多，可承接开发与集中交付，四季度应预留验收和复盘时间。",
    chart: "bar",
  },
  "workday-month": {
    title: "按月份拆分工作日",
    body: "可按月份输出工作日、节假日、调休日和请假高峰提醒，作为项目排期和人力测算的基础输入。",
    chart: "table",
  },
  "workday-risk": {
    title: "识别项目排期风险",
    body: "风险主要来自节假日前后效率波动、跨团队依赖、人力集中请假和验收窗口不足。建议关键节点至少预留 10% 的缓冲。",
    chart: "line",
  },
};

const chartTypes = [
  { type: "line", label: "线图", icon: "M4 17l5-6 4 3 7-9" },
  { type: "bar", label: "柱状图", icon: "M6 19V9M12 19V5M18 19v-8" },
  { type: "pie", label: "饼图", icon: "M12 3v9h9M20.5 12A8.5 8.5 0 1 1 12 3" },
  { type: "table", label: "表格", icon: "M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" },
];

const main = document.querySelector("#main");
const chatView = document.querySelector("#chatView");
const workspace = document.querySelector("#workspace");
const searchPanel = document.querySelector("#searchPanel");
const searchResults = document.querySelector("#searchResults");
const form = document.querySelector("#composerForm");
const input = document.querySelector("#questionInput");
const sendButton = document.querySelector("#sendButton");
const newChat = document.querySelector("#newChat");

let currentAnswer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scoreAnswer(answer, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return 0;
  }

  const text = [answer.title, ...answer.keywords].join(" ").toLowerCase();
  let score = text.includes(normalized) ? 12 : 0;
  answer.keywords.forEach((keyword) => {
    const word = keyword.toLowerCase();
    if (normalized.includes(word) || word.includes(normalized)) {
      score += 4;
    }
  });

  normalized.split(/\s+/).forEach((part) => {
    if (part && text.includes(part)) {
      score += 1;
    }
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
  const visibleMatches = matches.length ? matches : answers.slice(0, 3);
  searchPanel.hidden = false;
  searchResults.innerHTML = visibleMatches
    .map((answer) => {
      const keywordText = answer.keywords.slice(0, 3).join(" / ");
      return `
        <button type="button" class="search-option" data-answer-id="${answer.id}">
          <span>${escapeHtml(answer.title)}</span>
          <small>${escapeHtml(keywordText)}</small>
        </button>
      `;
    })
    .join("");
}

function renderAnswer(answer, questionText = answer.title, override = null) {
  currentAnswer = answer;
  const activeChart = override?.chart || answer.defaultChart || "bar";
  main.classList.add("has-answer");
  workspace.classList.add("is-answering");
  searchPanel.hidden = true;

  chatView.innerHTML = `
    <article class="answer-page">
      <div class="query-row">
        <div class="user-query">${escapeHtml(questionText)}</div>
      </div>

      <section class="answer-content">
        <h2>${escapeHtml(override?.title || answer.title)}</h2>
        <div class="meta-row">
          <span>数据来源：${escapeHtml(answer.source)}</span>
          <span>创建人：<strong>${escapeHtml(answer.creator)}</strong></span>
          <span>创建时间：${escapeHtml(answer.createdAt)}</span>
        </div>
        <div class="answer-divider"></div>
        ${renderSections(answer, override)}
        <h3>四、${escapeHtml(answer.chartTitle)}</h3>
        <section class="chart-card" data-chart-card>
          <header class="chart-toolbar">
            <div class="chart-tabs">
              ${chartTypes.map((item) => chartButton(item, item.type === activeChart)).join("")}
            </div>
            <button type="button" class="chart-expand" title="全屏查看" aria-label="全屏查看">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" />
              </svg>
            </button>
          </header>
          <div class="chart-body" data-chart-body>
            ${renderChart(activeChart, answer.chartData)}
          </div>
        </section>
        <section class="guess-panel" aria-label="猜你想问">
          <header>猜你想问</header>
          <div class="guess-list">
            ${answer.guesses.map((item) => `
              <button type="button" class="guess-item" data-followup-id="${item.target}">
                ${escapeHtml(item.label)}
              </button>
            `).join("")}
          </div>
        </section>
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
      </section>
    </article>
  `;

  input.value = "";
  updateSendState();
  requestAnimationFrame(() => {
    main.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderSections(answer, override) {
  if (override) {
    return `
      <h3>一、分析结论</h3>
      <p>${escapeHtml(override.body)}</p>
      <h3>二、参考依据</h3>
      <ul>
        <li>已结合当前主题下的历史数据、关键词和趋势视图进行匹配。</li>
        <li>可继续切换柱状图、饼状图、线图或表格查看不同展示方式。</li>
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

function chartButton(item, active) {
  return `
    <button type="button" class="chart-tab ${active ? "active" : ""}" data-chart-type="${item.type}" title="${item.label}" aria-label="${item.label}">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="${item.icon}" />
      </svg>
    </button>
  `;
}

function actionIcon(path) {
  return `
    <button type="button" class="response-action">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="${path}" />
      </svg>
    </button>
  `;
}

function renderChart(type, data) {
  if (type === "pie") {
    return renderPieChart(data);
  }
  if (type === "line") {
    return renderLineChart(data);
  }
  if (type === "table") {
    return renderTable(data);
  }
  return renderBarChart(data);
}

function renderBarChart(data) {
  const max = Math.max(100, ...data.map((item) => item.value));
  return `
    <div class="bar-chart">
      <div class="y-axis">
        <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
      </div>
      <div class="bar-plot">
        ${[0, 1, 2, 3, 4].map(() => `<i></i>`).join("")}
        <div class="bars">
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

function renderLineChart(data) {
  const max = Math.max(100, ...data.map((item) => item.value));
  const points = data.map((item, index) => {
    const x = 38 + index * (704 / Math.max(1, data.length - 1));
    const y = 210 - (item.value / max) * 178;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return `
    <div class="line-chart">
      <svg viewBox="0 0 780 250" aria-label="线图">
        <g class="grid">
          <path d="M38 32H748M38 76H748M38 120H748M38 164H748M38 210H748" />
        </g>
        <path class="line-path" d="M${points.replaceAll(" ", " L")}" />
        ${data.map((item, index) => {
          const x = 38 + index * (704 / Math.max(1, data.length - 1));
          const y = 210 - (item.value / max) * 178;
          return `<circle class="line-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"><title>${escapeHtml(item.label)}：${item.value}</title></circle>`;
        }).join("")}
        ${data.map((item, index) => {
          const x = 38 + index * (704 / Math.max(1, data.length - 1));
          return `<text x="${x.toFixed(1)}" y="238" text-anchor="middle">${escapeHtml(item.label)}</text>`;
        }).join("")}
      </svg>
    </div>
  `;
}

function renderPieChart(data) {
  const colors = ["#0877ff", "#18c6c8", "#6d7dfc", "#ffb020", "#7a5cff", "#00a887"];
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
              <td>${item.value >= 60 ? "重点关注" : "正常跟进"}</td>
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
  const matches = getMatches(query);
  const answer = matches[0] || answers[0];
  renderAnswer(answer, query || answer.title);
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
  if (!button) {
    return;
  }
  const answer = answers.find((item) => item.id === button.dataset.answerId);
  if (answer) {
    renderAnswer(answer, answer.title);
  }
});

chatView.addEventListener("click", (event) => {
  const chartButtonElement = event.target.closest("[data-chart-type]");
  if (chartButtonElement && currentAnswer) {
    const type = chartButtonElement.dataset.chartType;
    const chartCard = chartButtonElement.closest("[data-chart-card]");
    chartCard.querySelectorAll(".chart-tab").forEach((button) => {
      button.classList.toggle("active", button === chartButtonElement);
    });
    chartCard.querySelector("[data-chart-body]").innerHTML = renderChart(type, currentAnswer.chartData);
    return;
  }

  const followupButton = event.target.closest("[data-followup-id]");
  if (followupButton && currentAnswer) {
    const followup = followupAnswers[followupButton.dataset.followupId];
    if (followup) {
      renderAnswer(currentAnswer, followup.title, followup);
    }
  }
});

document.querySelectorAll("[data-query]").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const query = item.dataset.query;
    const answer = getMatches(query)[0] || answers[0];
    renderAnswer(answer, query);
  });
});

newChat.addEventListener("click", () => {
  main.classList.remove("has-answer");
  workspace.classList.remove("is-answering");
  chatView.innerHTML = "";
  input.value = "";
  searchPanel.hidden = true;
  currentAnswer = null;
  updateSendState();
  input.focus();
});

updateSendState();
