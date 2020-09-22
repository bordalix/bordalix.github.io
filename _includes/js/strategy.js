const components = [
  [
    'Caros colegas',
    'Por outro lado',
    'Assim mesmo',
    'Não poderemos esquecer',
    'Do mesmo modo',
    'A prática mostra que',
    'Nunca é demais insistir, uma vez que',
    'A experiência mostra que',
    'É fundamental ressaltar que',
    'O incentivo ao avanço tecnológico',
  ],
  [
    'a execução deste projecto',
    'a complexidade dos estudos efectuados',
    'a expansão da nossa actividade',
    'a actual estrutura da organização',
    'o novo modelo estrutural aqui preconizado',
    'o desenvolvimento de formas distintas de actuação',
    'a constante divulgação de informações',
    'a consolidação das estruturas',
    'a análise de diversos resultados',
    'o início do programa de formação de atitudes',
  ],
  [
    'obriga-nos à análise',
    'cumpre um papel essencial de formação',
    'exige a precisão e a definição',
    'auxilia a preparação e a definição',
    'contribui para a correcta determinação',
    'assume importante posição na definição',
    'facilita a definição',
    'prejudica a percepção da importância',
    'oferece uma oportunidade de verificação',
    'acarreta um processo de reformulação',
  ],
  [
    'das nossa opções de desenvolvimento no futuro. ',
    'das nossas metas financeiras e administrativas. ',
    'dos conceitos de participação geral. ',
    'das atitudes e das atribuição da direcção. ',
    'das novas proposições. ',
    'das opções básicas para o sucesso do programa. ',
    'do nosso sistema de formação de quadros. ',
    'das condições apropriadas para os negócios. ',
    'dos índices pretendidos. ',
    'das forma de acção. ',
  ],
];

const paragraphsPerPage = 4;
const sentencesPerParagraph = 5;
const content = document.getElementById('content_container');

function addParagraph(html) {
  const p = document.createElement('p');
  p.innerHTML = html;
  content.appendChild(p);
}

function addPageSeparator(num) {
  const p = document.createElement('p');
  p.classList.add('right');
  p.innerHTML = `página ${num + 1}`;
  content.appendChild(p);
}

function generateBullshit() {
  content.innerHTML = '';
  const numOfPages = document.getElementById('numPages').value || 1;
  for (let page = 0; page < numOfPages; page++) {
    for (let paragraph = 0; paragraph < paragraphsPerPage; paragraph++) {
      const paragraph = [];
      for (let sentence = 0; sentence < sentencesPerParagraph; sentence++) {
        const sentence = [];
        for (let j = 0; j < components.length; j++) {
          const index = Math.floor(Math.random() * components[j].length);
          sentence.push(components[j][index]);
        }
        paragraph.push(sentence.join(' '));
      }
      addParagraph(paragraph.join(''));
    }
    addPageSeparator(page);
  }
}

document.addEventListener('DOMContentLoaded', () => generateBullshit());
