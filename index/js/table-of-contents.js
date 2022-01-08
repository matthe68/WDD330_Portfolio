window.onload = async function() {
  await fetch("https://matthe68.github.io/WDD330_Portfolio/index/json/dynamic-table-of-contents.json")
    .then(response => response.json())
    .then(function(json) {
      for (let i in json.dynamicTableOfContents) {
        console.log("update: 4:05");
        let dynamicTable = document.querySelector('#assignment-ordered-list');
        let li = document.createElement('li');
        let label = document.createElement('span');
        let a = document.createElement('a');

        label.innerHTML = json.dynamicTableOfContents[i].label;
        let link = json.dynamicTableOfContents[i].url;
        let linkText = json.dynamicTableOfContents[i].urlText;
        a.href = link;
        a.innerHTML = String(linkText);
        li.appendChild(label);
        li.appendChild(a);
        dynamicTable.appendChild(li);
      }
      console.log(json)
    });
}