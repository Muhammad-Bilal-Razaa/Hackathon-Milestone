var form = document.getElementById("resume-form");
var generatedresumediplay = document.getElementById('generated-resume');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var status = document.getElementById('status').value;
    var phone = document.getElementById('phone').value;
    var mail = document.getElementById('mail').value;
    var cnic = document.getElementById('cnic').value;
    var age = document.getElementById('age').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //resume content generate dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal-Information</h3>\n<p><b>Name : </b>".concat(name, "</p>\n<p><b>Father-Name : </b>").concat(fname, "</p>\n<p><b>Marital Status : </b>").concat(status, "</p>\n<p><b>Phone : </b>").concat(phone, "</p>\n<p><b>Email : </b>").concat(mail, "</p>\n<p><b>CNIC : </b>").concat(cnic, "</p>\n<p><b>Age : </b>").concat(age, "</p>\n\n<h3>Eduaction</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n");
    //Dsiplay the generted Resume
    if (generatedresumediplay) {
        generatedresumediplay.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume-Dispaly Element is missing..');
    }
});
