var enemyHealth = 1000;
var enemyAlive = true;

//Attacking
function attack(){
  var newthing = document.createElement("p");
  var enemy = document.getElementById("enemy");
  var enemyWidth = enemy.offsetWidth;
  var enemyHeight = enemy.offsetHeight;
  newthing.setAttribute('id','damageHitsplat');
  let hit = Math.floor(Math.random() * 5) + 1;
  enemyHealth -= hit;
  document.getElementById("enemyHealth").innerHTML = enemyHealth;
  if (enemyHealth <= 0) {
    enemyHealth = 0;
    enemyAlive = false;
    enemy.remove();
  }
  newthing.innerHTML = "-" + hit;
  document.body.appendChild(newthing);

    var x = enemyWidth * Math.random();
    var y = enemyHeight * Math.random();

  // position newthing using the coordinates
  newthing.style.position = "absolute"; // fixes el relative to page. Could use absolute.
  newthing.style.left = x + "px";
  newthing.style.top = y + "px";
  setTimeout(() => {    newthing.setAttribute('class','addedClass'); }, 0);
  setTimeout(() => {    newthing.remove(); }, 2000);  
}


//debug auto-hitter, will be replaced with chat commmands
window.setInterval(function(){
	if (enemyAlive = true) {
    attack();
  }
}, 10);