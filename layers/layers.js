var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GedungSMA_1 = new ol.format.GeoJSON();
var features_GedungSMA_1 = format_GedungSMA_1.readFeatures(json_GedungSMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GedungSMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GedungSMA_1.addFeatures(features_GedungSMA_1);
var lyr_GedungSMA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GedungSMA_1, 
                style: style_GedungSMA_1,
                popuplayertitle: "Gedung SMA",
                interactive: true,
    title: 'Gedung SMA<br />\
    <img src="styles/legend/GedungSMA_1_0.png" /> Gedung Tata Usaha<br />\
    <img src="styles/legend/GedungSMA_1_1.png" /> Kantin<br />\
    <img src="styles/legend/GedungSMA_1_2.png" /> Kantor<br />\
    <img src="styles/legend/GedungSMA_1_3.png" /> Laboratorium<br />\
    <img src="styles/legend/GedungSMA_1_4.png" /> Lapangan Serbaguna<br />\
    <img src="styles/legend/GedungSMA_1_5.png" /> Lapangan Upacara<br />\
    <img src="styles/legend/GedungSMA_1_6.png" /> Mushalah<br />\
    <img src="styles/legend/GedungSMA_1_7.png" /> Perpustakaan<br />\
    <img src="styles/legend/GedungSMA_1_8.png" /> Ruang Belajar<br />\
    <img src="styles/legend/GedungSMA_1_9.png" /> Ruang Komputer<br />\
    <img src="styles/legend/GedungSMA_1_10.png" /> WC<br />\
    <img src="styles/legend/GedungSMA_1_11.png" /> <br />'
        });
var format_BatasLokasi_2 = new ol.format.GeoJSON();
var features_BatasLokasi_2 = format_BatasLokasi_2.readFeatures(json_BatasLokasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasLokasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasLokasi_2.addFeatures(features_BatasLokasi_2);
var lyr_BatasLokasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasLokasi_2, 
                style: style_BatasLokasi_2,
                popuplayertitle: "Batas Lokasi",
                interactive: true,
                title: '<img src="styles/legend/BatasLokasi_2.png" /> Batas Lokasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GedungSMA_1.setVisible(true);lyr_BatasLokasi_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GedungSMA_1,lyr_BatasLokasi_2];
lyr_GedungSMA_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kapasitas Orang /Murid': 'Kapasitas Orang /Murid', 'Luas': 'Luas', 'Foto': 'Foto', });
lyr_BatasLokasi_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Luas (Ha)': 'Luas (Ha)', 'Foto': 'Foto', });
lyr_GedungSMA_1.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kapasitas Orang /Murid': 'Range', 'Luas': 'Range', 'Foto': 'ExternalResource', });
lyr_BatasLokasi_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Luas (Ha)': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_GedungSMA_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Kapasitas Orang /Murid': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_BatasLokasi_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_BatasLokasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});