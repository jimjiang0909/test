
	var parseID = "3OkMAfmwgCp1BfR0jb6Ebft7ZApUwZWjqartdoJx";
	var parseJavaScriptKey = "gPyiRJOP0cgJnkq43zUOM1hSHDR1iSDfafHMzYu0";
	var parseRESTKey = "kAN8g00Qo0ELsZ6SebdBEi54spf9llzYS1Q1SUb3";
$(document).ready(function(){
	getMessages();
	$("#send").click(function(){
		var username = $('input[name=username]').attr('value');
		
		var message  = $('input[name=message]').attr('value');
		console.log(username);
		console.log('!');
		$.ajax({
			url: 'https://api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id' : parseID,
				'X-Parse-REST-API-Key' : parseRESTKey,
				},
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			data: JSON.stringify({
				'username' : username,
				'message' : message,
				}),
			type : 'POST',
			success: function() {

				console.log('sent');
				getMessages();
			},
			error: function() {
				console.log('error');
			}
		});
	});
});

function getMessages() {

		$.ajax({
			url: 'https://api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id' : parseID,
				'X-Parse-REST-API-Key' : parseRESTKey,
				},
			contentType: 'application/json',
			dataType: 'json',
			type : 'GET',
			success: function(data) {
				
				console.log('get');
				updateView(data);
			},
			error: function() {
				console.log('error');
			}
		});
}
function updateView(messages) {
	var table = $('.table tbody');
	table.html('');
	$.each(messages.results, function(index, value) {
			var trE1 = $('<tr><td>'
				+ value.username
				+ '</td><td>'
				+ value.message
				+ '</td></tr>');
			table.append(trE1);
			});
			console.log(messages);
}
