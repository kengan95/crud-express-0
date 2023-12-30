
import express from 'express' 
import { obtenerProductos,agregarProductos,eliminarProductos } from '../controllers/productosController.js' 

const router=express.Router() 

router.get('/',obtenerProductos) 

router.post('/',agregarProductos) 

router.delete('/:id',eliminarProductos) 

export default router 



