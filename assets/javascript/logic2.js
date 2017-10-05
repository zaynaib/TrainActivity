  var config = {
    apiKey: "AIzaSyAkfBdd77mEXLLM7HOZ1RL2z-D4mmLLwkw",
    authDomain: "trainactivity-51b29.firebaseapp.com",
    databaseURL: "https://trainactivity-51b29.firebaseio.com",
    projectId: "trainactivity-51b29",
    storageBucket: "trainactivity-51b29.appspot.com",
    messagingSenderId: "681096969161"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on("child_added", function(snapshot) {

  	console.log(snapshot.val().name)
    /*
  	 var tableRow = $("<tr>");

  	 var tableDataEmployee = $("<td>")
  	 tableDataEmployee.text(snapshot.val().name)
  	 tableRow.append(tableDataEmployee)

  	 var tableDataRole = $("<td>")
  	 tableDataRole.text(snapshot.val().role)
  	 tableRow.append(tableDataRole)
  	 $("tbody").append(tableRow)

  	 
  		var convertedDate = snapshot.val().start_date
			var formattedDate = moment(convertedDate).format("MM/DD/YY")

  	 var tableDataDateStart = $("<td>")
  	 tableDataDateStart.text(formattedDate)
  	 tableRow.append(tableDataDateStart)
  	 $("tbody").append(tableRow)

  	 
  	 var currentDate = Date()
  	 var currentFormattedDate = moment(currentDate).format("MM/DD/YY")
  	//console.log(currentFormattedDate)

  	 var diffDates = moment(currentFormattedDate).diff(moment(formattedDate), 'months')
  	 var tableDataMonthsDiff = $("<td>")
  	 tableDataMonthsDiff.text(diffDates)
  	 tableRow.append(tableDataMonthsDiff)
  	 $("tbody").append(tableRow)
  	 

  	 var tableDataRate = $("<td>")
  	 tableDataRate.text(snapshot.val().m_rate)
  	 tableRow.append(tableDataRate)
  	 $("tbody").append(tableRow)

  	 var totalBilled = diffDates * (snapshot.val().m_rate)
  	 var calculatedBilled = $("<td>")
  	 calculatedBilled.text(totalBilled)
  	 tableRow.append(calculatedBilled)
  	 $("tbody").append(tableRow)
  	 //total billed
     */
  });



function tableSection() {

	var tableRow = $("<tr>");
	var tableData = $("<td>");
	
	$('tbody').append(tableRow);
	for(var i =0; i<6;i++){

		tableData.text("hello");
		$('tableRow').append(tableData);
		row = $('<<tr><td><input type="text"></td></tr>');
	}
	

	//console.log("hello");
}

$('#submit').on('click',function(event){
	event.preventDefault();
	//tableSection();

var name = $("#employee-name").val();
var role = $("#role").val();
var startDate = $("#start-date").val();
var rate = $("#monthly-rate").val();

   database.ref().push({
   		name: name,
   		role: role,
   		start_date: startDate,
   		m_rate: rate,

});
});