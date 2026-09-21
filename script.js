document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
const name=document.getElementById("name").value.trim();
document.getElementById("note").textContent=`Thanks${name?", "+name:""}! Your message form is ready. Connect it to your preferred email/form backend to receive submissions.`;
this.reset();
});