function sum(a,b){
    result = a+b;
    displayResult(result)
}

function displayResult(data){
    displayResultPassive(data)
}

function displayResultPassive(data){
    console.log("Sum's result is "+data);
}

a = 10,b = 20
sum(a,b)