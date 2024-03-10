var dataset = ee.FeatureCollection('FAO/GAUL/2015/level1');

var bgd = dataset.filter(ee.Filter.eq("ADM0_NAME","Bangladesh"))

var syl = bgd.filter(ee.Filter.eq("ADM1_NAME","Sylhet"))


print(bgd)
Map.centerObject(bgd)
Map.addLayer(bgd)
var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0,
};

//dataset = bgd.style(styleParams);//


Map.addLayer(dataset, {}, 'First Level Administrative Units');
Map.addLayer(syl.style(styleParams))