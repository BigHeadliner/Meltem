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
        
       
      $('#open-popup').on('click', function() {
        $.magnificPopup.open({
            items: {
                src: '#popup',
                type: 'inline'
            },
            closeOnBgClick: true // дозволяє закривати попап при кліку на оверлей
        });
    });

    // Додано обробник подій для кнопки закриття попапу
    $('#popup').on('click', '#close-popup', function() {
        $.magnificPopup.close();
    });
   
     
  });




  
 
  
 
  
  
  
  
     

 



  


  
  
   
