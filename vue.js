new Vue({
  el: "#app",

  data: {
    page: "intro",
    skills: [],
    softskills: [],
    projects: [],
    experiences: [],
    current_project: 0,
    current_experience: 0,
    isSoftSkills: false,
    InExecution: false,
    isWorkExperience: false,
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    toggleSkills(arg) {
      if (this.page == "skills") {
        this.isSoftSkills = arg;
      } else {
        this.isWorkExperience = arg;
        setTimeout(() => {
          this.updateCurrentIndex();
        }, 10); // Corrects the index of the input
      }
    },
    getAllData() {
      // GET ALL DATA FROM THE JSON FILES

      fetch("skills.json")
        .then((response) => response.json())
        .then((data) => (this.skills = data));

      fetch("softskills.json")
        .then((response) => response.json())
        .then((data) => (this.softskills = data));

      fetch("projects.json")
        .then((response) => response.json())
        .then((data) => (this.projects = data));

      fetch("experiences.json")
        .then((response) => response.json())
        .then((data) => (this.experiences = data));
    },
    toggleSelectorClass() {
      document
        .getElementsByClassName("IndexSelector")[0]
        .classList.toggle("IndexSelectorChangement");
      setTimeout(() => {
        document
          .getElementsByClassName("IndexSelector")[0]
          .classList.toggle("IndexSelectorChangement");
        this.InExecution = false;
      }, 1000);
    },
    updateCurrentIndex(input = "") {
      if (this.InExecution) {
        return;
      }
      this.InExecution = true;

      if (this.isWorkExperience) {
        var current = this.current_experience;
        var obj = this.experiences;
        var id = "experienceSelector";
        var description = "experience_description";
      } else {
        var current = this.current_project;
        var obj = this.projects;
        var id = "projectSelector";
        var description = "project_description";
      }

      if (input == "-") {
        current = current == 0 ? obj.length - 1 : current - 1;
      } else if (input == "+") {
        current = current == obj.length - 1 ? 0 : current + 1;
      }
      document.getElementById(id).value = current + 1;
      removeEffect(obj[current].description, description);
      this.isWorkExperience
        ? (this.current_experience = current)
        : (this.current_project = current);

      this.toggleSelectorClass();
    },
    selectOtherIndex() {
      if (this.InExecution) {
        return;
      }
      this.InExecution = true;

      if (this.isWorkExperience) {
        this.current_experience =
          document.getElementById("experienceSelector").value - 1;
        removeEffect(
          this.experiences[this.current_experience].description,
          "experience_description"
        );
      } else {
        this.current_project =
          document.getElementById("projectSelector").value - 1;
        removeEffect(
          this.projects[this.current_project].description,
          "project_description"
        );
      }

      this.toggleSelectorClass();
    },
  },
});
