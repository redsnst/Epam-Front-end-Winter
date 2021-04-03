function memOverflow(){
    let n = 9999999999999;
    list = [];
    for(let i=0; i < n; i++){
        per = 'obj' + i;
        per = new Object();
        list += per;
    }
}

function CheckFunc()
{
    let i = 1000;
    CheckFunc(i - 1);
}