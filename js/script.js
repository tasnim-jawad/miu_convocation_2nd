

// *************************** for slider* **********************
jQuery(function() { 
    // alert("my name showed")
    $('.banner_all').slick({
        infinite: true,
        autoplay:true,
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
// *************************** for nav ***********************
$('#menu').slicknav({
    label: '',
    duration:'400',
});



// *************************** for timer ***********************
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


// *************************** for nitic (not used)***********************
  function showContent(contentId) {
    // Hide all content divs first
    console.log(`clicke ${contentId}`)
    var contentDivs = document.querySelectorAll('#notice_container > div');
    contentDivs.forEach(function(div) {
      console.log(`hidden`)
      div.classList.add('hidden');
    });
  
    // Show the selected content div
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.classList.remove('hidden');
    }
  }



// *************************** for showPhase ***********************
  function showPhase(phase) {
    const phases = document.getElementsByClassName("phase");
    for (const phaseElement of phases) {
        if (phaseElement.id === phase) {
            phaseElement.classList.remove("d-none");
        } else {
            phaseElement.classList.add("d-none");
        }
    }
}


// *************************** for typing animation ***********************
  function getScreenWidth() {
    return window.screen.width;
  }

  // Example usage:
  var screen_size = getScreenWidth();
  console.log("Screen Width: " + screen_size);

  // Define the showCursor variable based on screen size
  var showCursor = true;
  if (screen_size > 767) {
    showCursor = true;
  } else {
    showCursor = false;
  }
  var typed = new Typed('.note_text_1', {
    strings: ["জরুরী নোটিস", " ২য় সমাবর্তনের উন ও অনান্য গিফট সামগ্রি গুলশান ক্যম্পাস থেকে সংগ্রহ করতে হবে","আগামি ২৭ ও ২৮ জুলাই, ২০২৩ সকাল ৯:০০ টা থেকে ৫:০০ টার মধ্যে "],
    typeSpeed: 50,
    backSpeed: 10,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    showCursor: showCursor,
  });
  var typed = new Typed('.note_text_2' ,{
    strings: ["জরুরী নোটিস", " ২য় সমাবর্তনের উন ও অনান্য গিফট সামগ্রি গুলশান ক্যম্পাস থেকে সংগ্রহ করতে হবে","আগামি ২৭ ও ২৮ জুলাই, ২০২৩ সকাল ৯:০০ টা থেকে ৫:০০ টার মধ্যে "],
    typeSpeed: 50,
    backSpeed: 10,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    showCursor: showCursor,
  });
  var typed = new Typed('.note_text_3' ,{
    strings: ["জরুরী নোটিস", " ২য় সমাবর্তনের উন ও অনান্য গিফট সামগ্রি গুলশান ক্যম্পাস থেকে সংগ্রহ করতে হবে","আগামি ২৭ ও ২৮ জুলাই, ২০২৩ সকাল ৯:০০ টা থেকে ৫:০০ টার মধ্যে "],
    typeSpeed: 50,
    backSpeed: 10,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    showCursor: showCursor,
  });
  var typed = new Typed('.note_text_4' ,{
    strings: ["জরুরী নোটিস", " ২য় সমাবর্তনের উন ও অনান্য গিফট সামগ্রি গুলশান ক্যম্পাস থেকে সংগ্রহ করতে হবে","আগামি ২৭ ও ২৮ জুলাই, ২০২৩ সকাল ৯:০০ টা থেকে ৫:০০ টার মধ্যে "],
    typeSpeed: 50,
    backSpeed: 10,
    startDelay: 500,
    backDelay: 1000,
    loop: true,
    showCursor: showCursor,
  });
  
  



// *************************** for popup ***********************
  // Get the elements
const viewMessageButton = document.getElementById('viewMessageButton');
const popupContainer = document.getElementById('popupContainer');
const closeButton = document.getElementById('closeButton');

// Function to show the popup
function showPopup() {
  popupContainer.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  popupContainer.style.display = 'none';
}

// Event listeners
viewMessageButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);

//notice section 
