USE catalogo_cosmeticos;
CREATE TABLE IF NOT EXISTS cosmeticos(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    descricao VARCHAR (50),
    valor DECIMAL (10,2),
    imagem VARCHAR(300)
);
INSERT INTO cosmeticos VALUES
(1, 'Loção Cuide-se Bem Deleite', 'Hidratação 48h, rápida absorção, maciez e perfume.', 55.90, 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B49881/8250de9e-8237-4315-a081-c1b970f74730-bot-49881-cuide-se-bem-de-leite-creme-hidratante-400ml-frontal-01.jpg');
(2, 'Gel de Limpeza Facial La Roche-Posay', 'Effaclar: limpa, controla oleosidade e reduz acne.', 49.90, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/619254-450-450/Effaclar-Gel-ConcentradoGel-De-Limpeza-Facial--1---1-.jpg?v=638573605439270000');
(3, 'Corretivo Líquido Maybelline', 'Cobre olheiras, reduz inchaço e dura o dia todo.', 62.70, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/491026-450-450/corretivo-para-area-dos-olhos-maybelline---instant-age-eraser--1-.jpg?v=637895124045500000');
(4, 'Pincel Facial Real Techniques - Mini Multitask', 'Real Techniques: pincéis inovadores e acessórios funcionais.', 69.90, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/348764-450-450/7045.jpg?v=637006136965300000');
(5, 'Óleo Labial Dior - Lip Glow Oil - 004 Coral', 'Óleo Dior: brilho, proteção e realce duradouro nos lábios.', 189.00, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/655775-450-450/oleo-labial-dior-lip-glow-oil-20-1-.jpg.jpg?v=638634772689470000');
(6, 'Máscara de cuidado revitalizante, Noir Fusain', 'Máscara revitalizante: volume e definição cílio a cílio.', 350.00, 'https://assets.hermes.com/is/image/hermesproduct/mascara-de-cuidado-revitalizante-noir-fusain--60510EV001-front-wm-1-0-0-1600-1600-q99_g.jpg');