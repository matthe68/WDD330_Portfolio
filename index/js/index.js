window.onload = async function() {
  const time = "Last Updated: " + String(document.lastModified);
  var lastUpdated = document.querySelector("#last-updated");
  lastUpdated.innerHTML = time;

  await fetch("https://matthe68.github.io/WDD330_Portfolio/index/json/dynamic-table-of-contents.json")
    .then(response => response.json())
    .then(function(json) {
      for (let i in json["dynamic-table-of-contents"]) {
        console.log(json["dynamic-table-of-contents"][i]);
      }
      console.log(json)
    });
}