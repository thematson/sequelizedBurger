$(function() {
  $(".eatbutt").on("click", function(event) {
      console.log('clicked');
      event.preventDefault();
    var id = $(this).data("id");
    var nowDevoured = $(this).data("devoured");

    var newlyDevoured = {
      devoured: "1"
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newlyDevoured
    }).then(function() {
      console.log("changed sleep to", nowDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  //WORK ON THE FORM
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
     
    

    var newBurger = {
      name: $("#ca")
        .val()
        .trim(),
      devoured: "0"
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
     $("#ca").val("");  
    });
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});


