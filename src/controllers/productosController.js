let productosEnCarrito=[] 

export const obtenerProductos=(req,res)=>{ 
    res.json(productosEnCarrito)

} 

export const agregarProductos=(req,res)=>{ 
    const nuevoProducto=req.body
    nuevoProducto.id=Date.now().toString() 

    productosEnCarrito.push(nuevoProducto) 

    res.json({message:'Producto agregado al carrito',producto:nuevoProducto})

} 

export const eliminarProductos=(req,res)=>{

    const {id}=req.params 

    productosEnCarrito=productosEnCarrito.filter(producto=>producto.id!=id) 

    res.json({message:'Producto eliminado del carrito',productId:id})
} 
