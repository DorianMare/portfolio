//animation from start
var tl_Start = gsap.timeline();
tl_Start.from("#presentation", {duration: 1, opacity: 0, y: -75}).delay(0.5)
    .from("nav", {duration: 1.5, opacity: 0, x: -250});

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