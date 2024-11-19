use catalogocosmeticos;
CREATE TABLE IF NOT EXISTS cosmeticos(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    descricao VARCHAR (50),
    valor DECIMAL (10,2),
    imagem VARCHAR(300)
);
INSERT INTO cosmeticos VALUES
(1, )