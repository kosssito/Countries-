const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      // id: {
      //   type: DataTypes.STRING,
      //   primaryKey: true,

      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.DATEONLY,
      },
      season: {
        type: DataTypes.ENUM,
        values: ["spring", "summer", "autumm", "winter"],
      },
    },
    { timestamps: false }
  );
};

