// ===========================================
// STATE GLOBAL VARIABLES
// ===========================================


  var mysteryNumber = Math.floor(Math.random() * ((120-19)+1) + 19);    
  var win = 0;
  var lose = 0;
  var yourTotal = 0;


  var magenta= Math.floor(Math.random()*11+1)
  var blue= Math.floor(Math.random()*11+1)
  var yellow= Math.floor(Math.random()*11+1)
  var orange= Math.floor(Math.random()*11+1)

  console.log(mysteryNumber);
  console.log(magenta);
  console.log(blue);
  console.log(yellow);
  console.log(orange);


  
  var begin = $("<h3>");
  begin.addClass("clickCommand");
  $("#guessThis").append(begin);
  $(".clickCommand").html("Click the Moving Crystal");


	   

// ===========================================
// GRAB HTML ELEMENTS
// ===========================================
$("#guessThis").on("click", function() {
	     
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

						$("#blueCrystal").on("click", function() {

						       yourTotal=yourTotal + blue;
						        $("#totalsAdded").html(yourTotal);
						        winTest();
						        loseTest();

						        });

						$("#yellowCrystal").on("click", function() {

								yourTotal=yourTotal + yellow;
								$("#totalsAdded").html(yourTotal);
								winTest();
						        loseTest();

						        });

						$("#magentaCrystal").on("click", function() {

								yourTotal=yourTotal + magenta;
								$("#totalsAdded").html(yourTotal);
								winTest();
						        loseTest();

						        });

						$("#orangeCrystal").on("click", function() {

								yourTotal=yourTotal + orange;
								$("#totalsAdded").html(yourTotal);
								winTest();
						        loseTest();

						        });


	function winTest(){

		if (yourTotal === mysteryNumber){
				win++;
				$("#wins").html(win);
				alert("You Win the Round!")
				
		}

	}

	function loseTest(){

		if (yourTotal > mysteryNumber) {
				lose++;
				$("#losses").html(lose);
				alert("Sorry, but, you lose!");
				
		}
								
	}


	








					







