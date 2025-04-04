const lines =document.querySelector('#threeLine');
const menu =document.querySelector('#menu');

lines.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})

function sendMail(){
    var parmas = {
        name:document.getElementById('name').value ,
        emial:document.getElementById('email').value ,
        message:document.getElementById('message').value
    };
    const serviceId = "service_bua39vb";
    const templateId = "template_qltmbk4";

    emailjs.send(serviceId,templateId,parmas).then(res =>{
        document.getElementById('name').value = ""; 
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res);
        alert('Your Message Send Successfully')
    }
)
.catch((err) => console.log(err));
}
