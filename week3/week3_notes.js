let ladder = {
  step: 0,
  up() {
    console.log("up");
    this.step++;
    return this;
  },
  down() {
    console.log("down");
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};
let ladderEl = document.querySelector('#ladder');
let upEl = document.querySelector('#up');
let downEl = document.querySelector('#down');
let resetEl = document.querySelector('#reset');
ladderEl.innerHTML = ladder.step;
function reset() {
  ladder.step = 0;
  ladderEl.innerHTML = ladder.step;
}
function up() {
  ladder.up();
  ladderEl.innerHTML = ladder.step;
}
function down() {
  ladder.down();
  ladderEl.innerHTML = ladder.step;
}
upEl.addEventListener('click', () => up());
downEl.addEventListener('click', () => down());
resetEl.addEventListener('click', () => reset());