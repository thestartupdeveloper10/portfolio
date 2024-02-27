gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers:true,
    trigger:"first-section",
    start:"4% 16%",
    toggleClass:{targets:"header",className:"nav-active"},
})
const tl=gsap.timeline()
tl.from(".logo",{opacity:0,x:-20,})
tl.from(".menu",{opacity:0,x:-20,})
tl.from(".big-text",{y:20,opacity:0})
tl.from(".front-paragraph",{y:-20,opacity:0})