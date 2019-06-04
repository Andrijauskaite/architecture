const slideImages = [
    {
      id: 1,
      umage_url: 'img/16x9slide1.jpg',
      form_title: 'Registration for home project'
    },
    {
      id: 2,
      umage_url: 'img/16x9slide2.jpg',
      form_title: 'Registration for landscape architecture project'
    },
    {
      id: 3,
      umage_url: 'img/16x9slide3.jpg',
      form_title: 'Registration for architecture project'
    },
  ]
  
  function changeSlideButtonCLicked(type){ //type: 'left', 'right'
  
    var slideImageElement = document.getElementsByClassName("slides-container");
    currentImageId = slideImageElement[0].getAttribute('image-number');
  
    slideImages.find(function(element, index){
      if(element.id == currentImageId){
        var nextImageIndex = 0;
  
        // right image button press
        if(type = 'right'){
            if(index === slideImages.length-1){
              nextImageIndex = 0;
            } else {
              nextImageIndex = index + 1;
            }
          }
  
        // left image button press
        if(type = 'left'){
          if(index === 0){
            nextImageIndex = slideImages.length-1;
          } else {
            nextImageIndex = index - 1;
          }
        }
  
        
  
        // change html elements data
        nextSlide = slideImages[nextImageIndex];
        slideImageElement[0].setAttribute('image-number', nextSlide.id);
        slideImageElement[0].style.backgroundImage = "url('"+ nextSlide.umage_url +"')";
        //slideImageElement[0].src = nextSlide.umage_url;
        document.getElementById('registrationFormTitle').innerText = nextSlide.form_title;
  
      }
    })
  }


  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function closeNav2() {
  document.getElementById("mySidenav").style.height = "0";
}