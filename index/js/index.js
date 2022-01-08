window.onload = async function() {
  const time = "Last Updated: " + String(document.lastModified);
  var lastUpdated = document.querySelector("#last-updated");
  lastUpdated.innerHTML = time;

  await fetch("https://matthe68.github.io/WDD330_Portfolio/index/json/dynamic-table-of-contents.json")
    .then(response => response.json())
    .then(function(json) {
      for (let i in json.dynamicTableOfContents) {
        let dynamicTable = document.querySelector('#dynamic-table-of-contents');
        let li = document.createElement('li');
        let label = document.createElement('span');
        let a = document.createElement('a');

        label = json.dynamicTableOfContents[i].label;
        let link = json.dynamicTableOfContents[i].url;
        a.href = link;
        a.innerHTML = link;
        li.appendChild(label);
        li.appendChild(a);
        dynamicTable.appendChild(li);
      }
      console.log(json)
    });
}