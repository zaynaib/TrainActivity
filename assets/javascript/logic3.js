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
	//var minutes =$("#min").val().trim();
	//console.log(trainName,destination,arrival,frequency,arrival,minutes);
	console.log(startTrain);

	//write to the firebase database
	 database.ref().push({
        name: trainName,
        route: destination,
        freqTime: frequency,
        firstTrain: startTrain
        //remainingTime:minutes
      });
	

	//clear the input field after the use clicks sumbit
	$("#train").val('');
	$("#destination").val('');
	$("#freq").val('');
	$("#arrival").val('');
	//$("#min").val('');

}


//retrieve data from the firebase database
database.ref().on("child_added",function(snapshot){
	//console.log(snapshot.val().name);
	
	var trainLine = snapshot.val().name;
	var trainRoute = snapshot.val().route;
	var trainFreq = snapshot.val().freqTime;
	var trainArrival = snapshot.val().firstTrain;

	/*
	console.log(trainLine);
	console.log(trainRoute);
	console.log(trainFreq);
	console.log(trainArrival);
	*/

	// First Time (pushed back 1 year to make sure it comes before current time)
    var trainArrivalConverted = moment(trainArrival, "hh:mm").subtract(1, "years");
    console.log(trainArrivalConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(trainArrivalConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFreq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    //do something with NAN
    //form validation do not allow the user to leave anything blank give an angry warning
    //logic statement


        // Add each train's data into the table
  $("tbody").append("<tr><td>" + trainLine + "</td>"+" <td>" + trainRoute + "</td>"+
  	" <td>" + trainFreq + "</td>"+ " <td>" + trainArrival + "</td>"+" <td>" + tMinutesTillTrain + "</td>"+ "</tr>");



	})



$("button").on('click',getValues);
