const slides = ["crash.png", "kick.png", "snare.png","tom1.png","tom2.png", "tom3.png", "tom4.png" ];
let i;
i = 0;
 let x;
 let s;
 s = document.getElementById("imgslide");


 const slidenxt = () =>{
   console.log(`images/${slides[i]}`)
   for(i = 0; i < slides.length; i++)
      if( slides == i){
        s = document.getElementById("imgslide").setAttribute( "src", (`images/${slides[i]}`));
       return s;
      } else{
      return  alert('i no work');
      }
 } 

function slideprv(){
 let z;
 let img = document.getElementById("imgslide").getAttribute("src");

    for(x = 6; x >= 0; x--){
      if(img=="images/"+slides[x]){
        let prvImg = (x>0 ? "images/"+slides[x-1] :"images/"+slides[slides.length-1] );
        z  =  document.getElementById("imgslide").setAttribute("src", prvImg);
        break
    //  console.log(prvImg);
      }
    }

    return z;
}

//var imgArray = ["crash.png", "kick.png", "snare.png","tom1.png","tom2.png", "tom3.png", "tom4.png"];
//for (i = 0; i < 7; i++) {
  //  imgArray[i] = new Image();
    //imgArray[i].src = imgArray[i];
//}

//function slidenxt() {
  //  var images = imgArray.map(img => img.outerHTML).join('');
    //document.getElementById("imgslide").innerHTML = images;
//}