// Saves options to localStorage.
function save_options() {
  var input = document.getElementById("code");
  var code = input.value;
  localStorage["code"] = code;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var code = localStorage["code"];
  if (!code) {
    return;
  }
  var input = document.getElementById("code");
  input.value = code;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
