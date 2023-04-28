const fs = require('fs')

// fs.mkdirSync('Text-file')

// fs.mkdir('Text-files',()=>{
//     fs.writeFile('./Text-files/Some-text.txt','Hello',()=>{

//     })
// })

fs.unlink('./Text-files/Some-text.txt',()=>{
    fs.rmdir('./Text-files',()=>{
        
    })
})