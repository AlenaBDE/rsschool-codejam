function make(...rest) {
    let mass = [];
    mass.push(rest);
    let bar = function (...rest2) {
        if (typeof rest2[0] !== "function") {
            mass.push(rest2);
            return bar;
        }
        else {
            return rest2[0](mass);
        }
    };
    return bar;
}

/*например функция, которая суммирует все аргументы)*/
function sum(arr) {
    let resultMass = [];
    for (let i = 0; i < arr.length; i++) {
        resultMass = resultMass.concat(arr[i])
    }
    let result = resultMass.reduce(function (a, b) {
        return a + b;
    });
    return result;
}


console.log(make(15)(34, 21, 666)(41)(sum));