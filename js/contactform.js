//JS for the contact form
window.onload = function(){ //once elements of page are fully loaded

  var checkbox = document.getElementById("terms"); //finds checkbox and finds terms and conditions
  var btns = document.querySelectorAll(".my-form button"); //finds id term

    checkbox.addEventListener("click", function() { //var declared trigger function
      var checked = this.checked; //has to be clicked to make the function continue, you cannot without clicking
      for (var btn of btns) { //loop check of btns
        checked ? (btn.disabled = false) : (btn.disabled = true);
      }
    });

};//JS to make sure you fill in the required sections to be able to continue.
//Submit button un-blurs when you click the checkbox however cannot continue unless filling in the form
//You even need to include an @-.com in the email section to continue.


//JS for the what location to visit function
function myFunction() { //location function
var location = prompt("Where is your dream place to travel to?", "e.g. Paris"); //what it will state
if (location != null) {
  document.getElementById("demo").innerHTML = //create a sentance
"Wow " + location + "! We can help you visit " + location + ". Fill out the form below for more inormation.";
}
}
