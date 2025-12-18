console.log('Hello kittens!');

// $(window).on('scroll',function() {
//     var $nav = $('nav');
//     var navHeight = $nav.height();
//     var amountScrolled = $(window).scrollTop();
  
//   $('section[data-section-color]').each(function() {
//     var thisTop = $(this).offset().top;
//     if ((thisTop - navHeight) == 0) {
//         var color = $(this).data('section-color');
//       $nav.addClass(color);
//       console.log(color);
//     }
//   });
// });

// var $nav = $("nav")
// var navHeight = $nav.height()
// $(window).on("scroll", function () {
//   var amountScrolled = $(window).scrollTop()
//   $(".section[data-section-color]").each(function () {
//     var thisTop = $(this).offset().top
//     var thisHeight = $(this).height()
//     if (
//       parseInt(thisTop - navHeight) < amountScrolled &&
//       parseInt(thisTop + thisHeight - navHeight) > amountScrolled
//     ) {
//       var color = $(this).data("section-color")
//       $nav.attr("class", color)
//     }
//   })
// })


// - - - - - - - - - - switching words in span - - - - - 
// const values = ['FELLA', 'FEEL', 'DOING'];
// let index = 0;

// const change = () => {
//   document.getElementById('fella').innerHTML = values[index];
//   index = ++index % values.length;
//   setTimeout(change, 1000);
// }

// change();


// - - - -  - function to change opacity of selected - - - -
// function fadeOutText() {
//         var textarea = document.getElementById('text');
//         textarea.style.opacity = 0; // Start fading out
//         setTimeout(function() {
//             textarea.value = ''; // Clear text after fade out
//             textarea.style.opacity = 1; // Reset opacity for future use
//         }, 1000); // Match this time with the CSS transition duration
//     }

// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  console.log('fadeIn');
  if (el.classList.contains('is-hidden')){
    el.classList.remove('is-hidden');
  }
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

var btn = document.querySelector('.js-btn');
var el = document.querySelector('.js-fade');

btn.addEventListener('click', function(e){
  if(el.classList.contains('is-hidden')){
    fadeIn(el);
  }
  else {
    fadeOut(el);
  }
});

fadeOut(el);
fadeIn(el);
fadeIn(el, "inline-block");