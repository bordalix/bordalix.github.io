let content, supportsHLS

const newLogos = {
  'https://cidade.iol.pt/images/logo_CIDADE_2020.png':
    'https://cidade.fm/images/logo-CDD.svg',
  'http://www.radionovaera.pt/wp-content/uploads/2015/12/logo.png':
    'https://radionovaera.pt/resources/img/logo/horizontal-white.svg',
  'http://www.radioclube-penafiel.pt/i/logo_radioclubepenafiel.png':
    'https://www.radioclube-penafiel.pt/wp-content/uploads/2022/01/logo-rcpenafiel-vector-retina-400x283.png',
  'http://radiocomercial.iol.pt/images/logo_big.png':
    'http://radiocomercial.pt/images/logo_big.png',
  'http://radiosdeportugal.com/wp-content/uploads/2007/07/logo_megafm_new.png':
    'https://www.radiomegafm.pt/images/images/LOGO_SITE_MEGA.png',
  'https://static.radiosdeportugal.pt/img/oitentas.jpg':
    'https://rfmsite-images.azureedge.net/images/webrads/RFM-80s_lg.svg',
  'http://www.radiocastelobranco.pt/css/site/img/logo.png':
    'https://radiocastelobranco.sapo.pt/wp-content/uploads/sites/26/2023/04/RACAB-Logo-branco.png',
}

const checkHLS = () => {
  const video = document.createElement('video')
  return Boolean(
    video.canPlayType('application/vnd.apple.mpegURL') ||
      video.canPlayType('audio/mpegurl')
  )
}

const normalizeURL = (link) => {
  if (!link.match(/m3u8/)) return link
  const hlsviewerurl = 'https://hlsviewer.pages.dev?url='
  return supportsHLS ? link : hlsviewerurl + link
}

function openStation(link) {
  window.open(normalizeURL(link), '_blank')
}

function addStation(station) {
  const template = document.getElementById('station_template')
  const element = template.content.firstElementChild.cloneNode(true)
  const span = element.querySelector('span')
  const img = element.querySelector('img')
  element.onclick = () => openStation(station.link)
  span.textContent = station.name
  img.src = station.logo
  img.onerror = () => (img.src = '/images/static/icons/logo-placeholder.png')
  content.appendChild(element)
}

function parseM3U(text) {
  const stations = []
  const empty_station = { link: '', logo: '', name: '' }
  let station = empty_station
  for (const line of text.split('\n')) {
    const matchNameAndLogo = line.match(
      /^#EXTINF:-1 radio="true".*tvg-logo="(.*)",(.*)$/
    )
    if (matchNameAndLogo) {
      let [_, logo, name] = matchNameAndLogo
      logo = newLogos[logo] ?? logo
      station = { link: '', logo, name }
    } else {
      const matchLink = line.match(/(https*:\/\/.*)$/)
      if (matchLink && station.name && station.logo) {
        station.link = matchLink[1]
        stations.push(station)
        station = empty_station
      }
    }
  }
  return stations
}

async function fetchM3U() {
  const response = await fetch(
    'https://raw.githubusercontent.com/LITUATUI/M3UPT/main/M3U/M3UPT.m3u'
  )
  return await response.text()
}

async function run() {
  supportsHLS = checkHLS()
  content = document.getElementById('stations_list')
  const m3u_file = await fetchM3U()
  const stations = parseM3U(m3u_file)
  for (const station of stations) addStation(station)
}

document.addEventListener('DOMContentLoaded', () => run())
