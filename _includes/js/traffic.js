const handler = async () => {
  const serverUrl = 'https://vvcams.bordalix.workers.dev'
  const placeholder = '/images/static/traffic/placeholder.png'

  // fetch traffic alerts for highway id = 2
  const res = await fetch(`${serverUrl}?type=alerts&id=2`)
  const data = await res.json()
  if (data.length > 0) {
    document.getElementById('incidents-label').style.display = 'block'
    const container = document.getElementById('incidents')
    data.forEach((incident) => {
      const iconContainer = document.createElement('div')
      iconContainer.innerHTML = '<p><i class="fa fa-warning"></i></p>'
      const textContainer = document.createElement('div')
      textContainer.innerHTML = '<p>' + incident.descricaoIncidencia + '</p>'
      const div = document.createElement('div')
      div.appendChild(iconContainer)
      div.appendChild(textContainer)
      container.appendChild(div)
    })
  }
}

document.addEventListener('DOMContentLoaded', handler)
