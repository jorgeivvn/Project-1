//pseudo-code: 1. Display a grid of 4x4 block of cubes. 2. Click on a cube and display a number/letter. 3. Click on another cube display it's number/letter 4. Determine if both are a match, if match let player know and disappear, else flip cubes back to original state. 5. Let player know he won once all cubes have disappeared.
$(document).ready(function() {
    // all custom jQuery will go here
  //   $("#trigger").click(function() {
  //   $("#demo").html("Hello World!!");
  // });
  // $(".trigger").click(function() {
  //      $(".overlay").slideToggle();
  //  });
  // $(".cube").click(function(){
  //   $(this).css('background', 'red');
  // });


  let application = {
    cardArray: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
    init: function() {
      application.shuffle();
      application.assignCubes();
    },
    shuffle: function() {
      let random = 0;
      let temp = 0;
      for(i = 1; i < application.cardArray.length; i++) {
        random = Math.round(Math.random() * i);
        temp = application.cardArray[i];
        application.cardArray[i] = application.cardArray[random];
        application.cardArray[random] = temp;
        //fisher yates shuffle
      }
      application.assignCubes();
      console.log(application.cardArray);
    },
    assignCubes: function() {
      $('.cube').each(function(index) {
        $(this).attr('data-cube-value', application.cardArray[index]);
      });
      application.clickFunctions();
    },

    clickFunctions: function() {
      $('.cube').click(function() {
        $(this).html('<p>'+$(this).data('cubeValue')+'</p>').addClass('selected');
        application.checkMatch();
      });
      //Click functions to reveal number/symbol/letter
      //Check for match
      //Check/Notify when COMPLETE/WINNER
    },
    checkMatch: function() {
      if($('.selected').length === 2) {
        if ($('.selected').first().data('cubeValue') == $('.selected').last().data('cubeValue')) {
          $('.selected').each(function() {
            // $(this).css('background'), 'white');
            $(this).animate({opacity: 0}).removeClass('remaining');
            //.removeClass('remaining') I had this at the end of this last function..
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          // $('.selected').removeClass('selected');
          // $('.selected').css('background', 'white');

          //Change background color? to create disappearing effect?
          //Remove cube
          application.checkVictory();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 1000);
            //flip cubes back
        }

      }
    },
    checkVictory: function() {
      if($('.remaining').length === 0) {
        alert("YOU ARE VICTORIOUS AND HAVE A GREAT MEMORY!");
      }
    }
  };
  application.init();
});

// let cubeArray = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];
//
// let cubeValues = [];
