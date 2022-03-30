function go_to_page(obj){
    document.getElementById("background").style.backgroundColor = "black"
    document.body.classList.toggle("transitionning");
    for (let i = 0; i < document.getElementsByClassName("menu-img").length; i++) {
        document.getElementsByClassName("menu-img")[i].style.opacity = "0"
        
    }
    
    setTimeout(
        location.href = obj.dataset.link, 3000
    )
}



function removeeffect(txt){
    document.getElementById("project_description").innerHTML = document.getElementById("project_description").innerHTML.replaceAll("</b>","").replaceAll("<b>","");
    let InputText = document.getElementById("project_description").innerHTML
    let maxrotation = InputText.length;
    console.log(maxrotation, document.getElementById("project_description").innerHTML.length)
    let speed = 500/maxrotation;
    for(let i = 0; i<maxrotation; i++){ 
        speed += 500/maxrotation
        setTimeout(() => {
            InputText = document.getElementById("project_description").innerHTML;
            document.getElementById("project_description").innerHTML = InputText.slice(0, -1);
            if(i ==maxrotation-1){
                typingeffect(txt);
            }
        }, speed);
        
    }
}


function typingeffect(txt){ 
    let bold_mode = false
    let speed = 500/txt.length 
    for (let i =0; i < txt.length; i++){
        speed += 500/txt.length;
        setTimeout(function(){
            if (txt.charAt(i) == "<"){ 
                document.getElementById("project_description").innerHTML+= "<br>"}
            else if (txt.charAt(i) == "+"){
                bold_mode = true;
                console.log("true!" + charAt(i))
            }
            else if (txt.charAt(i) == "]"){
                bold_mode = false
            }
            else if (bold_mode){
                document.getElementById("project_description").innerHTML += txt.charAt(i).bold()
            }
            else{
                document.getElementById("project_description").innerHTML += txt.charAt(i);
                }
            }, speed);
}}



function CopyToClipboard(){
    var Text_to_copy = document.getElementsByClassName("email")[0].textContent;
    navigator.clipboard.writeText(Text_to_copy);
    copied.style.display = "block"
    copied.style.opacity = 1
    setTimeout(() => {
        copied.style.opacity = 0;
    }, 1500);


}