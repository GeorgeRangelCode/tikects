const express = require("express");
const router = express.Router();

// hace llamado al esquema Tikect
const Tikect = require("../models/Tikect");

// ruta que devuelve la información del Tikect por el Id de tikect
router.get("/:id", (req, res, next) => {
  Tikect.findById(req.params.id, function (err, tikect) {
    if (err) {
      res
        .status(500)
        .json({ message: "Se ha producido un error al obtener el tikect" });
    } else {
      res.json(tikect);
    }
  });
});

// ruta que obtiene los datos almacenados en el esquema Tikect
router.get("/", (req, res) => {
  Tikect.find(function (err, tikects) {
    if (err) {
      res.status(500).send({ message: "Error al listar los tikects" });
    } else {
      res.json(tikects);
    }
  });
});

// ruta que agrega datos al esquema Tikect por metodo POST /tikect - POST
router.post("/", (req, res) => {
  const tikect = new Tikect(req.body);
  tikect
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: " El tikect ha sido agregado satisfactoriamente" });
    })
    .catch((err) => {
      res
        .status(400)
        .send({ message: "Se ha producido un error al agregar el tikect " });
    });
});

// actualiza datos al esquema Tikect por el método PUT que recibe como parametro el id del Tikect
router.put("/:id", (req, res, next) => {
  Tikect.findById(req.params.id, function (err, tikect) {
    if (!tikect) {
      return res.status(404).send("No se ha encontrado el Tikect");
    } else {
      tikect.name = req.body.name;
      tikect.last_name = req.body.last_name;
      tikect.address = req.body.address;
      tikect.city = req.body.city;
      tikect.state = req.body.state;
      tikect.country = req.body.country;
      tikect.phone = req.body.phone;
      tikect.area_code = req.body.area_code;
      tikect.date = req.body.date;

      tikect
        .save()
        .then(() => {
          res.status(200).json("Tikect Actualizado completamente");
        })
        .catch(() => {
          res
            .status(400)
            .send(
              "Se ha producido un error al actualizar los datos del tikect"
            );
        });
    }
  });
});

// elimina el registro Tikect de la base de datos por el método PUT que recibe como parametro el id del Tikect
router.delete("/:id", (req, res, next) => {
  Tikect.findByIdAndRemove(req.params.id, function (err, tikect) {
    if (err) {
      res.status(400).send("Se ha producido un error al eliminar el Tikect");
    } else {
      res.json("Tikect eliminado satisfactoriamente");
    }
  });
});

module.exports = router;
