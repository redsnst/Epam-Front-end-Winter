var arr = [false, true, 0, 1, '0', '000', '1', 
NaN, Infinity, -Infinity, '', '20', 'twenty',
[], [20], [10,20], ['twenty'], ['ten', 'twenty'],
function(){}, {}, null, undefined];

var ln = arr.length;

conToNum(arr);
conToStr(arr);
conToBool(arr);

function conToNum(a){
    for(let i = 0; i < ln; i++)
    {
        console.log('Коныертация в Number: ',Number(a[i]));
    }
}

function conToStr(a){
    for(let i = 0; i < ln; i++)
    {
        console.log('Конвертация в String: ',String(a[i]));
    }
}

function conToBool(a){
    for(let i = 0; i < ln; i++)
    {
        console.log('Конвертация в Boolean: ',Boolean(a[i]));
    }
}