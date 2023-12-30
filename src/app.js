
import express from 'express' 
import cors from 'cors' 
import productosRouters from './Router/productosRouter.js'

const app=express() 

const Port=5000

app.use(cors()) 

app.use(express.json()) 


app.use('/api/productos', productosRouters) 

app.listen(Port,()=>{
    console.log(`el servidor se esta escuchando en el puerto: ${Port}`)
})