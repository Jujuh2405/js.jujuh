let campoIdade;
let campoDrama;
let campoInspiracao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoDrama = createCheckbox("Gosta de drama?");
  campoInspiracao = createCheckbox("Gosta de inspiração?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeInspiracao = campoInspiracao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeInspiracao);

  fill(color(0, 0, 128));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeInspiracao) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O Senhor dos Anéis: A Sociedade do Anel";
    } else {
      if (idade >= 12) {
        if(gostaDeDrama || gostaDeInspiracao) {
          return "A Invenção de Hugo Cabret";
        } else {
          return "O Menino e o Mundo";
        }
      } else {
        if (gostaDeDrama) {
          return "A Viagem de Chihiro";
        } else {
          return "Meu Amigo Totoro";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "Coco";
    } else {
      return "O Pequeno Príncipe";
    }
  }
}