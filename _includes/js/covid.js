
// global state object
const state = {
  json: {
    last: null,
    full: null,
    delta: null,
    today: null,
  },
  regions: {
    // data from https://www.pordata.pt/Municipios/Densidade+populacional-452
    acores: 105,
    arsalgarve: 88,
    arsalentejo: 22,
    arscentro: 79,
    arslvt: 942,
    arsnorte: 168,
    madeira: 317,
  },
  ages: ['80_plus', '70_79', '60_69', '50_59', '40_49', '30_39', '20_29', '10_19', '0_9'],
  symptoms: [
    'tosse',
    'febre',
    'dores_musculares',
    'cefaleia',
    'fraqueza_generalizada',
    'dificuldade_respiratoria',
  ],
  employment: [
    { month: 'Jan', year: '19', young: 305500, old: 4502200 },
    { month: 'Fev', year: '19', young: 301900, old: 4511200 },
    { month: 'Mar', year: '19', young: 296800, old: 4521200 },
    { month: 'Abr', year: '19', young: 301000, old: 4537800 },
    { month: 'Mai', year: '19', young: 295700, old: 4559400 },
    { month: 'Jun', year: '19', young: 305700, old: 4562600 },
    { month: 'Jul', year: '19', young: 309900, old: 4569700 },
    { month: 'Ago', year: '19', young: 320200, old: 4566200 },
    { month: 'Set', year: '19', young: 312400, old: 4567800 },
    { month: 'Out', year: '19', young: 312400, old: 4558400 },
    { month: 'Nov', year: '19', young: 303600, old: 4544400 },
    { month: 'Dez', year: '19', young: 298900, old: 4518700 },
    { month: 'Jan', year: '20', young: 295500, old: 4519900 },
    { month: 'Fev', year: '20', young: 290300, old: 4513300 },
    { month: 'Mar', year: '20', young: 290000, old: 4503400 },
    { month: 'Abr', year: '20', young: 268100, old: 4482800 },
    { month: 'Mai', year: '20', young: 240600, old: 4430800 },
    { month: 'Jun', year: '20', young: 235100, old: 4469200 },
    { month: 'Jul', year: '20', young: 244800, old: 4461200 },
    { month: 'Aug', year: '20', young: 250100, old: 4487300 },
    { month: 'Sep', year: '20', young: 257900, old: 4504000 },
    { month: 'Oct', year: '20', young: 246300, old: 4521300 },
  ],
  unemployment: {
    2019: {
      Jan: {
        Norte: 140696,
        Centro: 46703,
        LVT: 101758,
        Alentejo: 16621,
        Algarve: 20748,
        Açores: 7685,
        Madeira: 16561,
      },
      Fev: {
        Norte: 137964,
        Centro: 45660,
        LVT: 100102,
        Alentejo: 15783,
        Algarve: 19014,
        Açores: 7665,
        Madeira: 16514,
      },
      Mar: {
        Norte: 136319,
        Centro: 44374,
        LVT: 98370,
        Alentejo: 15473,
        Algarve: 15305,
        Açores: 7624,
        Madeira: 16311,
      },
      Abr: {
        Norte: 133143,
        Centro: 43663,
        LVT: 94043,
        Alentejo: 14994,
        Algarve: 11782,
        Açores: 7422,
        Madeira: 16193,
      },
      Mai: {
        Norte: 126663,
        Centro: 41451,
        LVT: 91018,
        Alentejo: 14007,
        Algarve: 9153,
        Açores: 7136,
        Madeira: 15743,
      },
      Jun: {
        Norte: 124858,
        Centro: 40843,
        LVT: 88850,
        Alentejo: 13520,
        Algarve: 7879,
        Açores: 7084,
        Madeira: 15157,
      },
      Jul: {
        Norte: 124246,
        Centro: 40626,
        LVT: 89204,
        Alentejo: 13956,
        Algarve: 7229,
        Açores: 7058,
        Madeira: 14971,
      },
      Aug: {
        Norte: 127281,
        Centro: 42323,
        LVT: 91140,
        Alentejo: 14268,
        Algarve: 7353,
        Açores: 7040,
        Madeira: 14925,
      },
      Sep: {
        Norte: 126215,
        Centro: 42188,
        LVT: 88445,
        Alentejo: 14264,
        Algarve: 8276,
        Açores: 7029,
        Madeira: 14865,
      },
      Oct: {
        Norte: 124078,
        Centro: 41647,
        LVT: 87441,
        Alentejo: 14686,
        Algarve: 10285,
        Açores: 7007,
        Madeira: 14876,
      },
      Nov: {
        Norte: 122861,
        Centro: 41388,
        LVT: 87593,
        Alentejo: 14674,
        Algarve: 17350,
        Açores: 6994,
        Madeira: 15101,
      },
    },
    2020: {
      Jan: {
        Norte: 125571,
        Centro: 42894,
        LVT: 93050,
        Alentejo: 15601,
        Algarve: 20815,
        Açores: 6973,
        Madeira: 15654,
      },
      Fev: {
        Norte: 124337,
        Centro: 41927,
        LVT: 92458,
        Alentejo: 15106,
        Algarve: 19188,
        Açores: 6956,
        Madeira: 15590,
      },
      Mar: {
        Norte: 134578,
        Centro: 45845,
        LVT: 102108,
        Alentejo: 16997,
        Algarve: 21636,
        Açores: 6951,
        Madeira: 15646,
      },
      Abr: {
        Norte: 151853,
        Centro: 50807,
        LVT: 121004,
        Alentejo: 18882,
        Algarve: 26379,
        Açores: 6963,
        Madeira: 16435,
      },
      Mai: {
        Norte: 156260,
        Centro: 52033,
        LVT: 129917,
        Alentejo: 18619,
        Algarve: 27675,
        Açores: 6965,
        Madeira: 17465,
      },
      Jun: {
        Norte: 153548,
        Centro: 51618,
        LVT: 131972,
        Alentejo: 18351,
        Algarve: 26140,
        Açores: 6963,
        Madeira: 18073,
      },
      Jul: {
        Norte: 154667,
        Centro: 51267,
        LVT: 135240,
        Alentejo: 17995,
        Algarve: 22850,
        Açores: 6957,
        Madeira: 18326,
      },
      Aug: {
        Norte: 158013,
        Centro: 51944,
        LVT: 134944,
        Alentejo: 18156,
        Algarve: 20425,
        Açores: 6949,
        Madeira: 18900,
      },
      Sep: {
        Norte: 156650,
        Centro: 50938,
        LVT: 136844,
        Alentejo: 18152,
        Algarve: 21310,
        Açores: 6942,
        Madeira: 19338,
      },
      Oct: {
        Norte: 153020,
        Centro: 48843,
        LVT: 133707,
        Alentejo: 17536,
        Algarve: 24088,
        Açores: 6950,
        Madeira: 19404,
      },
      Nov: {
        Norte: 149421,
        Centro: 47823,
        LVT: 128024 ,
        Alentejo: 17226,
        Algarve: 29082,
        Açores: 6962 ,
        Madeira: 19749,
      },
    },
  },
  gdp: {
    2019: {
      T1: 52660800000,
      T2: 52695000000,
      T3: 53262800000,
      T4: 53702000000,
    },
    2020: {
      T1: 52283000000,
      T2: 44911000000,
      T3: 50839252000,
    },
  },
  loading: 2, // loading state (from 2 to 0)
  toc: [], // table of contents
  evm: null, // mortality data
};

