var userName = null;
var email = null;
var dob = null;
var comments = "";
var comments2 = "";
var blogComments = "";

$(document).ready(function(){
	if(comments != ""){
		$("#userComments").html(comments);
	}
	if(comments2 != ""){
		$("#userComments2").html(comments2);
	}
	if(blogComments!=""){
		$("#blogComments").html(blogComments);
	}
	if(userName== null && email==null)
	{
		$("#myAccInfo").html("Please login/signup to see your account information");
	}

});

function signUp(){
	
	userName = $("#name").val();
	$("#userName1").html("Hello "+ userName + "!!");
	
	email = $("#email").val();
	dob = $("#dob").val();
	$("#myAccInfo").html("Name: "+userName+ "<br>Email: "+email);
	
	$.mobile.changePage("#mainMenu");

}

function saveComment(){
	var fName = $("#first_name").val();
	var user_email = $("#user_email").val();
	comments += $("#comment").val();
	comments += "<br>By: "+fName +" ; Email: "+user_email  +"<br><br>";

	var presentComment = $("#userComments").val();
	
	$("#userComments").html(presentComment+comments);
}


function saveComment2(){
	var fName2 = $("#first_name2").val();
	var user_email2 = $("#user_email2").val();
	comments2 += $("#comment2").val();
	comments2 += "<br>By: "+fName2 +" ; Email: "+user_email2  +"<br><br>";

	var presentComment2 = $("#userComments2").val();
	
	$("#userComments2").html(presentComment2+comments2);
}


function saveBlogComment(){
	var fName = $("#blog_first_name").val();
	var user_email = $("#blog_user_email").val();
	blogComments += $("#blog_comment").val();
	blogComments += "<br>By: "+fName +" ; Email: "+user_email  +"<br><br>";

	var presentComment = $("#blogComments").val();
	
	$("#blogComments").html(presentComment+blogComments);
}

