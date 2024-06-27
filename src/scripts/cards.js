const cardsList = [
  {
    Title: "Trafego Pago Sob medida",
    description:
      "Aumente sua visibilidade online e direcione o tráfego certo para sua plataforma com nossas estratégias de publicidade paga, otimizadas para alcançar seu público-alvo de maneira eficaz.",
    img: "./Img/imagens/trafego-pago-1.jpeg",
    alt: "Imagem referente a Trafego pago",
    firstParagraph: "Trafego Pago",
    secondParagraph: "Sob medida",
  },
  {
    Title: "Vídeos de Propaganda Impactantes",
    description:
      "Conte sua história de forma visualmente cativante com vídeos de propaganda profissionais e envolventes que destacam sua marca e impulsionam o engajamento do público.",
    img: "./Img/imagens/edição-de-video.jpeg",
    alt: "",
    firstParagraph: "Propagandas",
    secondParagraph: "Impactantes",
  },
  {
    Title: "Seu Site Personalizado",
    description:
      "Desde a concepção até a implementação, criamos sites personalizados que refletem a essência da sua marca e oferecem uma experiência online excepcional para seus clientes.",
    img: "./Img/imagens/criação-de-site.jpeg",
    alt: "",
    firstParagraph: "Site",
    secondParagraph: "Personalizado",
  },
  {
    Title: "O seu LOGO na mente do cliente!",
    description:
      "Aumente sua visibilidade online e direcione o tráfego certo para sua plataforma com nossas estratégias de publicidade paga, otimizadas para alcançar seu público-alvo de maneira eficaz.",
    img: "./Img/imagens/logo-3.jpeg",
    alt: "",
    firstParagraph: "LOGO",
    secondParagraph: "Memorável",
  },
  {
    Title: "Edição de Vídeos Profissionais",
    description:
      "Sua identidade visual é fundamental para o reconhecimento da marca. Nossa equipe talentosa de designers trabalha com você para criar logos distintos e memoráveis que se destacam da concorrência.",
    img: "./Img/imagens/edição-de-video.jpeg",
    alt: "",
    firstParagraph: "Vídeos",
    secondParagraph: "Profissionais",
  },
  {
    Title: "WhatsApp para Vendas",
    description:
      "Maximize suas oportunidades de vendas com uma configuração eficiente do WhatsApp. Ajudamos você a implementar estratégias inteligentes para se comunicar de forma direta e eficaz com seus clientes.",
    img: "./Img/imagens/whats-1.jpeg",
    alt: "",
    firstParagraph: "WhatsApp para Vendas",
    secondParagraph: "",
  },
  {
    Title: "Criação de Panfletos Persuasivos",
    description:
      "Aumente sua visibilidade online e direcione o tráfego certo para sua plataforma com nossas estratégias de publicidade paga, otimizadas para alcançar seu público-alvo de maneira eficaz.",
    img: "./Img/imagens/panfletos-4.jpeg",
    alt: "",
    firstParagraph: "Panfletos",
    secondParagraph: "Persuasivos",
  },
];

// função que cria os cards

function createCards(card) {
  const cardItem = document.createElement("li");
  const spanImg = document.createElement("span");
  const imagem = document.createElement("img");
  const divText = document.createElement("div");
  const text1 = document.createElement("p");
  const text2 = document.createElement("p");

  // classes
  cardItem.classList.add("list__item");
  spanImg.classList.add("list__img");
  divText.classList.add("list__div");
  text1.classList.add("div__paragraph--one");
  text2.classList.add("div__paragraph--two");

  // content

  imagem.src = card.img;
  text1.innerText = card.firstParagraph;
  text2.innerText = card.secondParagraph;

  divText.append(text1, text2);
  spanImg.append(imagem);
  cardItem.append(spanImg, divText);

  return cardItem;
}

// função para renderizar os cards
function renderCards(list) {
  const mainList = document.querySelector(".section__mainList");
  for (let i = 0; i < list.length; i++) {
    const cards = createCards(list[i]);
    mainList.append(cards);
  }
}

function createbanners(card) {
  const bannerItem = document.createElement("li");
  const divText = document.createElement("div");
  const title = document.createElement("h3");
  const paragraph = document.createElement("p");
  const figure = document.createElement("figure");
  const imagem = document.createElement("img");

  // classes
  bannerItem.classList.add("banner__item");
  divText.classList.add("banner__text");
  title.classList.add("section__title");
  paragraph.classList.add("banner__paragraph");
  figure.classList.add("banner__box");

  // content

  imagem.src = card.img;
  title.innerText = card.Title;
  paragraph.innerText = card.description;

  divText.append(title, paragraph);
  figure.append(imagem);
  bannerItem.append(divText, figure);

  return bannerItem;
}
// função para renderizar os banners
function renderBanners(list) {
  const mainList = document.querySelector(".section__list");

  for (let i = 0; i < list.length; i++) {
    const cards = createbanners(list[i]);
    if (i % 2 === 0) {
      cards.classList.add("banner__reverse");
      
    }
    mainList.append(cards);
  }
}

renderCards(cardsList);
renderBanners(cardsList);
