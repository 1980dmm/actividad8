CREATE DATABASE mi_blog;
USE mi_blog;

CREATE TABLE autores (
    ID INT UNIQUE AUTO_INCREMENT PRIMARY KEY,  
    nombre VARCHAR(40) NOT NULL,        
    mail VARCHAR(40) NOT NULL,          
    imagen VARCHAR(80) NOT NULL                 
);

CREATE TABLE posts (
    ID INT UNIQUE AUTO_INCREMENT PRIMARY KEY,     
    titulo VARCHAR(40) NOT NULL,           
    descripcion VARCHAR(80) NOT NULL,      
    fecha_creacion DATE NOT NULL,          
    categoria VARCHAR(40) NOT NULL,        
    autor_id INT,                          
    FOREIGN KEY (autor_id) REFERENCES autores(ID)  
);

