var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_OverlayBlokdanPKKPR_modified_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overlay Blok dan PKKPR_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OverlayBlokdanPKKPR_modified_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12500856.438037, -913596.712685, 12501483.146525, -912422.070633]
        })
    });
var format_TanahdiSemeru88dariBhumi_2 = new ol.format.GeoJSON();
var features_TanahdiSemeru88dariBhumi_2 = format_TanahdiSemeru88dariBhumi_2.readFeatures(json_TanahdiSemeru88dariBhumi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahdiSemeru88dariBhumi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahdiSemeru88dariBhumi_2.addFeatures(features_TanahdiSemeru88dariBhumi_2);
var lyr_TanahdiSemeru88dariBhumi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahdiSemeru88dariBhumi_2, 
                style: style_TanahdiSemeru88dariBhumi_2,
                popuplayertitle: 'Tanah di Semeru 88 dari Bhumi',
                interactive: true,
    title: 'Tanah di Semeru 88 dari Bhumi<br />\
    <img src="styles/legend/TanahdiSemeru88dariBhumi_2_0.png" /> 1<br />\
    <img src="styles/legend/TanahdiSemeru88dariBhumi_2_1.png" /> <br />' });
var format_WilayahPengajuanPKKPRSemeru88_3 = new ol.format.GeoJSON();
var features_WilayahPengajuanPKKPRSemeru88_3 = format_WilayahPengajuanPKKPRSemeru88_3.readFeatures(json_WilayahPengajuanPKKPRSemeru88_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahPengajuanPKKPRSemeru88_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahPengajuanPKKPRSemeru88_3.addFeatures(features_WilayahPengajuanPKKPRSemeru88_3);
var lyr_WilayahPengajuanPKKPRSemeru88_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahPengajuanPKKPRSemeru88_3, 
                style: style_WilayahPengajuanPKKPRSemeru88_3,
                popuplayertitle: 'Wilayah Pengajuan PKKPR Semeru 88',
                interactive: false,
                title: '<img src="styles/legend/WilayahPengajuanPKKPRSemeru88_3.png" /> Wilayah Pengajuan PKKPR Semeru 88'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_OverlayBlokdanPKKPR_modified_1.setVisible(true);lyr_TanahdiSemeru88dariBhumi_2.setVisible(true);lyr_WilayahPengajuanPKKPRSemeru88_3.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_OverlayBlokdanPKKPR_modified_1,lyr_TanahdiSemeru88dariBhumi_2,lyr_WilayahPengajuanPKKPRSemeru88_3];
lyr_TanahdiSemeru88dariBhumi_2.set('fieldAliases', {'Jenis': 'Jenis', 'Nama': 'Nama', 'Luas': 'Luas', 'Nomor': 'Nomor', 'Yes/No': 'Yes/No', });
lyr_WilayahPengajuanPKKPRSemeru88_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Id2': 'Id2', 'Area': 'Area', });
lyr_TanahdiSemeru88dariBhumi_2.set('fieldImages', {'Jenis': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Nomor': 'TextEdit', 'Yes/No': 'TextEdit', });
lyr_WilayahPengajuanPKKPRSemeru88_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Id2': 'Range', 'Area': 'TextEdit', });
lyr_TanahdiSemeru88dariBhumi_2.set('fieldLabels', {'Jenis': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Nomor': 'no label', 'Yes/No': 'no label', });
lyr_WilayahPengajuanPKKPRSemeru88_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Id2': 'no label', 'Area': 'no label', });
lyr_WilayahPengajuanPKKPRSemeru88_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});