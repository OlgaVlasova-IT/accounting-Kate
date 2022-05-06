
const btn =document.querySelector("#submitForm");

btn.addEventListener("click", function(){
  window.onbeforeunload = () => {
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }

})
