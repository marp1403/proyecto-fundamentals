document.addEventListener("DOMContentLoaded", function() {
    
   

    let registerData = {
       nombre: '',
       apodo: '',
       bio: ''
  }

   
   
   //form
   const form = document.getElementById('form-validation');
  

   //fields
   const inputName = document.getElementById('name');
   const inputNick = document.getElementById('nick');
   const textBio = document.getElementById('bio');
   const inputPass = document.getElementById('password');
    

   
 
    //events
   inputName.addEventListener('input', validation);
   inputNick.addEventListener('input', validation);
   inputPass.addEventListener('input', validation);
   textBio.addEventListener('input', validation);

   getData();
 

   form.onsubmit = function (event){
   event.preventDefault();

   const formData = new FormData(form);

   const url = "https://mocktarget.apigee.net/echo";

   const options = {
       method: "POST",
       body: formData
   };

   fetch(url, options)
       .then((response) => response.json())
       .then((data) => responseFormat(data))
       .catch(console.error);
}

   function responseFormat(json){
   
   const containerJson = document.querySelector('.article__demo-formResponse');

   
   const pre = document.createElement('pre');
   const code = document.createElement('code');

   
   code.textContent = JSON.stringify(json, null, 2);

   
   containerJson.appendChild(pre);
   pre.appendChild(code);
  }
 

   function validation(e) {
       

       clearNotification(e.target.parentElement);

       

       if(     e.target.id === 'name' && e.target.value === ''
           ||  e.target.id === 'nick' && e.target.value === ''
           
       ){
           notification('Campo Obligatorio', e.target.parentElement);
           return;
       }
       
      


       if (e.target.id === 'nick' ) {

           if(!validationNick(e.target.value, e.target.parentElement)){
               return;
           }
           
           
           
       }

       if (e.target.id === 'password') {
           validationPassword(e.target.value.trim(), e.target.parentElement);
           return;
       }

       if (e.target.id === 'bio') {
           if (e.target.value.length < 100) {
               notification("Mínimo 100 caracteres", e.target.parentElement);
              return;
           }
       }

       registerData[e.target.name] = e.target.value;
       localStorage.setItem('dataForm', JSON.stringify(registerData));


   }

   function validationNick(nick, ref) {

        
       const expReg = /^\w{3,10}$/;

       if (!expReg.test(nick)) {
           notification('Entre 3 y 10 caracteres alfanuméricos', ref);
           return false;
       } 

        return true; 

       

       


   }

   function validationPassword(password, ref) {
       
       const mayusculaRegExp = /[A-Z]/;
       const numeroRegExp = /\d/;
        clearNotification(ref);

       if (password.length < 8) {
           
           notification('Debe tener al menos 8 caracteres', ref);
            
       }

       if (!mayusculaRegExp.test(password) && !numeroRegExp.test(password)) {
           
           notification('Debe tener al menos una letra mayúscula y un número', ref);
            
       }

       
   }

   function notification(text, ref) {
       const alert = document.createElement('p');
       alert.className = 'alert';
       alert.textContent = text;
       ref.appendChild(alert);
   }

   function clearNotification(ref) {
       const alert = ref.querySelector('.alert');
       if (alert) {
           alert.remove();
       }
   }


   function getData() {
     const data =  JSON.parse(localStorage.getItem('dataForm'));

       inputName.value = data.nombre;
       inputNick.value = data.apodo;
       textBio.value = data.bio;

   }
 
    

});