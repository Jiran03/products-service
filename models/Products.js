

module.exports=(sequelize, DataTypes)=>{
    const Products = sequelize.define('Products', {
        id_products:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
          },
          nama_products:{
            type: DataTypes.STRING,
            allowNull:true
          },
          harga:{
            type: DataTypes.DECIMAL(10,2),
            allowNull:true
          },
          warna:{
            type: DataTypes.STRING,
            allowNull:true
          },
          ukuran:{
            type: DataTypes.STRING,
            allowNull:false
          },
          deskripsi: {
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt:{
            field:'created_at',
            type: DataTypes.DATE,
            allowNull:false
          },
          updatedAt:{
            field:'updated_at',
            type: DataTypes.DATE,
            allowNull: false
          }
        },
    {
        tableName:'products'
    });

    return Products;
}