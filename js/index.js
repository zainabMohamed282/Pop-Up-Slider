var imgs =Array.from(document.getElementsByClassName("img-fluid"));
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");

var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var currentIndex = 0;

//Display POP Up Slider
for(var i = 0 ; i< imgs.length; i++){
 imgs[i].addEventListener("click" , function(e){
     var clickedImg = e.target;
     var imgSrc = clickedImg.getAttribute("src");
      fixedBox.style.display = "flex";
     smallBox.style.backgroundImage = `url(${imgSrc})`;
     currentIndex = imgs.indexOf(e.target);
 });
};

//Close slider
closeBtn.addEventListener("click",closeSlide);

document.addEventListener("keyup",function(x){
    if(x.key == "Escape"){
     closeSlide();
    }
    console.log(x.key)
});
function closeSlide(){
    fixedBox.style.display = "none";
    
}
//Calling prev & next functions
nextBtn.addEventListener('click',getNextSlid);
prevBtn.addEventListener('click',getPrevSlid);
document.addEventListener('keyup',function(e){
 if(e.keyCode==39){
    getNextSlid()
 }else if(e.keyCode==37){
    getPrevSlid()
 }else if(e.keyCode==32){
    closeSlide()
 }
})

//Next Slide
function getNextSlid(){
    currentIndex++;
    if(currentIndex == imgs.length){
        currentIndex=0
    }
   var imgSrc=imgs[currentIndex].src;
   smallBox.style.backgroundImage = `url(${imgSrc})`;

}

//Previous slide
function getPrevSlid(){
     currentIndex--;
    if(currentIndex < 0){
        currentIndex=imgs.length-1;
    }
   var imgSrc=imgs[currentIndex].src;
   smallBox.style.backgroundImage = `url(${imgSrc})`;

}









