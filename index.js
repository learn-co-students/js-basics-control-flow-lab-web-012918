// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if(ride > 2500) {
      return 'No can do.';
  } else {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(charm) {
  let response;
  switch (charm) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response;
}
