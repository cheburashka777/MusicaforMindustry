const lib = require("alib");

const mySound = lib.loadSound("death");

Events.on(UnitDestroyEvent, event => {
  // display toast on top of screen when the unit was a player
  if(event.unit.isPlayer()){
    // engine will spawn this sound at this location (X,Y)
    mySound.at(1, 1);
	Vars.ui.hudfrag.showToast("Pathetic.");
  }
})

// listen for the event where a unit is destroyed
Events.on(UnitDestroyEvent, event => {
  // display toast on top of screen when the unit was a player
  if(event.unit.isPlayer()){
    Vars.ui.hudfrag.showToast("Pathetic.");
  }
})
