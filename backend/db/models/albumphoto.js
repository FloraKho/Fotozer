'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumPhoto = sequelize.define('AlbumPhoto', {
    albumId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  AlbumPhoto.associate = function(models) {
    // associations can be defined here
    AlbumPhoto.belongsTo(models.Photo, { foreignKey: 'photoId' });
    AlbumPhoto.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return AlbumPhoto;
};