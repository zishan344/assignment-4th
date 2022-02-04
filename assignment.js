//proble 1 anaToVori
function anaToVori(ana) {
  if (typeof ana != "number") {
    return "entar a valid number";
  }
  let vori = ana / 16;
  return vori;
} //proble 1 anaToVori
function anaToVori(ana) {
  if (typeof ana != "number") {
    return "entar a valid number";
  }
  let vori = ana / 16;
  return vori;
}
//console.log(anaToVori(32));

//problem 2 pandaCost
function pandaCost(singarQuantity, somosaQuantity, jilapiQuantity) {
  if (
    (typeof singarQuantity,
    typeof somosaQuantity,
    typeof jilapiQuantity != "number")
  ) {
    return "entar a valid number";
  }
  // pricing table
  let perSingaraPrice = 7 * singarQuantity;
  let perSomosaPrice = 10 * somosaQuantity;
  let perJilapiPrice = 15 * jilapiQuantity;
  const totalPrice = perSingaraPrice + perSomosaPrice + perJilapiPrice;
  return totalPrice;
}

//console.log(pandaCost(1, 2, 3));

//problem 3 picnicBudget
function picnicBudget(person) {
  if (typeof person != "number") {
    return "stop YOu can only input a number";
  }
  let theFirst100PerPerson = 5000;
  let theSecond100PerPerson = 4000;
  let moreThan200perPerson = 3000;
  let restPerson = 0;
  let totalPrice = 0;

  if (person <= 100) {
    //first 100 people
    theFirst100PerPerson *= person;
    return theFirst100PerPerson;
  } else if (person <= 200) {
    // the second 100 people
    theFirst100PerPerson *= 100;
    restPerson = person - 100;
    theSecond100PerPerson *= restPerson;
    totalPrice = theFirst100PerPerson + theSecond100PerPerson;
    return totalPrice;
  } else {
    //more than 200
    theFirst100PerPerson *= 100;
    theSecond100PerPerson *= 100;
    restPerson = person - 200;
    moreThan200perPerson *= restPerson;
    totalPrice =
      theFirst100PerPerson + theSecond100PerPerson + moreThan200perPerson;
    return totalPrice;
  }
}
console.log(picnicBudget(220));

//problem 4 oddFriend
function oddFriend(friendsList) {
  if (Array.isArray(friendsList)) {
    let oddFriend = "";
    for (const element of friendsList) {
      if (element.length % 2 != 0) {
        oddFriend = element;
        break;
      }
    }
    return oddFriend;
  } else {
    return "Enter a Array";
  }
}

//const myBestFried = ["Zishan", "farhad", "montasir", "kamal", "lol", "naime"];
//console.log(oddFriend(myBestFried));

//console.log(anaToVori(32));

//problem 2 pandaCost
function pandaCost(singarQuantity, somosaQuantity, jilapiQuantity) {
  if (
    (typeof singarQuantity,
    typeof somosaQuantity,
    typeof jilapiQuantity != "number")
  ) {
    return "entar a valid number";
  }
  // pricing table
  let perSingaraPrice = 7 * singarQuantity;
  let perSomosaPrice = 10 * somosaQuantity;
  let perJilapiPrice = 15 * jilapiQuantity;
  const totalPrice = perSingaraPrice + perSomosaPrice + perJilapiPrice;
  return totalPrice;
}

//console.log(pandaCost(1, 2, 3));

//problem 3 picnicBudget
function picnicBudget(person) {
  if (typeof person != "number") {
    return "stop YOu can only input a number";
  }
  let theFirst100PerPerson = 5000;
  let theSecond100PerPerson = 4000;
  let moreThan200perPerson = 3000;
  let restPerson = 0;
  let totalPrice = 0;

  if (person <= 100) {
    //first 100 people
    theFirst100PerPerson *= person;
    return theFirst100PerPerson;
  } else if (person <= 200) {
    // the second 100 people
    theFirst100PerPerson *= 100;
    restPerson = person - 100;
    theSecond100PerPerson *= restPerson;
    totalPrice = theFirst100PerPerson + theSecond100PerPerson;
    return totalPrice;
  } else {
    //more than 200
    theFirst100PerPerson *= 100;
    theSecond100PerPerson *= 100;
    restPerson = person - 200;
    moreThan200perPerson *= restPerson;
    totalPrice =
      theFirst100PerPerson + theSecond100PerPerson + moreThan200perPerson;
    return totalPrice;
  }
}
//console.log(picnicBudget(220));

//problem 4 oddFriend
function oddFriend(friendsList) {
  if (Array.isArray(friendsList)) {
    let oddFriend = "";
    for (const element of friendsList) {
      if (element.length % 2 != 0) {
        oddFriend = element;
        break;
      }
    }
    return oddFriend;
  } else {
    return "Enter a Array";
  }
}

//const myBestFried = ["Zishan", "farhad", "montasir", "kamal", "lol", "naime"];
//console.log(oddFriend(myBestFried));
