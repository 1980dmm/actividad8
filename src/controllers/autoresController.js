const { selectAll, insertAutor, selectPostsByAutorId } = require("../models/autoresModel")

const getAllAutores = async (req, res, next) => {

    try{
    const result = await selectAll();
    res.json(result[0]);
    } catch (error) {
        next(error)
    }

}

const createAutores = async (req, res, next) => {
    try{
        const result = await insertAutor(req.body);
        res.json(result[0]);
    } catch (error) {
        next(error)
    }
}

const getPostsByAutorID = async (req, res, next) => {

    const { autor_id } = req.params;
    try{
        const result = await selectPostsByAutorId(autor_id);
        res.json(result[0]);
        } catch (error) {
            next(error)
        }

}

module.exports = {
    getAllAutores, createAutores, getPostsByAutorID
}
