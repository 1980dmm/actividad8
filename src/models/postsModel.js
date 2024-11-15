const pool = require("../config/db");

// recuperar todos los posts
function selectAll(){
    return pool.query(
        'select * from posts as p inner join autores as a on a.id = p.autor_id;'
    )
}

//filtro de posts por autor
function selectByAutor(idAutor) {
    return pool.query('select * from posts where autor_id = ?;', [idAutor]);
}

// insertar post
function insertPost({ titulo, descripcion, fecha_creacion, categoria, autor_id}){
    return pool.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values (?, ?, ?, ?, ?)', 
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    )
}

module.exports = {
    selectAll, selectByAutor, insertPost
}