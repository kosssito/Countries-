const { Activity } = require("../db");

const activitiesPost = async (req, res) => {
  try {
    const { name, difficulty, duration, season } = req.body;

    
    if (!name || !difficulty || !duration || !season)
      throw new Error("Ingrese los parametros correctamente");
    const findAct = await Activity.findOne({ where: { name } });

    if (findAct) throw new Error("Actividad ya existe, ingrese otra actividad");

   
    const activity = await Activity.create({ name, difficulty, duration, season });

    return res.send({ msg: "Creando actvidad ", activity });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

const activitiesFind = async (req, res) => {
  const { name, difficulty, duration, season } = req.body;

  return res.send({ msg: "Buscando", d });
};

module.exports = {
  activitiesPost,
  activitiesFind,
};
