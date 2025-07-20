const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 2,
        stagger: .2
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
var timeout;
function circlechaptakaro(){
    clearTimeout(timeout);
var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;

window.addEventListener("mousemove",function(dets){
    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

    minicirclefollower(xscale, yscale);
    timeout = setTimeout(function(){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1}, ${1})`
    },100);
});
}
circlechaptakaro();
function minicirclefollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}
minicirclefollower();
firstpageanim();

var diffrot = 0;
var rotate = 0;

document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets) {
    
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: .5,
           });
    });
  
});

document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets) {
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
     var diff = dets.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * .5),
           });
    });
  
});