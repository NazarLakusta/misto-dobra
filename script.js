let viewer;

function openPanorama(panoId) {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('panorama-container').style.display = 'block';

    const panoramas = {
        // pano 1
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
                    "pitch": -7.116020533648538,
                    "yaw":  118.93603783930016,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano2_1",
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
        },
            "pano4": {
            "type": "equirectangular",
            "panorama": "img/4_to_playground.webp",
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
        },
            "pano5": {
            "type": "equirectangular",
            "panorama": "img/5_playground.webp",
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
        },
            "pano6": {
            "type": "equirectangular",
            "panorama": "img/6_crossroad.webp",
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
        },
            "pano7": {
            "type": "equirectangular",
            "panorama": "img/7_house.webp",
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
        },
            "pano8": {
            "type": "equirectangular",
            "panorama": "img/8_metic.webp",
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
        },
            "pano9": {
            "type": "equirectangular",
            "panorama": "img/9_road_pg.webp",
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
        },
            "pano10": {
            "type": "equirectangular",
            "panorama": "img/10_bf.webp",
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
        },
            "pano11": {
            "type": "equirectangular",
            "panorama": "img/11_house.webp",
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
        },
            "pano12": {
            "type": "equirectangular",
            "panorama": "img/12_house_roadd.webp",
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
        },
            "pano13": {
            "type": "equirectangular",
            "panorama": "img/13_glass_room.webp",
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
        },
            "pano14": {
            "type": "equirectangular",
            "panorama": "img/14_glass.webp",
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
        },
            "pano15": {
            "type": "equirectangular",
            "panorama": "img/15_gardeen.webp",
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
        },
            "pano16": {
            "type": "equirectangular",
            "panorama": "img/16_garden_zentr.webp",
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
        },
            "pano17": {
            "type": "equirectangular",
            "panorama": "img/17_vhid_dog_house.webp",
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
        },
            "pano18": {
            "type": "equirectangular",
            "panorama": "img/18_garden.webp",
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
        },
            "pano19": {
            "type": "equirectangular",
            "panorama": "img/19_dog_vhid.webp",
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
        },
            "pano20": {
            "type": "equirectangular",
            "panorama": "img/20_dog.webp",
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
        },
            "pano21": {
            "type": "equirectangular",
            "panorama": "img/21_crossroad.webp",
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
        },
            "pano22": {
            "type": "equirectangular",
            "panorama": "img/22_grass.webp",
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
        },
            "pano22_2": {
            "type": "equirectangular",
            "panorama": "img/22_2_grass.webp",
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
        },
             "pano23": {
            "type": "equirectangular",
            "panorama": "img/23_grasssss.webp",
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
        },
            "pano24": {
            "type": "equirectangular",
            "panorama": "img/24_crossroad.webp",
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
        },
            "pano25": {
            "type": "equirectangular",
            "panorama": "img/25_vhidpg.webp",
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
        },
            "pano26": {
            "type": "equirectangular",
            "panorama": "img/26_pg_sand.webp",
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
        },
            "pano27": {
            "type": "equirectangular",
            "panorama": "img/27_pgsand.webp",
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
        },
            "pano28": {
            "type": "equirectangular",
            "panorama": "img/28_grass.webp",
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
        },
             "pano29": {
            "type": "equirectangular",
            "panorama": "img/29_crossroadpark.webp",
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
        },
             "pano30": {
            "type": "equirectangular",
            "panorama": "img/30_park.webp",
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
        },
            "pano31": {
            "type": "equirectangular",
            "panorama": "img/31_stezh.webp",
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
        },
             "pano32": {
            "type": "equirectangular",
            "panorama": "img/32_playgr.webp",
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
        },
             "pano33": {
            "type": "equirectangular",
            "panorama": "img/33_ros.webp",
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
        },
             "pano34": {
            "type": "equirectangular",
            "panorama": "img/34_rose.webp",
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
        },
             "pano35": {
            "type": "equirectangular",
            "panorama": "img/35_rossee.webp",
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
        },
            "pano36": {
            "type": "equirectangular",
            "panorama": "img/36_road_to_od.webp",
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
        },
            "pano37": {
            "type": "equirectangular",
            "panorama": "img/37_animal.webp",
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
        },
            "pano38": {
            "type": "equirectangular",
            "panorama": "img/38_odes.webp",
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
        },
            "pano39": {
            "type": "equirectangular",
            "panorama": "img/39_parkooo.webp",
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
        },
            "pano37": {
            "type": "equirectangular",
            "panorama": "img/37_animal.webp",
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
        },

            "pano37": {
            "type": "equirectangular",
            "panorama": "img/37_animal.webp",
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
        },
    };

    if (viewer) {
        viewer.loadScene(panoId);
    } else {
        viewer = pannellum.viewer('panorama', {
            default: {
                firstScene: panoId,
                sceneFadeDuration: 1000,
                autoLoad: true,
                hotSpotDebug: true   
            },
            scenes: panoramas
        });
    }
}

document.getElementById('back-to-map').onclick = () => {
    document.getElementById('map-container').style.display = 'block';
    document.getElementById('panorama-container').style.display = 'none';
};
