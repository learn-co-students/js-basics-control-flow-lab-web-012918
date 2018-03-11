// Write your code in this file!
function scuberGreetingForFeet (num) {
  if (num <= 400) {
    return('This one is on me!');
  } else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (num > 2500) {
    return 'No can do.';
  }
}


function ternaryCheckCity(city) {
  let response;
  (city === 'NYC') ? response = "Ok, sounds good." : response = "No go."
  return response;
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      // break;
    case "not as generous":
      return "Thank you.";
      // break;
    default:
      return "Bye.";
  }
}
