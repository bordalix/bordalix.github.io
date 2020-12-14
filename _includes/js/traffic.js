document.addEventListener("DOMContentLoaded", function () {
  var jsonURL = 'https://joaobordalo.com/images/traffic/incidents.json?' + new Date().getTime();
  fetch(jsonURL)
  .then(r => r.json())
  .then(data => {
    if (data.length > 0) {
      document.getElementById('incidents-label').style.display = 'block';
      var container = document.getElementById('incidents')
      data.forEach(incident => {
        var iconContainer = document.createElement('div');
        iconContainer.innerHTML = '<p><i class="fa fa-warning"></i></p>';
        var textContainer = document.createElement('div');
        textContainer.innerHTML = '<p>' + incident.descricaoIncidencia + '</p>';
        var div = document.createElement('div');
        div.appendChild(iconContainer);
        div.appendChild(textContainer);
        container.appendChild(div);
      });
    }
  });
  const placeholder = 'https://cdn.joaobordalo.com/images/static/traffic/placeholder.png';
  ['south_cams', 'north_cams'].forEach(function (div_id) {
    var camIDs = {
      south_cams: [305, 306, 307, 5, 308, 309, 310, 311, 7, 312, 313, 149, 532, 314, 316],
      north_cams: [78, 79, 80, 81]
    };
    var div = document.getElementById(div_id);
    camIDs[div_id].forEach(function (camID) {
      var url = 'https://joaobordalo.com/images/traffic/viaverde_' + camID + '.jpeg?' + new Date().getTime();
      var img = document.createElement('img');
      img.src = url;
      img.alt = 'Cam ID ' + camID;
      img.onerror = function() { img.src = placeholder; }
      div.appendChild(img);
    });
  });
});
