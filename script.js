const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
  
    if (e.target.innerText == "=") {
      const result = eval(display.innerText);
      display.innerText = result;
    }
    
    else if (e.target.innerText == "ac") {
      display.innerText = 0;
    }

     else {
      if(display.innerText==0){
        display.innerText=e.target.innerText;
      }else{
        display.innerText +=e.target.innerText;
      }
    }

  });
});
