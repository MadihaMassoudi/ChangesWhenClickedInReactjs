function add(a, b){
    let sum = a + b;
    return sum;
}

function sub(a, b){
    let diff = a - b;
    return diff;
}
function multi(a, b){
    let product = a * b;
    return product;
}
function division(a, b){
    let div = a / b;
    div = div.toFixed(2);
    return div;
}


export {add, sub, multi, division}; 