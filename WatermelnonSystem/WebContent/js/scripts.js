document.addEventListener('DOMContentLoaded', function() {
  /* TRIGGERS (FOR DIALOGS AND OVERLAYS) */
  var triggers = document.querySelectorAll('.trigger');

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function(event) {
      var target = document.getElementById(this.getAttribute('rel'));
      target.classList.add('active');
      document.body.classList.add('with-overlay-nav');
      return false;
    });
  }

  /* SNACKBAR */

  // Closing elements
  var snackbars = document.querySelectorAll('.snackbar');

  for (var i = 0; i < snackbars.length; i++) {
    snackbars[i].addEventListener('click', function(event) {
      if ((event.target.classList.contains('close')) || (event.target.parentNode.classList.contains('close'))) {
        this.classList.remove('active');
      }
    });
  }

  /* DIALOGS */

  // Closing elements
  var dialogs = document.querySelectorAll('.dialog');

  for (var i = 0; i < dialogs.length; i++) {
    dialogs[i].addEventListener('click', function(event) {
      if ((event.target.classList.contains('close')) || (event.target.parentNode.classList.contains('close'))) {
        this.classList.remove('active');
        document.body.classList.remove('with-overlay');
      }
    });
  }

  /* OVERLAYS */

  // Closing elements
  var overlays = document.querySelectorAll('.overlay');

  for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener('click', function(event) {
      if ((event.target.classList.contains('close')) || (event.target.parentNode.classList.contains('close'))) {
        this.classList.remove('active');
        document.body.classList.remove('with-overlay');
        document.body.classList.remove('with-overlay-nav');
      }
    });
  }

  /* DIALOGS & OVERLAYS */

  // Close overlays & dialogs with escape key
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      var overlays = document.querySelectorAll('.overlay');

      for (var i = 0; i < overlays.length; i++) {
        overlays[i].classList.remove('active');
      }

      document.body.classList.remove('with-overlay');

      var dialogs = document.querySelectorAll('.dialog');

      for (var i = 0; i < dialogs.length; i++) {
        dialogs[i].classList.remove('active');
      }
    }
  };

  /* FASTCLICK */
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }

  /* COLLAPSIBLE */
  var collapsibles = document.querySelectorAll('.collapsible');

  for (var i = 0; i < collapsibles.length; i++) {
    var collapsible = collapsibles[i];

    if (window.location.hash == '#' + collapsible.getAttribute('id')) {
      collapsible.classList.add('expanded');
    } else {
      collapsible.classList.add('collapsed');
    }

    collapsible.addEventListener('click', function(event) {
      event.preventDefault();

      var header = this.querySelector('.header');
      var body = this.querySelector('.body');
      var container = this.querySelector('.body .container');

      // if (header.contains(event.target)) {
        if (this.classList.contains('collapsed')) {
          body.style.maxHeight = container.offsetHeight;
        } else {
          body.style.maxHeight = '';
        }
        this.classList.toggle('collapsed');
        this.classList.toggle('expanded');
      // }
    });
  }

  /* SCROLL */
  // Turn the verical scroll into horizontal scroll at the scroll area
  // Expose this function globally for using it at react
  window.addHorizontalScroll = function addHorizontalScroll(el) {
    if (!el) {
      return;
    }
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      el.scrollLeft -= (delta * 40); // Multiplied by 40
      e.preventDefault();
    }
    // IE9, Chrome, Safari, Opera
    el.addEventListener('mousewheel', scrollHorizontally, false);
    // Firefox
    el.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  }

  // It assumes only one scroll element on a page. This is case for the homepage and product detail page.
  // Modify it to align with the new requirements when necessary.
  var scroll = document.querySelector('.scroll');
  var scrollHorizontally = addHorizontalScroll(scroll);

});

 /* prevent child event trigger parent event */

 var linkincollapsibles = document.querySelectorAll('.body .container p a');

 for (var i = 0; i < linkincollapsibles.length; i++) {
  linkincollapsibles[i].addEventListener('click',function(event){
    event.stopPropagation();
  })

 }

$(document).ready(function() {
  if ($('.subcategories').find('.active').offset()) {
    $('.subcategories').animate({scrollLeft: ($('.subcategories').find('.active').offset().left - 16)},0);
  }

  // Change tmall title's hypen to non-break hypen
  $('.page-front .tmall .title-1 strong').each(function(){
    $(this).html($(this).html().replace('-','&#8209;'))
  });

  // Make page scroll to top when click binding msr card
  $(document).on('click','.svc .frap .button, .MsrContainer .frap .button', function(){
    document.querySelector('html').scrollTo(0,0)
  })

  // Add ids for homepage slide-next button
  $('.page-front .slick-next').attr('id', 'home-navigation');

   // Click search bar make parent scroll bar unscrollable
  $('#help-cta-search').on('click',function(){
    document.body.style.overflow = 'hidden';
  })

  $('#help-search-overlay .close').on('click',function(){
    document.body.style.overflow = 'inherit';
  })

  $('#featured-campaign-search').on('click', function() {
    $('#help-search-input').focus();
    $('#menu-search-input').focus();
  })
})
