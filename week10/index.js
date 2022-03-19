import QuakesController from "./QuakeController.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";

// We need to refactor the everything function. In the end we want a function like below
// create the appropriate functions, move the functionality from everything() to the functions so that the showQuakes() function below will work.
async function showQuakes() {
  console.log("running");
  let startDate = document.querySelector("#start-date").value;
  let endDate = document.querySelector("#end-date").value;
  let radius = document.querySelector("#radius").value;
  let controller = new QuakesController("#quakeList", startDate, endDate);
  let res = await controller.init(radius);
  // // render the list to the list element
  // const listElement = document.querySelector("#quakeList");
  // listElement.innerHTML = generateListMarkup(
  //   quakes.features,
  //   earthquakeListTemplate
  // );

  // // attach a listener to the quakes that will listen for a click and render out details about the quake
  // listElement.addEventListener("click", earthQuakeClickHandler);
}
document.querySelector("#submitButton").addEventListener('click', showQuakes);
showQuakes();






// import { getJSON, getLocation, testGetQuakesForLocation } from "./utilities.js";

// let today = new Date();
// let startTime = '2019-01-01';
// let endTime = '2019-02-02';
// const baseUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`;

// // let location = getLocation();
// // console.log("location: ", location);

// let cJSON = await getJSON(baseUrl).then((item) => getLocation(item));
// let lat = cJSON.coords.latitude;
// let long = cJSON.coords.longitude;
// let earthQuakes = await testGetQuakesForLocation(baseUrl, lat, long, 100);
// console.log("earthQuakes: ", earthQuakes);
// //https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02
// //https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-03-19&endtime=2022-03-19&latitude=40.2830917&longitude=-111.6772864$maxradiuskm=100
