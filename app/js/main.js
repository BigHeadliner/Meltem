$(function () {   
     
    
 
    function setProgress(index) {
        const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
      
        $progressBar
          .css('background-size', `${calc}% 100%`)
          .attr('aria-valuenow', calc);
      
        $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
      }
      
      const $slider = $('.main__slider');
      const $progressBar = $('.progress');
      const $progressBarLabel = $('.slider__label');
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        setProgress(nextSlide);
      });
      
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: false,
        speed: 400,
      });  
      
      setProgress(0); 
       
      document.addEventListener('DOMContentLoaded', function () {
        var openPopupBtn = document.getElementById('open-popup-btn');
        var closePopupBtn = document.getElementById('close-popup-btn');
        var myPopup = document.getElementById('my-popup');
    
        openPopupBtn.addEventListener('click', function () {
            myPopup.style.display = 'block';
        });
    
        closePopupBtn.addEventListener('click', function () {
            myPopup.style.display = 'none';
        });
    
        window.addEventListener('click', function (event) {
            if (event.target === myPopup) {
                myPopup.style.display = 'none';
            }
        });
    });     
     
       // Ініціалізація попапу за допомогою ідентифікатора
       $('#open-popup').on('click', function() {
        $('#popup').magnificPopup({
            type: 'inline',
            midClick: true // дозволяє відкривати popup по кліку на середню кнопку миші
        }).magnificPopup('open');
    });
    
    
  });




  
 
  
 
  
  
  
  
     

 



  


  
  
   
