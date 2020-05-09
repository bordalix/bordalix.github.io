// global state object
const state = {
  json: {
    last: null,
    full: null,
    delta: null,
    today: null,
  },
  regions: [
    'acores', 'arsalentejo', 'arsalgarve',
    'arscentro', 'arslvt', 'arsnorte', 'madeira'
  ],
  ages: [
    '80_plus', '70_79', '60_69', '50_59',
    '40_49', '30_39', '20_29', '10_19', '0_9'
  ],
  symptoms: [
    'tosse', 'febre', 'dores_musculares', 'cefaleia',
    'fraqueza_generalizada', 'dificuldade_respiratoria',
  ]
};

// all charts
const charts = {
  confirmados_dia_ars: (outer) => {
    createGraphContainer('confirmados_dia_ars', outer);
    Highcharts.chart('confirmados_dia_ars', {
      chart: { type: 'bar' },
      title: { text: 'Hoje' },
      xAxis: { categories: state.regions },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: state.regions.map(r => state.json.delta[`confirmados_${r}`][state.json.today]),
      }],
    });
  },
  confirmados_dia: (outer) => {
    createGraphContainer('confirmados_dia', outer);
    Highcharts.chart('confirmados_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.confirmados[k]),
      }],
    });
  },
  confirmados_total: (outer) => {
    createGraphContainer('confirmados_total', outer);
    Highcharts.chart('confirmados_total', {
      chart: { type: 'bar' },
      title: { text: 'Acumulado' },
      xAxis: { categories: state.regions },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: state.regions.map(r => state.json.last[`confirmados_${r}`])
      }],
    });
  },
  confirmados_total_generos: (outer) => {
    createGraphContainer('confirmados_total_generos', outer);
    Highcharts.chart('confirmados_total_generos', {
      chart: { type: 'bar' },
      title: { text: 'Acumulado idade e género' },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. Idade {xDescription}, {value}.'
        }
      },
      xAxis: [{
        categories: state.ages,
        reversed: false,
        labels: {  step: 1 },
        accessibility: {
            description: 'Idade (masculino)'
        }
      }, { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
          accessibility: {
              description: 'Idade (feminino)'
          }
      }],
      yAxis: {
          title: { text: null },
          labels: { formatter: function () { return Math.abs(this.value); }},
          accessibility: {
              description: 'Percentage population',
              rangeDescription: 'Range: 0 to 5%'
          }
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [{
          name: 'Feminino',
          data: state.ages.map(age => -state.json.last[`confirmados_${age}_f`]),
      }, {
          name: 'Masculino',
          data: state.ages.map(age => state.json.last[`confirmados_${age}_m`]),
      }]
    });
  },
  obitos_dia_ars: (outer) => {
    createGraphContainer('obitos_dia_ars', outer);
    Highcharts.chart('obitos_dia_ars', {
      chart: { type: 'bar' },
      title: { text: 'Hoje' },
      xAxis: { categories: state.regions },
      yAxis: { title: { text: null }},
      series: [{
        name: 'Óbitos',
        data: state.regions.map(r => state.json.delta[`obitos_${r}`][state.json.today]),
      }],
    });
  },
  obitos_dia: (outer) => {
    createGraphContainer('obitos_dia', outer);
    Highcharts.chart('obitos_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Óbitos',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.obitos[k]),
      }],
    });
  },
  obitos_total: (outer) => {
    createGraphContainer('obitos_total', outer);
    Highcharts.chart('obitos_total', {
      chart: { type: 'bar' },
      title: { text: 'Acumulado' },
      xAxis: { categories: state.regions },
      yAxis: { title: { text: null }},
      series: [{
        name: 'Óbitos',
        data: state.regions.map(r => state.json.last[`obitos_${r}`])
      }],
    });
  },
  obitos_total_generos: (outer) => {
    createGraphContainer('obitos_total_generos', outer);
    Highcharts.chart('obitos_total_generos', {
      chart: { type: 'bar' },
      title: { text: 'Acumulado idade e género' },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. Idade {xDescription}, {value}.'
        }
      },
      xAxis: [{
          categories: state.ages,
          reversed: false,
          labels: {  step: 1 },
          accessibility: {
              description: 'Idade (masculino)'
          }
      }, { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
          accessibility: {
              description: 'Idade (Feminino)'
          }
      }],
      yAxis: {
          title: { text: null },
          labels: { formatter: function () { return Math.abs(this.value); }},
          accessibility: {
              description: 'Percentage population',
              rangeDescription: 'Range: 0 to 5%'
          }
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [{
          name: 'Feminino',
          data: state.ages.map(age => -state.json.last[`obitos_${age}_f`]),
      }, {
          name: 'Masculino',
          data: state.ages.map(age => state.json.last[`obitos_${age}_m`]),
      }]
  });
  },
  testes_dia: (outer) => {
    createGraphContainer('testes_dia', outer);
    Highcharts.chart('testes_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Testes',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.testes[k]),
      }],
    });
  },
  testes_dia_perc_positivos: (outer) => {
    createGraphContainer('testes_dia_perc_positivos', outer);
    Highcharts.chart('testes_dia_perc_positivos', {
      title: { text: '% Positivos' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Testes',
          data: Object.keys(state.json.full.data).map(k => {
            const number1 = state.json.delta.confirmados[k];
            const number2 = state.json.delta.testes[k];
            return Math.floor((number1 / number2) * 100);
          }),
      }],
    });
  },
  internados_normal_dia: (outer) => {
    createGraphContainer('internados_normal_dia', outer);
    Highcharts.chart('internados_normal_dia', {
      title: { text: 'Variação diária' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Internados',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.internados[k]),
      }],
    });
  },
  internados_uci_dia: (outer) => {
    createGraphContainer('internados_uci_dia', outer);
    Highcharts.chart('internados_uci_dia', {
      title: { text: 'Variação diária UCI' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Internados UCI',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.internados_uci[k]),
      }],
    });
  },
  internados_normal_total: (outer) => {
    createGraphContainer('internados_normal_total', outer);
    Highcharts.chart('internados_normal_total', {
      title: { text: 'Acumulado' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Internados',
          data: Object.keys(state.json.full.data).map(k => state.json.full.internados[k]),
      }],
    });
  },
  internados_uci_total: (outer) => {
    createGraphContainer('internados_uci_total', outer);
    Highcharts.chart('internados_uci_total', {
      title: { text: 'Acumulado UCI' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Internados UCI',
          data: Object.keys(state.json.full.data).map(k => state.json.full.internados_uci[k]),
      }],
    });
  },
  recuperados_dia: (outer) => {
    createGraphContainer('recuperados_dia', outer);
    Highcharts.chart('recuperados_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Recuperados',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.recuperados[k]),
      }],
    });
  },
  recuperados_total: (outer) => {
    createGraphContainer('recuperados_total', outer);
    Highcharts.chart('recuperados_total', {
      title: { text: 'Acumulado' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Recuperados',
          data: Object.keys(state.json.full.data).map(k => state.json.full.recuperados[k]),
      }],
    });
  },
  sintomas: (outer) => {
    createGraphContainer('sintomas', outer);
    Highcharts.chart('sintomas', {
      chart: { type: 'bar' },
      title: { text: 'Percentagem ocorrência' },
      xAxis: { categories: state.symptoms },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
              return this.value + '%';
          }
      },
      },
      legend: { enable: false },
      series: [{
          name: 'Sintomas',
          data: state.symptoms.map(s => state.json.last[`sintomas_${s}`] * 100),
      }],
    });
  },
  sintomas_stacked: (outer) => {
    createGraphContainer('sintomas_stacked', outer);
    Highcharts.chart('sintomas_stacked', {
      chart: { type: 'area' },
      title: { text: 'Histórico' },
      xAxis: {
          categories: Object.keys(state.json.full.data).map(key => state.json.full.data[key]),
          tickmarkPlacement: 'on',
          title: { enabled: false },
          labels: { step: 30 },
      },
      yAxis: {
          labels: { format: '{value}%' },
          title: { enabled: false },
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
          split: true
      },
      plotOptions: {
          area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#ffffff'
              },
          }
      },
      series: state.symptoms.map(s => {
        return {
          name: s,
          data: Object.keys(state.json.full.data).map(key => state.json.full[`sintomas_${s}`][key]),
        }
      }),
  });
  },
}

