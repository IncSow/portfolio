new Vue({
    el: "#app",

    data: {
        page: 'intro',
        skills: [],
        softskills: [],
        projects : [],
        experiences: [],
        current_project : 0,
        current_experience : 0,
        isSoftSkills : false,
        InExecution : false
    },
    mounted(){
        this.getAllData()
    },
    methods: {
        change_page(page){
            this.page = page;
        },
        toggle_skills(arg){
            this.isSoftSkills = arg
        },
        getAllData(){ // GET ALL DATA FROM THE JSON FILES
            fetch("skills.json").then(response => response.json()).then(data => (this.skills = data));

            fetch("softskills.json").then(response => response.json()).then(data => (this.softskills = data));

            fetch("projects.json").then(response => response.json()).then(data => (this.projects = data));

            fetch("experiences.json").then(response => response.json()).then(data => (this.experiences = data));

        },


        updateCurrentIndex(input){


            if(this.page == "projects"){
              
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

                removeeffect(this.projects[this.current_project].description, "project_description")
            }else{

               
                if(input == "-" && this.current_experience!=0){
                    this.current_experience--
                }else
                if(input == "-" && this.current_experience == 0){
                    this.current_experience = this.experiences.length-1
                }else
                if(input == "+" && this.current_experience != this.experiences.length-1){
                    this.current_experience++
                }else
                if(input == "+" && this.current_experience == this.experiences.length-1){
                    this.current_experience = 0
                }
                document.getElementById("experienceSelector").value = this.current_experience + 1;

                removeeffect(this.experiences[this.current_experience].description, "experience_description");
                
            }


            if(this.InExecution){
                return
            }

            this.InExecution = true;

            document.getElementByClassName("IndexSelector")[0].style.pointerEvents = "none";
            document.getElementByClassName("IndexSelector")[0].style.opacity = 0.1;
            setTimeout(() => {
                document.getElementByClassName("IndexSelector")[0].style.pointerEvents = "all"
                document.getElementByClassName("IndexSelector")[0].style.opacity = 1;
                this.InExecution = false
            }, 1000);
        
        },
        
        selectOtherIndex(){

            if(this.page == "projects"){

                this.current_project = document.getElementById("projectSelector").value-1;
                removeeffect(this.projects[this.current_project].description, "project_description" );
                
            }else{

                this.current_experience = document.getElementById("experienceSelector").value-1;
                removeeffect(this.experiences[this.current_experience].description, "experience_description");
            }
            
            if(this.InExecution){
                return
            }
            document.getElementByClassName("IndexSelector")[0].style.pointerEvents = "none";
            document.getElementByClassName("IndexSelector")[0].style.opacity = 0.1;
            setTimeout(() => {
                this.InExecution = false
                document.getElementByClassName("IndexSelector")[0].style.pointerEvents = "all"
                document.getElementByClassName("IndexSelector")[0].style.opacity = 1;
            }, 1000);
            
            this.InExecution = true;
            
        }
    },
})



