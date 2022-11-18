const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: false
      },
      start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM,
        values: ["spring", "summer", "autumm", "winter"],
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
