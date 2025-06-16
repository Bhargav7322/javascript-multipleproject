let date = new Date();

let dayNumber = date.getDay();

let theDayIs;

let quote;

switch (dayNumber) {
  case 0:
    theDayIs = "Sunday";
    quote = "Time to chillax";
    break;

  case 1:
    theDayIs = "Monday";
    quote = "Monday is a day of work";
    break;

  case 2:
    theDayIs = "Tuesday";
    quote = "Tuesday is stil working day";
    break;

  case 3:
    theDayIs = "Wednesday";
    quote = "Wednesday is stil working day";
    break;

  case 4:
    theDayIs = "Thursday";
    quote = "Thursday is stil working day";
    break;

  case 5:
    theDayIs = "Friday";
    quote = "Friday is stil working day";
    break;

  case 6:
    theDayIs = "Saturday";
    quote = "Saturday is stil working day";
    break;
}

let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${theDayIs}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote}`;
