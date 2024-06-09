/*gsap.from("#nav-name", {
  y:-40,
  opacity:0,
  ease:"bounce",
  duration:4
})
gsap.from(".header",{
  opacity:0,
  scale:1.5,
  duration:3,
  
})
gsap.from(".btn-header", {
  opacity:0,
  x:-200,
  duration:3
})
gsap.from(".btn-gallery", {
  opacity:0,
  x:200,
  duration:3
})


/*gsap.to(".header",{
  text: "A LIFE PHILOSOPHY ON YOUR SKIN",
  duration: 3,
  repeat: 2,
  repeatDelay:0.7,
  ease:"power1.in",
  yoyo: true,
  delay:1
})*/


//очистка формы после отправки сообщения
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
