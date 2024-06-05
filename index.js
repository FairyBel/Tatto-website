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



//FORM

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e){
  e.preventDefault();

  let error = formValidate(form);

  let formData = newFormData(form);


  if (error === 0){
    form.classList.add('_sending');
    let response = await fetch ('sendmail.php', {
      method:'POST',
      body:formData
    });
    if(response.ok){
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = '';
      form.reset();
      form.classList.remove('_sending');
    }else{
      alert('Ошибка!');
      form.classList.remove('_sending');
    }
  }else{
    Swal.fire("Заполните все поля!");
    
  }

}

function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('_req');
    for (let index=0; index<formReq.length; index++){
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
        else if (input.getAttribute('type') === 'checkbox' && input.checked === false){
          formAddError(input);
          error++;
        }else{
          if(input.value === ''){
            formAddError(input);
            error++;
          }
        }
      }
      return error;
  }

      function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
      }
      function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
      }
      function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      }
    
    };


//очистка формы после отправки сообщения
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
