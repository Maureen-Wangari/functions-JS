//Sort and Revere order of a astring
function arrange(){
    let arragedFruits = [];
    fruits = ["Oranges", "Mango", "Apple", "Melon", "Pineapples"]
    fruits.forEach(x => {
        if (x[0] == "l" ||x[0] == "L" ){
            let newarray= x.split("").sort().reverse().join('');

            arragedFruits.push(newarray);
        }
        else {let newarray= x.split("").sort().join('')
        arragedFruits.push(newarray);
        }
    })
    console.log(arragedFruits);
}

arrange()


// //return positive or negative according to condition
function SearchThrough(){
    let ages = [2, 4, -7, 34, 0, 19, -15, 67, 34, 0]
ages.forEach(element =>{
    if(element>0){
        console.log("positive");
        return "Positive"
    }
    else if(element<0){
        console.log("negative");
        return "Negative"
    }
    else {
        console.log("zero");
        return "zero"
    }
})
}
SearchThrough()

//sort employee information according to salary
function sortedObjects(){
    let arrEmployees=[
      {name:"Maureen", id:"eds986554", salary:370000},
      {name: "Njeri", id: "ijk74554", salary:550000},
      {name: "Wangari", id: "gra7469274", salary:240000}
    ]
    console.log(arrEmployees.sort((b,a)=> a.salary-b.salary))
    return arrEmployees
}
console.log(sortedObjects())


//multiply by two
let numbers = [5, 4, 3, 2, 1]
function multiply(nums){
    numbers.forEach((nums=>{
        console.log(nums*2);
    }))
}
multiply(numbers)


//multiply first four indices by 8 and add 5 to the last two indices
function array(items){
    let numbers = items.slice(0,4)
    let numbers2 = items.slice(-2)
    numbers.forEach(i =>{
        console.log(i*8)
    })
    numbers2.forEach(i =>{
        console.log(i+5)
    })
}
array([3,6,12,56,33,8,5,19,16,22,76])