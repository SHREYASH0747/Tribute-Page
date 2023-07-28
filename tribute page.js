function myFunction() {
  let text;
  let person = prompt("Wrire tribute here:", "We loved you");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text =  person ;
  }
  document.getElementById("demo").innerHTML = text;
}