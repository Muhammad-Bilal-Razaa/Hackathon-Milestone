const buttontoggle=document.getElementById("button-toggle")as HTMLButtonElement;
const skills=document.getElementById("skills")as HTMLElement;

buttontoggle.addEventListener("click",() =>{
if(skills.style.display ==="none"){
    skills.style.display = 'block'
}
else{
    skills.style.display = 'none'
}
});