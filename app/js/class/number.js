{
    console.log('二进制表示法:', 0b00010 === 2);  // true
    console.log('八进制表示法:', 0o0340 === 224); // true
    console.log('----------------------');
}
{
    console.log(Number.isFinite(15)); // true
    console.log(Number.isFinite(true)); // false
    console.log(Number.isFinite(0.8)); // true
    console.log(Number.isFinite(NaN)); // false
    console.log(Number.isFinite('string')); // false
    console.log(Number.isFinite(Infinity)); // false
    console.log('----------------------');
}
{
    console.log(Number.isNaN(15)); // false
    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isNaN(true)); // false
    console.log(Number.isNaN(0.4)); // false
    console.log(Number.isNaN('NaN')); // false
    console.log('----------------------');
}

{
    console.log(Number.isInteger(66)); // true
    console.log(Number.isInteger(66.0)); // true
    console.log(Number.isInteger(66.6)); // false
    console.log(Number.isInteger(null)); // false
    console.log(Number.isInteger('nice')); // false
    console.log('----------------------');
}

{
    console.log(Number.EPSILON === Math.pow(2, -52));  // true
    console.log(0.1 + 0.2 === 0.3);  // false
}