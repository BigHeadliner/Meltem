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
        

    // Новий код для поапу 
     
  
  // Початкове встановлення маски та показу маски при завантаженні сторінки
  $('.phone-input').inputmask({ mask: '+380-99-999-99-99', showMaskOnHover: false, clearIncomplete: true });

  // Додатковий код для відправлення форми та відображення попапів
  $('#my-form').on('submit', function (e) {
      e.preventDefault();

      var name = $('#my-form input[name="name"]').val();
      var phone = $('#my-form input[name="phone"]').val();

      // Приклад валідації (ваш власний код)
      if (name === '' || phone === '' || phone.indexOf('_') !== -1) {
          // Підсвітка незаповненого інпута червоним кольором
          $('#my-form input[name="name"], #my-form input[name="phone"]').css('border-color', 'red');
          return;
      }

      // Ваш код для відправлення форми (наприклад, AJAX-запит)

      // Закриття попапу
      $.magnificPopup.close();

      // Відобразити подяку
      showThankYouPopup();
  });

  // Додано обробник подій для кнопки відкриття попапу
  $('#open-popup').on('click', function () {
      // Скидання підсвітки при відкритті попапу
      $('#my-form input[name="name"], #my-form input[name="phone"]').css('border-color', '');

      $.magnificPopup.open({
          items: {
              src: '#popup',
              type: 'inline'
          },
          closeOnBgClick: true // дозволяє закривати попап при кліку на оверлей
      });
  });

  // Додано обробник подій для кнопки закриття попапу
  $('#popup').on('click', '#close-popup', function () {
      $.magnificPopup.close();
  });

  // Функція для відображення подяки
  function showThankYouPopup() {
      $.magnificPopup.open({
          items: {
              src: '#thank-you-popup',
              type: 'inline'
          },
          closeOnBgClick: true
      });
  }

   
     
  });




  
 
  
 
  
  
  
  
     

 



  


  
  
   
