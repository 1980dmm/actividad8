const pool = require("../config/db");

// recuperar todos los posts
function selectAll(){
    return pool.query(
        'select * from autores'
    )
}

// insertar post
function insertAutor({ nombre, mail, imagen }){
    return pool.query(
        'insert into autores (nombre, mail, imagen) values (?, ?, ?)', 
        [nombre, mail, imagen]
    )
}

module.exports = {
    selectAll, insertAutor
}