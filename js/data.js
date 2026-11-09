/* Saturno Gourmet — todo o conteúdo editável do site fica aqui. */
window.SG = {
  links: {
    whatsapp: "https://wa.me/5581971004482",
    whatsappTexto: "(81) 97100-4482",
    instagram: "https://www.instagram.com/saturnogourmett/",
    instagramUser: "@saturnogourmett",
    // cardapio.ai/saturno-gourmet aparece como "loja bloqueada"; por isso o pedido vai pelo WhatsApp
    pedido: "https://wa.me/5581971004482?text=" + encodeURIComponent("Olá, Saturno Gourmet! Quero fazer um pedido."),
    mapa: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Avenida Almirante Paulo Moreira, 2742, Garapu, Cabo de Santo Agostinho - PE"),
    waze: "https://waze.com/ul?q=" + encodeURIComponent("Avenida Almirante Paulo Moreira, 2742, Cabo de Santo Agostinho"),
    mapaEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Avenida Almirante Paulo Moreira, 2742, Garapu, Cabo de Santo Agostinho - PE") + "&output=embed"
  },
  // endereço do cardápio digital; o Linktree mostra outro (Rua Eraldo Barros de Souza, 106E, Cohab) — confirmar com o dono
  endereco: {
    linha1: "Av. Almirante Paulo Moreira, 2742",
    linha2: "Garapu · Cabo de Santo Agostinho – PE"
  },
  // [dia 0=domingo]: [abre, fecha] em horas. null = sem informação. Preencher quando o dono confirmar.
  horarios: null,
  dias: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],

  categorias: [
    {
      id: "pizzas", nome: "Pizzas", nota: "Borda de catupiry ou cheddar", tipo: "planetas",
      itens: [
        { nome: "Sol Mussarela", astro: "sol", preco: 35, desc: "Molho de tomate, mussarela, azeitona e orégano." },
        { nome: "Mercúrio Franco c/ Catupiry", astro: "mercurio", preco: 42, desc: "Molho de tomate, mussarela, catupiry, frango, azeitona e orégano." },
        { nome: "Lua Quatro Queijos", astro: "lua", preco: 40, desc: "Molho de tomate, mussarela, catupiry, cheddar, parmesão e orégano." },
        { nome: "Eclipse Mista", astro: "eclipse", preco: 42, desc: "Molho de tomate, mussarela, presunto, azeitona e orégano." },
        { nome: "Terra Calabresa c/ Catupiry", astro: "terra", preco: 42, desc: "Mussarela, molho de tomate, calabresa, catupiry, orégano e azeitona." },
        { nome: "Marte Calabresa", astro: "marte", preco: 42, desc: "Mussarela, molho de tomate, calabresa, orégano, azeitona e cebola." },
        { nome: "Saturno Marguerita", astro: "saturno", preco: 35, desc: "Molho de tomate, mussarela, manjericão, tomate, orégano e azeitona." },
        { nome: "Urano Americana", astro: "urano", preco: 48, desc: "Molho de tomate, mussarela, bacon, azeitona e orégano." },
        { nome: "Netuno Camarão", astro: "netuno", preco: 58, desc: "Molho de tomate, mussarela, camarão, azeitona e orégano." },
        { nome: "Plutão Cartola", astro: "plutao", preco: 42, desc: "Canela, banana, queijo branco e mussarela." },
        { nome: "Meteoro Portuguesa", astro: "meteoro", preco: 48, desc: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona e orégano." },
        { nome: "Asteroide Ipojucana", astro: "asteroide", preco: 52, desc: "Molho de tomate, mussarela, carne seca, cebola, queijo coalho, azeitona e orégano." }
      ]
    },
    {
      id: "burgers", nome: "Hambúrgueres", nota: "Artesanais",
      itens: [
        { nome: "Estou com Pouca Fome", preco: 18.9, desc: "Pão, carne de hambúrguer, queijo, molho especial, tomate, cebola e alface." },
        { nome: "Vou Experimentar", preco: 23.9, desc: "Pão, carne de hambúrguer, queijo, presunto, ovo, molho especial, tomate, cebola e alface." },
        { nome: "Esse Faz Meu Estilo", preco: 25.9, desc: "Pão, carne de hambúrguer, queijo, ovo, bacon, molho especial, tomate, cebola e alface." },
        { nome: "Estou com Muita Fome", preco: 29.9, desc: "Pão, 2 carnes de hambúrguer, queijo, presunto, ovo, molho especial, tomate, cebola e alface." },
        { nome: "Hoje Estou Light", preco: 22.9, desc: "Pão, peito de frango, queijo, molho especial, tomate, cebola e alface." },
        { nome: "Hoje Pode Tudo", preco: 21.9, desc: "Pão, carne de hambúrguer e quatro queijos." },
        { nome: "Qualquer Um", preco: 25.9, desc: "Carne de hambúrguer, calabresa, ovo, queijo, tomate, cebola, alface e molho especial." },
        { nome: "Estou Desmantelado", preco: 39.9, desc: "Três carnes de hambúrguer, ovo, bacon, presunto, calabresa, queijo, tomate, cebola, alface e molho especial." }
      ]
    },
    {
      id: "combos", nome: "Super Combos", nota: "Burger + fritas + refri 350 ml",
      itens: [
        { nome: "Estou c/ Pouca Fome", preco: 35.9, desc: "+ fritas e refri 350 ml." },
        { nome: "Esse Faz Meu Estilo", preco: 41.9, desc: "+ fritas e refri 350 ml." },
        { nome: "Estou c/ Muita Fome", preco: 44.9, desc: "+ fritas e refri 350 ml." }
      ]
    },
    {
      id: "hotdogs", nome: "Hot Dog", nota: "Salsicha, tomate, cebola, ketchup, mostarda, maionese, milho e batata palha",
      itens: [
        { nome: "Tradicional", preco: 9.9 },
        { nome: "Com Presunto", preco: 12.9 },
        { nome: "Com Calabresa", preco: 13.9 },
        { nome: "Com Frango", preco: 13.9 },
        { nome: "Com Quatro Queijos", preco: 13.9 },
        { nome: "Com Bacon", preco: 14.9 },
        { nome: "Com Frango e Cheddar", preco: 14.9 },
        { nome: "Com Frango e Catupiry", preco: 14.9 },
        { nome: "Com Charque", preco: 17 },
        { nome: "Com Camarão", preco: 18.9 }
      ]
    },
    {
      id: "pratos", nome: "Pratos",
      itens: [
        { nome: "Fígado Acebolado", preco: 17.9, desc: "Arroz, feijão, farofa e salada." },
        { nome: "Frango na Chapa", preco: 18.9, desc: "Arroz, feijão, farofa e salada." },
        { nome: "Estrogonofe de Frango", preco: 21.9, desc: "Arroz e batata palha." },
        { nome: "Bife Acebolado", preco: 22.9, desc: "Arroz, feijão, farofa e salada." },
        { nome: "Filé de Peixe", preco: 28, desc: "Arroz e pirão." },
        { nome: "Arrumadinho de Charque", preco: 28 },
        { nome: "Arrumadinho de Carne de Sol", preco: 29.9 },
        { nome: "Moqueca de Peixe", preco: 32.9, desc: "Arroz e pirão." },
        { nome: "À Parmegiana Frango", preco: 32.9 },
        { nome: "À Parmegiana Carne", preco: 34.9 }
      ]
    },
    {
      id: "massas", nome: "Espaguetes e Lasanhas", nota: "Feitos na hora",
      itens: [
        { nome: "Espaguete ao Sugo", preco: 18, desc: "Molho de tomate e queijo parmesão." },
        { nome: "Espaguete 4 Queijos", preco: 26.9, desc: "Molho de tomate, mussarela, cheddar, catupiry, parmesão e molho branco." },
        { nome: "Espaguete Bolonhesa", preco: 28, desc: "Molho de tomate, parmesão, carne moída e molho branco." },
        { nome: "Espaguete de Camarão", preco: 36.9, desc: "Molho de tomate, parmesão, camarão e molho branco." },
        { nome: "Lasanha de Frango", preco: 26.9, desc: "Molho de tomate, frango, catupiry, cheddar, mussarela e molho branco." },
        { nome: "Lasanha Quatro Queijos", preco: 28, desc: "Molho de tomate, catupiry, cheddar, mussarela, parmesão e molho branco." },
        { nome: "Lasanha Bolonhesa", preco: 28, desc: "Molho de tomate, carne moída, catupiry, cheddar, mussarela e molho branco." },
        { nome: "Lasanha de Camarão", preco: 36.9, desc: "Molho de tomate, camarão, catupiry, cheddar, mussarela e molho branco." }
      ]
    },
    {
      id: "crepes", nome: "Crepes", nota: "Duplos",
      itens: [
        { nome: "Queijo", preco: 11.9 },
        { nome: "Romeu e Julieta", preco: 12.9 },
        { nome: "Presunto e Queijo Branco", preco: 13.9 },
        { nome: "Quatro Queijos", preco: 13.9 },
        { nome: "Cartola", preco: 13.9 },
        { nome: "Doce de Leite", preco: 13.9 },
        { nome: "Calabresa e Queijo Branco", preco: 14.9 },
        { nome: "Frango c/ Catupiry", preco: 15.9 },
        { nome: "Carne Seca e Queijo Branco", preco: 16.9 },
        { nome: "Nutella", preco: 16.9 },
        { nome: "Bacon e Queijo Branco", preco: 17.9 },
        { nome: "Camarão e Queijo Branco", preco: 27.9 }
      ]
    },
    {
      id: "tapiocas", nome: "Tapiocas", nota: "Artesanais",
      itens: [
        { nome: "Queijo", preco: 9, desc: "Queijo e orégano." },
        { nome: "Cebola", preco: 9, desc: "Queijo e cebola dourada ao azeite." },
        { nome: "Tomate", preco: 9, desc: "Queijo, tomate, manjericão e orégano." },
        { nome: "Romeu e Julieta", preco: 10, desc: "Goiabada, queijo, leite condensado e canela." },
        { nome: "Cartola", preco: 10, desc: "Canela, banana, queijo e leite condensado." },
        { nome: "Coco", preco: 10 },
        { nome: "Coco e Queijo", preco: 10 },
        { nome: "Coco e Leite Condensado", preco: 10 },
        { nome: "Doce de Leite", preco: 10 },
        { nome: "Coco c/ Doce de Leite", preco: 10 },
        { nome: "Mista", preco: 10.9, desc: "Queijo, presunto e orégano." },
        { nome: "Frango e Queijo", preco: 11.9, desc: "Queijo, frango e orégano." },
        { nome: "Calabresa", preco: 12, desc: "Calabresa, queijo e orégano." },
        { nome: "Quatro Queijos", preco: 12, desc: "Queijo branco, catupiry, parmesão, cheddar e orégano." },
        { nome: "Frango c/ Catupiry", preco: 13.9, desc: "Queijo, catupiry, frango e orégano." },
        { nome: "Ipojucana", preco: 14.9, desc: "Queijo, carne seca, azeitona e orégano." },
        { nome: "Bacon", preco: 14.9, desc: "Queijo, bacon e orégano." },
        { nome: "Frango c/ Catupiry e Milho", preco: 14.9, desc: "Queijo, catupiry, frango, milho e orégano." },
        { nome: "Banana c/ Nutella", preco: 16.9 },
        { nome: "Camarão", preco: 17.9, desc: "Queijo, camarão e orégano." }
      ]
    },
    {
      id: "batatas", nome: "Batatas Fritas",
      itens: [
        { nome: "Batata Frita 200 g", preco: 14.9 },
        { nome: "Batata c/ Cheddar", preco: 16.9 },
        { nome: "Batata Frita 300 g", preco: 19.9 },
        { nome: "Batata c/ Calabresa", preco: 19.9 },
        { nome: "Batata c/ Bacon", preco: 22.9 },
        { nome: "Batata Master Ultra Top", preco: 29.9, desc: "Batata, cheddar, calabresa, parmesão e maionese caseira." },
        { nome: "Batata Ultra Mega Top", preco: 34.9, desc: "Batata, cheddar, calabresa, bacon, parmesão e maionese caseira." }
      ]
    },
    {
      id: "bebidas", nome: "Bebidas",
      itens: [
        { nome: "Água 500 ml", preco: 3 },
        { nome: "Água c/ gás 500 ml", preco: 4 },
        { nome: "Café", preco: 6 },
        { nome: "Refrigerante lata", preco: 8 },
        { nome: "H2O", preco: 8 },
        { nome: "Sucos", preco: 8, desc: "Consultar sabores." },
        { nome: "Brahma Chopp", preco: 8 },
        { nome: "Brahma Duplo Malte", preco: 8 },
        { nome: "Guaraná 1 L", preco: 9 },
        { nome: "Coca-Cola 1 L", preco: 10 },
        { nome: "Heineken long neck", preco: 11 },
        { nome: "Budweiser long neck", preco: 11 },
        { nome: "Ice", preco: 11 },
        { nome: "Corona", preco: 12 },
        { nome: "Energético", preco: 14 }
      ]
    },
    {
      id: "coqueteis", nome: "Coquetéis",
      itens: [
        { nome: "Caipiroska", preco: 10 },
        { nome: "Caipirinha", preco: 11 },
        { nome: "Caipirinha com fruta", preco: 12 },
        { nome: "Caipifruta", preco: 18 },
        { nome: "Coquetel de frutas sem álcool", preco: 19 },
        { nome: "Coquetel de frutas com álcool", preco: 24 }
      ]
    }
  ],

  // vitrine da página inicial (fotos reais do Instagram, recortadas das miniaturas)
  vitrine: [
    { foto: "burger-duplo", titulo: "Hambúrgueres artesanais", sub: "8 opções, de R$ 18,90", cat: "burgers" },
    { foto: "pizza-mista", titulo: "Pizzas do sistema solar", sub: "12 sabores, de R$ 35", cat: "pizzas" },
    { foto: "lasanha", titulo: "Massas feitas na hora", sub: "Espaguetes e lasanhas", cat: "massas" },
    { foto: "hotdog", titulo: "Hot dog", sub: "10 opções, de R$ 9,90", cat: "hotdogs" },
    { foto: "crepe", titulo: "Crepes duplos", sub: "Doces e salgados", cat: "crepes" },
    { foto: "moqueca", titulo: "Pratos", sub: "Moqueca, parmegiana, arrumadinho", cat: "pratos" }
  ],
  galeria: ["burger-torre", "pizza-camarao", "fritas-carne-sol", "burger-ovo", "pizza-carne-seca", "espaguete", "burger-cheddar", "hotdog-calabresa", "pizza-cheddar", "burger-alface", "pizza-carne", "burger-classico"]
};
