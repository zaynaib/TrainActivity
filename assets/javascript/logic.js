//config the database
  var config = {
    apiKey: "AIzaSyAkfBdd77mEXLLM7HOZ1RL2z-D4mmLLwkw",
    authDomain: "trainactivity-51b29.firebaseapp.com",
    databaseURL: "https://trainactivity-51b29.firebaseio.com",
    projectId: "trainactivity-51b29",
    storageBucket: "trainactivity-51b29.appspot.com",
    messagingSenderId: "681096969161"
  };

  firebase.initializeApp(config);

//create a reference to the database
var database = firebase.database();

//grab values from the form
//writes these values in the database

function getValues(event){
	event.preventDefault();
	var trainName = $("#train").val().trim();
	var destination = $("#destination").val().trim();
	var frequency =$("#freq").val().trim();
	var arrival =$("#arrival").val().trim();
	var minutes =$("#min").val().trim();
	//console.log(trainName,destination,arrival,frequency,arrival,minutes);


	//write to the firebase database
	 database.ref().push({
        name: trainName,
        route: destination,
        freqTime: frequency,
        arrivalTime: arrival,
        remainingTime:minutes
      });
	

	//clear the input field after the use clicks sumbit
	$("#train").val('');
	$("#destination").val('');
	$("#freq").val('');
	$("#arrival").val('');
	$("#min").val('');

}


//retrieve data from the firebase database
database.ref().on("child_added",function(snapshot){
	//console.log(snapshot.val().name);
	
	var trainLine = snapshot.val().name;
	var trainRoute = snapshot.val().route;
	var trainFreq = snapshot.val().freqTime;
	var trainArrival = snapshot.val().arrivalTime;
	var trainRemainTime = snapshot.val().remainingTime;

	

	//console.log(trainLine);
/*
	 var tableRow = $("<tr>");

  	 var tableData = $("<td>");
  	 tableData.text(snapshot.val().name);
  	 tableRow.append(tableData);
  	  $("tbody").append(tableRow);

  	 */

  	    // Add each train's data into the table
  $("tbody").append("<tr><td>" + trainLine + "</td>"+" <td>" + trainRoute + "</td>"+
  	" <td>" + trainFreq + "</td>"+ " <td>" + trainArrival + "</td>"+" <td>" + trainRemainTime + "</td>"+ "</tr>");

	//create a row
	//var tableRow = $("<tr>");
	//create table data
	//var tableData = $("<td>").text(trainLine);
	//add text to table data
	//tableData.text(trainLine);
	//append it to row
	//tableRow.append(tableData);
	//append row to table body
	//$("tbody").append(tableRow);


	//create table with all of the train information

	  // Add each train's data into the table
  //$("tbody").append("<tr><td>" + trainLine + "</td><td>" + trainRoute + "</td><td>" +
  //trainFreq + "</td><td>" + trainArrival + "</td><td>" + trainRemainTime + "</td>" + "</tr>");

})




/*
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var empName = childSnapshot.val().name;
  var empRole = childSnapshot.val().role;
  var empStart = childSnapshot.val().start;
  var empRate = childSnapshot.val().rate;

  // Employee Info
  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  // Prettify the employee start
  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});
*/

//append it to the table function

//send it up to the firebase database

//localCaching look at json

$("button").on('click',getValues);
