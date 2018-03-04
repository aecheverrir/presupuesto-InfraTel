/* global require */
const bodyParser = require("body-parser");
const config = require("../../config");
const superSecret = config.secret;
const HyE = require("../../models/herramientaYEquipo");

module.exports = function (app, express) {
  let apiRouter = express.Router();


  //CRUD para ruta http://localhost:8080/hye

  apiRouter.route("/")

    .post(function (req, res) {
      let hye = new HyE();
      hye.descripcion = req.body.descripcion;
      hye.unidad = req.body.unidad;
      hye.costoUnit = req.body.costoUnit;

      hye.save(function (err) {
        if (err) {
          if (err.code == 11000)
            return res.send(err);// res.json({success: false, message: "Ya existe una herramienta o equipo con este nombre."});
          else
            return res.send(err);
        }
        return res.json({ message: "Herramienta o equipo creado." });
      });
    })

    .get(function (req, res) {
      HyE.find({}, function (err, hyes) {
        if (err) res.send(err);

        res.send(hyes);
      });
    });

  //CRUD para ruta http://localhost:8080/hye/:id_herrYequip

  apiRouter.route("/:id_herrYequip")

    .get(function (req, res) {
      HyE.findById(req.params.id_herrYequip, function (err, hye) {
        if (err) res.send(err);

        // return that user
        res.send(hye);
      });
    })

    .put(function (req, res) {
      HyE.findById(req.params.id_herrYequip, function (err, hye) {
        if (err) res.send(err);
        if (req.body.descripcion) hye.descripcion = req.body.descripcion;
        if (req.body.unidad) hye.unidad = req.body.unidad;
        if (req.body.costoUnit) hye.costoUnit = req.body.costoUnit;

        hye.save(function (err) {
          if (err) res.send(err);

          res.json({ message: "Herramienta o equipo actualizado." });
        });
      });
    })

    .delete(function (req, res) {
      HyE.remove({
        _id: req.params.id_herrYequip
      }, function (err, hye) {
        if (err) res.send(err);

        res.json({ message: "Herramienta o equipo eliminado." });
      });
    });
  return apiRouter;
};
