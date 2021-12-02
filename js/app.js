//Use an IIFE to avoid contanminating global namespce
(function(){


 //Grab stores items from the DOM
 let storeItems = document.querySelectorAll('.store-item');
 //grab lightbox container 
 let lightBox = document.querySelector('.lightbox-container');
  //grab the div with the lightbox item
 let lightBoxItem = document.querySelector('.lightbox-item');
 //grab all the images from the store items
 let images = document.querySelectorAll('.store-img');


 let imageList = [];
 let imageCounter = 0;

 images.forEach(function(image){
  //push each imageto the array of images
  imageList.push(image.src);
})




storeItems.forEach(function(item) {

  item.addEventListener('click', function(e){

    let image = e.target.src;
    //change the background img property of the lightbox item
    lightBoxItem.style.backgroundImage = `url(${image})`;

    //lightBoxItem.style.backgroundImage = "url("+ image + ")";

    //show the modal with the selected image
    lightBox.classList.add('show');
    //get the array index number for the image that was selected
    imageCounter = imageList.indexOf(image);

    console.log(imageCounter);
    
    
  });

});


let buttonLeft = document.querySelector('.btnLeft');
let buttonRight = document.querySelector('.btnRight');

buttonLeft.addEventListener("click", changeImageLeft);
buttonRight.addEventListener("click", changeImageRight);

function changeImageLeft() {
        
  imageCounter--;
  if (imageCounter<0) {
    imageCounter = imageList.length - 1
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
}

function changeImageRight() {
        
  imageCounter++;
  if (imageCounter> imageList.length -1) {
    imageCounter = 0
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
}




  

let lightBoxClose = document.querySelector('.lightbox-close');
    lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('show');
    });
  












 
  // const storeImage = document.querySelectorAll('.store-img') 
  
  // storeImage.forEach(function(image){
  //   image.addEventListener('click', function(e){

  //     const ImgPath = e.target.getAttribute('src');
  //     console.log(ImgPath)
  //     const element = document.getElementsByClassName("lightbox-container");
  //     //const element = document.getElementById("lightbox-container");

  //     const lightboxItem = document.getElementsByClassName("lightbox-item");
  //     element[0].classList.add("show");
  //     //lightboxItem[0].style.background = "url('../img/cake-2.jpeg')"
  //     lightboxItem[0].style.background = "url(../"+ ImgPath + ")";

  //     console.log("url(../"+ ImgPath + ")");
  
  

//     })
// })

})();


