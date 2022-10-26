// data in memory
const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you've served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

//synchronous functions to fetch a cat breed
const breedDetails = function(breed) {
  //simple enough to return, right?
  return catBreeds[breed];
};

// then can get the return value directly from the function
const bombay = breedDetails("Bombay");
console.log(bombay); // prints description for the breed