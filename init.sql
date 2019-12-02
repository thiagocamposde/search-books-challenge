CREATE TABLE books (
  ID SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  isbn CHAR(13),
  autor VARCHAR(255),
  editora VARCHAR(255),
  ano smallint,
  idioma VARCHAR(255),
  peso SMALLINT,
  dimensoes VARCHAR(255)
);


INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'O Silmarillion - Portugues Do Brasil - Serie Senhor Dos Aneis (senhor Dos Aneis)', 
'8578271262', 
'John Ronald Reuel Tolkien', 
'Wmf Martins Fontes',
2009,
'pt_BR',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Sagan Om Ringen', 
'9120077386', 
'John Ronald Reuel Tolkien', 
'Wmf Martins Fontes',
1989,
'pt_BR',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Nachrichten Aus Mittelerde', 
'3608875018', 
'John Ronald Reuel Tolkien', 
'Wmf Martins Fontes',
2001,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Lord Of The Rings - The Fellowship Of The Ring', 
'5218001694', 
'John Ronald Reuel Tolkien', 
'Wmf Martins Fontes',
1993,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'O Pequeno Principe', 
'8522005222', 
'Lygia Bojunga', 
'Ediouro',
1905,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'A Torre Negra Vii (portuguese Edition)', 
'9722533347', 
'Stephen King', 
'Bertrand Editora',
2017,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Shining', 
'3898970965', 
'Stephen King', 
'Bertrand Editora',
2004,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Shining', 
'3898970965', 
'Stephen King', 
'Bertrand Editora',
2004,
'en_US',
200,
'20x30x3');


INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'The Regulators', 
'0140863222', 
'Stephen King', 
'Bertrand Editora',
1996,
'en_US',
200,
'20x30x3');



INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Carrie', 
'0451119630', 
'Stephen King', 
'Bertrand Editora',
1975,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'Freud', 
'190443553x', 
'Peter Gay', 
'Little Books',
2006,
'en_US',
200,
'20x30x3');

INSERT INTO books (titulo, isbn, autor, editora, ano, idioma, peso, dimensoes)
VALUES  (
'A Curious History Of Cats', 
'1904435483', 
'Madeline Swan', 
'Little Books',
2005,
'en_US',
200,
'20x30x3');