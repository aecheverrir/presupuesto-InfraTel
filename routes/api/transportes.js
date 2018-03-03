/* global require */
const bodyParser = require("body-parser");
const config = require("../../config");
const superSecret = config.secret;
const Transporte = require("../../models/transporte");

module.exports = function (app, express) {
  let apiRouter = express.Router();


  //CRUD para ruta http://localhost:8080/transportes

  apiRouter.route("/")

    .post(function (req, res) {
      let transporte = new Transporte();
      transporte.descripcion = req.body.descripcion;
      transporte.unidad = req.body.unidad;
      transporte.costoUnit = req.body.costoUnit;

      transporte.save(function (err) {
        if (err) {
          if (err.code == 11000)
            return res.json({ success: false, message: "Ya existe un transporte con este nombre." });
          else
            return res.send(err);
        }
        return res.json({ message: "Transporte creado." });
      });
    })

    .get(function (req, res) {
      Transporte.find({}, function (err, transportes) {
        if (err) res.send(err);

        res.send(transportes);
      });
    });

  //CRUD para ruta http://localhost:8080/transportes/:id_transporte

  apiRouter.route("/:id_transporte")

    .get(function (req, res) {
      Transporte.findById(req.params.id_transporte, function (err, transporte) {
        if (err) res.send(err);

        // return that user
        res.send(transporte);
      });
    })

    .put(function (req, res) {
      Transporte.findById(req.params.id_transporte, function (err, transporte) {
        if (err) res.send(err);
        if (req.body.descripcion) transporte.descripcion = req.body.descripcion;
        if (req.body.unidad) transporte.unidad = req.body.unidad;
        if (req.body.costoUnit) transporte.costoUnit = req.body.costoUnit;

        transporte.save(function (err) {
          if (err) res.send(err);

          res.json({ message: "Transporte actualizado." });
        });
      });
    })

    .delete(function (req, res) {
      Transporte.remove({
        _id: req.params.id_transporte
      }, function (err, transporte) {
        if (err) res.send(err);

        res.json({ message: "Transporte eliminado." });
      });
    });
  return apiRouter;
};
