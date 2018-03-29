$(document).ready(function() {
  setInterval(function() {
    var time = new Date();
    var hour = time.getHours() % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    $(".hours1").css("top", hour*5+230+"px");
    $(".hours2").css("top", hour*5+180+"px");
    $(".hours3").css("top", hour*5+230+"px");
    	$(".flame1").css("top", hour*5+80+"px");
    	$(".flame1a").css("top", hour*5+-35+"px");
    	$(".flame1b").css("top", hour*5+60+"px");
    $(".mins1").css("top", minutes*5+230+"px");
    $(".mins2").css("top", minutes*5+180+"px");
    $(".mins3").css("top", minutes*5+230+"px");
        $(".flame2").css("top", minutes*5+80+"px");
    	$(".flame2a").css("top", minutes*5+-35+"px");
    	$(".flame2b").css("top", minutes*5+60+"px");
    $(".secs1").css("top", seconds*5+230+"px");
  	$(".secs2").css("top", seconds*5+180+"px");
 	$(".secs3").css("top", seconds*5+230+"px");
 	    $(".flame3").css("top", seconds*5+80+"px");
  		$(".flame3a").css("top", seconds*5+-35+"px");
 		$(".flame3b").css("top", seconds*5+60+"px");
  }, 1000);});

$(document).ready(function() {

setTimeout(function () {
  new Audio('wind.mp3').play();
}, 500);

setTimeout(function(){
		$("body").addClass("alarming");
		$(".bottombar").addClass("alarming");
		$(".flame1").addClass("alarming1");
		$(".flame1a").addClass("alarming1a");
		$(".flame1b").addClass("alarming1b");

		$(".flame2").addClass("alarming2");
		$(".flame2a").addClass("alarming2a");
		$(".flame2b").addClass("alarming2b");

		$(".flame3").addClass("alarming3");
		$(".flame3a").addClass("alarming3a");
		$(".flame3b").addClass("alarming3b");

		$(".button").addClass("buttona")

	},6000);

$(".button").click(function() {
	$(".button").removeClass("buttona")
	$(".flame1").removeClass("alarming1");
	$(".flame1a").removeClass("alarming1a");
	$(".flame1b").addClass("alarming1b");

	$(".flame2").removeClass("alarming2");
	$(".flame2a").removeClass("alarming2a");
	$(".flame2b").removeClass("alarming2b");

	$(".flame3").removeClass("alarming3");
	$(".flame3a").removeClass("alarming3a");
	$(".flame3b").removeClass("alarming3b");

	$(".bottombar").removeClass("alarming");
	$("body").removeClass("alarming")});

});
