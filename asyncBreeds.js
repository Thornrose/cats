const fs = require("fs");


// EXAMPLE CORRECT: this makes sense vs my next example below. better to get callback function, because then the code is reusable
//for multiple functions to be the call back.
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // CHANGE: Pass data into callback instead of trying to return it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

//CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log("Return Value:", breed); // will not work - undefined
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile("Bombay", printOutCatBreed);



// my fix: would TECHNICALLY also work (NOT REALLY - steals data from anywhere else that is trying to use it, i think
// - callback is simply better!

// const breedDetailsFromFile2 = function(breed) {
//   console.log("breedDetailsFromFile: Calling readFile...");
//   fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) console.log("Return Value:", bombay);
//   });

// };

// const bombay = breedDetailsFromFile2("Bombay");








// // incorrect: can't RETURN
// const breedDetailsFromFile = function(breed) {
//   console.log("breedDetailsFromFile: Calling readFile...");
//   fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // attempting to return data here will also not work - 
//   // breedDetails will return undefined.
// };

// const bombay = breedDetailsFromFile("Bombay");
// console.log("Return Value:", bombay); // will not work - undefined