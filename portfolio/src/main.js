const lines =document.querySelector('#threeLine');
const menu =document.querySelector('#menu');
const l1 = document.getElementById('li1');
const l2 = document.getElementById('li2');
const l3 = document.getElementById('li3');
const l4 = document.getElementById('li4');

lines.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})

l1.addEventListener("click",() => {
         menu.classList.toggle('hidden');
})
l2.addEventListener("click",() => {
    menu.classList.toggle('hidden');
})
l3.addEventListener("click",() => {
    menu.classList.toggle('hidden');
})
l4.addEventListener("click",() => {
    menu.classList.toggle('hidden');
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

let night = document.getElementById('moon');
let htmlElement = document.documentElement;

night.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if(htmlElement.className == 'hidden'){
        night.src = '/assets/sun-solid.svg';
    }
    else{
        night.src = './assets/night.png ';
    }
})
