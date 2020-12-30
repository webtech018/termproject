var express = require('express');
var router = express.Router();
var Product=require("../models/product");
var checksessionauth = require("../middlesware/checksessionauth")
/* GET home page. */
router.get('/',async function(req, res, next) {
  let products=await Product.find();
 console.log(req.session.user);
  res.render("products/list",{products});

});
router.get("/add",checksessionauth, async function (req, res, next) {
  res.render("products/add");
});
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/edit/:id",checksessionauth, async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});
router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.service = req.body.service;
  await product.save();
  res.redirect("/products");
});

module.exports = router;