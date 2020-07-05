function onClickMenu() {
  document.getElementById("ham-menu").classList.toggle("change");
  document.getElementById("nav-menu").classList.toggle("change");
}
function validateForm() {
  //let theDate = document.getElementById('birthday');
  let theName = document.getElementById("fName").value;
  let theEmail = document.getElementById("email").value;
  let thePhone = document.getElementById("phone").value;
  let theMessage = document.getElementById("message").value;
  let errorElement = document.getElementById("error");
  let text;

  event.preventDefault();
  if (theName.length < 3) {
    errorElement.style.padding = "10px";
    text = "The name is required";
    errorElement.textContent = text;
    return false;
  }
  if (theEmail.indexOf("@") == -1 || theEmail.length < 6) {
    errorElement.style.padding = "10px";
    text = "The email is required";
    errorElement.textContent = text;
    return false;
  }

  if (isNaN(thePhone) || thePhone < 6) {
    errorElement.style.padding = "10px";
    text = "The Phone is required";
    errorElement.textContent = text;
    return false;
  }

  if (theMessage.length < 20) {
    errorElement.style.padding = "10px";
    text = "message is required";
    errorElement.textContent = text;
    return false;
  }

  if (validateForm) {
    alert("form successfully submitted");
    true;
    document.getElementById("contactForm").reset();
  }
}

// if(theDate.value ===undefined){
//     message.push('Enter your date of Birth');
// }
// if(message.length>0){
//     errorElement.innerHTML =message.join(' , ')
//  }
