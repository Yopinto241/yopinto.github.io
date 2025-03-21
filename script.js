// Skills Array
const skills = [
    "HTML", "CSS", "JavaScript", "Python", "Flutter", "Artificial Intelligence",
    "Prompt Engineering", "Social Media Bots", "Advertising Strategies",
    "Kali Linux", "Windows Troubleshooting", "macOS Optimization",
    "Phone Software Fixes", "Network Security", "Data Recovery"
  ];
  
  function loadSkills(limit = 6) {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";
    skills.slice(0, limit).forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  }
  
  function toggleSkills() {
    const button = document.querySelector("#skills button");
    if (button.textContent === "Explore More Skills") {
      loadSkills(skills.length);
      button.textContent = "Show Less";
    } else {
      loadSkills(6);
      button.textContent = "Explore More Skills";
    }
  }
  
  // Pioneer Form Toggle
  function showPioneerForm() {
    const form = document.getElementById("pioneer-form");
    form.style.display = form.style.display === "none" ? "flex" : "none";
    form.classList.toggle("form-hidden");
  }
  
  // Quiz Logic
  const quizData = {
    question: "What does this Python code print? `for i in range(3): print(i)`",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
    correct: "0 1 2"
  };
  
  function loadQuiz() {
    document.getElementById("question").textContent = quizData.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    quizData.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
      optionsDiv.appendChild(label);
    });
  }
  
  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const result = document.getElementById("result");
    if (!selected) {
      result.textContent = "Please select an answer!";
      return;
    }
    if (selected.value === quizData.correct) {
      result.textContent = "Correct! The loop prints 0, 1, 2.";
      result.style.color = "#FFD700";
    } else {
      result.textContent = "Wrong! It prints 0, 1, 2 because range(3) iterates from 0 to 2.";
      result.style.color = "#FF6347";
    }
  }
  
  // Initial Load
  loadSkills();
  loadQuiz();