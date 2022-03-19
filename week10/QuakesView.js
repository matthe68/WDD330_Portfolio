  // Quake View handler
  export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      listElement.innerHTML = "";
      console.log("list: ", quakeList);
      let list = quakeList;
      console.log("list: ", list.length);
      for (let quake in list) {
        console.log(list[quake]);
        let listItem = document.createElement('div');
        let div1 = document.createElement('div');
        div1.innerHTML = list[quake].properties.title;
        let div2 = document.createElement('div');
        div2.innerHTML = new Date(list[quake].properties.time);
        listItem.appendChild(div1);
        listItem.appendChild(div2);
        listItem.classList.add("listItem");
        listItem.dataset.id = list[quake].properties.ids;
        // listItem.dataset.magnitude = list[quake].properties.mag;
        // listItem.dataset.rms = list[quake].properties.rms;
        // listItem.dataset.nst = list[quake].properties.nst;
        // listItem.dataset.sig = list[quake].properties.sig;
        // listItem.dataset.url = list[quake].properties.url;
        
        listElement.appendChild(listItem);
      };
      

      
      
  //     listElement.innerHTML = quakeList.features
  //     .map(quake => {
  //       return `
  //         ${quake.properties.title}, ${new Date(
  //         quake.properties.time
  //       )}
  // `;
  //     })
  //     .join('');
    }
    renderQuake(quake, element) {
      console.log("quake: ", quake);
      console.log("element: ", element);
      if (element.classList.contains("expanded")) {
        element.classList.remove("expanded");
        element.querySelector('ul').remove();
        element.querySelector('hr').remove();
      } 
      else 
      {
        element.classList.add("expanded");
        let line = document.createElement("hr");
        let ul = document.createElement("ul");
        for (let i = 0; i < Object.keys(quake.properties).length; i++) {
          let li = document.createElement('li');
          li.innerHTML = `${Object.keys(quake.properties)[i]}: ${Object.values(quake.properties)[i]}`;
          ul.appendChild(li);
        }
        element.appendChild(line);
        element.appendChild(ul);
      }
      const quakeProperties = Object.entries(quake.properties);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    }
  }