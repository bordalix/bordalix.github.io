let content, supportsHLS

const alternativeLinks = {
  'RTP 1': 'https://www.rtp.pt/play/direto/rtp1',
  'RTP 2': 'https://www.rtp.pt/play/direto/rtp2',
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

function addChannel(channel) {
  const template = document.getElementById('channel_template')
  const div = template.content.firstElementChild.cloneNode(true)
  const span = div.querySelector('span')
  const img = div.querySelector('img')
  // p.style['background-image'] = `url(${channel.logo})`
  div.onclick = () => window.open(channel.link, '_blank')
  span.textContent = channel.name
  img.src = channel.logo
  img.onerror = () => (img.src = '/images/static/icons/logo-placeholder.png')
  content.appendChild(div)
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
        const alternate = alternativeLinks[channel.name]
        if (alternate) {
          channel.link = alternate
        } else {
          channel.link = normalizeURL(matchLink[1])
        }
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
  console.log('channels', channels)
  for (const channel of channels) addChannel(channel)
}

document.addEventListener('DOMContentLoaded', () => run())
