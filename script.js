function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}

/* TYPING HERO ANIMATION */

var typed = new Typed("#typing", {

strings:[
"8+ Years Experience",
"AWS • Docker • Kubernetes",
"Linux • Python • Automation",
"Building Scalable Cloud Infrastructure"
],

typeSpeed:60,
backSpeed:40,
backDelay:1500,
loop:true

});


/* PARTICLE BACKGROUND */

particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#38bdf8"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.4,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{
events:{
onhover:{
enable:true,
mode:"repulse"
}
}
}

});


/* TERMINAL ANIMATION */

const commands=[

"$ aws configure",
"$ docker build -t devops-app .",
"$ docker run -p 80:80 devops-app",
"$ kubectl apply -f deployment.yaml",
"$ kubectl get pods",
"$ terraform init",
"$ terraform apply",
"$ echo 'Deployment Successful 🚀'"

];

let line=0;
let char=0;

function typeTerminal(){

if(line<commands.length){

if(char<commands[line].length){

document.getElementById("terminal-output").innerHTML+=commands[line].charAt(char);

char++;

setTimeout(typeTerminal,40);

}

else{

document.getElementById("terminal-output").innerHTML+="<br>";

line++;
char=0;

setTimeout(typeTerminal,400);

}

}

}

typeTerminal();
