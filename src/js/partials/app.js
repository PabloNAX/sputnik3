// scrollspy - header


// Yandex Map
ymaps.ready(init);

function init() {

    ////YandexApi ojakhuri map
    var sputnikMap = new ymaps.Map("map", {
            center: [55.7628, 37.6138], //sputnik hostel
            zoom: 17,
            controls: []
        }),

    // Создаем геообъект с типом геометрии "Круг".
        sputnikPlacemark = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.7628, 37.6138]

            }
        });

    sputnikMap.geoObjects
        .add(sputnikPlacemark);

}
