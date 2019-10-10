let result = 2n;

for (let i of [2n,3n,4n]) {
    result = result**i;
}

console.log(result)

result = 0

for (let field in {1: 'a', 2: 'b', 3: 'c'}) {
    result = result + field
}

console.log(result)

//Ключи объекта - только строки

result = 2;

while( result < 200 ){
    result *= result
}

console.log(result)