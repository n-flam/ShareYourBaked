module.exports = (sequelize, DataTypes) => {
  const Bakedgood = sequelize.define("Bakedgood", {
    recipename: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    ingredience: {
      type: DataTypes.STRING,
    },
    pieces: {
      type: DataTypes.INTEGER,
    },
    nuts: {
      type: DataTypes.BOOLEAN,
    },
    glutenfree: {
      type: DataTypes.BOOLEAN,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
    },
    dairyfree: {
      type: DataTypes.BOOLEAN,
    },
    halal: {
      type: DataTypes.BOOLEAN,
    },
  });
    // every Bakedgood belongs to only one user
  Bakedgood.associate = (db) => {
    Bakedgood.belongsTo(db.User);
  };
  return Bakedgood;
};