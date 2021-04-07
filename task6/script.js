function workStr(cipher, letters){
    let result = [];
    result = (cipher.map(el => letters[el - 31] ?? ' '));
    return result;
}

function tolstoi(){
    const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'];
    const cipher = [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59]
    let result = workStr(cipher, letters);
    let resultOfNumb = result.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, []);
    console.log(result.join(' '));
    console.log(resultOfNumb);
}
tolstoi();
