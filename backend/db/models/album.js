'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    albumName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
      through: 'AlbumPhoto',
      otherKey: 'photoId',
      foreignKey: 'albumId'
    }

    Album.belongsToMany(models.Photo, columnMapping);

    Album.hasMany(models.AlbumPhoto, {
      foreignKey: 'albumId',
      onDelete: 'cascade',
      hooks: true
})
  };
  return Album;
};