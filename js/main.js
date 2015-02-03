$(document).ready(function(){

//gift 1		
	$("#gift1_btn").click(function() {		
		$("#gift1_btn").hide(200, function(){
			$("#firgiftcol").attr("class", "col-md-4 col-md-offset-1"); 
			$("#gift1_blurb").show( "slow" );			
		});		
	});
	
	$("#remove1").click(function() {
		$("#gift1_blurb").hide(200, function(){
			$("#firgiftcol").attr("class", "col-md-3 col-md-offset-1");
			$("#gift1_btn").show("slow");	
		});
	});

//gift 2	
	$("#gift2_btn").click(function() {		
		$("#gift2_btn").hide(200, function(){
			$("#secgiftcol").attr("class", "col-md-6"); 
			$("#gift2_blurb").show( "slow" );			
		});		
	});
	
	$("#remove2").click(function() {
		$("#gift2_blurb").hide(200, function(){
			$("#secgiftcol").attr("class", "col-md-3");
			$("#gift2_btn").show("slow");	
		});
	});

//gift 3
	$("#gift3_btn").click(function() {		
		$("#gift3_btn").hide(200, function(){
			$("#secgiftcol").attr("class", "col-md-1");
			$("#thirgiftcol").attr("class", "col-md-6");
			$("#gift3_blurb").show( "slow" );			
		});		
	});
	
	$("#remove3").click(function() {
		$("#gift3_blurb").hide(200, function(){
			$("#secgiftcol").attr("class", "col-md-2");
			$("#thirgiftcol").attr("class", "col-md-3");
			$("#gift3_btn").show("slow");	
		});
	});

//gift 4
	$("#gift4_btn").click(function() {		
		$("#gift4_btn").hide(200, function(){
			$("#fourgiftcol").attr("class", "col-md-6 col-md-offset-2");
			$("#gift4_blurb").show( "slow" );			
		});		
	});
	
$("#remove4").click(function() {
		$("#gift4_blurb").hide(200, function(){
			$("#fourgiftcol").attr("class", "col-md-3 col-md-offset-2");
			$("#gift4_btn").show("slow");	
		});
	});

//gift 5
	$("#gift5_btn").click(function() {		
		$("#gift5_btn").hide(200, function(){
			$("#fivgiftcol").attr("class", "col-md-6 col-md-offset-1");
			$("#gift5_blurb").show( "slow" );			
		});		
	});
	
	$("#remove5").click(function() {
		$("#gift5_blurb").hide(200, function(){
			$("#fivgiftcol").attr("class", "col-md-3 col-md-offset-1");
			$("#gift5_btn").show("slow");	
		});
	});


});


