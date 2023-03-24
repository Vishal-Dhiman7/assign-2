const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

readLine.question("",(input)=>{
    console.log(`Hello ${input}`);
    readLine.close()
})