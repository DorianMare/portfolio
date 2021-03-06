//animation page d'accueil
var tl_Start = gsap.timeline();
tl_Start.from("#presentation", {duration: 1, opacity: 0, y: -75}).delay(0.5)
.from("nav", {duration: 1.5, opacity: 0, x: -250});

//animation lamaTheGame
var tl_Lama = gsap.timeline();
tl_Lama.from("#presentationLama", {duration: 1, opacity: 0, x: -125}).delay(0.5)
.from("img", {duration: 1.5, opacity: 0, y: -100});

//animation siao
var tl_SIAO = gsap.timeline();
tl_SIAO.from("#presentationSIAO", {duration: 1, opacity: 0}).delay(0.5)
.from("#contenu", {duration: 1, opacity: 0, y: -75});

//scroll detection (currently usueless)
/*var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      this.console.log("downscroll !");
   }
   else {
       this.console.log("upscroll !");
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
*/