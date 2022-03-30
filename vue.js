new Vue({
    el: "#app",

    data: {
        page: 'intro',
        skills: [],
        projects : [],
        current_project : 0,
        InExecution : false
    },
    mounted(){
        this.getSkillsDataList()
        this.getProjectsDataList()
    },
    methods: {
        change_page(page){
            this.page = page;
        },

        getSkillsDataList(){
            fetch("skills.json")
            .then(response => response.json())
            .then(data => (this.skills = data));
        },
        getProjectsDataList(){
            fetch("projects.json")
            .then(response => response.json())
            .then(data => (this.projects = data));
        },
        updateCurrentProject(input){
            if(this.InExecution){
                return
            }
            this.InExecution = true;
            document.getElementById("projectSelector").style.pointerEvents = "none";
            document.getElementById("projectSelector").style.opacity = 0.1;

            if(input == "-" && this.current_project!=0){
                this.current_project--
            }else
            if(input == "-" && this.current_project == 0){
                this.current_project = this.projects.length-1
            }else
            if(input == "+" && this.current_project != this.projects.length-1){
                this.current_project++
            }else
            if(input == "+" && this.current_project == this.projects.length-1){
                this.current_project = 0
            }
            document.getElementById("projectSelector").value = this.current_project + 1
            removeeffect(this.projects[this.current_project].description)
            setTimeout(() => {
                document.getElementById("projectSelector").style.pointerEvents = "all"
                document.getElementById("projectSelector").style.opacity = 1;
                this.InExecution = false
            }, 1000);
        
        },
        selectOtherProject(){
            if(this.InExecution){
                return
            }
            document.getElementById("projectSelector").style.pointerEvents = "none";
            document.getElementById("projectSelector").style.opacity = 0.1;
            this.current_project = document.getElementById("projectSelector").value-1;
            this.InExecution = true;
            removeeffect(this.projects[this.current_project].description);
            setTimeout(() => {
                this.InExecution = false
                document.getElementById("projectSelector").style.pointerEvents = "all"
                document.getElementById("projectSelector").style.opacity = 1;
            }, 1000);
        }
    },
})




let jsonString = ""
fetch("projects.json")
            .then(response => response.json())
            .then(data => (jsonString = data));