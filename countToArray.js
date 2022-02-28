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


//-----ARRAY FUNCTIN-----//

const countToArray = (firstNumber, lastNumber) =>{
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

//VAAAAGY FOREACH

const countToArray = (firstNumber, lastNumber) => Array.from(Array(lastNumber - firstNumber)).map((item, i,) => `${firstNumber + i}`)

    //1.lepes a from elott valtozot kell csinalni

    const toArray = Array(lastNumber - firstNumber)
    //const fillArray = Array.from(toArray)
    const fillArray = Array.from(Array(lastNumber - firstNumber)
    const updateArray = fillArray.map((item, i) => `${firstNumber + i}`)

}
console.log(countToArray(10,30))