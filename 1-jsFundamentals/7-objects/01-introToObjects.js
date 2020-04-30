// // // objects store multiple data in the key value format
// // let netflix = {
// //   id: 1,
// //   name: "The Office",
// //   seriesInfo: {
// //     // nesting another object within the object
// //     seasons: 9,
// //     seasonInfo: [
// //       // array, that holds multiple objects
// //       {
// //         season: 1,
// //         episodes: 6,
// //         episodeInfo: [
// //           {
// //             episode: 1,
// //             episodeName: "Pilot",
// //           },
// //           {
// //             episode: 2,
// //             episodeName: "Diversity Day",
// //           },
// //         ],
// //       },
// //       {
// //         season: 2,
// //         episodes: 22,
// //         episodeInfo: [
// //           {
// //             episode: 1,
// //             episodeName: "The Dundies",
// //           },
// //         ],
// //       },
// //     ],
// //   },
// // };

// // // console.log("Whole Object:", netflix); // whole object
// // // console.log("Just series info:", netflix.seriesInfo); // just series info
// // // console.log("Just season info:", netflix.seasonInfo); // just season info
// // // console.log("Just season one:", netflix.seriesInfo.seasonInfo[0]); // just season one info
// // console.log(netflix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName); // just episode name

// // spaceJam object
// let spaceJam = {
//   toonSquad: {
//     human: "Micheal Jordan",
//     rabbit: "Bugs Bunny",
//     rabbit2: "Lola Bunny",
//     duck: "Daffy Duck",
//     tDevil: "Tasmanian Devil",
//     bird: "Tweety",
//     pig: "Porky Pig",
//   },
//   monstars: {
//     0: "Bupkus",
//     1: "Bang",
//     2: "Nawt",
//     3: "Pound",
//     4: "Blanko",
//   },
//   nbaPlayers: {
//     phoenixSuns: "Charles Barkley",
//     newJerseyNets: "Shawn Bradley",
//     newYorkKnicks: "Patrick Ewing",
//     charlotteHorners1: "Larry Johnson",
//     charlotteHorners2: "Muggsy Bogues",
//   },
// };

// // console.log(Object.keys(spaceJam)); // returns keys 'toonsquad' 'monstars' 'nbaPlayers'
// // console.log(Object.keys(spaceJam.monstars));
// // console.log(spaceJam.monstars[0]);
// console.log(Object.values(spaceJam.toonSquad));

let garden = {
  vegetable: "zucchini",
  flower: "sun flowers",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10,
};

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]); // strings - because keys are also strings

let zucchini = garden["vegetable"];
console.log(zucchini);

// adding key, assigning a value into an object
let baking = {};

baking.zucchini = "Better make some bread!";
console.log(baking);

baking["flour"] = "Batter up!";
console.log(baking);

console.log(baking[garden["vegetable"]]);
console.log(baking["zucchini"]); // same as line of code above
