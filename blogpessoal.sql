USE db_blogpessoal;

INSERT INTO tb_postagem (date, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 01', 'Postagem 01');
INSERT INTO tb_postagem (date, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 02', 'Postagem 02');

SELECT * FROM tb_postagem;