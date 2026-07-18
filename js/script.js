function generateResume(){

const data = {

name: document.getElementById("name").value,
role: document.getElementById("role").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
linkedin: document.getElementById("linkedin").value,
summary: document.getElementById("summary").value,
education: document.getElementById("education").value,
skills: document.getElementById("skills").value,
projects: document.getElementById("projects").value,
certifications: document.getElementById("certifications").value,
hobbies: document.getElementById("hobbies").value,
extra: document.getElementById("extra").value

};

localStorage.setItem(
"resumeData",
JSON.stringify(data)
);

window.location.href="resume.html";

}

if(window.location.pathname.includes("resume.html")){

const data =
JSON.parse(localStorage.getItem("resumeData"));

document.getElementById("r-name").innerText=data.name;
document.getElementById("r-role").innerText=data.role;
document.getElementById("r-email").innerText=data.email;
document.getElementById("r-phone").innerText=data.phone;
document.getElementById("r-linkedin").innerText=data.linkedin;
document.getElementById("r-summary").innerText=data.summary;
document.getElementById("r-education").innerText=data.education;

function fillList(id,text){

const ul=document.getElementById(id);

text.split(/\n|,/).forEach(item=>{

if(item.trim()){

const li=document.createElement("li");
li.textContent=item.trim();
ul.appendChild(li);

}

});

}

fillList("r-skills",data.skills);
fillList("r-projects",data.projects);
fillList("r-certifications",data.certifications);
fillList("r-hobbies",data.hobbies);
fillList("r-extra",data.extra);

}

function downloadPDF(){

html2pdf().from(
document.getElementById("resume")
).save("Resume.pdf");

}
