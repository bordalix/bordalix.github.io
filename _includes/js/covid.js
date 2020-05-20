
// global state object
const state = {
  json: {
    last: null,
    full: null,
    delta: null,
    today: null,
  },
  regions: {  // data from https://www.pordata.pt/Municipios/Densidade+populacional-452
    acores: 105,
    arsalgarve: 88,
    arsalentejo: 22,
    arscentro: 79,
    arslvt: 942,
    arsnorte: 168,
    madeira: 317,
  },
  ages: [
    '80_plus', '70_79', '60_69', '50_59',
    '40_49', '30_39', '20_29', '10_19', '0_9'
  ],
  symptoms: [
    'tosse', 'febre', 'dores_musculares', 'cefaleia',
    'fraqueza_generalizada', 'dificuldade_respiratoria',
  ],
  loading: 2,
  toc: [],
  evm: null,
}

// all charts
const charts = {
  confirmados_dia: (outer) => {
    createGraphContainer('confirmados_dia', outer);
    Highcharts.chart('confirmados_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 }, // show only every 30 days
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
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 }, // show only every 30 days
      },
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.json.full.data).map(k => state.json.full.confirmados[k]),
      }],
    });
  },
  confirmados_hoje_generos: (outer) => {
    createGraphContainer('confirmados_hoje_generos', outer);
    Highcharts.chart('confirmados_hoje_generos', {
      chart: { type: 'bar' },
      title: { text: 'Hoje idade e género' },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. Idade {xDescription}, {value}.'
        }
      },
      xAxis: [
        {
          categories: state.ages,
          reversed: false,
          labels: {  step: 1 },
        },
        { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
        }
      ],
      yAxis: {
        title: { text: null },
        labels: { formatter: function () { return Math.abs(this.value); }},
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [
        {
          name: 'Confirmados femininos',
          data: state.ages.map(age => -state.json.delta[`confirmados_${age}_f`][state.json.today]),
        },
        {
          name: 'Confirmados masculinos',
          data: state.ages.map(age => state.json.delta[`confirmados_${age}_m`][state.json.today]),
        }
      ]
    });
  },
  confirmados_total_generos: (outer) => {
    createGraphContainer('confirmados_total_generos', outer);
    Highcharts.chart('confirmados_total_generos', {
      chart: { type: 'bar' },
      title: { text: 'Total idade e género' },
      xAxis: [
        {
          categories: state.ages,
          reversed: false,
          labels: {  step: 1 },
        },
        { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
      }],
      yAxis: {
        title: { text: null },
        labels: { formatter: function () { return Math.abs(this.value); }},
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [
        {
            name: 'Confirmados femininos',
            data: state.ages.map(age => -state.json.last[`confirmados_${age}_f`]),
        },
        {
          name: 'Confirmados masculinos',
          data: state.ages.map(age => state.json.last[`confirmados_${age}_m`]),
        }
      ],
    });
  },
  confirmados_hoje_ars: (outer) => {
    createGraphContainer('confirmados_hoje_ars', outer);
    Highcharts.chart('confirmados_hoje_ars', {
      chart: { type: 'bar' },
      title: { text: 'Hoje' },
      xAxis: { categories: Object.keys(state.regions) },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.regions).map(r => state.json.delta[`confirmados_${r}`][state.json.today]),
      }],
    });
  },
  confirmados_total_ars: (outer) => {
    createGraphContainer('confirmados_total_ars', outer);
    Highcharts.chart('confirmados_total_ars', {
      chart: { type: 'bar' },
      title: { text: 'Total' },
      xAxis: { categories: Object.keys(state.regions) },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.regions).map(r => state.json.last[`confirmados_${r}`])
      }],
    });
  },
  confirmados_historico: (outer) => {
    createGraphContainer('confirmados_historico', outer);
    Highcharts.chart('confirmados_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => state.json.full.data[key]),
        tickmarkPlacement: 'on',
        title: { enabled: false },
        labels: { step: 30 },
      },
      yAxis: { title: { text: null }},
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: Object.keys(state.regions).map(r => {
        return {
          name: r,
          data: Object.keys(state.json.full.data).map(key => state.json.full[`confirmados_${r}`][key]),
        }
      }),
    });
  },
  confirmados_historico_100: (outer) => {
    createGraphContainer('confirmados_historico_100', outer);
    Highcharts.chart('confirmados_historico_100', {
      chart: { type: 'area' },
      title: { text: 'Evolução peso relativo' },
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
      series: Object.keys(state.regions).map(r => {
        return {
          name: r,
          data: Object.keys(state.json.full.data).map(key => state.json.full[`confirmados_${r}`][key]),
        }
      }),
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
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Óbitos',
          data: Object.keys(state.json.full.data).map(k => state.json.full.obitos[k]),
      }],
    });
  },
  obitos_hoje_generos: (outer) => {
    createGraphContainer('obitos_hoje_generos', outer);
    Highcharts.chart('obitos_hoje_generos', {
      chart: { type: 'bar' },
      title: { text: 'Hoje idade e género' },
      xAxis: [
        {
          categories: state.ages,
          reversed: false,
          labels: {  step: 1 },
        },
        { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
        }
      ],
      yAxis: {
        title: { text: null },
        labels: { formatter: function () { return Math.abs(this.value); }},
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [
        {
          name: 'Óbitos femininos',
          data: state.ages.map(age => -state.json.delta[`obitos_${age}_f`][state.json.today]),
        },
        {
          name: 'Óbitos masculinos',
          data: state.ages.map(age => state.json.delta[`obitos_${age}_m`][state.json.today]),
        }
      ],
  });
  },
  obitos_total_generos: (outer) => {
    createGraphContainer('obitos_total_generos', outer);
    Highcharts.chart('obitos_total_generos', {
      chart: { type: 'bar' },
      title: { text: 'Total idade e género' },
      xAxis: [
        {
          categories: state.ages,
          reversed: false,
          labels: {  step: 1 },
        },
        { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: state.ages,
          linkedTo: 0,
          labels: { step: 1 },
        }
      ],
      yAxis: {
        title: { text: null },
        labels: { formatter: function () { return Math.abs(this.value); }},
      },
      plotOptions: { series: { stacking: 'normal' }},
      series: [
        {
          name: 'Óbitos femininos',
          data: state.ages.map(age => -state.json.last[`obitos_${age}_f`]),
        },
        {
          name: 'Óbitos masculinos',
          data: state.ages.map(age => state.json.last[`obitos_${age}_m`]),
        }
      ],
  });
  },
  obitos_hoje_ars: (outer) => {
    createGraphContainer('obitos_hoje_ars', outer);
    Highcharts.chart('obitos_hoje_ars', {
      chart: { type: 'bar' },
      title: { text: 'Hoje' },
      xAxis: { categories: Object.keys(state.regions) },
      yAxis: { title: { text: null }},
      series: [{
        name: 'Óbitos',
        data: Object.keys(state.regions).map(r => state.json.delta[`obitos_${r}`][state.json.today]),
      }],
    });
  },
  obitos_total_ars: (outer) => {
    createGraphContainer('obitos_total_ars', outer);
    Highcharts.chart('obitos_total_ars', {
      chart: { type: 'bar' },
      title: { text: 'Total' },
      xAxis: { categories: Object.keys(state.regions) },
      yAxis: { title: { text: null }},
      series: [{
        name: 'Óbitos',
        data: Object.keys(state.regions).map(r => state.json.full[`obitos_${r}`][state.json.today]),
      }],
    });
  },
  obitos_historico: (outer) => {
    createGraphContainer('obitos_historico', outer);
    Highcharts.chart('obitos_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => state.json.full.data[key]),
        tickmarkPlacement: 'on',
        title: { enabled: false },
        labels: { step: 30 },
      },
      yAxis: { title: { text: null }},
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: Object.keys(state.regions).map(r => {
        return {
          name: r,
          data: Object.keys(state.json.full.data).map(key => state.json.full[`obitos_${r}`][key]),
        }
      }),
    });
  },
  obitos_historico_100: (outer) => {
    createGraphContainer('obitos_historico_100', outer);
    Highcharts.chart('obitos_historico_100', {
      chart: { type: 'area' },
      title: { text: 'Evolução peso relativo' },
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
      series: Object.keys(state.regions).map(r => {
        return {
          name: r,
          data: Object.keys(state.json.full.data).map(key => state.json.full[`obitos_${r}`][key]),
        }
      }),
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
      title: { text: 'Total' },
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
      yAxis: {
        title: { text: null },
        labels: { format: '{value}%' },
      },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => state.json.full.data[k]),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Testes',
        data: Object.keys(state.json.full.data).map(k => Math.floor((state.json.delta.confirmados[k] / state.json.delta.testes[k]) * 100)),
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
      title: { text: 'Total' },
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
      title: { text: 'Total UCI' },
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
  sintomas: (outer) => {
    createGraphContainer('sintomas', outer);
    Highcharts.chart('sintomas', {
      chart: { type: 'bar' },
      title: { text: 'Percentagem ocorrência' },
      xAxis: { categories: state.symptoms },
      yAxis: {
        title: { text: null },
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
  sintomas_historico: (outer) => {
    createGraphContainer('sintomas_historico', outer);
    Highcharts.chart('sintomas_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
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
  mortalidade_light: (outer) => {
    createGraphContainer('mortalidade_light', outer);
    Highcharts.chart('mortalidade_light', {
      title: { text: 'Máx, mín, média e 2020' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: state.evm.mmm.xAxis.categories,
        labels: { step: 90 },
      },
      plotOptions: {
        line: {
          opacity: 0.3,
          lineWidth: 1,
        }
      },
      series: state.evm.mmm.yAxis.series,
    });
  },
  mortalidade_acum: (outer) => {
    createGraphContainer('mortalidade_acum', outer);
    Highcharts.chart('mortalidade_acum', {
      chart:  { type: 'column' },
      title:  { text: 'Acumulados até ontem' },
      xAxis:  { categories: state.evm.acum.xAxis.categories },
      yAxis:  { title: { text: null }},
      series: [{
        name: 'Óbitos',
        data: state.evm.acum.yAxis.series.data,
      }],
    });
  },
  densidade_ars: (outer) => {
    createGraphContainer('densidade_ars', outer);
    Highcharts.chart('densidade_ars', {
      chart: { type: 'bar' },
      title: { text: 'Habitantes / Km2' },
      xAxis: { categories: Object.keys(state.regions) },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [{
        name: 'Hab/Km2',
        data: Object.keys(state.regions).map(r => state.regions[r]),
      }],
    });
  },
  densidade_casos: (outer) => {
    createGraphContainer('densidade_casos', outer);
    Highcharts.chart('densidade_casos', {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: { text: 'Confirmados e óbitos'},
      legend: { enabled: false },
      xAxis: { title: { text: 'Hab/Km2' }},
      yAxis: { title: { enabled: false }},
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
        }
      },
      series: [
        {
          name: 'confirmados',
          data: Object.keys(state.regions).map(r => [state.regions[r], state.json.last[`confirmados_${r}`]]),
        },
        {
          name: 'óbitos',
          data: Object.keys(state.regions).map(r => [state.regions[r], state.json.last[`obitos_${r}`]]),
        },
      ],
    });
  }
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
  charts['confirmados_dia'](outer);
  charts['confirmados_total'](outer);
  charts['confirmados_hoje_generos'](outer);
  charts['confirmados_total_generos'](outer);
  charts['confirmados_hoje_ars'](outer);
  charts['confirmados_total_ars'](outer);
  charts['confirmados_historico'](outer);
  charts['confirmados_historico_100'](outer);
  outer = addLead('Óbitos');
  charts['obitos_dia'](outer);
  charts['obitos_total'](outer);
  charts['obitos_hoje_generos'](outer);
  charts['obitos_total_generos'](outer);
  charts['obitos_hoje_ars'](outer);
  charts['obitos_total_ars'](outer);
  charts['obitos_historico'](outer);
  charts['obitos_historico_100'](outer);
  outer = addLead('Recuperados');
  charts['recuperados_dia'](outer);
  charts['recuperados_total'](outer);
  outer = addLead('Testes');
  charts['testes_dia'](outer);
  charts['testes_dia_perc_positivos'](outer);
  outer = addLead('Internados');
  charts['internados_normal_dia'](outer);
  charts['internados_uci_dia'](outer);
  charts['internados_normal_total'](outer);
  charts['internados_uci_total'](outer);
  outer = addLead('Sintomas');
  charts['sintomas'](outer);
  charts['sintomas_historico'](outer);
  outer = addLead('Mortalidade');
  charts['mortalidade_acum'](outer);
  charts['mortalidade_light'](outer);
  outer = addLead('Densidade populacional');
  charts['densidade_ars'](outer);
  charts['densidade_casos'](outer);
  outer = addLead('Rt');
  renderRt(outer);
  renderTOC();
  document.getElementById('sourceList').style.display = 'block';
}

// util function, returns a DOM element, keep your code DRY
function createGraphContainer(id, outer) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('graph_container');
  outer.appendChild(div);
}

// adds a new h2 and a new div, returns the div
function addLead(text) {
  const h2 = document.createElement('h2');
  h2.id = text.replace(/\s/g,'_');
  h2.classList.add("section_divider");
  h2.innerHTML = text;
  document.getElementById('content_container').appendChild(h2);
  state.toc.push({ anchor: h2.id, label: text });
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

// loading state goes from 2 to 0
function manageWait() {
  if (state.loading === 2) {
    state.loading = 1;
    document.getElementById("loading").innerHTML = 'A chamar o estagiário para desenhar os gráficos...';
    document.getElementById("lastUpdate").innerHTML = `Última actualização a ${state.json.last.data}`;
  } else if (state.loading === 1) {
    state.loading = 0;
    document.getElementById("loading").remove();
  }
}

// renders Table of Content
function renderTOC() {
  const html = state.toc.map(item => `<a href="#${item.anchor}">${item.label}</a>`).join(' &middot; ');
  document.getElementById('toc').innerHTML = html;
}

// render Rt graphic
function renderRt(outer) {
  ['qbBvVcAQw4rM', 't5vpUMAAbJeX','qhjdU0AUz6Yc','q7BSUcAMr_y-','rG_hU8AAmEj9'].forEach(id => {
    const url = `https://pbs.twimg.com/media/EYY${id}?format=png&name=medium`;
    const div = document.createElement('div');
    div.classList.add('rt_container');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = url;
    img.src = url;
    img.classList.add('rt_graph');
    a.appendChild(img);
    div.appendChild(a)
    outer.appendChild(div);
  })
  // const url = 'https://www.nexp.pt/covid19RtWorld/Portugal-Rt.png';
}

function apiURL(id) {
  if (id === 'last_update') return 'https://covid19-api.vost.pt/Requests/get_last_update';
  if (id === 'full_dataset') return 'https://covid19-api.vost.pt/Requests/get_full_dataset';
  if (id === 'mortality') {
    const d = new Date();
    const s = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + ("0" + d.getDate()).slice(-2);
    return `https://cdn.joaobordalo.com/json/mortality-${s}.json`;
  }
}

// run when content is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetch(apiURL('last_update'))
  .then(response => response.json())
  .then(json => {
    state.json.last = json;
    manageWait();
    fetch(apiURL('full_dataset'))
    .then(response => response.json())
    .then(json => {
      fetch(apiURL('mortality'))
      .then(response => response.json())
      .then(evm => {
        state.evm = evm;
        state.json.full = json;
        manageWait();
        crunchData(json);
        addGraphs();
      });
    });
  });
});
