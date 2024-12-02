function addNumbers(){
    a = 5
    b = 3
    return a+b

}

//console.log(addNumbers(5,3))

function rectangleArea(l,w){
    return l * w
}

//console.log(rectangleArea(3,4))

// function tellFortune(noOfChildren,partnerName,geographicalLocation,jobTitle){
//     return "you will be a" + jobTitle + " " + "in " + " " + geographicalLocation + " " + " and married to " + " " + partnerName + " " + "with"  + " "+ noOfChildren + " " + "kids"
// }
//console.log(tellFortune("3","Mary", "Nairobi","engineer"))

// const areaYeah = (num1,num2) => num1 * num2


//console.log(areaYeah(4,4))

// const fortuneTeller = (noOfChildren,partnerName,geographicalLocation,jobTitle) => {return  "you will be a" + " "+ jobTitle + " " + "in " + " " + geographicalLocation + " " + " and married to " + " " + partnerName + " " + "with"  + " "+ noOfChildren + " " + "kids"}

// console.log(fortuneTeller("6","john","Eldoret","Doctor"))


// let number = 0

// while(number<50){
//     number += 2
//     console.log(number)
// }


// for (i=0;  i<20; i++){
//     console.log (5*i)
// }

function distanceFromHqInBlocks(pickUpLocation){
    blocks=Math.abs(42 - pickUpLocation)
    return blocks
   }
   console.log(distanceFromHqInBlocks(5))