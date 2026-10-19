
const roles = [
  {
    id: "weather-forecaster",
    name: "Weather Forecaster",
    icon: "☀",
    desc: "Interpret atmospheric conditions to prepare weather forecasts.",
    tags: ["Forecasting", "Weather Maps", "Analysis"],
    summary: "Turn atmospheric observations into useful and timely forecasts.",
    description: "Weather Forecasters analyse observations, numerical weather prediction models, and atmospheric patterns to prepare forecasts for the public and relevant agencies.",
    responsibilities: ["Analyse weather observations and model outputs.", "Prepare short-range and extended forecasts.", "Communicate changing weather conditions clearly."],
    skills: ["Meteorology", "Data interpretation", "Forecast models", "Communication"],
    path: ["Weather observation", "Forecast analysis", "Forecast preparation"]
  },
  {
    id: "doppler-radar-technician",
    name: "Doppler Radar Technician",
    icon: "◎",
    desc: "Maintain radar systems used to monitor precipitation and storms.",
    tags: ["Radar Systems", "Diagnostics", "Maintenance"],
    summary: "Support dependable radar observations and equipment performance.",
    description: "Doppler Radar Technicians support radar equipment, inspect system performance, and help ensure reliable observations for weather monitoring.",
    responsibilities: ["Monitor radar system status.", "Assist with equipment inspection and maintenance.", "Document faults and coordinate technical support."],
    skills: ["Electronics", "Radar principles", "Troubleshooting", "Documentation"],
    path: ["Radar fundamentals", "System diagnostics", "Maintenance practice"]
  },
  {
    id: "climate-data-analyst",
    name: "Climate Data Analyst",
    icon: "▥",
    desc: "Study climate records to identify trends and meaningful patterns.",
    tags: ["Data Analysis", "Statistics", "Visualisation"],
    summary: "Transform long-term climate data into evidence-based insights.",
    description: "Climate Data Analysts organise and examine climate datasets to identify patterns, trends, anomalies, and changes over time.",
    responsibilities: ["Clean and validate climate datasets.", "Analyse temperature and rainfall trends.", "Create reports and data visualisations."],
    skills: ["Statistics", "Spreadsheets", "Python basics", "Data visualisation"],
    path: ["Data preparation", "Statistical analysis", "Reporting insights"]
  },
  {
    id: "hydrologist",
    name: "Hydrologist",
    icon: "≈",
    desc: "Assess rainfall, river flows, and water-related conditions.",
    tags: ["Water Systems", "Rainfall", "Risk Analysis"],
    summary: "Connect rainfall and water observations to hydrological decisions.",
    description: "Hydrologists study the movement and distribution of water, including rainfall-runoff relationships, river behaviour, and flood-related conditions.",
    responsibilities: ["Interpret rainfall and streamflow data.", "Assess water availability and flood indicators.", "Prepare hydrological reports."],
    skills: ["Hydrology", "Data analysis", "GIS basics", "Risk assessment"],
    path: ["Water-cycle fundamentals", "Hydrological data", "Risk interpretation"]
  },
  {
    id: "meteorological-researcher",
    name: "Meteorological Researcher",
    icon: "⌘",
    desc: "Investigate atmospheric processes through scientific research.",
    tags: ["Research", "Modelling", "Scientific Methods"],
    summary: "Explore atmospheric processes and improve scientific understanding.",
    description: "Meteorological Researchers investigate atmospheric processes using observations, scientific literature, modelling, and reproducible analytical methods.",
    responsibilities: ["Review scientific studies.", "Design and analyse research experiments.", "Document findings and communicate results."],
    skills: ["Scientific reasoning", "Statistics", "Programming", "Technical writing"],
    path: ["Research foundations", "Data and models", "Research communication"]
  },
  {
    id: "cyclone-tracking",
    name: "Cyclone Tracking (RSMC)",
    icon: "◉",
    desc: "Monitor tropical cyclones and communicate track information.",
    tags: ["Cyclone Analysis", "Satellite Data", "Monitoring"],
    summary: "Support systematic tropical cyclone monitoring and reporting.",
    description: "Cyclone tracking teams assess satellite imagery, observations, and forecast guidance to monitor tropical cyclone development and movement. RSMC stands for Regional Specialized Meteorological Centre.",
    responsibilities: ["Monitor cyclone position and intensity estimates.", "Review satellite and model guidance.", "Support track bulletins and warning coordination."],
    skills: ["Tropical meteorology", "Satellite interpretation", "Forecast analysis", "Clear reporting"],
    path: ["Tropical systems", "Cyclone monitoring", "Track analysis"]
  },
  {
    id: "crisis-manager",
    name: "The Crisis Manager",
    icon: "◇",
    desc: "Coordinate response activities during weather-related emergencies.",
    tags: ["Coordination", "Preparedness", "Risk Communication"],
    summary: "Support organised decision-making during high-impact weather events.",
    description: "Crisis Managers coordinate information, operational priorities, and response communication during emergencies, working with relevant agencies.",
    responsibilities: ["Coordinate information across teams.", "Track response priorities and updates.", "Support timely communication with stakeholders."],
    skills: ["Leadership", "Decision-making", "Communication", "Planning"],
    path: ["Emergency preparedness", "Response coordination", "Review and improvement"]
  },
  {
    id: "boundary-spanner",
    name: "The Boundary Spanner",
    icon: "↔",
    desc: "Connect scientific teams with decision-makers and partner agencies.",
    tags: ["Collaboration", "Stakeholders", "Communication"],
    summary: "Bridge the gap between technical information and practical needs.",
    description: "Boundary Spanners help different organisations understand one another, translating scientific information into formats that support real-world decisions.",
    responsibilities: ["Coordinate across teams and institutions.", "Translate technical findings for different audiences.", "Gather partner feedback and requirements."],
    skills: ["Interpersonal communication", "Collaboration", "Synthesis", "Negotiation"],
    path: ["Stakeholder mapping", "Knowledge translation", "Partnership coordination"]
  },
  {
    id: "ma-specialist",
    name: "M&A Specialist",
    icon: "⌘",
    desc: "Support merger, acquisition, and organisational integration analysis.",
    tags: ["Strategy", "Due Diligence", "Integration"],
    summary: "Evaluate organisational fit, operational risks, and integration needs.",
    description: "This business-oriented role supports merger and acquisition analysis through due diligence, operational comparisons, risk identification, and integration planning. It is not a standard meteorological forecasting role.",
    responsibilities: ["Organise information for due diligence.", "Compare processes, costs, and operational risks.", "Support integration planning and reporting."],
    skills: ["Financial literacy", "Research", "Risk analysis", "Project management"],
    path: ["Business fundamentals", "Due diligence", "Integration planning"]
  },
  {
    id: "seasonal-planner",
    name: "The Seasonal Planner",
    icon: "◷",
    desc: "Use seasonal outlooks to support advance planning and preparedness.",
    tags: ["Seasonal Outlooks", "Planning", "Risk"],
    summary: "Turn seasonal climate information into forward-looking plans.",
    description: "Seasonal Planners use climate outlooks, historical records, and stakeholder requirements to support preparation for expected seasonal conditions.",
    responsibilities: ["Review seasonal climate outlooks.", "Identify possible operational impacts.", "Prepare plans and communicate uncertainties."],
    skills: ["Climate interpretation", "Planning", "Scenario analysis", "Communication"],
    path: ["Climate variability", "Seasonal outlooks", "Preparedness planning"]
  },
  {
    id: "quality-assurance",
    name: "The Quality Assurance",
    icon: "✓",
    desc: "Check data quality, procedures, and consistency of outputs.",
    tags: ["Quality Control", "Validation", "Auditing"],
    summary: "Help ensure that data and processes meet defined standards.",
    description: "Quality Assurance specialists examine workflows, records, and outputs to identify inconsistencies and support continuous quality improvement.",
    responsibilities: ["Check data and process consistency.", "Record defects and corrective actions.", "Review procedures against defined standards."],
    skills: ["Attention to detail", "Testing", "Documentation", "Root-cause analysis"],
    path: ["Quality principles", "Validation techniques", "Audit and improvement"]
  },
  {
    id: "lean-operator",
    name: "The Lean Operator",
    icon: "↗",
    desc: "Improve workflows by reducing waste and simplifying processes.",
    tags: ["Lean Methods", "Efficiency", "Process Improvement"],
    summary: "Make operational workflows more efficient and consistent.",
    description: "Lean Operators examine how work is performed, identify avoidable delays or waste, and support practical improvements to everyday operations.",
    responsibilities: ["Map existing workflows.", "Identify bottlenecks and unnecessary steps.", "Measure and review process improvements."],
    skills: ["Process mapping", "Problem-solving", "Measurement", "Teamwork"],
    path: ["Lean fundamentals", "Workflow analysis", "Continuous improvement"]
  }
];

