getDate()
getDay()

Math.random()

Object.keys

console.log(new Date())

setInterval(() => {
  const dt = new Date();

  const date = dt.getDate();
  const day = dayName(dt.getDay());
  const month = monthName(dt.getMonth() + 1);
  const year = dt.getFullYear();

  const hour = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();

  const output = day + ", " + date + " / "+ month + " / "+  year + " "+  hour + " : "+  minutes + " : "+  seconds

 document.querySelector("p").innerHTML = output;
}, 1000);

// function monthName(input) {
//   switch (input) {
//     case 1:
//       return "January";
//       break;
//     case 2:
//       return "February";
//       break;
//   }
// }

// function dayName(input) {
//   switch (input) {
//     case 1:
//       return "Monday";
//       break;
//     case 5:
//       return "Friday";
//       break;
//   }
// }


// console.log(new Date())


// const today = new Date().getTime()

// const holi = new Date("8 March 2023").getTime()

// console.log(today)
// console.log(holi)

// console.log(holi - today)


// a = 1;

// console.log(a)


