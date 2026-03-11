'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsTo(models.User,{
        foreignKey:"userId",
        as:"user"
      }),
      Chat.hasMany(models.Message,{
        foreignKey:"chatId",
        as:"messages"
      })
    }
  }
  Chat.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userId: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Chat',
    timestamps:true
  });
  return Chat;
};