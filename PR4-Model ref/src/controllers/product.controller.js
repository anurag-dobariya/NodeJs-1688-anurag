const {productService} = require("../services");

/* Create product */
const createProduct = async(req,res) =>{
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);

        if(!product){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"product created successfully",
            data:product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/* get product list */
const getProductList = async(req,res) =>{
    try {
        const productList = await productService.getProductList(req,res);
       
       res.status(200).json({
        success:true,
        message:"get product list successfully",
        data:{productList}
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete product */
const deleteProduct = async(req,res) =>{
    try {
        const productId = req.params.productId;

        if(!productId){
            throw new Error("product not found");
        }

        await productService.deleteProduct(deleteId);
        
        res.status(200).json({
            success:true,
            message:"product deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** product details update by id */
const productUpdate = async (req,res) =>{
    try {
        const productId = req.params.productId;
        const productExists = await productService.getProductById(productId);
        if(!productExists){
            throw new Error("product not found")
        } 

        await productService.productUpdate(productId , req.body);
        res.status(200).json({
            success:true,
            message:"product details updated successfully."
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports ={
    createProduct,
    getProductList,
    deleteProduct,
    productUpdate
}