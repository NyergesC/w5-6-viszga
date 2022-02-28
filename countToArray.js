function countToArray(firstNumber, lastNumber) {
    //1.lepest elszamolni az elso szamig a vegeig FOR CIKLUS

    let numbers = [];

    for (let i = firstNumber; i < lastNumber; i++) {
       //numbers.push(i.toString()) VAGY
      // numbers.push(""+i)
      //number.push(String(i))
      //number.push(`${i}`)
      let stringNumber = i.toString()
      numbers.push(stringNumber)
    }

    return numbers

}
console.log(countToArray(10,30))