import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import Product from "../models/Product.js";
//function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      category,
      subCategory,
      sizes,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new Product(productData);
    await product.save();

    // console.log(productData);
    // console.log(imagesUrl);
    res.json({ success: true, message: "Product Added" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

//function for list product
const listProducts = async (req, res) => {};

//function for removing product
const removeProduct = async (req, res) => {};

//function for single product
const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
