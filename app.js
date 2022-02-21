const slides = ["crash.png", "kick.png", "snare.png","tom1.png","tom2.png", "tom3.png", "tom4.png" ];
let nxtBtnIteration;
xtBtnIteration = 0;
 let prvBtnIteration;
 let imgSource;
 let output;
 imgSource = document.getElementById("imgslide");


 function slidenxt(){
  let img = imgSource.getAttribute("src");
   for(nxtBtnIteration = 0; nxtBtnIteration < slides.length; nxtBtnIteration++)
      if(img == "images/"+slides[nxtBtnIteration]){
        let nxtImg = (nxtBtnIteration < slides.length-1 ? "images/"+slides[nxtBtnIteration+1] : "images/"+slides[0])
        output = imgSource.setAttribute( "src", nxtImg);
      
      }
      return output;
 } 
 window.onload =setInterval(slidenxt, 2000 ) ;

function slideprv(){
 let prvOutput;
 let img = imgSource.getAttribute("src");

    for( prvBtnIteration = 6;  prvBtnIteration >= 0;  prvBtnIteration--){
      if(img=="images/"+slides[ prvBtnIteration]){
        let prvImg = ( prvBtnIteration>0 ? "images/"+slides[ prvBtnIteration-1] :"images/"+slides[slides.length-1] );
        prvOutput  =  imgSource.setAttribute("src", prvImg);
        break
      }
    }

    return prvOutput;
}
