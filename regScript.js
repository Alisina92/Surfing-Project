function changeHandler() {
  if (!document.getElementById("birthday").required) {
    errorElement.style.padding = "10px";
    text = "Date is required";
    errorElement.textContent = text;
    return false;
  }
}
function dropDownChange(event) {
  return event.target.value;
}

function regValidation() {
  let theName = document.getElementById("fName").value;
  let theEmail = document.getElementById("email").value;
  let thePhone = document.getElementById("phone").value;
  let errorElement = document.getElementById("error");
  console.log(theDate.value);
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
  if (regValidation) {
    alert("form successfully submitted");
    true;
    document.getElementById("contactForm").reset();
  }
}
