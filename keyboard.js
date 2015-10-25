
//The `keyboard` helper function
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };
  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };
  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

//Check if the key is being held
function checkHeld(someShip){
	if(right.isDown){
		someShip.model.rotation += someShip.turnRate;
	}
	if(left.isDown){
		someShip.model.rotation -= someShip.turnRate;
	}
}

function checkRotation(someShip){
	someShip.model.vy = Math.sin(someShip.model.rotation) * someShip.speed;
	someShip.model.vx = Math.cos(someShip.model.rotation) * someShip.speed;
}
