let content, supportsHLS

const checkHLS = () => {
  const video = document.createElement('video')
  return Boolean(
    video.canPlayType('application/vnd.apple.mpegURL') ||
      video.canPlayType('audio/mpegurl')
  )
}

const normalizeURL = (link) => {
  const hlsviewerurl = 'https://hlsviewer.pages.dev?url='
  return supportsHLS ? link : hlsviewerurl + link
}

function openChannel(link) {
  window.open(normalizeURL(link), '_blank')
}

function addChannel(channel) {
  const template = document.getElementById('channel_template')
  const element = template.content.firstElementChild.cloneNode(true)
  const span = element.querySelector('span')
  const img = element.querySelector('img')
  element.onclick = () => openChannel(channel.link)
  span.textContent = channel.name
  img.src = channel.logo
  content.appendChild(element)
}

function parseM3U(text) {
  const channels = []
  let channel = { link: '', logo: '', name: '' }
  for (const line of text.split('\n')) {
    const matchNameAndLogo = line.match(
      /^#EXTINF:-1 group-title="TV".*tvg-logo="(.*)",(.*)$/
    )
    if (matchNameAndLogo) {
      channel = {
        link: '',
        logo: matchNameAndLogo[1],
        name: matchNameAndLogo[2],
      }
    } else {
      const matchLink = line.match(/(https*:\/\/.*)$/)
      if (matchLink && channel.name && channel.logo) {
        channel.link = matchLink[1]
        channels.push(channel)
        channel = { link: '', logo: '', name: '' }
      }
    }
  }
  return channels
}

async function fetchM3U() {
  const response = await fetch(
    'https://raw.githubusercontent.com/LITUATUI/M3UPT/main/M3U/M3UPT.m3u'
  )
  return await response.text()
}

async function run() {
  supportsHLS = checkHLS()
  content = document.getElementById('channels_list')
  const m3u_file = await fetchM3U()
  const channels = parseM3U(m3u_file)
  for (const channel of channels) addChannel(channel)
}

document.addEventListener('DOMContentLoaded', () => run())
