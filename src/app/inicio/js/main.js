$(document)
  .ready(function () {

    // typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };

    })(jQuery);

    // input text for typing animation
    $("#holder").writeText('ENGENHARIA DE SOFTWARE');

    // initialize wow.js
    new WOW().init();

    // Push the body and the nav over by 285px over
    var main = function () {
      $('.fa-bars')
        .click(function () {
          $('.nav-screen').animate({
            right: "0px"
          }, 200);

          $('body').animate({
            right: "285px"
          }, 200);
        });

      // Then push them back */
      $('.fa-times').click(function () {
        $('.nav-screen').animate({
          right: "-285px"
        }, 200);

        $('body').animate({
          right: "0px"
        }, 200);
      });

      $('.nav-links a').click(function () {
        $('.nav-screen').animate({
          right: "-285px"
        }, 500);

        $('body').animate({
          right: "0px"
        }, 500);
      });
    };

    $(document).ready(main);

    // initiate full page scroll

    $('#fullpage').fullpage({
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: [
        'início', 'sobre', 'disciplinas', 'faq', 'acompanhe'
      ],
      anchors: [
        'início', 'sobre', 'disciplinas', 'faq', 'rodapé'
      ],
      menu: '#myMenu',
      fitToSection: false,

      afterLoad: function (anchorLink, index) {
        var loadedSection = $(this);

        //using index
        if (index == 1) {
          /* add opacity to arrow */
          $('.fa-chevron-down')
            .each(function () {
              $(this).css('opacity', '1')
            });
          $('.header-links a').each(function () {
            $(this).css('color', 'white')
          });
          $('.header-links').css("background-color", "transparent");
          $('img[src="assets/images/logo.png"]').fadeIn('fast');
          $('img[src="assets/images/cl-logo.png"]').fadeOut('fast');
        } else if (index != 1) {
          $('.header-links a')
            .each(function () {
              $(this).css('color', '#005F7E')
            });
          $('.header-links').css('background-color', 'white');
          $('img[src="assets/images/logo.png"]').fadeOut('fast');
          $('img[src="assets/images/cl-logo.png"]').fadeIn('fast');
        }

        //using index
        if (index == 2) {

          /* animate skill bars */
          $('.skillbar')
            .each(function () {
              $(this)
                .find('.skillbar-bar')
                .animate({
                  width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        }
      }
    });

    // move section down one
    $(document).on('click', '#moveDown', function () {
      $
        .fn
        .fullpage
        .moveSectionDown();
    });

    // fullpage.js link navigation
    $(document).on('click', '#about', function () {
      $
        .fn
        .fullpage
        .moveTo(2);
    });

    $(document).on('click', '#disc', function () {
      $
        .fn
        .fullpage
        .moveTo(3);
    });

    $(document).on('click', '#faq', function () {
      $
        .fn
        .fullpage
        .moveTo(4);
    });

    // smooth scrolling
    $(function () {
      $('a[href*=#]:not([href=#])')
        .click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ?
              target :
              $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target
                  .offset()
                  .top
              }, 700);
              return false;
            }
          }
        });
    });

    // = OCULTAR CAIXA DE BUSCA
    // ===========================================================================
    $(document).ready(function () {
      var trig = 1;
      //fix for chrome
      $("#search").addClass('searchbarfix');

      //animate searchbar width increase to  +150%
      $('#search').click(function (e) {
        //handle other nav elements visibility here to avoid push down
        $('.search-hide').addClass('hide');
        if (trig == 1) {
          $('#navfix2').animate({
            width: '+=150',
            marginRight: 0
          }, 400);

          trig++;
        }

      });

      // if user leaves the form the width will go back to original state

      $("#search").focusout(function () {

        $('#navfix2').animate({
          width: '-=150'
        }, 400);
        trig = trig - 1;
        //handle other nav elements visibility first to avoid push down
        $('.search-hide').removeClass('hide');

        // Open
        $('.collapsible').collapsible('open', 0);

        // Close
        $('.collapsible').collapsible('close', 0);

        // Destroy
        $('.collapsible').collapsible('destroy');

      });
    });
  });
