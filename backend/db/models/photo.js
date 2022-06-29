'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgURL: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Photo.associate = function (models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
    Photo.hasMany(models.Comment, {
      foreignKey: 'photoId', 
      onDelete: 'cascade', 
      hooks: true
    });
    Photo.hasMany(models.Favorite, {
      foreignKey: 'photoId',
      onDelete: 'cascade',
      hooks: true
    })
    
    const columnMapping = {
      through: 'AlbumPhoto',
      otherKey: 'albumId',
      foreignKey: 'photoId'
    }

    Photo.belongsToMany(models.Album, columnMapping);

    Photo.hasMany(models.AlbumPhoto, {
      foreignKey: 'photoId',
      onDelete: 'cascade',
      hooks: true
    })
  };
  return Photo;
};