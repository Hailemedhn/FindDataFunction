// the array is declated and initialised
let objArray = [
  {
    firstName: "John",
    lastName: "Edward",
    number: 123456789,
    likes: ["Movies", "Shopping"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: 234567891,
    likes: ["Hunting", "Shopping"],
  },
  {
    firstName: "Jack",
    lastName: "Markus",
    number: 345678912,
    likes: ["Riding", "Hunting"],
  },
  {
    firstName: "Jacob",
    lastName: "Thompson",
    number: 456789123,
    likes: ["Reading", "Gardening"],
  },
  {
    firstName: "James",
    lastName: "Thumberg",
    number: 567891234,
    likes: ["Listening to Music", "GArdening"],
  },
];
// findData declaration
//
function findData(name, prop) {
  //initialise the returnMessage to an empty string
  let returnMessage = "";
  //loop through the array of objects
  for (let i = 0; i < objArray.length; i++) {
    // check if the name exists
    if (objArray[i].firstName.toLowerCase() == name.toLowerCase()) {
      // check if the prop exits
      if (objArray[i][prop]) {
        returnMessage = objArray[i][prop];
        break;
        // if the prop doesn't exits returnMessage is set
        // to No such property and the loop is exited
      } else {
        returnMessage = "No Such Property";
        break;
        // if the name doesn't exit returnMessage is
        //set to No such property and the loop is exited
      }
    } else {
      returnMessage = "No Such Data";
    }
  }
  return returnMessage;
}
// use prompt to get name and property
let nameInput = prompt("Name please.");
let propInput = prompt("Property please.");
// call findData and alert the return
alert(findData(nameInput, propInput));
jan;
