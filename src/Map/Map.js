var map = L.map('map').setView([48.856613, 2.352222], 6);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
	maxZoom: 20
}).addTo(map);