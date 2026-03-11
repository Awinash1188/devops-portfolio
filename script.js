
function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}


/* TYPING ANIMATION */

var typed = new Typed("#typing", {

strings: [

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


/* PARTICLES BACKGROUND */

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
