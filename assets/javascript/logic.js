//variables need

//grab values from the form

function getValues(event){
	event.preventDefault();
	var trainName = $("#train").val().trim();
	var destination = $("#destination").val().trim();
	var frequency =$("#freq").val().trim();
	var arrival =$("#arrival").val().trim();
	var minutes =$("#min").val().trim();
	console.log(trainName,destination,arrival,frequency,arrival,minutes);
	$("#train").val('');
	$("#destination").val('');
	$("#freq").val('');
	$("#arrival").val('');
	$("#minutes").val('');

	//create a json object

}

//append it to the table function

//send it up to the firebase database

//localCaching look at json

$("button").on('click',getValues);
