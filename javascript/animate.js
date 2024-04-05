gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger:"first-section",
    start:"4% 16%",
    end:"bottom bottom",
    toggleClass:{targets:"header",className:"nav-active"},
})
const timeline=gsap.timeline()
timeline.from(".logo",{opacity:0,x:-20,})
timeline.from(".menu",{opacity:0,x:-20,})
timeline.from(".big-text",{y:20,opacity:0})
timeline.from(".front-paragraph",{y:-20,opacity:0})
timeline.from(".bigman",{x:10,opacity:0})
timeline.from(".cliffe",{x:-10,opacity:0})
timeline.from(".download",{opacity:0})
timeline.from(".just_rotate",{rotate:360})
timeline.from(".details-project",{y:-10,opacity:0})


const tl=gsap.timeline({
    scrollTrigger:{
        trigger:".about-tl",
        start:"top 90%",
        end:"50% 50%",
        toggleActions:"play none none none",
    },
})

tl.from(".passion-tag",{x:-10,opacity:0})
    .from(".into",{y:20,opacity:0})
    .from(".history",{x:-10,opacity:0})
    .from(".skills",{x:10,opacity:0})
    .fromTo(".history-info",{y:-20,opacity:0},{y:0,opacity:1})
    
    
    const project_tl=gsap.timeline({
        scrollTrigger:{
            trigger:".new_projects",
            start:"top 80%",
            end:"bottom 50%",
            toggleActions:"play none none none",
        },
    })
    
    project_tl.from(".project-tag",{x:-500})
                .from(".into-projects",{y:20,opacity:0})
                .from(".osasuna",{x:-10,opacity:0})
                .from(".shutterspot",{x:10,opacity:0})
                .from(".skillup",{x:-10,opacity:0})
                .from(".uniquewear",{x:10,opacity:0})


         const contact_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".just_contact",
                        start:"top 80%",
                        end:"bottom 50%",
                        toggleActions:"play none none none",
                    },
             })
        contact_tl.from(".contact_tag",{opacity:0})
                    .from(".contact_head",{scale:0})