'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products',{
      id_products:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      nama_products:{
        type: Sequelize.STRING,
        allowNull:true
      },
      harga:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:true
      },
      warna:{
        type: Sequelize.STRING,
        allowNull:true
      },
      ukuran:{
        type: Sequelize.STRING,
        allowNull:false
      },
      deskripsi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
