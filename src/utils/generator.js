// let status = document.getElementById("status");
// status.innerText = "Captcha Generator";

export const generate = () => {
  // console.log(status)

  let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  console.log(alphabets.length);
  let first = alphabets[Math.floor(Math.random() * alphabets.length)];
  let second = Math.floor(Math.random() * 10);
  let third = Math.floor(Math.random() * 10);
  let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let sixth = Math.floor(Math.random() * 10);
  let captcha =
    first.toString() +
    second.toString() +
    third.toString() +
    fourth.toString() +
    fifth.toString() +
    sixth.toString();
  console.log(captcha);
  return captcha;
  //   document.getElementById("generated-captcha").value = captcha;
  //   document.getElementById("entered-captcha").value = "";
  //   status.innerText = "Captcha Generator";
};

// const check = () => {
//   // console.log(status)
//   let userValue = document.getElementById("entered-captcha").value;
//   console.log(captcha);
//   console.log(userValue);
//   if (userValue == captcha) {
//     status.innerText = "Correct!!";
//   } else {
//     status.innerText = "Try Again!!";
//     document.getElementById("entered-captcha").value = "";
//   }
// };
