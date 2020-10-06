// let kellogs = {
//   CEO: "whoever",
//   location: "somewhere"
// }


// let riceKripsy = {
//   wrapped: true,
//   wrapping: {
//     material: "foil",
//     color: ["red", "blue", "white", "silver"]
//   },
//   servings: 1,
//   calories: 90,
//   goodForYou: true,
//   manufacturer: kellogs
// }

// let snackCabinet = {
//   snacks: {
//     krispies: {
//       name: "krispies",
//       calories: 90
//     },
//     granolabar: {
//       name: "granola",
//       calories: 90
//     },
//     fruitsnacks: { name: "fruit snacks" }
//   }
// }

// let fruitsnacks = snackCabinet.snacks.fruitsnacks

// fruitsnacks



console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)

for (let count = 0; count <= 100; count++) {
  console.log(count)
}

for (let count = 100; count > 0; count--) {
  console.log(count)
}

let staff = [
  {
    name: "mark"
  },
  {
    name: "tim"
  },
  {
    name: "brittany"
  },
  {
    name: "mick"
  }
]

for (let index = 0; index < staff.length; index++) {
  const staffMember = staff[index];
  console.log(staffMember.name)
}


let count = 0
while (count <= 100) {
  const staffMember = {}
  console.log(count)
  count++
}

let playing = true

while (playing) {
  let input = prompt("do you want to keep playing? Y/N")
  if (input.toLowerCase() == "n" || input.toLowerCase() == "no") {
    playing = false
  }
}

let num = 21
do {
  console.log(num)
  num++
} while (num < 11)

let snacks = {
  krispies: {
    name: "krispies",
    calories: 90
  },
  granolabar: {
    name: "granola",
    calories: 90
  },
  fruitsnacks: {
    name: "fruit snacks",
    calories: 90
  }
}
let keys = Object.keys(snacks)
// this console logs our values
keys.forEach(key => console.log(snacks[key]))

for (const key in snacks) {
  const snack = snacks[key];
  console.log(snack.name, "calroies ", snack.calories);
}


let staff2 = [
  {
    name: "mark",
    role: "instructor"
  },
  {
    name: "tim",
    role: "instructor"
  },
  {
    name: "brittany",
    role: "director of recruiting"
  },
  {
    name: "mick",
    role: "instructor"
  },
  {
    name: "D$",
    role: "instructor"
  }
]


let fruit = ["apple", "banana", "orange", "banana"]
let secondFruitArr = ["pear", "persimmon"]
fruit = fruit.concat(secondFruitArr)
console.log("index:", fruit.lastIndexOf("banana"))
let fruitRemoved = fruit.pop()
fruit.unshift(fruitRemoved)
fruit.shift()
fruit.unshift(...fruit.splice(2, 2))
fruit.unshift(...["mango", "pineapple"])

console.log("fruit that was removed", fruitRemoved, "array", fruit)


staff2.forEach(function (staffMember, i, originalArr) {
  console.log(i + 1, staffMember.name, staffMember.role)
})
// these are all the same
staff2.forEach((staffMember, i, originalArr) => console.log(staffMember.name))
staff2.forEach(staffMember => console.log(staffMember.name))
staff2.forEach(staffMember => {
  console.log(staffMember.name)
  // do something else
  // and something else
})


let newFunction = () => console.log("cool")
let newFunction2 = function () { console.log("cool") }

newFunction()
newFunction2()

let str = "hello world"
let newStr = ""
str.split('').forEach((letter, i) => {
  if (i == 0) {
    newStr += letter.toUpperCase()
  } else {
    newStr += letter

  }

})
console.log(newStr);
// ['e','']
// let remainderStr = str.split('')
// remainderStr.unshift()
// str = str[0].toUpperCase() + remainderStr.join('')
// console.log(str);