// remove year from date
function compactDate(date) {
  const match = date.match(/(\d\d)-(\d\d)-\d\d\d\d/);
  return match ? `${match[1]}/${match[2]}` : date;
}

// all charts
const charts = {
  confirmados_dia: (outer) => {
    createGraphContainer('confirmados_dia', outer);
    Highcharts.chart('confirmados_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 }, // show only every 30 days
      },
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.confirmados[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  confirmados_total: (outer) => {
    createGraphContainer('confirmados_total', outer);
    Highcharts.chart('confirmados_total', {
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 }, // show only every 30 days
      },
      legend: { enable: false },
      series: [{
          name: 'Confirmados',
          data: Object.keys(state.json.full.data).map(k => state.json.full.confirmados[k]),
      }],
      credits: { text: 'Dados DGS' },
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
      ],
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
    });
  },
  confirmados_historico: (outer) => {
    createGraphContainer('confirmados_historico', outer);
    Highcharts.chart('confirmados_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => compactDate(state.json.full.data[key])),
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
      credits: { text: 'Dados DGS' },
    });
  },
  confirmados_historico_100: (outer) => {
    createGraphContainer('confirmados_historico_100', outer);
    Highcharts.chart('confirmados_historico_100', {
      chart: { type: 'area' },
      title: { text: 'Evolução peso relativo' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => compactDate(state.json.full.data[key])),
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
      credits: { text: 'Dados DGS' },
    });
  },
  obitos_dia: (outer) => {
    createGraphContainer('obitos_dia', outer);
    Highcharts.chart('obitos_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Óbitos',
          data: Object.keys(state.json.full.data).map(k => state.json.delta.obitos[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  obitos_total: (outer) => {
    createGraphContainer('obitos_total', outer);
    Highcharts.chart('obitos_total', {
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
          name: 'Óbitos',
          data: Object.keys(state.json.full.data).map(k => state.json.full.obitos[k]),
      }],
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS' },
    });
  },
  obitos_historico: (outer) => {
    createGraphContainer('obitos_historico', outer);
    Highcharts.chart('obitos_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => compactDate(state.json.full.data[key])),
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
      credits: { text: 'Dados DGS' },
    });
  },
  obitos_historico_100: (outer) => {
    createGraphContainer('obitos_historico_100', outer);
    Highcharts.chart('obitos_historico_100', {
      chart: { type: 'area' },
      title: { text: 'Evolução peso relativo' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => compactDate(state.json.full.data[key])),
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
      credits: { text: 'Dados DGS' },
    });
  },
  recuperados_dia: (outer) => {
    createGraphContainer('recuperados_dia', outer);
    Highcharts.chart('recuperados_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Recuperados',
        data: Object.keys(state.json.full.data).map(k => state.json.delta.recuperados[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  recuperados_total: (outer) => {
    createGraphContainer('recuperados_total', outer);
    Highcharts.chart('recuperados_total', {
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Recuperados',
        data: Object.keys(state.json.full.data).map(k => state.json.full.recuperados[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  ativos_dia: (outer) => {
    createGraphContainer('ativos_dia', outer);
    Highcharts.chart('ativos_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Activos',
        data: Object.keys(state.json.full.data).map(k => state.json.delta.ativos[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  ativos_total: (outer) => {
    createGraphContainer('ativos_total', outer);
    Highcharts.chart('ativos_total', {
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Activos',
        data: Object.keys(state.json.full.data).map(k => state.json.full.ativos[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  amostras_dia: (outer) => {
    createGraphContainer('amostras_dia', outer);
    Highcharts.chart('amostras_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: state.amostras.map(k => compactDate(k[0])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'amostras',
        data: state.amostras.map(k => parseInt(k[2], 10)),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  amostras_dia_perc_positivos: (outer) => {
    createGraphContainer('amostras_dia_perc_positivos', outer);
    Highcharts.chart('amostras_dia_perc_positivos', {
      title: { text: '% Positivos' },
      yAxis: {
        title: { text: null },
        labels: { format: '{value}%' },
      },
      xAxis: {
        categories: state.amostras.map(k => compactDate(k[0])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'amostras',
        data: state.amostras.map((a,k) => {
          if (parseInt(a[2]) === 0) return 0;
          return parseFloat((100 * state.json.delta.confirmados[k] / parseInt(a[2])).toFixed(2));
        }),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  amostras_dia_pcr: (outer) => {
    createGraphContainer('amostras_dia_pcr', outer);
    Highcharts.chart('amostras_dia_pcr', {
      title: { text: 'PCR por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: state.amostras.map(k => compactDate(k[0])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'amostras PCR',
        data: state.amostras.map(k => parseInt(k[4], 10)),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  amostras_dia_antigenio: (outer) => {
    createGraphContainer('amostras_dia_antigenio', outer);
    Highcharts.chart('amostras_dia_antigenio', {
      title: { text: 'Antigénio por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: state.amostras.map(k => compactDate(k[0])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'amostras antigénio',
        data: state.amostras.map(k => parseInt(k[6], 10)),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  testes_dia: (outer) => {
    createGraphContainer('testes_dia', outer);
    Highcharts.chart('testes_dia', {
      title: { text: 'Por dia' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Testes',
        data: Object.keys(state.json.full.data).map(k => state.json.delta.testes[k]),
      }],
      credits: { text: 'Dados DGS - deixou de informar a 16/08/2020' },
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
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Testes',
        data: Object.keys(state.json.full.data).map(k => Math.floor((state.json.delta.confirmados[k] / state.json.delta.testes[k]) * 100)),
      }],
      credits: { text: 'Dados DGS - deixou de informar a 16/08/2020' },
    });
  },
  internados_normal_dia: (outer) => {
    createGraphContainer('internados_normal_dia', outer);
    Highcharts.chart('internados_normal_dia', {
      title: { text: 'Variação diária' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Internados',
        data: Object.keys(state.json.full.data).map(k => state.json.delta.internados[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  internados_uci_dia: (outer) => {
    createGraphContainer('internados_uci_dia', outer);
    Highcharts.chart('internados_uci_dia', {
      title: { text: 'Variação diária UCI' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Internados UCI',
        data: Object.keys(state.json.full.data).map(k => state.json.delta.internados_uci[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  internados_normal_total: (outer) => {
    createGraphContainer('internados_normal_total', outer);
    Highcharts.chart('internados_normal_total', {
      title: { text: 'Total' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Internados',
        data: Object.keys(state.json.full.data).map(k => state.json.full.internados[k]),
      }],
      credits: { text: 'Dados DGS' },
    });
  },
  internados_uci_total: (outer) => {
    createGraphContainer('internados_uci_total', outer);
    Highcharts.chart('internados_uci_total', {
      title: { text: 'Total UCI' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: Object.keys(state.json.full.data).map(k => compactDate(state.json.full.data[k])),
        labels: { step: 30 },
      },
      legend: { enable: false },
      series: [{
        name: 'Internados UCI',
        data: Object.keys(state.json.full.data).map(k => state.json.full.internados_uci[k]),
      }],
      credits: { text: 'Dados DGS' },
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
      credits: { text: 'Dados DGS - deixou de informar a 16/08/2020' },
    });
  },
  sintomas_historico: (outer) => {
    createGraphContainer('sintomas_historico', outer);
    Highcharts.chart('sintomas_historico', {
      chart: { type: 'area' },
      title: { text: 'Evolução' },
      xAxis: {
        categories: Object.keys(state.json.full.data).map(key => compactDate(state.json.full.data[key])),
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
      credits: { text: 'Dados DGS - deixou de informar a 16/08/2020' },
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
      credits: { text: 'Dados EVM' },
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
      credits: { text: 'Dados EVM' },
    });
  },
  mortalidade_excessiva: (outer) => {
    createGraphContainer('mortalidade_excessiva', outer);
    Highcharts.chart('mortalidade_excessiva', {
      title: { text: 'Mortalidade excessiva' },
      yAxis: { title: { text: null }},
      xAxis: {
        categories: state.evm.mmm.xAxis.categories,
        labels: { step: 90 },
      },
      series: [
        state.evm.mmm.yAxis.series[1],
        state.evm.mmm.yAxis.series[3],
      ],
      credits: { text: 'Dados EVM' },
    });
  },
  mortalidade_excessiva_percentagem: (outer) => {
    createGraphContainer('mortalidade_excessiva_percentagem', outer);
    Highcharts.chart('mortalidade_excessiva_percentagem', {
      title: { text: 'Mortalidade excessiva %' },
      yAxis: {
        title: { text: null },
        labels: {
          formatter: function () {
              return this.value + '%';
          }
        },
      },
      xAxis: {
        categories: state.evm.mmm.xAxis.categories,
        labels: { step: 90 },
      },
      series: [
        {
          data: state.evm.mmm.yAxis.series[1].data.map(n => 0),
          name: 'Média',
        },
        {
          data: state.evm.mmm.yAxis.series[3].data.map((n, idx) => {
            if (n == null) return null;
            const avg = state.evm.mmm.yAxis.series[1].data[idx];
            return parseFloat(((n - avg) / avg * 100).toFixed(2));
          }),
          name: '2020 em %',
        }
      ],
      credits: { text: 'Dados EVM' },
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
      credits: { text: 'Dados Pordata' },
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
      yAxis: {
        title: { enabled: false },
        type: 'logarithmic',
      },
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
      credits: { text: 'Dados Pordata + DGS' },
    });
  },
  empregos_total: (outer) => {
    createGraphContainer('empregos_total', outer);
    Highcharts.chart('empregos_total', {
      title:  { text: 'Total empregados' },
      xAxis:  { categories: state.employment.map(i => i.month + i.year) },
      yAxis:  { title: { text: null }},
      series: [
        {
          name: 'Absolutos',
          data: state.employment.map(i => i.young + i.old)
        },
        {
          name: 'Ajustado à sazonalidade',
          data: state.employment_adjusted.map(i => i ? i.young + i.old : null),
        },
      ],
      credits: { enabled: true, text: 'Dados INE' },
    });
  },
  empregos_variacao: (outer) => {
    createGraphContainer('empregos_variacao', outer);
    Highcharts.chart('empregos_variacao', {
      chart:  { type: 'column' },
      title:  { text: 'Variação mês anterior' },
      xAxis:  { categories: state.employment.map(i => i.month + i.year) },
      yAxis:  { title: { text: null }},
      series: [
        {
          name: 'Absolutos',
          data: state.employment_variation.map(i => i.young + i.old),
        },
        {
          name: 'Ajustado à sazonalidade',
          data: state.employment_variation_adjusted.map(i => i ? i.young + i.old : null),
        },
      ],
      credits: { enabled: true, text: 'Dados INE' },
    });
  },
  empregos_menos24_total: (outer) => {
    createGraphContainer('empregos_menos24_total', outer);
    Highcharts.chart('empregos_menos24_total', {
      title: { text: 'Empregados 15 a 24 anos' },
      yAxis: { title: { text: null }},
      xAxis: { categories: state.employment.map(i => i.month + i.year) },
      legend: { enable: false },
      series: [
        {
          name: 'Absolutos',
          data: state.employment.map(i => i.young),
        },
        {
          name: 'Ajustado à sazonalidade',
          data: state.employment_adjusted.map(i => i ? i.young : null),
        },
      ],
      credits: { enabled: true, text: 'Dados INE' },
    });
  },
  empregos_mais24_total: (outer) => {
    createGraphContainer('empregos_mais24_total', outer);
    Highcharts.chart('empregos_mais24_total', {
      title: { text: 'Empregados +24 anos' },
      yAxis: { title: { text: null }},
      xAxis:  { categories: state.employment.map(i => i.month + i.year) },
      legend: { enable: false },
      series: [
        {
          name: 'Absolutos',
          data: state.employment.map(i => i.old),
        },
        {
          name: 'Ajustado à sazonalidade',
          data: state.employment_adjusted.map(i => i ? i.old : null),
        },
      ],
      credits: { enabled: true, text: 'Dados INE' },
    });
  },
  desemprego_total: (outer) => {
    createGraphContainer('desemprego_total', outer);
    Highcharts.chart('desemprego_total', {
      title: { text: 'Total desempregados' },
      xAxis: { categories: Object.keys(state.unemployment['2020']) },
      yAxis: { title: { text: null }},
      series: [
        {
          name: '2019',
          data: Object.keys(state.unemployment['2019']).map(month => {
            const regions = Object.keys(state.unemployment['2019'][month]);
            return regions.reduce((acc, cur) => {
              acc += state.unemployment['2019'][month][cur];
              return acc;
            }, 0);
          }),
        },
        {
          name: '2020',
          data: Object.keys(state.unemployment['2020']).map(month => {
            const regions = Object.keys(state.unemployment['2020'][month]);
            return regions.reduce((acc, cur) => {
              acc += state.unemployment['2020'][month][cur];
              return acc;
            }, 0);
          }),
        },
      ],
      credits: { text: 'Dados IEFP' },
    });
  },
  desemprego_ars: (outer) => {
    createGraphContainer('desemprego_ars', outer);
    Highcharts.chart('desemprego_ars', {
      chart: { type: 'bar' },
      title: { text: 'Desempregados por região' },
      xAxis: { categories: Object.keys(state.unemployment['2020']['Nov']) },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [
        {
          name: 'Outubro 2019',
          data: Object.keys(state.unemployment['2019']['Nov']).map(r => state.unemployment['2019']['Nov'][r]),
        },
        {
          name: 'Outubro 2020',
          data: Object.keys(state.unemployment['2020']['Nov']).map(r => state.unemployment['2020']['Nov'][r]),
        },
      ],
      credits: { text: 'Dados IEFP' },
    });
  },
  pib_total: (outer) => {
    createGraphContainer('pib_total', outer);
    Highcharts.chart('pib_total', {
      title: { text: 'PIB trimestral' },
      xAxis: { categories: Object.keys(state.gdp['2019']) },
      yAxis: { title: { text: null }},
      series: [
        {
          name: '2019',
          data: Object.keys(state.gdp['2019']).map(quarter => state.gdp['2019'][quarter]),
        },
        {
          name: '2020',
          data: Object.keys(state.gdp['2020']).map(quarter => state.gdp['2020'][quarter]),
        },
      ],
      credits: { text: 'Dados INE' },
    });
  },
  pib_percentage: (outer) => {
    createGraphContainer('pib_percentage', outer);
    Highcharts.chart('pib_percentage', {
      chart: { type: 'bar' },
      title: { text: 'Desempregados por região' },
      xAxis: { categories: Object.keys(state.gdp['2020']) },
      yAxis: { title: { text: null }},
      legend: { enable: false },
      series: [
        {
          name: 'Trimestre anterior',
          data: Object.keys(state.gdp['2020']).map(quarter => {
            const curr = state.gdp['2020'][quarter];
            const prev = state.gdp['2019'][quarter];
            return
          }),
        },
        {
          name: 'Homólogo',
          data: Object.keys(state.unemployment['2020']['Jun']).map(r => state.unemployment['2020']['Jun'][r]),
        },
      ],
      credits: { text: 'Dados IEFP' },
    });
  },
}

// get full update and calculate tests and daily deltas
function crunchData() {
  // find today index (starts with zero)
  state.json.today = Object.keys(state.json.full.data).reduce((acc, cur) => {
    if (state.json.last.data === state.json.full.data[cur]) acc = cur;
    return acc;
  }, 0);
  // find last date with symptoms
  state.symptoms.forEach(s => state.json.last[`sintomas_${s}`] = state.json.full[`sintomas_${s}`][172]),
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
  Object.keys(state.json.full).forEach(key => {
    if (!key.match(/^data/) && !key.match(/^sintomas/)) {
      delta[key] = {};
      Object.keys(state.json.full[key]).forEach(idx => {
        delta[key][idx] = null;
        if (idx !== '0') {
          const previous = `${parseInt(idx) - 1}`;
          const diff = state.json.full[key][idx] - state.json.full[key][previous];
          delta[key][idx] = state.json.full[key][idx] > 0 ? diff : null;
        }
      });
    }
  });
  state.json.delta = delta;
  // calculate employement monthly variation
  state.employment_variation = state.employment.map((month, index) => {
    if (index === 0) {
      return { young:0, old: 0 };
    } else {
      const prevMonth = state.employment[index - 1];
      return {
        young: month.young - prevMonth.young,
        old: month.old - prevMonth.old,
      };
    }
  });
  // calculate employement seasonal adjustment
  state.employment_adjustement = state.employment.map((month, index) => {
    if (index < 12) {
      return null;
    } else {
      adjustment = state.employment_variation[index - 12];
      return {
        young: adjustment.young,
        old: adjustment.old,
      };
    }
  });
  //
  state.employment_adjusted = state.employment.map((month, index) => {
    if (index < 12) {
      return null;
    } else {
      adjustment = state.employment_adjustement[index];
      return {
        young: month.young - adjustment.young,
        old: month.old - adjustment.old,
      };
    }
  });
  // calculate employement monthly variation adjusted
  state.employment_variation_adjusted = state.employment_variation.map((month, index) => {
    if (index < 12) {
      return null;
    } else {
      adjustment = state.employment_adjustement[index];
      return {
        young: month.young - adjustment.young,
        old: month.old - adjustment.old,
      };
    }
  });
  // calculate gdp variation vs previous quarter
  state.gdp_abs_variation_previous_quarter = {
    '2019': {
      'T1': null,
      'T2': state.gdp['2019']['T2'] - state.gdp['2019']['T1'],
      'T3': state.gdp['2019']['T3'] - state.gdp['2019']['T2'],
      'T4': state.gdp['2019']['T4'] - state.gdp['2019']['T3'],
    },
    '2020': {
      'T1': state.gdp['2020']['T1'] - state.gdp['2019']['T4'],
      'T2': state.gdp['2020']['T2'] - state.gdp['2020']['T1'],
      'T3': null,
      'T4': null,
    },
  };
  state.gdp_per_variation_previous_quarter = {
    '2019': {
      'T1': null,
      'T2': state.gdp_abs_variation_previous_quarter['2019']['T2'] / state.gdp['2019']['T1'],
      'T3': state.gdp_abs_variation_previous_quarter['2019']['T3'] / state.gdp['2019']['T2'],
      'T4': state.gdp_abs_variation_previous_quarter['2019']['T4'] / state.gdp['2019']['T3'],
    },
    '2020': {
      'T1': state.gdp_abs_variation_previous_quarter['2020']['T1'] / state.gdp['2019']['T4'],
      'T2': state.gdp_abs_variation_previous_quarter['2020']['T2'] / state.gdp['2020']['T1'],
      'T3': null,
      'T4': null,
    }
  };
  state.gdp_abs_variation_homologous_quarter = {
    '2020': {
      'T1': state.gdp['2020']['T1'] - state.gdp['2019']['T1'],
      'T2': state.gdp['2020']['T2'] - state.gdp['2019']['T2'],
      'T3': state.gdp['2020']['T3'] - state.gdp['2019']['T3'],
      'T4': state.gdp['2020']['T4'] - state.gdp['2019']['T4'],
    },
  };
  state.gdp_per_variation_homologous_quarter = {
    '2020': {
      'T1': state.gdp_abs_variation_homologous_quarter['2020']['T1'] / state.gdp['2019']['T1'],
      'T2': state.gdp_abs_variation_homologous_quarter['2020']['T2'] / state.gdp['2019']['T2'],
      'T3': state.gdp_abs_variation_homologous_quarter['2020']['T3'] / state.gdp['2019']['T3'],
      'T4': state.gdp_abs_variation_homologous_quarter['2020']['T4'] / state.gdp['2019']['T4'],
    },
  };
}

// add the graphs to the DOM
function addGraphs() {
  let outer;
  outer = addLead('Activos');
  charts['ativos_dia'](outer);
  charts['ativos_total'](outer);
  outer = addLead('Amostras');
  charts['amostras_dia'](outer);
  charts['amostras_dia_perc_positivos'](outer);
  charts['amostras_dia_pcr'](outer);
  charts['amostras_dia_antigenio'](outer);
  outer = addLead('Confirmados');
  charts['confirmados_dia'](outer);
  charts['confirmados_total'](outer);
  charts['confirmados_hoje_generos'](outer);
  charts['confirmados_total_generos'](outer);
  charts['confirmados_hoje_ars'](outer);
  charts['confirmados_total_ars'](outer);
  charts['confirmados_historico'](outer);
  charts['confirmados_historico_100'](outer);
  outer = addLead('Densidade populacional');
  charts['densidade_ars'](outer);
  charts['densidade_casos'](outer);
  outer = addLead('Emprego');
  charts['empregos_total'](outer);
  charts['empregos_variacao'](outer);
  charts['empregos_menos24_total'](outer);
  charts['empregos_mais24_total'](outer);
  charts['desemprego_total'](outer);
  charts['desemprego_ars'](outer);
  outer = addLead('Internados');
  charts['internados_normal_dia'](outer);
  charts['internados_uci_dia'](outer);
  charts['internados_normal_total'](outer);
  charts['internados_uci_total'](outer);
  if (state.evm) {
    outer = addLead('Mortalidade');
    charts['mortalidade_acum'](outer);
    charts['mortalidade_light'](outer);
    charts['mortalidade_excessiva'](outer);
    charts['mortalidade_excessiva_percentagem'](outer);
  }
  outer = addLead('Óbitos');
  charts['obitos_dia'](outer);
  charts['obitos_total'](outer);
  charts['obitos_hoje_generos'](outer);
  charts['obitos_total_generos'](outer);
  charts['obitos_hoje_ars'](outer);
  charts['obitos_total_ars'](outer);
  charts['obitos_historico'](outer);
  charts['obitos_historico_100'](outer);
  outer = addLead('PIB');
  charts['pib_total'](outer);
  outer = addLead('Recuperados');
  charts['recuperados_dia'](outer);
  charts['recuperados_total'](outer);
  outer = addLead('Rt');
  renderNewRt(outer);
  outer = addLead('Sintomas');
  charts['sintomas'](outer);
  charts['sintomas_historico'](outer);
  renderTOC();
  document.getElementById('Fontes').style.display = 'block';
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
  const btt = '<a onclick="window.scrollTo(0,0);" class="btt"><i class="fa fa-level-up"></i></a>'
  const h2 = document.createElement('h2');
  h2.id = text.replace(/\s/g,'_');
  h2.classList.add("section_divider");
  h2.innerHTML = text + btt;
  document.getElementById('content_container').appendChild(h2);
  state.toc.push({ anchor: h2.id, label: text });
  const outer = document.createElement('div');
  outer.classList.add("outer_container");
  outer.classList.add("fluid-row");
  document.getElementById('content_container').appendChild(outer);
  return outer;
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
  state.toc.push({ anchor: 'Fontes', label: 'Fontes' });
  const html = 'Index: <br />' + state.toc.map(item => `<a href="#${item.anchor}">${item.label}</a>`).join(' &middot; ');
  document.getElementById('toc').innerHTML = html;
}

// render Rt graphic - not used at the moment
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

// render new Rt from https://covidcountdown.today
function renderNewRt(outer) {
  const div = document.createElement('div');
  const a = document.createElement('a');
  const img = document.createElement('img');
  a.href = 'https://covidcountdown.today/';
  img.src = 'https://cdn.joaobordalo.com/images/static/covid/rt20201212.svg';
  img.classList.add('rt_graph');
  a.appendChild(img);
  div.appendChild(a)
  outer.appendChild(div);
}

// given an action, returns a api url
function apiURL(id) {
  if (id === 'last_update') return 'https://covid19-api.vost.pt/Requests/get_last_update';
  if (id === 'full_dataset') return 'https://covid19-api.vost.pt/Requests/get_full_dataset';
  if (id === 'mortality') {
    const d = new Date();
    const s = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + ("0" + d.getDate()).slice(-2);
    return `https://cdn.joaobordalo.com/json/mortality-${s}.json`;
  }
  if (id === 'amostras') {
    const d = new Date();
    const s = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + ("0" + d.getDate()).slice(-2);
    return `https://cdn.joaobordalo.com/json/amostras-${s}.json`;
  }
}

// navigate to anchor if anchor present
function navigateToAnchor() {
  const anchor = window.location.hash.substr(1);
  if (anchor) document.getElementById(anchor)?.scrollIntoView();
}

// add a '+' on positive numbers
function addPrefix(number) {
  return number > 0 ? `+${number}` : number;
}

// add summary of stats for the present day
function addTodayNumbers() {
  const table = '<table>'
              + '  <thead>'
              + '    <tr>'
              + '      <td></td>'
              + `      <td class="right">Hoje</td>`
              + `      <td class="right">Total</td>`
              + '    </tr>'
              + '  </thead>'
              + '  <tbody>'
              + '    <tr>'
              + '      <td><a href="#Activos">Activos</a></td>'
              + `      <td>${addPrefix(state.json.delta.ativos[state.json.today])}</td>`
              + `      <td>${state.json.last.ativos}</td>`
              + '    </tr>'
              + '    <tr>'
              + '      <td><a href="#Confirmados">Confirmados</a></td>'
              + `      <td>${addPrefix(state.json.last.confirmados_novos)}</td>`
              + `      <td>${state.json.last.confirmados}</td>`
              + '    </tr>'
              + '    <tr>'
              + '      <td><a href="#Internados">Internados</a></td>'
              + `      <td>${addPrefix(state.json.delta.internados[state.json.today])}</td>`
              + `      <td>${state.json.full.internados[state.json.today]}</td>`
              + '    </tr>'
              + '    <tr>'
              + '      <td><a href="#Internados">Internados UCI</a></td>'
              + `      <td>${addPrefix(state.json.delta.internados_uci[state.json.today])}</td>`
              + `      <td>${state.json.full.internados_uci[state.json.today]}</td>`
              + '    </tr>'
              + '    <tr>'
              + '      <td><a href="#Recuperados">Recuperados</a></td>'
              + `      <td>${addPrefix(state.json.delta.recuperados[state.json.today])}</td>`
              + `      <td>${state.json.full.recuperados[state.json.today]}</td>`
              + '    </tr>'
              + '    <tr>'
              + '      <td><a href="#Óbitos">Óbitos</a></td>'
              + `      <td>${addPrefix(state.json.delta.obitos[state.json.today])}</td>`
              + `      <td>${state.json.full.obitos[state.json.today]}</td>`
              + '    </tr>'
              + '  </tbody>'
              + '</table>';
  document.getElementById("summary").innerHTML = table;
}

// go and render the page
function go(json) {
  state.json.full = json;
  manageWait();
  crunchData();
  addTodayNumbers();
  addGraphs();
  navigateToAnchor();
  document.getElementsByTagName('footer')[0].style.visibility = 'visible';
}

// fetch all data
async function fetchData() {
  // get last update information (to manage waiting time)
  let response = await fetch(apiURL('last_update'));
  state.json.last = await response.json();
  manageWait();
  // get full dataset from VOST
  response = await fetch(apiURL('full_dataset'));
  const full_dataset = await response.json();
  // get mortality data
  response = await fetch(apiURL('mortality'));
  state.evm = await response.json();
  // get tests data
  response = await fetch(apiURL('amostras'));
  const amostras = await response.json();
  state.amostras = amostras.splice(1);
  // render all graphics
  go(full_dataset);
}

function setDarkTheme() {
  const options = {
    colors: ['#1f75b2', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
      '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, '#0a476f'],
          [1, '#001e45']
        ]
      },
      plotBorderColor: '#606063'
    },
    title: {
      style: {
        color: '#E0E0E3',
        fontSize: '20px'
      }
    },
    subtitle: {
      style: {
        color: '#E0E0E3',
        textTransform: 'uppercase'
      }
    },
    xAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
        style: {
          color: '#A0A0A3'
        }
      }
    },
    yAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
        style: {
          color: '#A0A0A3'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0'
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: '#F0F0F3',
          style: {
            fontSize: '13px'
          }
        },
        marker: {
          lineColor: '#333'
        }
      },
      boxplot: {
        fillColor: '#505053'
      },
      candlestick: {
        lineColor: 'white'
      },
      errorbar: {
        color: 'white'
      }
    },
    legend: {
      itemStyle: {
        color: '#E0E0E3'
      },
      itemHoverStyle: {
        color: '#FFF'
      },
      itemHiddenStyle: {
        color: '#606063'
      },
      title: {
        style: {
          color: '#C0C0C0'
        }
      }
    },
    credits: {
      style: {
        color: '#666'
      }
    },
    labels: {
      style: {
        color: '#707073'
      }
    },
    drilldown: {
      activeAxisLabelStyle: {
        color: '#F0F0F3'
      },
      activeDataLabelStyle: {
        color: '#F0F0F3'
      }
    },
    navigation: {
      buttonOptions: {
        symbolStroke: '#DDDDDD',
        theme: {
          fill: '#505053'
        }
      }
    },
    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: '#505053',
        stroke: '#000000',
        style: {
          color: '#CCC'
        },
        states: {
          hover: {
            fill: '#707073',
            stroke: '#000000',
            style: {
              color: 'white'
            }
          },
          select: {
            fill: '#000003',
            stroke: '#000000',
            style: {
              color: 'white'
            }
          }
        }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
        backgroundColor: '#333',
        color: 'silver'
      },
      labelStyle: {
        color: 'silver'
      }
    },
    navigator: {
      handles: {
        backgroundColor: '#666',
        borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
        color: '#7798BF',
        lineColor: '#A6C7ED'
      },
      xAxis: {
        gridLineColor: '#505053'
      }
    },
    scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
    }
  };
  // Apply the theme
  Highcharts.setOptions(options);
}

// run when content is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains("dark-theme")) setDarkTheme();
  fetchData()
  .catch ((e) => console.log(e.message));
});