const courses = [
  {
    id: "weather-observation",
    title: "Weather Observation Fundamentals",
    duration: "45 mins",
    icon: "☀",
    desc: "Learn the basics of weather observations, instruments, and atmospheric measurements."
  },
  {
    id: "forecasting",
    title: "Forecasting & Model Guidance",
    duration: "60 mins",
    icon: "◉",
    desc: "Explore weather prediction models, forecast interpretation, and uncertainty."
  },
  {
    id: "radar",
    title: "Doppler Radar Essentials",
    duration: "40 mins",
    icon: "◎",
    desc: "Understand radar observations, precipitation signatures, and system basics."
  },
  {
    id: "climate-data",
    title: "Climate Data & Quality",
    duration: "50 mins",
    icon: "▥",
    desc: "Discover data validation, climate summaries, and quality-control principles."
  },
  {
    id: "cyclone",
    title: "Tropical Cyclone Monitoring",
    duration: "55 mins",
    icon: "◉",
    desc: "Review cyclone monitoring, satellite observations, and track analysis."
  },
  {
    id: "risk-communication",
    title: "Risk Communication & Coordination",
    duration: "35 mins",
    icon: "◇",
    desc: "Practise communicating weather risks clearly and coordinating information."
  }
];

const questions = [
  {
    question: "Which instrument is commonly used to measure atmospheric pressure?",
    options: ["Barometer", "Anemometer", "Rain gauge", "Thermometer"],
    answer: 0,
    explanation: "A barometer measures atmospheric pressure."
  },
  {
    question: "What is the primary purpose of weather radar?",
    options: [
      "Measure soil nutrients",
      "Detect precipitation and observe its movement",
      "Measure ocean salinity directly",
      "Determine the age of rocks"
    ],
    answer: 1,
    explanation: "Weather radar helps detect precipitation and monitor its location and movement."
  },
  {
    question: "Why is quality control important for climate data?",
    options: [
      "It removes the need for observations",
      "It guarantees every forecast is correct",
      "It helps identify errors and inconsistencies",
      "It changes historical weather"
    ],
    answer: 2,
    explanation: "Quality control helps detect missing, unusual, or inconsistent values before analysis."
  }
];

