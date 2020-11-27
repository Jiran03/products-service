const express = require('express');
const router = express.Router();
const { Products } = require('../models/');
const fs = require('fs');

/* GET All */
router.get('/', async(req,res)=>{
  try{
    const products = await Products.findAll();
    res.json(products);
  }catch(err){
    res.status(500).json({message : err.message})
  }
});

/* GET One */
router.get('/:id_products', async(req,res)=>{
  const id_products=req.params.id_products
  const products = await Products.findByPk(id_products)
  if(!products){
    return res.status(404).json({status: 'error', message:'Data tidak ditemukan'});
  }
  try{
    res.json(products);
  }catch(err){
    res.status(500).json({message: err.message});
  }
})

/*POST */
router.post('/', async (req, res)=>{
  const products = new Products(
    {
      nama_products: req.body.nama_products,
      harga: req.body.harga,
      warna: req.body.warna,
      ukuran: req.body.ukuran,
      deskripsi: req.body.deskripsi
    });
  try{
    const newProducts = await products.save()
    res.status(201).json(newProducts)
  }catch(err){
    res.status(400).json({message: err.message})
  }
})

/*DELETE One*/
router.delete('/:id_products', async (req, res)=>{
  const id_products = req.params.id_products
  const products = await Products.findByPk(id_products)
  if(!products){
    return res.status(404).json({status: 'error', message: 'Data Tidak Ditemukan'})
  }
  try{
    await products.destroy()
    res.json({message: 'Produk berhasil dihapus'});
  }catch(err){
    res.status(500).json({message: err.message})
  }
});

/**DELETE All 
router.delete('/', async (req, res)=>{
  try{
    const products = await Products.findAll()
    await products.destroy({where:{}})
  }catch(err){
    res.status(500).json({message: err.message})
  }
});*/

/**DELETE All */
router.delete('/', async (req, res) => {
  Products.destroy({
    where: {}
  })
  try{
    res.json({message:'Berhasil dihapus'})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})


/**UPDATE */
router.patch('/:id_products', getProduct, async (req, res)=>{
  if (req.body.nama_products != null) {
    res.products.nama_products = req.body.nama_products
  }
  if (req.body.harga!= null) {
    res.products.harga= req.body.harga
  } 
  if (req.body.warna != null) {
    res.products.warna = req.body.warna
  }
  if (req.body.ukuran != null) {
    res.products.ukuran= req.body.ukuran
  } 
  if (req.body.deskripsi != null) {
    res.products.deskripsi= req.body.deskripsi
  }
  try {
    const updateProducts = await res.products.save()
    res.json(updateProducts)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getProduct(req, res, next) {
  let products
  try {
    products = await Products.findByPk(req.params.id_products)
    if (products == null) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.products = products
  next()
}

module.exports = router;
