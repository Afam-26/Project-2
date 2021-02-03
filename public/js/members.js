$(document).ready(() => {
  let userID;

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {

    // The following will print out all the user appointments
    userID = data.id;
    $(".member-name").text(data.firstName);

  });

  // GET Make request for all appointments to display available appointments
  $.get("/api/available_appointments").then(data => {
    console.log("view all available appointments");
    console.log(data);
  });


  $(".appointments-button").click(function() {
    $.get(`/api/appointments/user/${userID}`).then(data => {
    
      for(var i = 0; i < data.length; i++){
        $(".view-appointments").append('<li>' + data[i].appointmentDate + '</li>');
      }
      
      });
  });


    $(".make-appointment").click(function() {
      var time = "11:35";
      var userNumber = userID;

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Nine").click(function() {
      var time = document.getElementById("Nine").textContent
      var userNumber = userID;
      var x = document.getElementById("Ten");
      $("#Nine").css('background', 'green');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Ten").click(function() {
      var time = document.getElementById("Ten").textContent
      var userNumber = userID;
      $("#Ten").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Eleven").click(function() {
      var time = document.getElementById("Eleven").textContent
      var userNumber = userID;
      $("#Eleven").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Twelve").click(function() {
      var time = document.getElementById("Twelve").textContent
      var userNumber = userID;
      $("#Twelve").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#One").click(function() {
      var time = document.getElementById("One").textContent
      var userNumber = userID;
      $("#One").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Two").click(function() {
      var time = document.getElementById("Two").textContent
      var userNumber = userID;
      $("#Two").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Three").click(function() {
      var time = document.getElementById("Three").textContent
      var userNumber = userID;
      $("#Three").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Four").css('display', 'none');
      $("#Five").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Four").click(function() {
      var time = document.getElementById("Four").textContent
      var userNumber = userID;
      $("#Four").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Five").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Five").click(function() {
      var time = document.getElementById("Five").textContent
      var userNumber = userID;
      $("#Five").css('background', 'green');
      $("#Nine").css('display', 'none');
      $("#Ten").css('display', 'none');
      $("#Eleven").css('display', 'none');
      $("#Twelve").css('display', 'none');
      $("#One").css('display', 'none');
      $("#Two").css('display', 'none');
      $("#Three").css('display', 'none');
      $("#Four").css('display', 'none');

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });
});


