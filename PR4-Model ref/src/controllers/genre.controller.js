const {genreServic} = require("../services");

/* Create genre */
const createGenre = async(req,res) =>{
    try {
        const reqBody = req.body;
        const genre = await genreServic.createGenre(reqBody);
        if(!genre){
            throw new Error("Something went wrong, please try again or later..");
        };

        res.status(200).json({
            success:true,
            message:"Genre created successfully..",
            data : genre 
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// get genre list
const getGenreList = async(req,res) =>{
    try {
        const getList = await genreServic.getGenreList(req,res);

        res.status(200).json({
            success:true,
            message:"Genre list got successfully..",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// delete genre 
const deleteGenre = async(req,res) =>{
    try {
        const genreId = req.params.genreId;
        if(!genreId){
            throw new Error("Genre not found");
        }

        await genreServic.deleteGenre(genreId);

        res.status(200).json({
            success:true,
            message:"Genre deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// update genre 
const genreUpdate = async(req,res) =>{
    try {
        const genreId = req.params.genreId;
        const genreExists = await genreServic.getGenreById(genreId);
        if(!genreExists){
            throw new Error("genre not found..");
        };

        await genreServic.genreUpdate(genreId , req.body);
        res.status(200).json({
            success:true,
            message:"genre updated successfully",
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}


module.exports = {
    createGenre,
    getGenreList,
    deleteGenre,
    genreUpdate
}