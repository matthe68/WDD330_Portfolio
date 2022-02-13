export function visibilityToggle(x) {
  if (x.target.classList.contains('filter-toggle')) {
    let visibilityButtons = document.querySelectorAll('.filter-toggle');
    console.log("list: ", visibilityButtons);
    visibilityButtons.forEach((i) => i.classList.remove('active'));
    x.target.classList.add('active');
  }
  
}
