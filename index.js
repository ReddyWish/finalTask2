const isEqualSymbols = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let str1ToArr = str1.split('')
    let str2ToArr = str2.split('')

    
    return str2ToArr.every(item => str1ToArr.includes(item))

}

console.log(isEqualSymbols('ноутбук', 'программист'))