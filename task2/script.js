function randn_bm() {
    let u = 0, v = 0;
    while(u === 0){
        u = Math.random();
    }
    while(v === 0){
        v = Math.random();
    }
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}


function inputNum(){
    let Nm = [];
    for(let i = 0; i < 10; i++){
        Nm.push(randn_bm());
    }
    let result = Nm.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    document.write('<pre> Исходный массив: [', Nm, ']</pre>');

    document.write('<pre>Результат: </pre>')

    document.write('<pre>', JSON.stringify(
        result, null, 2), '</pre>');
}

inputNum();