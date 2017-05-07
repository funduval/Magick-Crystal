

//declare universal variablés


var win = 0;
var lose = 0;
var yourTotal=0;


var mysteryNumber; 
var magenta;
var blue;
var yellow;
var orange;

//call game play


gameInit();

//grab html elements
 

  var begin = $("<h3>");
  begin.addClass("clickCommand");
  $("#guessThis").append(begin);
  $(".clickCommand").html("Click the Moving Crystal");


 // generate randos

   mysteryNumber = Math.floor(Math.random() * ((120-19)+1) + 19); 
   magenta= Math.floor(Math.random()*11+1)
   blue= Math.floor(Math.random()*11+1)
   yellow= Math.floor(Math.random()*11+1)
   orange= Math.floor(Math.random()*11+1)

//wrap big function for main game moves 

function gameInit() {  


$("#guessThis").on("click", function() {

			$("#totalsAdded").html(yourTotal);
	     
	        var numReveal = $("<h2>");

	        numReveal.addClass("numero");

	        $(".clickCommand").html(mysteryNumber);
	        $(".clickCommand").css("font-size", "86px", "bold");

	        var directions = $("<p>");

	        directions.addClass("toDo");

	        $(".col-sm-4").html("Keep Clicking Crystals<br>To Add Up To: <br>" + mysteryNumber);
	        $(".col-sm-4").css("font-size", "36px");
	        $(".col-sm-4").css("text-align", "center");

        });

 //click listeners, 4 crystals

						$("#blueCrystal").on("click", function() {

						       yourTotal=yourTotal + blue;
						        $("#totalsAdded").html(yourTotal);
						        winLoseTest();

						        });

						$("#yellowCrystal").on("click", function() {

								yourTotal=yourTotal + yellow;
								$("#totalsAdded").html(yourTotal);
								winLoseTest();

						        });

						$("#magentaCrystal").on("click", function() {

								yourTotal=yourTotal + magenta;
								$("#totalsAdded").html(yourTotal);
								winLoseTest();

						        });

						$("#orangeCrystal").on("click", function() {

								yourTotal=yourTotal + orange;
								$("#totalsAdded").html(yourTotal);
								winLoseTest();

						        });

//FUNCTION JUNCTION

	function winLoseTest(){

				if (yourTotal === mysteryNumber){
						win++;
						$("#wins").html(win);
						
						alert("You made " + yourTotal +" exactly! You win the round!");
						$("#totalsAdded").html(yourTotal);
						
						
       					setTimeout(function(){
       								 reset();
      					}, 2300);
						
				};

				if (yourTotal > mysteryNumber) {
						lose++;
						$("#losses").html(lose);
						
						alert("Sorry, you went over " + mysteryNumber +"," + " so you lose!");
						$("#totalsAdded").html(yourTotal);
						
   

       					setTimeout(function(){
       								 reset();
      					}, 2300);

				};


function reset(){

	yourTotal=0;

   $("#totalsAdded").html(yourTotal);
   $(".clickCommand").html("Click the Crystal for a New Number");
   $(".clickCommand").css("font-size", "22px");
   $(".col-sm-4").html("Keep Clicking Crystals<br>To Add Up To:");

   mysteryNumber = Math.floor(Math.random() * ((120-19)+1) + 19); 
   magenta= Math.floor(Math.random()*11+1);
   blue= Math.floor(Math.random()*11+1);
   yellow= Math.floor(Math.random()*11+1);
   orange= Math.floor(Math.random()*11+1);


	};
				
								
	};






};