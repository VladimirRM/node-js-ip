const fs = require('fs')

// fs.mkdirSync('Text-file')

fs.mkdir('Text-files',()=>{
    fs.writeFile('./Text-files/Some-text.txt','Hello',()=>{
        
    })
})