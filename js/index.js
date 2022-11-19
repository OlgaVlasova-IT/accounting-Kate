// Detect request animation frame
let scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
let elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

gsap.from("#headingTax", { x: -400 , duration: 2})
gsap.from(".nav-link", { x: 400 , duration: 2, stagger: 0.2})

const btnShow= document.querySelector("#showRequestForm")
const btnClose=document.querySelector("#closeForm")
const bg = document.querySelector("#bg")

const showRequestForm= ()=> {
  const x = document.getElementById('requestForm');
  if (x.style.display === "none") {
    x.style.display = "block";
    // btn.textContent="X"
  //  bg.style.backgroundColor = "#A9A9A9";
  } else {
    x.style.display = "none";
    // btn.textContent="Request a quote"
    // bg.style.backgroundColor = "transparent";
  }
 }

 btnShow.addEventListener("click", showRequestForm)
 btnClose.addEventListener("click", showRequestForm)