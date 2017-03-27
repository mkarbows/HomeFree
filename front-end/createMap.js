// var map = L.map('mapid').setView([51.505, -0.09], 13);
//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//   maxZoom: 18,
//   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//   id: 'mapbox.streets'
// }).addTo(map);
//
// L.Routing.control({
//     waypoints: [
//         L.latLng(57.74, 11.94),
//         L.latLng(57.6792, 11.949)
//     ]
// }).addTo(map);

var map = L.map('mapid').setView([51.505, -0.09], 5);
        map.zoomControl.setPosition('topright');
        map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
            ));

        var searchboxControl=createSearchboxControl();
        var control = new searchboxControl({
            sidebarTitleText: 'Header',
            sidebarMenuItems: {
                Items: [
                    { type: "link", name: "Link 1 (github.com)", href: "http://github.com", icon: "icon-local-carwash" },
                    { type: "link", name: "Link 2 (google.com)", href: "http://google.com", icon: "icon-cloudy" },
                    { type: "button", name: "Button 1", onclick: "alert('button 1 clicked !')", icon: "icon-potrait" },
                    { type: "button", name: "Button 2", onclick: "button2_click();", icon: "icon-local-dining" },
                    { type: "link", name: "Link 3 (stackoverflow.com)", href: 'http://stackoverflow.com', icon: "icon-bike" },
                ]
            }
        });
        control._searchfunctionCallBack = function (searchkeywords)
        {
            if (!searchkeywords) {
                searchkeywords = "The search call back is clicked !!"
            }
            alert(searchkeywords);
        }
        map.addControl(control);
    // });
    //
    // function button2_click()
    // {
    //     alert('button 2 clicked !!!');
    // }
