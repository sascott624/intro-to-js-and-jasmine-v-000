'use strict';

function favIceCream(flavor){
  if (typeof flavor === "undefined"){
    flavor = "Chocolate";
  }
  return "I love " + flavor;
}

function shouting(string){
  return string.toUpperCase();
}

function roundDown(number){
  return Math.floor(number);
}

function theTruth(){
  return true;
}
