const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({

  id_producto: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  disponibles: { type: String, required: true, max: 40 },
  costoprov: { type: Number, required: true, max: 9999999 },
  precioventa: { type: Number, required: true, max: 9999999 },
  tipo: { type: String, required: true, max: 40 },
  categoria: { type: String, required: true, max: 40 },
  descripcion: { type: String, required: true, max: 150 },
  proveedor: { type: String, required: true, max: 40 },
  mail: { type: String, required: false, max: 70 },
  direccion: { type: String, required: false, max: 150 },
  telefono: { type: String, required: true, max: 40 }
});

module.exports = mongoose.model("productos", ProductosSchema);
