import ProductModel from "../models/ProductModel.js"

//post product
export const addProducts = (async(req,res)=> {
    const newProduct = new ProductModel({
        productName : req.body.productName,
        description : req.body.description,
        price : req.body.price,
        rating : req.body.rating
    })

    try {
        await newProduct.save();
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all products
export const getProducts = (async(req,res)=> {
    try {
        const getAllProducts = await ProductModel.find();
        if(!getAllProducts) return res.status(404).json("product not found");

        res.status(200).json(getAllProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get product by id 
export const getProductById = (async(req,res)=> {
    try {
        const productById = await ProductModel.findById(req.params.id);
        if(!productById) return res.status(404).json("product not found");
        res.status(200).json(productById)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete product by id
export const deleteProduct = (async(req,res)=> {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        if(!deleteProduct) return res.status(404).json("product not found to delete")
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

//update product by id
export const updateProduct = (async(req,res)=> {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateProduct) res.status(404).json('product not found')
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})