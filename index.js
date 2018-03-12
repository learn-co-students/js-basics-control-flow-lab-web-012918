function scuberGreetingForFeet(ride) {
  if (ride > 2500) {
    return 'No can do.'
  } else if (ride > 2000){
    return 'I will gladly take your thirty bucks.'
  } else if (ride <= 400) {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    case 'thanks for everything':
      return "Bye.";
  }
}
