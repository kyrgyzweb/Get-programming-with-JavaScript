var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function(name, position, type, radius, rank) {
  
  return {
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank
  };
};

getPlanetInfo = function(planet) {
  return planet.name.toUpperCase() + ": planet " + planet.position;
}

planet1 = buildPlanet("Jupiter", 5, "Giant Gaz", 69911, 1);

document.write(getPlanetInfo(planet1));