const $ = (selector) => document.querySelector(selector);

function setupTheme() {
  const savedTheme = localStorage.getItem("cc-theme") || "dark";
  document.documentElement.dataset.theme = savedTheme;

  const button = $("#themeToggle");
  if (!button) return;

  function updateLabel() {
    button.textContent =
      document.documentElement.dataset.theme === "dark"
        ? "☼ Light mode"
        : "☾ Dark mode";
  }

  updateLabel();

  button.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cc-theme", next);
    updateLabel();
  });
}

function renderRoles() {
  const grid = $("#roleGrid");
  if (!grid) return;

  let selectedRole = localStorage.getItem("cc-selected-role") || "";

  function updateSelection() {
    const selected = roles.find(role => role.id === selectedRole);
    $("#selectionCount").textContent = selected ? "1 / 1 SELECTED" : "0 / 1 SELECTED";
    $("#selectionTitle").textContent = selected ? selected.name : "No role selected";
    $("#selectionHint").textContent = selected
      ? "Your role is selected. Continue to explore the full profile."
      : "Select a role card to continue.";
    $("#continueBtn").disabled = !selected;

    grid.querySelectorAll(".role-card").forEach(card => {
      const isSelected = card.dataset.id === selectedRole;
      card.classList.toggle("selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));

      const button = card.querySelector(".select-role");
      button.textContent = isSelected ? "✓ Unselect Role" : "Select Role";

      card.querySelector(".selected-mark").textContent =
        isSelected ? "✓ SELECTED" : "";
    });
  }

  grid.innerHTML = roles.map((role, index) => `
    <article class="role-card" data-id="${role.id}" style="animation-delay:${index * 35}ms">
      <div class="card-top">
        <div class="role-emblem">${role.icon}</div>
        <span class="selected-mark"></span>
      </div>
      <h3>${role.name}</h3>
      <p>${role.desc}</p>
      <div class="tag-row">
        ${role.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join("")}
      </div>
      <div class="card-action">
        <button type="button" class="btn btn-secondary select-role">
          Select Role
        </button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".role-card").forEach(card => {
    card.querySelector(".select-role").addEventListener("click", () => {
      const id = card.dataset.id;
      selectedRole = selectedRole === id ? "" : id;

      if (selectedRole) {
        localStorage.setItem("cc-selected-role", selectedRole);
      } else {
        localStorage.removeItem("cc-selected-role");
      }

      updateSelection();
    });
  });

  $("#continueBtn").addEventListener("click", () => {
    if (!selectedRole) return;
    window.location.href =
      "role-details.html?role=" + encodeURIComponent(selectedRole);
  });

  updateSelection();
}

function renderRoleDetails() {
  const title = $("#roleTitle");
  if (!title) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("role");
  const role = roles.find(item => item.id === requestedId) ||
    roles.find(item => item.id === localStorage.getItem("cc-selected-role"));

  if (!role) {
    title.textContent = "No role selected";
    $("#roleSummary").textContent = "Choose a job role to view its profile.";
    $("#roleDescription").textContent = "Return to the role selection page and select a role to see its responsibilities, skills, and suggested learning pathway.";
    $("#roleIcon").textContent = "◎";
    $("#roleTags").innerHTML = "";
    $("#responsibilities").innerHTML = "";
    $("#skillsList").innerHTML = "";
    $("#learningPath").innerHTML =
      '<a class="btn btn-primary" href="index.html">Choose a role →</a>';
    return;
  }

  localStorage.setItem("cc-selected-role", role.id);

  $("#roleIcon").textContent = role.icon;
  title.textContent = role.name;
  $("#roleSummary").textContent = role.summary;
  $("#roleDescription").textContent = role.description;

  $("#roleTags").innerHTML = role.tags
    .map(tag => `<span class="skill-tag">${tag}</span>`).join("");

  $("#responsibilities").innerHTML = role.responsibilities
    .map(item => `<li>${item}</li>`).join("");

  $("#skillsList").innerHTML = role.skills
    .map(skill => `<span class="skill-chip">${skill}</span>`).join("");

  $("#learningPath").innerHTML = role.path.map((step, index) => `
    <article class="path-step">
      <span>STEP 0${index + 1}</span>
      <h3>${step}</h3>
      <p>${[
        "Build a strong foundation in the essential concepts.",
        "Practise interpreting information and applying your knowledge.",
        "Apply your skills through structured exercises and review."
      ][index]}</p>
    </article>
  `).join("");
}

function renderCourses() {
  const grid = $("#courseGrid");
  if (!grid) return;

  grid.innerHTML = courses.map((course, index) => `
    <article class="course-card" style="animation-delay:${index * 45}ms">
      <div class="course-icon">${course.icon}</div>
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <div class="course-duration">◷ &nbsp; ${course.duration}</div>
      <a class="btn btn-primary"
         href="assessment.html?course=${encodeURIComponent(course.id)}">
        Take Assessment →
      </a>
    </article>
  `).join("");
}

function renderQuiz() {
  const form = $("#quizForm");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("course");
  const course = courses.find(item => item.id === courseId) || courses[0];

  $("#quizTitle").textContent = course.title;
  $("#quizSubtitle").textContent =
    `Complete this three-question knowledge check for ${course.title}.`;

  const list = $("#questionList");
  const result = $("#quizResult");
  const submitButton = form.querySelector('[type="submit"]');

  list.innerHTML = questions.map((question, index) => `
    <section class="question">
      <h3>${index + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="question${index}" value="${optionIndex}">
            <span><strong>${String.fromCharCode(65 + optionIndex)}.</strong>
            ${option}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");

  function updateAnsweredCount() {
    const answered = questions.filter((_, index) =>
      form.querySelector(`input[name="question${index}"]:checked`)
    ).length;

    $("#answeredCount").textContent = `${answered} / ${questions.length} ANSWERED`;
  }

  form.addEventListener("change", updateAnsweredCount);

  form.addEventListener("submit", event => {
    event.preventDefault();

    const answers = questions.map((_, index) => {
      const input = form.querySelector(`input[name="question${index}"]:checked`);
      return input ? Number(input.value) : null;
    });

    if (answers.some(answer => answer === null)) {
      result.hidden = false;
      result.innerHTML = `
        <h3>Almost there!</h3>
        <p>Please answer all three questions before submitting your quiz.</p>
      `;
      return;
    }

    const score = questions.reduce((total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0), 0);

    result.hidden = false;
    result.innerHTML = `
      <h3>${score === 3 ? "Excellent work!" : "Assessment complete"}</h3>
      <p>You scored <strong>${score} / ${questions.length}</strong>
      (${Math.round(score / questions.length * 100)}%).</p>
      ${questions.map((question, index) => `
        <div class="result-answer">
          <strong>${index + 1}. ${answers[index] === question.answer ? "Correct" : "Review"}</strong>
          <p>${question.explanation}</p>
          <p>Correct answer: ${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}</p>
        </div>
      `).join("")}
      <button type="button" class="btn btn-secondary" id="retryQuiz">Try Again</button>
      <a class="btn btn-primary" href="courses.html">Back to courses</a>
    `;

    submitButton.disabled = true;
    form.querySelectorAll('input[type="radio"]').forEach(input => {
      input.disabled = true;
    });

    $("#retryQuiz").addEventListener("click", () => {
      form.reset();
      form.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = false;
      });
      submitButton.disabled = false;
      result.hidden = true;
      result.innerHTML = "";
      updateAnsweredCount();
    });

    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  updateAnsweredCount();
}

setupTheme();
renderRoles();
renderRoleDetails();
renderCourses();
renderQuiz();
