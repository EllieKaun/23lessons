// // const string = prompt("tell me your name");

// // // const regExp = /[Aa]/;
// // const regExp = /a/i;

// // const regExp = new RegExp("a", "i");

// // console.log(string.match(regExp));

// // const letter = "CccAaaaaBbbbbbCccccDdddddccC";

// // const regExp = /c/gi;

// // console.log(letter.match(regExp));

// // const numbers = "0a13sd2a6fs4a785saf0a6Aasf798saf213as481asf238470129";

// // // const regExp = /[A-Za-z]/g;
// // // const regExp = new RegExp("\w", "g");
// // const regExp = /\w/g;

// // // console.log(numbers.match(regExp));
// // console.log(numbers.replace(regExp, "*"));

// const phoneNum = document.querySelector("#phoneNum");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   if (phoneRegExp.test(phoneNum.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok";
//     phoneResult.style.color = "red";
//   }
// });

// // @ не больше 40
// // Aa1 не мение 8
// // добавить повторите пароль
// // добавить иконку показывающую пароль

// let num = 0;

// const count = () => {
//   num++;
//   console.log(num);
//   if (num < 5000) {
//     count();
//   }
// };

// count();

const people = {
  Jhon: {
    age: 25,
    parent: {
      Tony: {
        age: 50,
        parent: {
          Logan: {
            age: 80,
            parent: {
              Logan: {
                age: 80,
                parent: {
                  Logan: {
                    age: 80,
                  },
                },
              },
            },
          },
        },
      },
      Kelly: {
        age: 45,
      },
    },
  },
  Sam: {
    age: 15,
    parent: {
      Jin: {
        age: 35,
        parent: {
          Logan: {
            age: 80,
          },
        },
      },
    },
  },
};

const parentsList = (obj) => {
  //   console.log(obj);
  if (obj.parent) {
    // console.log(obj.parent);
    for (let key in obj.parent) {
      console.log(key);
      parentsList(obj.parent[key]);
    }
  } else {
    console.log(":(");
  }
};

// parentsList(people.Jhon);

for (let key in people) {
  parentsList(people[key]);
}
