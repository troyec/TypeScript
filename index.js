console.log(`string text line 1
string text line 2`);
console.log(String.fromCharCode(0x20BB7));
s = 'hello world!'
console.log(s.includes('!'));
console.log('he'.repeat(3));
console.log(s.repeat(3));

console.log('123'.padStart(6,'x'));
console.log('abc'.padEnd(6,'y'));

'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

const s1 = '  abc  ';
s1.trim() // "abc"
s1.trimStart() // "abc  "
s1.trimEnd() // "  abc"