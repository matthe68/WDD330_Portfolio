import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor(startDate, endDate) {
    //this.baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    let startTime = startDate;
    let endTime = endDate;
    this.baseUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`;
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(lat, long, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    let quakesInfo = await getJSON(`${this.baseUrl}&latitude=${lat}&longitude=${long}&maxradiuskm=${radius}`);
    this._quakes = quakesInfo.features;
    console.log("getEarthQuakesByRadius    ._quakes: ", this._quakes);
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.filter(item => item.properties.ids === id)[0];
  }
}