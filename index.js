const express = require('express')
const app = express()
const port = 3000

app.get('/p', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{

 const book = [


    {
         id:1,
         name:"bubun"
         ,title:"bokchoda "
    }
 ]


 res.json(book)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})