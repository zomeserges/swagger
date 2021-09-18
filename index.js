const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions ={
   swaggerDefinition:{
        info: {
            title: "First Api doc",
            version: "1.0.0"
        },
   },
    apis:["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
//console.log(swaggerDocs)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * @swagger
 * /books:
 *   get:
 *     description: Récuperer tous les livre
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get('/books',(req, res) => {
    res.send([
      {  id: 1,
        title: 'Harry poter'
       }
    ]) 
})


/**
 * @swagger
 * /books:
 *   post:
 *     description: Créer un nouveau livre
 *     parameters:
 *     - name: title
 *       description: titre du livre
 *       in: formData
 *       required: true 
 *       type: string    
 *     responses:
 *       201:
 *         description: Livre crée avec succes
 *
 */
app.post('/books',(req, res) => {
    res.status(201).send();
})

app.listen(3000,()=>console.log("ecoute sur le port 3000"));