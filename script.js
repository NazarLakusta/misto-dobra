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
        
            "pano2_1": {
            "type": "equirectangular",
            "panorama": "img/2_1_house.webp",
            "yaw": -49,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -7.100723731885423,
                    "yaw": -70.30639345325221,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano2",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -5.249728090165255,
                    "yaw": 109.99049165588946,
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
                    "pitch": -6.0748088800424025,
                    "yaw": 45.80188012583403,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano2_1",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -2.2113303304579612,
                    "yaw": -54.909197780180044,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano4",
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
            "yaw": 50,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -1.547846966895425,
                    "yaw": -134.73994639594426,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano3",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -0.4681777288784731,
                    "yaw": 142.82424446329037,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano5",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -2.22428486736639,
                    "yaw": 55.74952276903957,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano6",
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
                    "pitch": -1.5385918821882558,
                    "yaw": 0.47821836640500237,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano4",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -2.4955327309144293,
                    "yaw": 27.146008610664065,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano6",
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
            "yaw": -130,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -8.127745969411617,
                    "yaw": 85.87113198756975,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano7",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -8.153204784619652,
                    "yaw": 17.22299166283227,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano4",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                    {
                    "pitch": -5.061072726229469,
                    "yaw": -99.89940113457402,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano9",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },    

                    {
                    "pitch": -4.39816840059399,
                    "yaw": -151.46765777367608,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano8",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
            ]
        },

        // треба зробити
            "pano7": {
            "type": "equirectangular",
            "panorama": "img/7_house.webp",
            "yaw": 40,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": 0.7951091787006761,
                    "yaw": -75.23268779348082,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano38",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                            {
                    "pitch": -0.1919433600179708,
                    "yaw": -8.692695377511374,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano8",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -5.524075512849602,
                    "yaw": 40.331386667373295,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano6",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },    
            ]
        },

            "pano8": {
            "type": "equirectangular",
            "panorama": "img/8_metic.webp",
            "yaw": -120,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -3.9204484081812567,
                    "yaw": -38.35636745650207,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano6",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                 {
                    "pitch": -1.1307833459453327,
                    "yaw": 148.50986410059954,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano21",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -1.46806580036544,
                    "yaw":  -15.530289465364929,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano7",
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
            "yaw": -120,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -1.3688743580229805,
                    "yaw": 105.86208223940935,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano9",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -7.3029534053072584,
                    "yaw": -146.68370633250652,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano11",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },                
            ]
        },
            "pano11": {
            "type": "equirectangular",
            "panorama": "img/11_house.webp",
            "yaw": -150,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -11.000911944261157,
                    "yaw": 31.512995524845678,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano10",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
{
                    "pitch": -7.3096633887475555,
                    "yaw": -71.1681839004649,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano12",
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
                    "pitch": -7.4394357850098105,
                    "yaw":  7.466906371972253,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano11",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -2.097788388553797,
                    "yaw":  -155.0751522285821,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano13",
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
            "yaw": -44,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -6.808848395387511,
                    "yaw": -129.4548447498241,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano12",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                            {
                    "pitch": -8.99309481109795,
                    "yaw": -44.14741369579043,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano14",
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
            "yaw": -90,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -1.8665077988695307,
                    "yaw": 104.15801916856856,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano13",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                            {
                    "pitch": -11.018542975648016,
                    "yaw": -101.96595935539398,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano15",
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
            "yaw": 25,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -11.764893167152662,
                    "yaw": -160.91061031660513,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano14",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
            
                            {
                    "pitch": 1.8678052425992269,
                    "yaw": 44.5114165743367,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano16",
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
            "yaw": 150,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": 2.7336246596185143,
                    "yaw": -81.42841400681351,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano15",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -3.0317349981832873,
                    "yaw": 136.99202674893772,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano17",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

             {
                  
                    "pitch": -3.0317349981832873,
                    "yaw":  27.34423089259561,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano18",
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
                    "pitch":  -9.209659346012383,
                    "yaw": -22.7930463158331,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano16",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -3.291476176313885,
                    "yaw": 38.6164071211482,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano18",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                                {
                    "pitch": -6.078176910455169,
                    "yaw": -157.80536600916915,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano20",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

            ]
        },
            "pano18": {
            "type": "equirectangular",
            "panorama": "img/18_garden.webp",
            "yaw": -135,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": 1.1120659250590952,
                    "yaw": -134.92138053898475,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano16",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": 4.0720517980455435,
                    "yaw": 147.68030582596262,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano16",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": 0.021838371971201673,
                    "yaw":  21.724518194187056,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano21",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },


            ]
        },
            "pano19": {
            "type": "equirectangular",
            "panorama": "img/19_dog_vhid.webp",
            "yaw": 90,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -2.505837892541283,
                    "yaw": 80.005985879604,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano20",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -0.925933455414764,
                    "yaw": -152.27318890659913,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano18",
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
            "yaw": 170,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -5.969814805891542,
                    "yaw": -100.05458678265524,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano17",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                            {
                    "pitch":  -4.824830399879229,
                    "yaw": 22.621691221493936,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano19",
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
                    "pitch": -1.8986186699600744,
                    "yaw": 25.850434726867398,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano8",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
               {
                    "pitch": -1.2378439078430752,
                    "yaw": 117.95105879079529,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano24",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -2.971128002270055,
                    "yaw": -139.44532468506642,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -2.631349109473619,
                    "yaw": -69.74168124220728,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano18",
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
                    "pitch": -2.8917199157537903,
                    "yaw": 137.97205363517244,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano21",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -2.166237846708622,
                    "yaw": 81.9149453736164,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano18",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -0.17246973695354414,
                    "yaw": -178.63040094152757,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano24",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                 {
                    "pitch": -1.4998918821993203,
                    "yaw": -56.4896965072183,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22_2",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },                
            ]
        },
            "pano22_2": {
            "type": "equirectangular",
            "panorama": "img/22_2_grass.webp",
            "yaw": -49,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -3.2006953436601933,
                    "yaw": 146.42444032737072,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -4.645064467732217,
                    "yaw": -17.782845112248662,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano23",
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
                    "pitch": -5.670424659665457,
                    "yaw": -42.70156233346958,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22_2",
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
                    "pitch": -2.4289969548750525,
                    "yaw": 28.528053031815638,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano21",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -1.1109224501556247,
                    "yaw": -10.163606016568188,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -1.1109224501556247,
                    "yaw": -10.163606016568188,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano22",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -3.701501175294642,
                    "yaw": -153.30721339645837,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano25",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -2.448277223263708,
                    "yaw": -114.04961512227699,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano28",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },                
            ]
        },
            "pano25": {
            "type": "equirectangular",
            "panorama": "img/25_vhidpg.webp",
            "yaw": -49,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -7.3795410532973,
                    "yaw": -87.4282482952125,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano26",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -1.6757051630044029,
                    "yaw": 115.14716403472545,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano28",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                     {
                    "pitch": -0.17224636892049736,
                    "yaw": -159.67114298165285,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano24",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -2.5998862744486644,
                    "yaw": 26.46056313381701,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -2.936506213943133,
                    "yaw": -23.625566890357575,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
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
            "yaw": -150,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -7.36891543648428551,
                    "yaw": 40.57150718247692,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano25",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                            {
                    "pitch": -1.0015050436200568,
                    "yaw": -160.9822395172459,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano27",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                            {
                    "pitch": 0.5698636916332782,
                    "yaw": 106.15268413232,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano24",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                            {
                    "pitch": -7.36891543648428551,
                    "yaw": 40.57150718247692,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano25",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                        {
                    "pitch": -1.0842965315341986,
                    "yaw": -29.993337674518543,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
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
                    "pitch": -2.837692698230535,
                    "yaw": -149.90134176633362,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano26",
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
                    "pitch": -2.1959485751592673,
                    "yaw": 27.650709907640618,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano24",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -4.72541089016207,
                    "yaw": 73.01157916334914,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano25",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -1.401752410351765,
                    "yaw": 97.874595802536638,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                     {
                    "pitch": -4.130256961981436,
                    "yaw": 121.42367001493079,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
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
                    "pitch": -4.597705888182943,
                    "yaw": -75.44440452931919,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano28",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -0.34675621010366203,
                    "yaw": -34.75435461675434,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano25",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": 2.2711260198699663,
                    "yaw": -11.248191705058417,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano26",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch":0.4630989831878415,
                    "yaw": 32.98560576750396,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -5.091709249452398,
                    "yaw": 104.34516435157515,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano30",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -2.87088066543375,
                    "yaw": 65.0509091143099,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano31",
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
            "yaw": 220,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -4.072600035329163,
                    "yaw": -34.77276439536763,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -8.607544765451157,
                    "yaw": 18.54016378902059,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano31",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": 0.07154168234096005,
                    "yaw": 17.40178619672759,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -0.24852424153462008,
                    "yaw": 169.82913704874042,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano39",
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
                    "pitch": -7.380586434230827,
                    "yaw": -96.73199913739666,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano30",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -4.623960937941704,
                    "yaw": 108.70588389651036,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano37",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -10.062353244145154,
                    "yaw": 82.31612722540206,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                             {
                    "pitch": -6.805181323803079,
                    "yaw": 160.6859678975656,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano33",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                }, 
                
               {
                    "pitch": -5.699967504285945,
                    "yaw": -25.065840006299855,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                }, 
            ]
        },
             "pano32": {
            "type": "equirectangular",
            "panorama": "img/32_playgr.webp",
            "yaw": 50,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -13.024490388125296,
                    "yaw": 67.69807964885945,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano31",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -4.736410496596792,
                    "yaw": 11.190109332734636,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano33",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -6.824772331396386,
                    "yaw": -66.47349746715469,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano37",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -6.1701487214622075,
                    "yaw": -109.78146461403823,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano36",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -4.4699435369118135,
                    "yaw": 70.55516299851581,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano30",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -6.379257531727267,
                    "yaw": 116.5448800568142,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano29",
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
            "yaw": -120,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -4.112192753242506,
                    "yaw": 42.26988858871914,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -5.991815840721098,
                    "yaw": -4.024393632947868,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano31",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -3.113516902528889,
                    "yaw": -35.541115077022006,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano30",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -2.1475844009442135,
                    "yaw": 84.11833487944087,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano37",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -6.198509840403699,
                    "yaw":-134.42957437596104,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano34",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },                
            ]
        },
             "pano34": {
            "type": "equirectangular",
            "panorama": "img/34_rose.webp",
            "yaw": 0,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -8.919105155984962,
                    "yaw": 31.56936662239954,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano33",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                            {
                    "pitch":-8.883434866747157,
                    "yaw": -154.93542064009958,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano35",
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
            "yaw": 180,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -4.933309768920288,
                    "yaw": 23.38666507279524,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano34",
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
                    "pitch": -2.624513824771358,
                    "yaw": -62.86736354818581,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -5.007639275549234,
                    "yaw": -100.95925240229782,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano37",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                }, 
                    {
                    "pitch": -2.243636893781468,
                    "yaw": 134.75667067755893,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano38",
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
                    "pitch": -3.817688700440921,
                    "yaw": 76.55573347815522,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano33",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -7.4780751483079655,
                    "yaw": 130.17538564715198,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano32",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": -6.078152305600353,
                    "yaw": -117.19758320769004,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano36",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },

                                {
                    "pitch": -6.078152305600353,
                    "yaw": -117.19758320769004,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano36",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                                {
                    "pitch": -3.5112030576330464,
                    "yaw":  113.68389325675328,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano31",
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
            "yaw": 180,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -7.0123321720133145,
                    "yaw": 12.077172373196248,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano36",
                    "createTooltipFunc": function(hotSpotDiv) {
            hotSpotDiv.style.width = "40px";
            hotSpotDiv.style.height = "40px";
            hotSpotDiv.style.background = "url('img/icon.png') no-repeat center";
            hotSpotDiv.style.backgroundSize = "contain";
        }
                },
                {
                    "pitch": 0.038562933017511354,
                    "yaw": -154.5041295525073,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano7",
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
            "yaw": -120,
            "pitch": 0,
            "hotSpots": [
                {
                    "pitch": -2.159502924531527,
                    "yaw": -68.25427290425496,
                    "type": "scene",
                    "text": "Назад ←",
                    "sceneId": "pano30",
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
