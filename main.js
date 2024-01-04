gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 1367px)": function () {
        // first section
        var tl = gsap.timeline({scrollTrigger:{
            trigger: ".second-section",
            start: "20% 100%",
            end: "50% 50%",
            scrub: true,
            // markers: true
        }})

        tl.to("#cookie", {
            top: "138%",
            left: "0%",
            rotate: "50%"
        },'cookie')

        tl.to("#chips", {
            width: "8vw",
            top: "125%",
            left: "88%"
        },'cookie')

        // second seciton
        var t2 = gsap.timeline({scrollTrigger:{
            trigger: ".third-section",
            start: "20% 100%",
            end: "50% 50%",
            scrub: true,
            // markers: true
        }})

        t2.to('#cookie',{
            top: "237%",
            left: "43%",
            width: "13vw",
            rotate: "-50deg"
        },"cookism")

        t2.from('#cookism',{
            rotate: "0"
        },"cookism")
        t2.to('#cookism',{
            rotate: "-50deg"
        },"cookism")
    }
})

// scroll magic

// var ctrl = new ScrollMagic.Controller({   
// });
// This each sets the animation
// $('.slide').each(function(index,element) {  
  
//       ////////// scroll up //////////

//       new ScrollMagic.Scene({
//           triggerHook: 0,
//           triggerElement: this,
//           offset:-50 // small offset added to prevent overscrolling accidentally triggering
//       })
//       .on('leave', function () {
//             TweenLite.to(window, .5, {scrollTo:{y:$(window).height() * (index-1), autoKill:false},ease: Linear.easeNone})
//       })
//       .addTo(ctrl);  // scene end

//       //////////scroll down //////////

//        new ScrollMagic.Scene({
//             triggerElement: this,
//             triggerHook: 0,
//             offset:50 // small offset added to prevent overscrolling accidentally triggering
//         })
//         .on('enter', function () {
//              TweenLite.to(window, .5, {scrollTo:{y:$(window).height() * (index+1), autoKill:false},ease: Linear.easeNone});   
//         })
//         .addTo(ctrl); // scene end

// }); 
//slide each

// scroll magic end