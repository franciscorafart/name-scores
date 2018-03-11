let fs = require('fs')
let file;

let dict = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
  p: 16, q:17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
}

fs.readFile('./p022_names.txt', (err, data) => {
  file = data.toString();

  //execute the functions
  let nameArray = extractNames(file)
  orderAlph(nameArray);
  let alphValsArr = alphValues(nameArray, dict);
  let scoreArr = nameScores(alphValsArr)
  console.log(addAll(scoreArr))
})



function extractNames(file){
  //extract with reg exp and add to array
  let regex = /([A-Z])\w+/g
  let array = file.match(regex) // thing.length = 5163

  return array
}

//order alphabetically
function orderAlph(arr){
  arr.sort() //try to implement this function by myself
}
//returns array with numeric values for each name, by adding up the values of letters a=1, b=2, c=3....z=26
function alphValues(arr, dic){
  let values = []
  for (name of arr){
    totalname = 0
    for (ch of name){
      let num = dic[ch.toLowerCase()]
      totalname += num
    }
    values.push(totalname)
  }
  return values
}
//return array with scores for names. name score = alphabetical_value * position_in_list
function nameScores(alphValArray){
  let res = []
  for (i in alphValArray){
    let index = Number(i)+1
    let namescore = alphValArray[i] * index

    res.push(namescore)
  }
  return res
}

//Sum all the name scores
function addAll(arr){
  total = 0
  for (let num of arr){
    total += num
  }
  return total
}
