// Write your code in this file!
const scuberGreetingForFeet = function(distance) {
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2000) {
    if (distance <= 2500) {
      return 'I will gladly take your thirty bucks.'
    } else {
      return 'No can do.'
    }
  }
}

const ternaryCheckCity = function(d) {
  return d === "NYC" ? "Ok, sounds good." : "No go.";
}

const switchOnCharmFromTip = function(tip) {
  if (tip === 'generous') {
    return "Thank you so much.";
  } else if (tip === 'not as generous') {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}