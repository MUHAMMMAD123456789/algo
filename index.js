function FizzBuzz(number) {
    let arr = [1,2,'fizz',4, 'buzz', 6,'7']

    for(let i = 1 ; i <= number; i++){
        let fizz = i % 3 === 0
        let buzz = i % 5 === 0

        if(fizz && buzz) {
            arr.push('fizzBuzz')
        } else if (fizz){
            arr.push('fizz')
        } else if(buzz){
            arr.push('buzz')

        }
    }

        return arr
}

let arr = FizzBuzz(15)

console.log(arr);










function getMin() {
    let min = Infinity

    for(let num of arr) {
        if( num < min){
            min = num
        }
    }

    return min
}

let minNum = getMin(4,1,2,24,2,44)

console.log(minNum);








function getShort_name(...names) {
    if (names.length === 0) {
        return null; 
    }

    let shortest = names[0];

    for (let name of names) {
        if (name.length < shortest.length) {
            shortest = name;
        }
    }

    return shortest;
}

const short = getShort_name('Alex', 'Adam', 'Muhammadali');
console.log(short); 


