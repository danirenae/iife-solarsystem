// 1. public property for holding the last modified date - it is accessible - will go inside of return
// 2. getter and settr for planets  - will probably need a private variable - an array - this will be to get planets
// 3. getter and setter for activeSpacecraft
// 4. getter and setter for planetsLandedOn

var SolarSystem = (function(solar){
var planets = ["Mercury"];
var activeSpacecraft = ["Voyager I"];
var planetsLandedOn = 0;

return {
  modifiedDate: new Date(),


  getPlanets : function(){
  return planets;
  },

  setPlanets : function(newPlanet){      // newPlanet comes from argument
    planets.push(newPlanet);
  },

  getSpacecraft : function(){
  return activeSpacecraft;
  },

  setSpacecraft : function(newSpacecraft){
  activeSpacecraft.push(newSpacecraft);
  },

  getPlanetsLandedOn : function(){
  return planetsLandedOn;
  },

  setPlanetsLandedOn : function(numLanded){
  planetsLandedOn = numLanded
    }
  }

})();