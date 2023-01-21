   function calculate() {
       let userGet = document.querySelector("#get").value;
       let outoff = document.querySelector("#outoff").value;
       let resutl = userGet / outoff * 100;
       let show = document.querySelector("p").innerText = `${resutl} %`;
   }

 
