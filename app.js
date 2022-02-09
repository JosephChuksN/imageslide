const slides = ["crash.png", "kick.png", "snare.png","tom1.png","tom2.png", "tom3.png", "tom4.png" ];
let i;
i = 0;
let x;
let s;
let sg =  document.getElementById("imgslide");
function slidenxt(){

    for(i = 0; i <= slides.length; i++)
     if(sg === i){
        
        s = document.getElementById("imgslide").setAttribute("src", (`${slides[i]}`));

     }
       
   
// return s;
}

//function slideprv(){
// let z;
 //   for(x = 6; x >= 0; x--){
   //     let prvImg = ("images/"+slides[x]);
     //z  =  document.getElementById("imgslide").setAttribute("src", prvImg);
    //}
    //return z;
//}
