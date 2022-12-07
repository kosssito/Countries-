const { Activity } = require("../db");
const { Op } = require("sequelize");

const activitiesPost = async (req, res) => {
  try {
    const { name, difficulty, start, end, season, countries } = req.body;

    if (!name) throw new Error("Ingrese un nombre");
    if (!difficulty || difficulty < 1 || difficulty > 5)
      throw new Error("Ingrese una dificultad entre 1 y 5");
    if (!start) throw new Error("Ingrese la fecha de inicio de actividad");
    if (!end) throw new Error("Ingrese la fecha de finalizacion de actividad");
    if (!season) throw new Error("Ingrese una temporada valida");

    const validator = await Activity.findOne({
      where: { name: { [Op.iLike]: `${name}` } },
    });
    if (validator) throw new Error( "Actividad ya existente!!! ingrese otro nombre a la actividad");
    const activity = await Activity.create({
      name,
      difficulty,
      start,
      end,
      season,
    });
    await activity.addCountries(countries);
    return res.status(200).send(activity);
  } catch (error) {
    return res.status(400).send(error.message );
  }
};

const activitiesGet = async (req, res) => {
  try {
    const activity = await Activity.findAll()
    return res.status(200).send(activity);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  activitiesPost,
  activitiesGet,
};
