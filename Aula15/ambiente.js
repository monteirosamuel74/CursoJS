let num = [5,8,2,9,3]
console.log(num)
num.push(22)
num.sort()
num.push(3)
console.log(num)
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

let achar = num.indexOf(22)
console.log(`O número 22 está na posição ${achar}.`)