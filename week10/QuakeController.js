import { getJSON, getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, startDate = "2019-01-01", endDate = "2019-02-02", position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake(startDate, endDate);
    this.quakesView = new QuakesView();
  }
  async init(Radius = 100) {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    console.log('INSIDE QuakesController.init() method');
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(Radius);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        let locResp = await getLocation();
        // take a look at where the information we need is in the returned object
        console.log(locResp);
        const location = locResp.coords;
        this.position.lat = location.latitude;
        this.position.lon = location.longitude;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position.lat,
      this.position.lon,
      radius
    );
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    for (let i = 0; i < this.parentElement.children.length; i++) {
      this.parentElement.children[i].addEventListener('click', e => {
        this.clickParent(e.target);
        
      });
      this.parentElement.children[i].addEventListener('touchend', e => {
        this.clickParent(e.target);
      });
    }
  }
  clickParent(target) {
    if (target.classList[0] == "listItem") {
      this.getQuakeDetails(target.dataset.id);
    } else if (target.nodeName == "DIV" || target.nodeName == "P") {
      this.clickParent(target.parentElement)
    }
  }
  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    console.log("method: getQuakeDetails() has been activated! ", quakeId);
    let thisQuake = this.quakes.getQuakeById(quakeId);
    const listItems = document.querySelectorAll('.listItem');
    let element = 1;
    element = [...listItems].filter(li => li.dataset.id == quakeId)[0];
    this.quakesView.renderQuake(thisQuake, element);
  }
}