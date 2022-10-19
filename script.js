function go_to_page(obj){
    document.getElementById("background").style.backgroundColor = "black"
    document.body.classList.toggle("transitionning");

    for(let menuImg of document.getElementsByClassName('menu-img')){
        menuImg.style.opacity = 0
    }
    
    setTimeout(
        location.href = obj.dataset.link, 3000
    )
}



function removeeffect(txt, text_to_change){
    document.getElementById(text_to_change).innerHTML = document.getElementById(text_to_change).innerHTML.replaceAll("</b>","").replaceAll("<b>","");
    let InputText = document.getElementById(text_to_change).innerHTML
    let maxrotation = InputText.length;
    let speed = 500/maxrotation;
    for(let i = 0; i<maxrotation; i++){ 
        speed += 500/maxrotation
        setTimeout(() => {
            InputText = document.getElementById(text_to_change).innerHTML;
            document.getElementById(text_to_change).innerHTML = InputText.slice(0, -1);
            if(i ==maxrotation-1){
                typingeffect(txt, text_to_change);
            }
        }, speed);
        
    }
}


function typingeffect(txt, text_to_change){ 
    let bold_mode = false
    let speed = 500/txt.length 
    for (let i =0; i < txt.length; i++){
        speed += 500/txt.length;
        setTimeout(function(){
            if (txt.charAt(i) == "<"){ 
                document.getElementById(text_to_change).innerHTML+= "<br>"}
            else if (txt.charAt(i) == "+"){
                bold_mode = true;
            }
            else if (txt.charAt(i) == "]"){
                bold_mode = false
            }
            else if (bold_mode){
                document.getElementById(text_to_change).innerHTML += txt.charAt(i).bold()
            }
            else{
                document.getElementById(text_to_change).innerHTML += txt.charAt(i);
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
