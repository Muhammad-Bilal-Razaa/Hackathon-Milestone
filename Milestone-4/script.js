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
    var resumeHTML = "\n<h2><b>EDitable-Resume</b></h2>\n<h3>Personal-Information</h3>\n<p><b>Name : </b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Father-Name : </b><span contenteditable=\"true\">").concat(fname, " </span></p>\n<p><b>Marital Status : </b><span contenteditable=\"true\"> ").concat(status, " </span></p>\n<p><b>Phone : </b><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n<p><b>Email : </b><span contenteditable=\"true\"> ").concat(mail, " </span></p>\n<p><b>CNIC : </b> <span contenteditable=\"true\"> ").concat(cnic, " </span></p>\n<p><b>Age : </b><span contenteditable=\"true\"> ").concat(age, " </span></p>\n\n<h3>Eduaction</h3>\n<p contenteditable=\"true\" >").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\" >").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\" >").concat(skills, "</p>\n\n");
    //Dsiplay the generted Resume
    if (generatedresumediplay) {
        generatedresumediplay.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume-Dispaly Element is missing..');
    }
});
