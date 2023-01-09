function saturdayFun(fun){
    return "This Saturday, I want to " + (fun ? `${fun}` : "roller-skate") + "!"
}

function mondayWork(work){
    return "This Monday, I will " + (work ? `${work}` : "go to the office") + "."
}

function wrapAdjective(adj){
    return function(special){
        return `You are ${adj}${special}${adj}!` 
    }
}