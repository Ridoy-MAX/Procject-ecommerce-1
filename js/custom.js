$(document).ready(function(){ 
      //slider start;
    $('.banner-slider').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
       
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;

//new procdut slider start;
$('.new-product-banner').slick({
  autoplay: true,
  autoplaySpeed: 1800, 
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
    
      }
    },
    {
      breakpoint: 768,
      settings: {
   
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
 //new procdut slider ENd;


 //new testi slider start;
 $('.testi-banner').slick({
  autoplay: true,
  autoplaySpeed: 1800, 
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
    
      }
    },
    {
      breakpoint: 768,
      settings: {
   
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });

    //new testi slider end;



         /* Periodic Timer. Period is equal 10 days */
         $('#periodic-timer_period_days').syotimer({
          date: new Date(2050, 18, 19, 20, 30),
          layout: "dhms",
          periodic: true,
          periodInterval: 10,
          periodUnit: "d",
        });
          /* Periodic Timer. Period is equal 10 days */

  
     //about-counter;
  
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });

       //about patner slider START;
       $('.patner-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      
        });
         //about patner slider END;


});      