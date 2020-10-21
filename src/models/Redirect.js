// importa el paquete mongoose para el modelado del objeto Tikect
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Se crea el esquema del modelo Tikect con sus propiedades
 */
const Redirect = new Schema(
  {
    id: { type: Number },
    name_event: { type: String },
    name_person: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    phone: { type: String },
    date: { type: Date },
  },
  {
    collection: "tikects",
  }
);

// Exporta el modelo del esquema Tikect para ser usado en la aplicación
module.exports = mongoose.model("Tikect", Tikect);
