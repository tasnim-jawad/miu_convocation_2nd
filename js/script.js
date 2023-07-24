jQuery(function() { 
    // alert("my name showed")
    $('.banner_all').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return (i + 1) ;
        },
      });
    
})

$('#menu').slicknav({
    label: '',
    duration:'400',
});

function updateCountdown() {
    const targetDate = new Date("2023-07-30T14:59:59"); // Set your target date and time here (format: "YYYY-MM-DDTHH:mm:ss")
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    if (timeRemaining <= 0) {
      document.getElementById("countdown").innerHTML = "Countdown expired!";
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = `${days} <span>days</span>`;
      document.getElementById("hours").innerHTML =  `${hours} <span>hours</span>`;
      document.getElementById("minutes").innerHTML = `${minutes} <span>minutes</span>`;
      document.getElementById("seconds").innerHTML = `${seconds} <span>seconds</span>`;
      
    }
  }
  
  // Call the updateCountdown function every second to keep the countdown updated
  setInterval(updateCountdown, 1000);