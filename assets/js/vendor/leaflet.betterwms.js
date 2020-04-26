/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lyClass = {
    jsonURL: null,
    htmlArr: [],
    lArr: []
}

L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    onAdd: function(map) {
        // Triggered when the layer is added to a map.
        //   Register a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onAdd.call(this, map);
        //        console.log("inside");
        //        map.on('dblclick', this.getFeatureInfo, this);
        map.on('click', this.getFeatureInfo, this);

    },
    test: function(evt) {

        var delayInMilliseconds = 2000; //2 second
        setTimeout(function() {}, delayInMilliseconds);
    },
    onRemove: function(map) {
        // Triggered when the layer is removed from a map.
        // Unregister a click listener, then do all the upstream WMS things.
        L.TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.getFeatureInfo, this);
    },
    showGetFeatureInfo: function(latlng, data) {
        //      if(err){console.log(err);return;}
        var html = "";


        //        var obj = JSON.parse(response);
        var crs = data.crs;
        if (crs == null) {
            return false;
        }
        var ft = data.features;
        var obj = ft[0].properties;
        var info_feature = ft[0].id;
        info_feature = info_feature.replace(/[^_a-zA-Z]/g, '');
        html += "<div class='headtitle'><b>" + info_feature.toUpperCase() + "</b></div><div class='innerinfo'>";
        Object.keys(obj).forEach(function(key) {
            if (key.toUpperCase() !== 'SE_ANNO_CAD_DATA' && key.toUpperCase() !== 'GDB_GEOMATTR_DATA' && key.toUpperCase() !== 'BBOX') {
                html += "<div class='mainlabel_details'><label class='label_name'>" + key.toUpperCase() + " </label><div class='details'>" + obj[key] + "</div></div>";
            }
        });
        html += "</div>";
        popup = new L.popup()
            .setLatLng(latlng)
            .setContent(html);
        map.openPopup(popup);
        //        .openOn(this._map);
    },
    getFeatureInfo: function(evt) {
        var point = this._map.latLngToContainerPoint(evt.latlng, this._map.getZoom()),
            size = this._map.getSize(),
            params = {
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                //                  feature_count : 1,
                styles: this.wmsParams.styles,
                transparent: this.wmsParams.transparent,
                version: this.wmsParams.version,
                format: this.wmsParams.format,
                bbox: this._map.getBounds().toBBoxString(),
                height: size.y,
                width: size.x,
                layers: this.wmsParams.layers,
                query_layers: this.wmsParams.layers,
                info_format: 'application/json'
            };
        params[params.version === '1.3.0' ? 'i' : 'x'] = parseInt(point.x);
        params[params.version === '1.3.0' ? 'j' : 'y'] = parseInt(point.y);


        var urls = this._url + L.Util.getParamString(params, this._url, true);
        showResults = L.Util.bind(this.showGetFeatureInfo, this);
        $.ajax({
            url: urls,
            success: function(data, status, xhr) {
                count =0;
                try{count=data.features[0].properties.count;}catch(e){}
                console.log(count);
                click_pop="";
                if(!data.features[0])return false;
                if(data.features[0].id.indexOf("fid-")!=-1) {
                    if(count > 1) {
                        if(map.getZoom()<7)
                        {
                         map.setView(evt.latlng,7)
                        }
                        else
                        {
                         covertArr(data.features[0].properties.envBBOX);
                         var fitBnd = arr;
                         map.fitBounds(fitBnd);
                        }
                    }
                    else  getFeatureInfoCluster(evt,covid_type);
               }
               else if(data.features[0].id.indexOf("state_corona_stats")!=-1)
               {
                    var html = htmlStateData(data,"covid:state_corona_stats");
                    if(!html) return false;
                    if(mobile)
                    {
                        $("#state_popup .toolMain").html(html).show();
                        $(".newfeed").hide();
                    }
                    else
                    {
                        if(popup) map.removeLayer(popup);
                        popup = new L.popup({offset: [20, 6]})
                        .setLatLng(evt.latlng)
                        .setContent(html);
                        map.openPopup(popup);
                        map.setView(evt.latlng);
                    } 
               }
            },
            error: function(xhr, status, error) {
                showResults(error);
            }
        });
    }

});


L.tileLayer.betterWms = function(url, options) {

    return new L.TileLayer.BetterWMS(url, options);
};

/*var geoUrl = url.split("?");
//        var str_utl = "http://182.76.28.86:8084/MapEngineUtil/hit"; //for System X live
//        var str_utl = "http://mapengine.mapmyindia.in/MapEngineUtil/hit";

//        var str_utl = "http://localhost:8080/MapEngineUtil/hit";  //for local testing
        var str_utl = "http://10.1.1.55:8087/MapEngineUtil/hit";  //for local testing 
        
//        var str_utl = null;


        $.get(str_utl, {
            dataurl: geoUrl[0],
            params: geoUrl[1]
        }, function (data) {
            var response = data.result;
            var html = "";
            var js_resp = JSON.parse(response);
            var crs = js_resp.crs;
            if (crs == null) {
                return false;
            }
            var ft = js_resp.features;
            var props = ft[0].properties;
            var sslc_nme = props.sslc_nme;
            var sub_id = props.sub_id;
            var id = props.id;
            var cityid = props.city_id;
            var sttid = props.stt_id;
            var ftrcry  = props.ftr_cry;
            var vehicle_id = props.vehicle_id;
            var speedkph = props.speedkph;
            var heading = props.heading;
            var altitude = props.altitude;

            html += "<div class='poItype'><b>Feature Info Box</b></div>";

            if (sslc_nme != undefined && sslc_nme != "") {
                html += "<div class='mainlabel_details'><label class='label_name'>Name:</label>" + sslc_nme + "</div>";
            }

            if (sub_id != undefined && sub_id != "") {
                html += "<div class='mainlabel_details'><label class='label_name'>Sub Id:</label>" + sub_id + "</div> ";
            }

            if (id != undefined && id != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>Id:</label>" + id + " </div>";
            }

            if (cityid != undefined && cityid != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>City Id:</label>" + cityid + " </div>";
            }

            if (sttid != undefined && sttid != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>Stt Id:</label>" + sttid + " </div>";
            }

            if (ftrcry != undefined && ftrcry != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>FtrCry Id:</label>" + ftrcry + " </div>";
            }

            if (speedkph != undefined && speedkph != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>Speed:</label>" + speedkph + " </div>";
            }

            if (heading != undefined && heading != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>Heading:</label>" + heading + " </div>";
            }

            if (altitude != undefined && altitude != "") {
                html += "<div class='mainlabel_details lastdiv'><label class='label_name'>Altitude:</label>" + altitude + " </div>";
            }

            L.popup({maxWidth: 800})
                    .setLatLng(evt.latlng)
                    .setContent(html)
                    .openOn(map);
        }); */

/*    }
}); 

L.tileLayer.betterWms = function (url, options) {

    return new L.TileLayer.BetterWMS(url, options);
}; */
