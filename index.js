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

/*AOS.init();*/

/*
function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function() {
    moveToSelected($(this));
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });
*/
  




















  //form

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    let name = document.getElementById('text-form').value;
    let email = document.getElementById('text-form-par').value;
    
   
    // Здесь будет код для отправки данных на сервер
   
    alert('Сообщение отправлено!');
    this.reset();
  });