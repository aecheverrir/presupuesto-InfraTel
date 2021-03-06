/* global require */
const bodyParser = require("body-parser");
const config = require("../../config");
const superSecret = config.secret;
const Mo = require("../../models/manoDeObra");

module.exports = function (app, express) {
  let apiRouter = express.Router();

  //CRUD para ruta http://localhost:8080/mo

  apiRouter.route("/")

    .post(function (req, res) {
      let trabajador = new Mo();
      trabajador.descripcion = req.body.descripcion;
      trabajador.unidad = req.body.unidad;
      trabajador.costoUnit = req.body.costoUnit;

      trabajador.save(function (err) {
        if (err) {
          if (err.code == 11000)
            return res.json({ success: false, message: "Ya existe una persona de este tipo." });
          else
            return res.send(err);
        }
        return res.json({ message: "Mano de obra creada." });
      });
    })

    .get(function (req, res) {
      Mo.find({}, function (err, trabajadores) {
        if (err) res.send(err);

        res.send(trabajadores);
      });
    });

  //CRUD para ruta http://localhost:8080/mo/:id_mo

  apiRouter.route("/:id_mo")

    .get(function (req, res) {
      Mo.findById(req.params.id_mo, function (err, trabajador) {
        if (err) res.send(err);

        // return that user
        res.send(trabajador);
      });
    })

    .put(function (req, res) {
      Mo.findById(req.params.id_mo, function (err, trabajador) {
        if (err) res.send(err);
        if (req.body.descripcion) trabajador.descripcion = req.body.descripcion;
        if (req.body.unidad) trabajador.unidad = req.body.unidad;
        if (req.body.costoUnit) trabajador.costoUnit = req.body.costoUnit;

        trabajador.save(function (err) {
          if (err) res.send(err);

          res.json({ message: "Trabajador actualizado." });
        });
      });
    })

    .delete(function (req, res) {
      Mo.remove({
        _id: req.params.id_mo
      }, function (err, trabajador) {
        if (err) res.send(err);

        res.json({ message: "Trabajador eliminado." });
      });
    });
  return apiRouter;
};
