function showEmailForm(email) {
  const form = document.querySelector('#emailForm');
  form.setAttribute('action', `https://formspree.io/${email}`);
  form.classList.add('show');
}

function downloadPressPDF() {
  window.open('http://press.eqitii.com/', '_blank');
  showEmailForm('press@eqitii.com');
}

function notify() {
  showEmailForm('contact@eqitii.com')
}

(function () {
  let countDownDate = new Date("Sep 6, 2018").getTime();

// Update the count down every 1 second
  let x = setInterval(function () {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
})();
