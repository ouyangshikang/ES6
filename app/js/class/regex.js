{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    let result = regex.test('xyz123');
    let result2 = regex.test('xyz123');
    console.log(result, result2);
}