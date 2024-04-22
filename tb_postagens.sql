USE db_blogpessoal;

INSERT INTO tb_postagens (date, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 01', 'Postagem 01');
INSERT INTO tb_postagens (date, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 02', 'Postagem 02');
INSERT INTO tb_postagens (date, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 03', 'Postagem 03');

SELECT * FROM tb_postagens;



