const { Activity } = require("../db");

const activitiesPost = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if(!name) throw new Error('Ingrese un nombre')
    if(!difficulty || difficulty<1 || difficulty >5) throw new Error('Ingrese una dificultad entre 1 y 5')
    if(!duration) throw new Error('Ingrese una duracion')
    if(!season) throw new Error('Ingrese una temporada valida')
 
    const findAct = await Activity.findOne({ where: { name } });
    if (findAct) throw new Error("Actividad ya existente!!! ingrese otro nombre a la actividad");

    const activity = await Activity.create({ name, difficulty, duration, season });
    await activity.addCountries(countries)
    return res.status(200).send({ msg: "Creando actvidad ", activity });

  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  activitiesPost
};
