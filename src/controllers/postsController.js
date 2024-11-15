const { selectAll, selectByAutor, insertPost } = require("../models/postsModel");

const getAllPosts = async (req, res, next) => {

    try{
    const result = await selectAll();
    res.json(result[0]);
    } catch (error) {
        next(error)
    }

}

const createPost = async (req, res, next) => {

        try{
            const result = await insertPost(req.body);;
            res.json(result[0]);
        } catch (error) {
            next(error)
        }

}

const getPostsByAutor = async (req, res, next) => {

    const { idAutor } = req.params;
    try{
        const result = await selectByAutor(idAutor);
        res.json(result[0]);
        } catch (error) {
            next(error)
        }

}

module.exports = {
    getAllPosts, createPost, getPostsByAutor
}