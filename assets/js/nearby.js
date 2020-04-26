var lat = 28.61;
var long = 77.23;

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;

            initializeMap();
        });
    }
}

getCurrentLocation();

function showModal() {
    $('#legendModal').modal('show');
}

function initializeMap() {
    var map = new MapmyIndia.Map("map", { center: [lat, long], zoomControl: true, hybrid: true, search: true, location: true });

    L.marker([lat, long]).addTo(map);

    var sql = "covid:corona_testing_centre,covid:corona_treatment_centre,covid:corona_sample_collection_centre,covid:corona_isolation_ward,covid:hunger_relief_centre,covid:hunger_and_night_shelter,covid:government_ration_distribution,covid:containment_zone_gradient";
    var wms_param = {
        transparent: true,
        layers: sql,
        tiled: true,
        format: 'image/png',
        maxZoom: 24,
        minZoom: 0,
        autoZIndex: false,
        zIndex: 10000,
        crossDomain: true,
        opacity: 1
    };

    var geoserver = "https://mgis-move.mapmyindia.in/geoserver/wms";
    var nearbyLayer = L.WMS.overlay(geoserver, wms_param).addTo(map);

    map.on('click', function (evt) {
        var buffer = 20;
        if (map.getZoom() > 7) buffer = 10;
        var point = map.latLngToContainerPoint(evt.latlng, map.getZoom()),
            size = map.getSize(),
            params = {
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                styles: sql,
                transparent: true,
                format: 'image/png',
                bbox: map.getBounds().toBBoxString(),
                height: size.y,
                width: size.x,
                layers: sql,
                QUERY_LAYERS: sql,
                buffer: buffer,
                info_format: 'application/json'
            };
        params[params.version === '1.3.0' ? 'i' : 'x'] = parseInt(point.x);
        params[params.version === '1.3.0' ? 'j' : 'y'] = parseInt(point.y);

        var params_widout_cluster = null;
        var geoserver = "https://mgis-move.mapmyindia.in/geoserver/wms";
        var urls = geoserver + L.Util.getParamString(params, geoserver, true);
        /*showResults=L.Util.bind(this.showGetFeatureInfo,this);*/
        $.ajax({
            url: urls,
            success: function (data, status, xhr) {
                var html = htmlStateData(data);
                if (!html) return false;
                popup = new L.popup({ offset: [20, 6] })
                    .setLatLng(evt.latlng)
                    .setContent(html);
                map.openPopup(popup);
                /*  map.setView(evt.latlng);*/
            },
            error: function (xhr, status, error) {
                alert(error);
            }
        });
    });

    $('.expand-map-control').append(
        `<li style="border-top: 5px solid transparent;">
            <a alt="Legend" title="Legend" class="on" onclick="showModal();return false;">?</a>
        </li>`);

    setTimeout(() => {
        $('.leaflet-image-layer').addClass("blink-image");
    }, 2000);
}

function htmlStateData(data) {
    var res = "";
    try {
        res = data.features[0].properties;
    } catch (e) { }
    if (!res) return false;
    if (res.name !== undefined)
        return '<div class="toolTipDiv toolTipDiv1">' +
            '<h6>' + res.name + '</h6>' +
            '<p>' + res.address + '</p>' +
            '</div>';
    else
        return '<div class="toolTipDiv toolTipDiv1">' +
            '<h6>' + 'Hotspot: ' + res.placename + '</h6>' +
            '<p>' + res.descriptio + '<br>' + res.pincode + '</p>' +
            '</div>';
}