$(document).ready(function() {
    
    var wins= 0;
    var losses= 0;
    //var counter is the # that the crystals add up to.
    var counter = 0;
    var compP;
   

    var green;
    var gold;
    var blue;
    var purple;

function reset() {
    counter = 0;
    compP = Math.floor(Math.random() * 101)+19;
    //computer picks random # between 19-120 and displays on screen at game start
    $("#theCounter").text(counter);

    }

function start() {
    compP = Math.floor(Math.random() * 101)+19;
    green= Math.floor(Math.random() * 12)+1;
    gold = Math.floor(Math.random() * 12)+1;
    blue = Math.floor(Math.random() * 12)+1;
    purple = Math.floor(Math.random() * 12)+1;
  
    $("#rand").text(compP);

//computer randomly assigns each of the 4 crystals a # between 1-12
//When player clicks gem numbers add up together in own div
//makes number sum of button pushes add together


        // $(".crystal").click(function(){    
        
        //     console.log(green);
        //     console.log(purple);
        //     console.log(blue);
        //     console.log(gold);
        //      $("#theCounter").text(counter);

        // });


//player clicks on the crystals and the random number value accumulates and appears on screen.
// if the "crystal total" number == computer pick number screen prints "you won" 
    // wins counter goes up by 1

    // if( counter === compP){
    //     $("#wLCounter").text("You Won!");
    //     wins++;
    //     console.log(wins);
    //     $("#wins").html(wins);
       
    // }
    

// if "crystal total" number > computer pick number screen prints "you lost"
    //losses counter goes up by 1

    // if( counter > compP){
    //     $( "#wLCounter" ).append( "You Lost!");
    //     losses++;
    //     console.log(losses);
    //     $("#losses").html(losses);
    // }

// after win or loss computer chooses new # 
    //crystals are assigned new numbers
    //"crystal total" is reset to zero

}
console.log(green);
$("#green").click(function(g){ 
    console.log("I got clicked!")
    counter += green;
    // $("#green").val(green);
    $("#theCounter").text(counter);
    
    if( counter === compP){
        $("#wins").text(wins);
        wins++;
        console.log(wins);
        $("#wins").html(wins);
        reset();
        start();
       
    }
    if( counter > compP){
        $( "#losses" ).text(losses);
        losses++;
        console.log(losses);
        $("#losses").html(losses);
        reset();
        start();
    }

});


console.log(purple);
$("#purple").click(function(p){
    counter += purple;
    
    $("#theCounter").text(counter);
     
    if( counter === compP){
        $("#wins").append(wins);
        wins++;
        console.log(wins);
        $("#wins").html(wins);
        reset();
        start();
    }
    if( counter > compP){
        $( "#losses" ).text(losses);
        losses++;
        console.log(losses);
        $("#losses").html(losses);
        reset();
        start();
    }
    
});
   

console.log(blue);
$("#blue").click(function(b){ 
    counter += blue;
 
    $("#theCounter").text(counter);

    if( counter === compP){
        $("#wins").text(wins);
        wins++;
        console.log(wins);
        $("#wins").html(wins);
        reset();
        start();
       
    }
    if( counter > compP){
        $( "#losses" ).text(losses);
        losses++;
        console.log(losses);
        $("#losses").html(losses);
        reset();
        start();
    }
   
});


console.log(gold);
$("#gold").click(function(a){ 
    counter += gold;    
  
    $("#theCounter").text(counter);
   
    if( counter === compP){
        $("#wins").text(wins);
        wins++;
        console.log(wins);
        $("#wins").html(wins);
        reset();
        start();
       
    }
    if( counter > compP){
        $( "#losses" ).text(losses);
        losses++;
        console.log(losses);
        $("#losses").html(losses);
        reset();
        start();
    }
 
});

start();

});


