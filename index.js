let deneme = "  Ben Emre Üçbudak";
const denemem = document.querySelector("#deneme");
let deneme2 = "  Web Developer"
let b = 0;
let c = 0;
function deneme1 () {
  if(b<deneme.length) {
    denemem.textContent += deneme[b];
    b++;
      
  
  }
  else {
    denemem.textContent = denemem.textContent.substring(0,3);
    b = 0;
  }
}
setInterval(deneme1,500);
