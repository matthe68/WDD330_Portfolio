window.onload = async function() {
  const time = "Last Updated: " + String(document.lastModified);
  var lastUpdated = document.querySelector("#last-updated");
  lastUpdated.innerHTML = time;

  await fetch("../json/dynamic-table-of-contents.json")
    .then(response => response.json())
    .then(json => console.log(json));
}