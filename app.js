//pseudo-code: 1. Display a grid of 4x4 block of cubes. 2. Click on a cube and display it's color. 3. Click on another cube display it's color 4. Determine if both colors are a match, if match let player know and disappear, else flip cubes back to original state. 5. Let player know he won once all cubes have disappeared.
$(document).ready(function() {
    // all custom jQuery will go here
  //   $("#trigger").click(function() {
  //   $("#demo").html("Hello World!!");
  // });
  // $(".trigger").click(function() {
  //      $(".overlay").slideToggle();
  //  });
  $(".cube").click(function(){
    $(this).css('background', 'red');
  });
  let application = {
    cardArray: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
  }
});

// let cubeArray = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];
//
// let cubeValues = [];
