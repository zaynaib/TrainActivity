//TO DO

//https://www.sitepoint.com/10-jquery-form-validation-plugins/
//https://formden.com/blog/validate-contact-form-jquery


//https://firebase.google.com/docs/auth/web/github-auth
//https://github.com/settings/applications/599322

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
	var startTrain =$("#arrival").val().trim();
	var frequency =$("#freq").val().trim();
	
	console.log(startTrain);

	//form vaildation
	var re = /\d\d:\d\d/;
	//console.log(/\d\d:\d\d/.test("04:00"));
	//console.log(re.test(startTrain));
	if(re.test(startTrain) === false){
		console.log("red");
		document.getElementById("arrival").style.borderColor = "red";

	}
	




	//write to the firebase database
	 database.ref().push({
        name: trainName,
        route: destination,
        freqTime: frequency,
        firstTrain: startTrain
      });
	

	//clear the input field after the use clicks sumbit
	$("#train").val('');
	$("#destination").val('');
	$("#freq").val('');
	$("#arrival").val('');

}


//retrieve data from the firebase database
database.ref().on("child_added",function(snapshot){
	
	var trainLine = snapshot.val().name;
	var trainRoute = snapshot.val().route;
	var trainFreq = snapshot.val().freqTime;
	var trainArrival = snapshot.val().firstTrain;


    var trainArrivalConverted = moment(trainArrival, "hh:mm").subtract(1, "days");
    var currentTime = moment();
    var diffTime = moment().diff(moment(trainArrivalConverted), "minutes");
    var tRemainder = diffTime % trainFreq;
    var tMinutesTillTrain = trainFreq - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

  

        // Add each train's data into the table
  $("tbody").append("<tr><td>" + trainLine + "</td>"+" <td>" + trainRoute + "</td>"+
  	" <td>" + trainFreq + "</td>"+ " <td>" + trainArrival + "</td>"+" <td>" + tMinutesTillTrain + "</td>"+ "</tr>");

  	
  	var add = $("<button id='add'>");
  	var del = $("<button id='delete'>");

	})



$("button").on('click',getValues);
