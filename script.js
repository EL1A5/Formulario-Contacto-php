const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";

  let xrh = new XMLHttpRequest();

  xrh.open("POST", "message.php", true);

  xrh.onload = () => {
    if (xrh.readyState == 4 && xrh.status == 200) {
      let responseS = xrh.response;
      console.log(responseS)
      
      if (responseS.indexOf("Ingrese datos") != -1 || responseS.indexOf("Email es invalido!") == -1 || responseS.indexOf("Lo sentimos, fallo su mensaje") != -1) {
      
      
        statusTxt.style.color = "red";
      
      }
       else {
        form.reset();
        setTimeout(() => {

          statusTxt.style.display = "none";
        }, 3000);
      }

      statusTxt.innerText = responseS;
    }
  }

  let formDataz = new FormData(form);

  // console.log(formDataz.get('name'));
  xrh.send(formDataz);
}