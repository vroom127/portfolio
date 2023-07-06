gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

 gsap.to("#bluesm", {
  duration: 8,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier1",
    align: "#bezier1",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.30,
    end: .70,
    
  },
});

gsap.to("#redbg", {
  duration: 10,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier2",
    align: "#bezier2",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.4,
    end: .6,
    
  },
});

gsap.to("#redsm", {
  duration: 10.5,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  ease: "none",
  repeat: -1,
  yoyo: false,
  motionPath: {
    path: "#bezier3",
    align: "#bezier3",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    
  },
});



gsap.to("#bluebg", {
  duration: 12,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier3",
    align: "#bezier3",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.6,
    end: .4,
    
  },
});

gsap.to("#black1", {
  duration: 10,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier2",
    align: "#bezier2",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.15,
    end: .85,    
    
  },
});

gsap.to("#black2", {
  duration: 10,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier2",
    align: "#bezier2",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.8,
    end: .2,
    
  },
});

gsap.to("#dredsm", {
  duration: 12,
  scrollTrigger: {
    trigger:".main-header",
    toggleActions:"restart pause restart none"
  },
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier3",
    align: "#bezier3",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: -.25,
    end: .75,
    
  },
});
gsap.to("#rocket-svg", {
  duration: 10,
  repeat: -1,
  yoyo: false,
  ease: "none",
  motionPath: {
    path: "#bezier2",
    align: "#bezier2",
    alignOrigin: [0.5, 1.5],
    autoRotate: true,
    start: -.25,
    end: .75,
    
  },
});
 
 
// make button appear when scroll past certain point
let contentContainer = document.querySelector(".content-container");
let contentContainerPos = contentContainer.getBoundingClientRect().top;
let upBtn = document.querySelector("#up-button");
window.addEventListener('wheel', function(){
  windowPosition = window.pageYOffset || this.document.documentElement.scrollTop;
  if(windowPosition >= contentContainerPos){
    upBtn.style.opacity = 1;
  }
  else{
    upBtn.style.opacity = 0;
  }

});
upBtn.onclick = function(){
  upBtn.style.opacity = 0;
};

//Adding Scroll triggers
ScrollTrigger.create({
  trigger: "#card0",
  start: "30vw top", 
  end: "bottom bottom",
  markers:false,
  pin: ".textblock1"
});


gsap.to("#card0-meinrocket", {
  duration: 10,
  y:"-100vh",
  scrollTrigger: {
    trigger:"#card0-meinrocket",
    toggleActions:"restart none restart none",
    scrub:true
  }
});

var tl = gsap.timeline();
var tl3 = gsap.timeline();
tl.to(["#card1-icons-spacer1", "#card1-icons-spacer2"], {x:"+=-100%", duration: 3});
tl.to(["#card1-icons-spacer2", "#card1-icons-spacer3"], {x:"+=-100%", duration: 3});

/* change to have each card come in half way through first one */
tl3.from("#card1-inner-image1", {duration:.5, x:"500%"});
tl3.from("#card1-inner-image2", {duration:.5, x:"500%"});
tl3.from("#card1-inner-image3", {duration:.5, x:"500%"});


let ulHeight = document.querySelector(".card1-inner-ul").offsetHeight;
console.log(ulHeight);
var tl2 = gsap.timeline();
tl2.to(["#card1-inner-ul-highlighter"], {y: ulHeight * .4, duration: 3});
tl2.to(["#card1-inner-ul-highlighter"], {y:ulHeight * .75, duration: 3});

