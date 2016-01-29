// scrollspy - header


// Yandex Map
ymaps.ready(init);

function init() {

    ////YandexApi ojakhuri map
    var sputnikMap = new ymaps.Map("map", {
            center: [55.7630, 37.6133], //sputnik hostel
            zoom: 17,

            //убрать кнопки управления
            controls: ['zoomControl']
        }),


    // Создаем геообъект с типом геометрии "Круг".
        sputnikPlacemark = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.7630, 37.6133]

            }
        });

    sputnikMap.geoObjects
        .add(sputnikPlacemark);


    // отключается zoom при прокрутке страницы
    sputnikMap.behaviors.disable('scrollZoom');
}



