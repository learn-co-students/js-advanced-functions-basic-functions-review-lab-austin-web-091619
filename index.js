function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(result="*") {
    return function(adjective="||") {
        return `You are ${result}${adjective}${result}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract(a,b) {
        return a - b
    },
    multiply(a,b) {
        return a * b
    },
    divide(a,b) {
        return a / b
    }
}

function actionApplyer(integer, array) {
    let a = integer
    array.forEach(newArray => {
        a = newArray(a)
    })
    return a
}