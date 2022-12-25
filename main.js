function createInput(event){
  var newthing = document.createElement("p");
  var enemy = document.getElementById("enemy");
  var enemyWidth = enemy.offsetWidth;
  var enemyHeight = enemy.offsetHeight;
  newthing.setAttribute('id','damageHitsplat');
  let hit = Math.floor(Math.random() * 5) + 1;
  newthing.innerHTML = "-" + hit;
  document.body.appendChild(newthing); // Your existing code


//   // get the coordinates of the mouse
//   var x = event.clientX;     // get the horizontal coordinate
//   var y = event.clientY;   // get the vertical coordinate

    var x = enemyWidth * Math.random();
    var y = enemyHeight * Math.random();

  // position newthing using the coordinates
  newthing.style.position = "absolute"; // fixes el relative to page. Could use absolute.
  newthing.style.left = x + "px";
  newthing.style.top = y + "px";
  enemy.setAttribute('class','attacked');
  setTimeout(() => {    enemy.removeAttribute('class'); }, 500);
  setTimeout(() => {    newthing.setAttribute('class','addedClass'); }, 0);
  setTimeout(() => {    newthing.remove(); }, 2000);  
}