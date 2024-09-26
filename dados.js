let dados = [
    {
        titulo: "Bolo de Cenoura",
        ingredientes: [
            "3 cenouras médias",
            "4 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 ½ xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó",
            "Cobertura: 1 xícara de chocolate em pó, 1 colher de sopa de manteiga e 1 lata de leite condensado"
        ],
        preparo: [
            "Bata as cenouras, ovos e óleo no liquidificador até obter uma mistura homogênea.",
            "Em uma tigela, misture o açúcar e a farinha. Adicione a mistura do liquidificador e mexa bem.",
            "Adicione o fermento e misture levemente.",
            "Asse em forno pré-aquecido a 180°C por cerca de 40 minutos.",
            "Para a cobertura, misture o chocolate, manteiga e leite condensado em uma panela e cozinhe até engrossar."
        ],
        link: "https://www.tudogostoso.com.br/receita/2226-bolo-de-cenoura.html",
        tags: "bolo cenoura sobremesa chocolate clássico"
    },
    {
        titulo: "Feijoada",
        ingredientes: [
            "500g de feijão preto",
            "200g de carne-seca",
            "200g de costelinha de porco",
            "200g de linguiça calabresa",
            "200g de paio",
            "1 cebola grande picada",
            "3 dentes de alho picados",
            "Folhas de louro",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Deixe o feijão preto de molho por pelo menos 12 horas.",
            "Cozinhe o feijão junto com as folhas de louro em uma panela de pressão por cerca de 35 minutos.",
            "Cozinhe as carnes separadamente, retirando o excesso de sal da carne-seca.",
            "Em uma panela grande, refogue o alho e a cebola, adicione as carnes e o feijão.",
            "Cozinhe por mais 30 minutos em fogo baixo, ajustando o sal e pimenta."
        ],
        link: "https://www.tudogostoso.com.br/receita/1745-feijoada.html",
        tags: "feijoada brasileira feijão preto carne farofa"
    },
    {
        titulo: "Moqueca de Peixe",
        ingredientes: [
            "1kg de peixe em postas (como cação ou badejo)",
            "1 cebola grande cortada em rodelas",
            "1 pimentão verde cortado em rodelas",
            "1 pimentão vermelho cortado em rodelas",
            "200ml de leite de coco",
            "2 colheres de sopa de azeite de dendê",
            "Suco de 2 limões",
            "Coentro a gosto",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Tempere o peixe com limão, sal e pimenta. Deixe marinar por 30 minutos.",
            "Em uma panela, faça camadas de cebola, pimentão e peixe.",
            "Regue com o leite de coco e o azeite de dendê.",
            "Cozinhe em fogo baixo por cerca de 20 a 30 minutos, sem mexer.",
            "Finalize com coentro fresco."
        ],
        link: "https://www.tudogostoso.com.br/receita/106-moqueca-de-peixe.html",
        tags: "moqueca peixe frutos do mar dendê leite de coco"
    },
    {
        titulo: "Brigadeiro",
        ingredientes: [
            "1 lata de leite condensado",
            "2 colheres de sopa de manteiga",
            "4 colheres de sopa de chocolate em pó",
            "Granulado para decorar"
        ],
        preparo: [
            "Em uma panela, misture o leite condensado, manteiga e chocolate em pó.",
            "Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela.",
            "Deixe esfriar, faça bolinhas e passe no granulado."
        ],
        link: "https://www.tudogostoso.com.br/receita/9113-brigadeiro.html",
        tags: "brigadeiro doce festa sobremesa chocolate"
    },
    {
        titulo: "Lasanha à Bolonhesa",
        ingredientes: [
            "500g de massa de lasanha",
            "500g de carne moída",
            "1 cebola picada",
            "2 dentes de alho picados",
            "500ml de molho de tomate",
            "200g de queijo mussarela",
            "200g de presunto",
            "Queijo parmesão ralado",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Refogue a carne moída com alho e cebola até dourar. Adicione o molho de tomate e cozinhe por 20 minutos.",
            "Cozinhe a massa de lasanha conforme as instruções da embalagem.",
            "Em uma travessa, faça camadas de massa, carne, presunto e queijo.",
            "Finalize com queijo parmesão e leve ao forno pré-aquecido a 180°C por 20 minutos."
        ],
        link: "https://www.tudogostoso.com.br/receita/158-lasagna.html",
        tags: "lasanha bolonhesa massa carne molho tomate"
    },
    {
        titulo: "Torta de Limão",
        ingredientes: [
            "200g de biscoito maisena triturado",
            "100g de manteiga derretida",
            "1 lata de leite condensado",
            "Suco de 3 limões",
            "Raspas de limão",
            "3 claras",
            "6 colheres de sopa de açúcar"
        ],
        preparo: [
            "Misture o biscoito triturado com a manteiga e forre o fundo de uma forma.",
            "Em uma tigela, misture o leite condensado com o suco de limão e despeje sobre a massa.",
            "Bata as claras em neve com o açúcar e coloque por cima do recheio.",
            "Leve ao forno por 15 minutos ou até dourar o merengue."
        ],
        link: "https://www.tudogostoso.com.br/receita/1053-torta-de-limao.html",
        tags: "torta limão sobremesa doce refrescante"
    },
    {
        titulo: "Strogonoff de Frango",
        ingredientes: [
            "500g de peito de frango cortado em cubos",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 colher de sopa de ketchup",
            "1 colher de sopa de mostarda",
            "200ml de creme de leite",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Refogue a cebola e o alho. Adicione o frango e cozinhe até dourar.",
            "Acrescente ketchup, mostarda e misture bem.",
            "Adicione o creme de leite e cozinhe por mais 5 minutos.",
            "Sirva com arroz branco e batata palha."
        ],
        link: "https://www.tudogostoso.com.br/receita/2487-strogonoff-de-frango.html",
        tags: "strogonoff strogonof strognof frango prato principal creme leite"
    },
    {
        titulo: "Lasanha de Berinjela",
        ingredientes: [
            "2 berinjelas grandes",
            "400g de molho de tomate",
            "200g de queijo muçarela",
            "200g de queijo parmesão ralado",
            "1 cebola picada",
            "3 dentes de alho picados",
            "Azeite de oliva",
            "Sal e pimenta a gosto",
            "Manjericão fresco a gosto"
        ],
        preparo: [
            "Corte as berinjelas em fatias finas e grelhe em uma frigideira com azeite.",
            "Refogue a cebola e o alho em uma panela com azeite, adicione o molho de tomate e cozinhe por alguns minutos.",
            "Em uma travessa, monte camadas alternadas de berinjela, molho de tomate e queijo.",
            "Finalize com o queijo parmesão ralado e leve ao forno pré-aquecido a 180°C por 20 minutos.",
            "Sirva com manjericão fresco por cima."
        ],
        link: "https://www.tudogostoso.com.br/receita/301919-lasanha-de-berinjela.html",
        tags: "lasanha vegetariana berinjela queijo fácil"
    },
    {
        titulo: "Salada de Quinoa com Legumes",
        ingredientes: [
            "1 xícara de quinoa",
            "2 xícaras de água",
            "1 pepino picado",
            "1 cenoura ralada",
            "1 tomate picado",
            "1 cebola roxa picada",
            "Folhas de hortelã a gosto",
            "Azeite de oliva",
            "Suco de 1 limão",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Cozinhe a quinoa em água fervente por cerca de 15 minutos e deixe esfriar.",
            "Misture a quinoa com o pepino, cenoura, tomate e cebola.",
            "Tempere com azeite, suco de limão, sal, pimenta e hortelã a gosto.",
            "Deixe a salada na geladeira por pelo menos 30 minutos antes de servir."
        ],
        link: "https://www.tudogostoso.com.br/receita/202499-salada-de-quinoa.html",
        tags: "salada quinoa vegetariana saudável legumes vegetal"
    }
];
