ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.681145514139736,-0.3096831896586125],
            zoom: 11,
            controls: [],

        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'Assets/images/map_circle.png',
            iconImageSize: [34, 34],
        });
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');
        var balloon = myMap.balloon.open(myMap.getCenter(), {
          content: '<p id = "mem"> "9833 Martina Path"</p>',
        }, {
          closeButton: false,
          offset: [3,-40],
         })

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
