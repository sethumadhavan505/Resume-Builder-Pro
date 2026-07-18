const fields = [
'name',
'email',
'phone',
'summary',
'education',
'skills',
'projects',
'certifications'
];

fields.forEach(id => {

document.getElementById(id).addEventListener('input', () => {

localStorage.setItem(
id,
document.getElementById(id).value
);

updateResume();

});

});

function updateResume(){

document.getElementById('previewName').innerText =
document.getElementById('name').value || 'Your Name';

document.getElementById('previewEmail').innerText =
document.getElementById('email').value || 'email@example.com';

document.getElementById('previewPhone').innerText =
document.getElementById('phone').value || '9876543210';

document.getElementById('previewSummary').innerText =
document.getElementById('summary').value;

document.getElementById('previewEducation').innerText =
document.getElementById('education').value;

document.getElementById('previewSkills').innerText =
document.getElementById('skills').value;

document.getElementById('previewProjects').innerText =
document.getElementById('projects').value;

document.getElementById('previewCertifications').innerText =
document.getElementById('certifications').value;

}

window.onload = () => {

fields.forEach(id => {

document.getElementById(id).value =
localStorage.getItem(id) || '';

});

updateResume();

};

document.getElementById('photo').addEventListener('change', function(e){

const file = e.target.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(event){

document.getElementById('previewPhoto').src =
event.target.result;

};

reader.readAsDataURL(file);

}

});

function downloadPDF(){

const element = document.getElementById('resume');

html2pdf()
.set({
margin:0.3,
filename:'Resume.pdf',
image:{
type:'jpeg',
quality:1
},
html2canvas:{
scale:2
},
jsPDF:{
unit:'in',
format:'a4',
orientation:'portrait'
}
})
.from(element)
.save();

}
