const axios = require("axios");
const { Op } = require("sequelize");
const { Country ,Activity} = require("../db");

const getCountriesAll = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      // *Busqueda de ciudad por nombre no macheo exacto
      const getDB = await Country.findAll({
        where: { name: { [Op.iLike]: `${name}%` } },
        attributes: { exclude: ["capital", "subregion"] },
        include: Activity,
      });
      return res.send(getDB);
    }

    // busco la data en la api externa si mi db esta vacia
    if (!(await Country.findAll()).length) {
      const response = (
        await axios.get("https://restcountries.com/v3/all")
      ).data.map((c) => {
        return {
          id: c.cca3,
          name: c.name.common,
          flag: c.flags[0],
          continent: c.continents[0],
          capital: c.capital ? c.capital[0] : "not capital",
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });
      // * Guardando coutries a la base de datos
      await Country.bulkCreate(response);
    }
    // *Busqueda de todas las ciudades en la base de datos
    const getDB = await Country.findAll({
      attributes: ["id","flag", "name", "continent","population"],
      include: Activity,
    });

    return res.send(getDB);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

const getCountry = async (req, res) => {
  try {
    // *Busqueda de ciudad por id
    const { id } = req.params;
    const getDB = await Country.findAll({
      where: { id: id.toUpperCase() },
      include: Activity,
    });
    return res.send(getDB);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getCountriesAll,
  getCountry,
};
