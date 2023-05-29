function timeSaved (event) {
  event.preventDefault (); // prevent the default form submission behavior
  // Get the input values
  let newsletter = document.getElementById("newsletter_count").value;

  /*let reading = document.getElementById("reading").value;
  let others = document.getElementById("videos_podcasts").value;*/

  // Display the spinning circle animation
  document.getElementById("result").innerHTML = '<div class="spinner"></div>';

  // Simulate a delay to mimic the calculation process
  setTimeout(() => {

    // Perform the calculation
    let result = Math.round((Number(newsletter)*5*10*0.8)/60); // + (Number(reading)*10*0.5)/60 + Number(others)*1*0.5);

    // Display the result
    document.getElementById("result").innerHTML = result + "h";
  }, 2000); // Adjust the delay time (in milliseconds) as needed
}