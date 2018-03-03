/* global require */
const bodyParser = require("body-parser");
const config = require("../../config");
const Material = require("../../models/material");

module.exports = function (app, express) {
  let apiRouter = express.Router();


  //CRUD para ruta http://localhost:8080/materiales

  apiRouter.route("/")

    .post(function (req, res) {
      let material = new Material();
      material.descripcion = req.body.descripcion;
      material.unidad = req.body.unidad;
      material.costoUnit = req.body.costoUnit;

      material.save(function (err) {
        if (err) {
          if (err.code == 11000)
            return res.json({ success: false, message: "Ya existe un material con este nombre." });
          else
            return res.send(err);
        }
        return res.json({ message: "Material creado." });
      });
    })

    .get(function (req, res) {
      Material.find({}, function (err, materiales) {
        if (err) res.send(err);

        res.send(materiales);
      });
    });

  //CRUD para ruta http://localhost:8080/materiales/:id_material

  apiRouter.route("/:id_material")

    .get(function (req, res) {
      Material.findById(req.params.id_material, function (err, material) {
        if (err) res.send(err);

        // return that user
        res.json(material);
      });
    })

    .put(function (req, res) {
      Material.findById(req.params.id_material, function (err, material) {
        if (err) res.send(err);
        if (req.body.descripcion) material.descripcion = req.body.descripcion;
        if (req.body.unidad) material.unidad = req.body.unidad;
        if (req.body.costoUnit) material.costoUnit = req.body.costoUnit;

        material.save(function (err) {
          if (err) res.send(err);

          res.json({ message: "Material actualizado." });
        });
      });
    })

    .delete(function (req, res) {
      Material.remove({
        _id: req.params.id_material
      }, function (err, material) {
        if (err) res.send(err);

        res.json({ message: "Material eliminado." });
      });
    });

  return apiRouter;
};
