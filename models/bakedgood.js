module.exports = (sequelize, DataTypes) => {
  const Bakedgood = sequelize.define("Bakedgood", {
    description: {
      type: DataTypes.STRING,
    },
    pieces: {
      type: DataTypes.INTEGER,
    },
    nuts: {
      type: DataTypes.BOOLEAN,
    },
  });
    // every Bakedgood belongs to only one user
  Bakedgood.associate = (db) => {
    Bakedgood.belongsTo(db.User);
  };
  return Bakedgood;
};