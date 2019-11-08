// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){ return `You are ${flair}${adjective}${flair}!` }
}

let Calculator = {
    add: function(x,y){ return x + y },
    subtract: function(x,y){ return x-y},
    multiply: function(x,y){ return x*y},
    divide: function(x,y){ return x/y}
}

let actionApplyer = function(startPoint, functionArray){
    if (functionArray === undefined || functionArray.length == 0 ){ 
    } else {
        functionArray.forEach(function(functionElement){
            startPoint = functionElement(startPoint)
        } )
    }
    return startPoint
}