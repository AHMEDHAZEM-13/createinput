
const Entertext = document.getElementById("Entertext");
const error = document.getElementById("error");
const button = document.getElementById("button");

button.onclick = () => {
  if (Entertext.value.length > 6) {
    error.textContent = "good"  +Entertext.value.length;
    error.style.color = "green";
  } else {
    error.textContent = "Most Be Least 6 characters";
    error.style.color = "red";
  }
}

