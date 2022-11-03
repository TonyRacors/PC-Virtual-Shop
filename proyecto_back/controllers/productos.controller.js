const Producto=require("../models/productos.model")

let response={
    msg: "",
    exito:false
}

exports.create= function(req, res){
    let producto=new Producto({

        id_producto: req.body.id_producto,
        nombre: req.body.nombre,
        disponibles: req.body.disponibles,
        costoprov: req.body.costoprov,
        precioventa: req.body.precioventa,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        proveedor: req.body.proveedor,
        mail: req.body.mail,
        direccion: req.body.direccion,
        telefono: req.body.telefono
        
    })

    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito=true,
        response.msg="El producto se guardó correctamente"
        res.json(response)

    })
}

exports.find = function(req, res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req, res){
    Producto.findOne({_id: req.params.id}, function(err, producto){
        res.json(producto)
    })
}

exports.update = function(req,res){
    let producto = {

        id_producto: req.body.id_producto,
        nombre: req.body.nombre,
        disponibles: req.body.disponibles,
        costoprov: req.body.costoprov,
        precioventa: req.body.precioventa,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        proveedor: req.body.proveedor,
        mail: req.body.mail,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }

    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito=true,
        response.msg = "El producto se modificó correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto fue eliminado correctamente"
        res.json(response)
    })
}