// get full update and calculate tests and daily deltas
function crunchData(json) {
  // find today index (starts with zero)
  state.json.today = Object.keys(state.json.full.data).reduce((acc, cur) => {
    if (state.json.last.data === state.json.full.data[cur]) acc = cur;
    return acc;
  }, 0);
  // calculate number of total tests
  state.json.full.testes = {};
  Object.keys(state.json.full.confirmados).forEach(key => {
    const sjf = state.json.full;
    sjf.testes[key] = null;
    if (sjf.confirmados[key] && sjf.n_confirmados[key]) {
      sjf.testes[key] = sjf.confirmados[key] + sjf.n_confirmados[key] + sjf.lab[key];
    }
  });
  // calculate deltas for all days and indicators
  const delta = {};
  Object.keys(json).forEach(key => {
    if (!key.match(/^data/) && !key.match(/^sintomas/)) {
      delta[key] = {};
      Object.keys(json[key]).forEach(idx => {
        delta[key][idx] = null;
        if (idx !== '0') {
          const previous = `${parseInt(idx) - 1}`;
          delta[key][idx] = state.json.full[key][idx] - state.json.full[key][previous];
        }
      });
    }
  });
  state.json.delta = delta;
}

// add the graphs to the DOM
function addGraphs() {
  let outer;
  applyTheme();
  outer = addLead('Confirmados');
  charts['confirmados_dia_ars'](outer);
  charts['confirmados_dia'](outer);
  charts['confirmados_total'](outer);
  charts['confirmados_total_generos'](outer);
  outer = addLead('Óbitos');
  charts['obitos_dia_ars'](outer);
  charts['obitos_dia'](outer);
  charts['obitos_total'](outer);
  charts['obitos_total_generos'](outer);
  outer = addLead('Testes');
  charts['testes_dia'](outer);
  charts['testes_dia_perc_positivos'](outer);
  outer = addLead('Internados');
  charts['internados_normal_dia'](outer);
  charts['internados_uci_dia'](outer);
  charts['internados_normal_total'](outer);
  charts['internados_uci_total'](outer);
  outer = addLead('Recuperados');
  charts['recuperados_dia'](outer);
  charts['recuperados_total'](outer);
  outer = addLead('Sintomas');
  charts['sintomas'](outer);
  charts['sintomas_stacked'](outer);
}

// util function, returns a DOM element, keep your code DRY
function createGraphContainer(id, outer) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('graph_container');
  outer.appendChild(div);
}

// adds a new section
function addLead(text) {
  const h2 = document.createElement('h2');
  h2.classList.add("section_divider");
  h2.innerHTML = text;
  document.getElementById('content_container').appendChild(h2);
  const outer = document.createElement('div');
  outer.classList.add("outer_container");
  outer.classList.add("fluid-row");
  document.getElementById('content_container').appendChild(outer);
  return outer;
}

// apply some options to the highchart theme
function applyTheme() {
  Highcharts.theme = { credits: { enabled: false }};
  Highcharts.setOptions(Highcharts.theme);
}

// run when content is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cors-anywhere.herokuapp.com/https://covid19-api.vost.pt/Requests/get_last_update')
  .then(response => response.json())
  .then(json => {
    state.json.last = json;
    fetch('https://cors-anywhere.herokuapp.com/https://covid19-api.vost.pt/Requests/get_full_dataset')
    .then(response => response.json())
    .then(json => {
      document.getElementById("loading").remove();
      state.json.full = json;
      crunchData(json);
      addGraphs();
    });
  });
});
