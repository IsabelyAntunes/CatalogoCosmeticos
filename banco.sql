use catalogocosmeticos;
CREATE TABLE IF NOT EXISTS cosmeticos(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    descricao VARCHAR (50),
    valor DECIMAL (10,2),
    imagem VARCHAR(300)
);
INSERT INTO cosmeticos VALUES
(1, 'Loção Desodorante Hidratante Corporal Cuide-se Bem Deleite', 'Loção Hidratante Desodorante Corporal Cuide-se Bem Deleite - O Boticário  
Com textura cremosa e fragrância doce, proporciona hidratação intensa por 48 horas graças à Manteiga de Karité e ao Glicerol. De rápida absorção, deixa a pele macia e perfumada. Produto Cruelty Free, não testado em animais.', 55.90, 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B49881/8250de9e-8237-4315-a081-c1b970f74730-bot-49881-cuide-se-bem-de-leite-creme-hidratante-400ml-frontal-01.jpg');
(2, 'Gel de Limpeza Facial La Roche-Posay - Effaclar Concentrado', 'Gel de Limpeza Facial Effaclar Concentrado
Desenvolvido para peles oleosas e acneicas, combina Ácido Salicílico, Zinco e LHA® para limpar profundamente, controlar a oleosidade e reduzir a acne. Sua fórmula sem sabão limpa os poros sem irritar ou ressecar, deixando a pele purificada, menos oleosa e preparada para outros cuidados.', 49.90, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/619254-450-450/Effaclar-Gel-ConcentradoGel-De-Limpeza-Facial--1---1-.jpg?v=638573605439270000');
(3, 'Corretivo Líquido Maybelline Eraser Instant Age Rewind - Neutralizer', 'Corretivo Líquido Eraser Instant Age Rewind - Maybelline
Conhecido por sua alta cobertura e toque seco, corrige olheiras, inchaços e linhas finas com um aplicador inovador. Oferece acabamento natural, longa duração e dispensa pó finalizador. Sua fórmula com Haloxyl reduz inchaço e ajuda a retardar o envelhecimento da área dos olhos. Ideal para o dia a dia!', 62.70, 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/491026-450-450/corretivo-para-area-dos-olhos-maybelline---instant-age-eraser--1-.jpg?v=637895124045500000');