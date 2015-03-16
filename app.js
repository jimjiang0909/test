$(document).ready(function(){
	var parseApplicationId = "3OkMAfmwgCp1BfR0jb6Ebft7ZApUwZWjqartdoJx";
	var parseJavaScriptKey = "gPyiRJOP0cgJnkq43zUOM1hSHDR1iSDfafHMzYu0";
	Parse.initialize(parseApplicationId, parseJavaScriptKey);
	var Test = Parse.Object.extend("Tesst");
	var test= new Test();
	test.save({
		name : "jimjiang",
		text : "test",},{
		success : function(object) {
			console.log("parse.com object is saved:" + object);
			},
		error : function(object) {
			console.log("Error! parse.com object is not saved:" + object);
		}
		});
});
