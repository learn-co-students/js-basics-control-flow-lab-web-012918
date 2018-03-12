// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!'
  } else if (distance > 400 && distance <= 2500){
      return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  let greeting = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return greeting;
}

function switchOnCharmFromTip(tip){
console.log(tip)
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }
}
