let viewer;

function openPanorama(panoId) {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('panorama-container').style.display = 'block';

    const panoramas = {
        "pano1": {
            "type": "equirectangular",
            "panorama": "img/1_vhid.webp",
            "yaw": -120,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -3.3192732795777604,
                    "yaw": -128.9998425241154,
                    "type": "scene",
                    "text": "Далі →",
                    "sceneId": "pano2",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                 
                }
            ]
        },
        "pano2": {
            "type": "equirectangular",
            "panorama": "img/2_zentr_house.webp",
             "yaw": 198,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -6.483401835346073,
                    "yaw": 13.297250818950383,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano1",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": 0.14619661268440978,
                    "yaw":  116.46540144801737,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano3",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                }
            ]
        },
            "pano3": {
            "type": "equirectangular",
            "panorama": "img/3_oxorona.webp",
            "yaw": -49,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -2.325847463400691,
                    "yaw": 45.189800561394186,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano2",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                }
            ]
        }
    };

    if (viewer) {
        viewer.loadScene(panoId);
    } else {
        viewer = pannellum.viewer('panorama', {
            default: {
                firstScene: panoId,
                sceneFadeDuration: 1000,
                autoLoad: true,
                // hotSpotDebug: true   
            },
            scenes: panoramas
        });
    }
}

document.getElementById('back-to-map').onclick = () => {
    document.getElementById('map-container').style.display = 'block';
    document.getElementById('panorama-container').style.display = 'none';
};
