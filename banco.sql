USE catalogo_cosmeticos;
CREATE TABLE IF NOT EXISTS cosmeticos(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100),
    descricao VARCHAR (300),
    valor DECIMAL (10,2),
    imagem VARCHAR(300)
);
INSERT INTO cosmeticos VALUES
(1, 'Loção Cuide-se Bem Deleite', 'Hidratação 48h, rápida absorção, maciez e perfume.', 55.90, 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B49881/8250de9e-8237-4315-a081-c1b970f74730-bot-49881-cuide-se-bem-de-leite-creme-hidratante-400ml-frontal-01.jpg');
(2, 'Gel de Limpeza Facial La Roche-Posay', 'Effaclar: limpa, controla oleosidade e reduz acne.', 49.90, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/619254-450-450/Effaclar-Gel-ConcentradoGel-De-Limpeza-Facial--1---1-.jpg?v=638573605439270000');
(3, 'Corretivo Líquido Maybelline', 'Cobre olheiras, reduz inchaço e dura o dia todo.', 62.70, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/491026-450-450/corretivo-para-area-dos-olhos-maybelline---instant-age-eraser--1-.jpg?v=637895124045500000');