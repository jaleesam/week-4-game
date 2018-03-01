var counter = 0;
var wins= 0;
var losses= 0;
var compP;
//computer picks random # between 19-120 and displays on screen at game start

compP = Math.floor(Math.random() * 120 + 19);

$( "#rand" ).append( document.createTextNode( compP ) );

$(".crystal").empty();


//computer randomly assigns each of the 4 crystals a # between 1-12
//When player clicks gem numbers add up together in own div
//makes number sum of button pushes add together


green = Math.floor(Math.random() * 12 + 1);
console.log(green);
$("#green").click(function(g){ 
    console.log("I got clicked!")
    counter += green;
    $("#green").val(green);
    $("#theCounter").text(counter);
    
});

purple = Math.floor(Math.random() * 12 + 1);
console.log(purple);
$("#purple").click(function(p){
    counter += purple;
    $("#purple").val(purple);
    $("#theCounter").text(counter);
            
    
});
   
blue = Math.floor(Math.random() * 12 + 1);
console.log(blue);
$("#blue").click(function(b){ 
    counter += blue;
    $("#blue").val(blue);
    $("#theCounter").text(counter);

   
});

gold = Math.floor(Math.random() * 12 + 1);
console.log(gold);
$("#gold").click(function(a){ 
    counter += gold;
    $("#gold").val(gold);
    $("#theCounter").text(counter);
   
});

    $(document).ready(function() {

        $(".crystal").click(function(){    
        
            console.log(green);
            console.log(purple);
            console.log(blue);
            console.log(gold);
             $("#theCounter").text(counter);

        });


//player clicks on the crystals and the random number value accumulates and appears on screen.
// if the "crystal total" number == computer pick number screen prints "you won" 
    // wins counter goes up by 1

    if( counter === compP){
        $("#wLCounter").text("You Won!");
        wins++;
        console.log(wins);
        $("#wins").html(wins);
       
    }
    

// if "crystal total" number > computer pick number screen prints "you lost"
    //losses counter goes up by 1
    if( counter > compP){
        $( "#wLCounter" ).append( document.createTextNode( "You Lost!"));
        losses++;
        console.log(losses);
        $("#losses").html(losses);
    }

// after win or loss computer chooses new # 
    //crystals are assigned new numbers
    //"crystal total" is reset to zero

});
