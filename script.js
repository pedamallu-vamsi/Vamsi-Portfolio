function validate() {
    let email = document.getElementById("email").value;

    if (email.includes("@")) {
        alert("Thanks for your feedback! Your message has been received.")
    } else {
        alert("Please enter a valid Email Id.");
    }
}
