window.onload = async function() {
  console.log("inside last updated!");
  const time = "Last Updated: " + String(document.lastModified);
  var lastUpdated = document.querySelector("#last-updated");
  lastUpdated.innerHTML = time;
}