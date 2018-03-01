
var counter = 0;


//computer picks random # between 19-120 and displays on screen at game start

compP = Math.floor(Math.random() * 120 + 19);

$( "#rand" ).append( document.createTextNode( compP ) );


//computer randomly assigns each of the 4 crystals a # between 1-12
//When player clicks gem numbers add up together in own div


green = Math.floor(Math.random() * 12 + 1);
console.log(green);
$("#green").click(function(g){ 
    alert(green);
});


//makes number sum of button pushes add together
    $(document).ready(function() {

        $(".crystal").click(function(){    
            // counter += green;
            //  $("#green").val(green);
            
            //  counter += purple;
            //  $("#purple").val(purple );


            //TODO: If green button is pushed
            
           
                counter += green;
                $("#green").val(green);
                $("#theCounter").text(counter);
           
            
           
                counter += purple;
                $("#purple").val(purple);
                $("#theCounter").text(counter);
            
            
                counter += blue;
                $("#blue").val(blue);
                $("#theCounter").text(counter);

                counter += gold;
                $("#gold").val(gold);
                $("#theCounter").text(counter);
        
            console.log(green);
            console.log(purple);
            console.log(blue);
            console.log(gold);
             $("#theCounter").text(counter);

        });

purple = Math.floor(Math.random() * 12 + 1);
console.log(purple);
$("#purple").click(function(p){ 
    alert(purple);
});
   
blue = Math.floor(Math.random() * 12 + 1);
console.log(blue);
$("#blue").click(function(b){ 
    alert(blue);
});

gold = Math.floor(Math.random() * 12 + 1);
console.log(gold);
$("#gold").click(function(a){ 
    alert(gold);
});

//player clicks on the crystals and the random number value accumulates and appears on screen.
// if the "crystal total" number === computer pick number screen prints "you won" 
    // wins counter goes up by 1
// if "crystal total" number > computer pick number screen prints "you lost"
    //losses couter goes up by 1
// after win or loss computer chooses new # 
    //crystals are assigned new numbers
    //"crystal total" is reset to zero
//Instruction box  (listing game instructions) is shown above the game
});
