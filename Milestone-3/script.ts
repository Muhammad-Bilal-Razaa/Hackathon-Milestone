const form=document.getElementById("resume-form")as HTMLFormElement;
const generatedresumediplay =document.getElementById('generated-resume') as HTMLDivElement;

// handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

//collect input values
const name= (document.getElementById('name') as HTMLInputElement).value
const fname= (document.getElementById('fname') as HTMLInputElement).value
const status= (document.getElementById('status') as HTMLInputElement).value
const phone= (document.getElementById('phone') as HTMLInputElement).value
const mail= (document.getElementById('mail') as HTMLInputElement).value
const cnic= (document.getElementById('cnic') as HTMLInputElement).value
const age= (document.getElementById('age') as HTMLInputElement).value
const education= (document.getElementById('education') as HTMLInputElement).value
const experience= (document.getElementById('experience') as HTMLInputElement).value
const skills= (document.getElementById('skills') as HTMLInputElement).value

//resume content generate dynamically

const resumeHTML=`
<h2><b>Resume</b></h2>
<h3>Personal-Information</h3>
<p><b>Name : </b>${name}</p>
<p><b>Father-Name : </b>${fname}</p>
<p><b>Marital Status : </b>${status}</p>
<p><b>Phone : </b>${phone}</p>
<p><b>Email : </b>${mail}</p>
<p><b>CNIC : </b>${cnic}</p>
<p><b>Age : </b>${age}</p>

<h3>Eduaction</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>

`;
//Dsiplay the generted Resume
if(generatedresumediplay){
    generatedresumediplay.innerHTML=resumeHTML;
}

else{
    console.error('Resume-Dispaly Element is missing..');
    
}







})
