var APP_DATA = {
  "scenes": [
    {
      "id": "0-straat",
      "name": "Straat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.05528757110553428,
        "pitch": 0.13609865821878842,
        "fov": 1.6513525482426834
      },
      "linkHotspots": [
        {
          "yaw": -0.40967167528814485,
          "pitch": 0.043610117728787756,
          "rotation": 0,
          "target": "1-voor-huis"
        },
        {
          "yaw": -0.6561989642971096,
          "pitch": -0.009280139885667893,
          "rotation": 0,
          "target": "15-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-voor-huis",
      "name": "Voor huis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.39676109276105187,
        "pitch": -0.02380327997467191,
        "fov": 1.6513525482426834
      },
      "linkHotspots": [
        {
          "yaw": -0.39676109276105187,
          "pitch": -0.02380327997467191,
          "rotation": 0,
          "target": "2-voordeur"
        },
        {
          "yaw": 2.7066680933601734,
          "pitch": 0.062266303936109324,
          "rotation": 0,
          "target": "0-straat"
        },
        {
          "yaw": -0.4482565434621897,
          "pitch": -0.3394579164655358,
          "rotation": 0,
          "target": "7-balkon"
        },
        {
          "yaw": -2.090277109423967,
          "pitch": -0.03279470296641662,
          "rotation": 0,
          "target": "15-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-voordeur",
      "name": "Voordeur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10508027341633053,
          "pitch": 0.15225830522377137,
          "rotation": 0,
          "target": "13-woonkamer-voordeur"
        },
        {
          "yaw": 2.739497774055038,
          "pitch": 0.10042277234495067,
          "rotation": 0,
          "target": "1-voor-huis"
        },
        {
          "yaw": -3.0976954663259715,
          "pitch": 0.021599623845235172,
          "rotation": 0,
          "target": "15-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-douche",
      "name": "Douche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.769012469404693,
        "pitch": 0.15066315254907892,
        "fov": 1.6513525482426834
      },
      "linkHotspots": [
        {
          "yaw": -2.2895632426411545,
          "pitch": 0.13436358119568936,
          "rotation": 0,
          "target": "13-woonkamer-voordeur"
        },
        {
          "yaw": 1.4372166539608973,
          "pitch": 0.10248002228146724,
          "rotation": 0,
          "target": "4-sauna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sauna",
      "name": "Sauna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33385910916358874,
          "pitch": 0.3747906047248488,
          "rotation": 0,
          "target": "3-douche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-zolder",
      "name": "Zolder",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.367628583370692,
        "pitch": 0.4400630137557542,
        "fov": 1.6513525482426834
      },
      "linkHotspots": [
        {
          "yaw": -2.217759846124876,
          "pitch": 0.642535673156571,
          "rotation": 0,
          "target": "9-trap"
        },
        {
          "yaw": 2.5263715648699954,
          "pitch": 0.1697818732718801,
          "rotation": 0,
          "target": "8-zolder-kamer-achter"
        },
        {
          "yaw": -0.8514716080018818,
          "pitch": 0.09038762727286809,
          "rotation": 0,
          "target": "6-zolder-kamer-voor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-zolder-kamer-voor",
      "name": "Zolder kamer voor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10701150832186102,
          "pitch": 0.09679424469097064,
          "rotation": 0,
          "target": "5-zolder"
        },
        {
          "yaw": 2.9490210347042627,
          "pitch": 0.2390305242802242,
          "rotation": 0,
          "target": "7-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-balkon",
      "name": "Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.100055229990174,
        "pitch": 0.1726411683445903,
        "fov": 1.6513525482426834
      },
      "linkHotspots": [
        {
          "yaw": 0.04683821819005196,
          "pitch": 0.13923542883468798,
          "rotation": 0,
          "target": "6-zolder-kamer-voor"
        },
        {
          "yaw": 2.873540331179214,
          "pitch": 0.49739450635761884,
          "rotation": 0,
          "target": "1-voor-huis"
        },
        {
          "yaw": -2.967969856189921,
          "pitch": 0.4216825581979755,
          "rotation": 0,
          "target": "15-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-zolder-kamer-achter",
      "name": "Zolder kamer achter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8858268192987655,
          "pitch": 0.20389734152215233,
          "rotation": 0,
          "target": "5-zolder"
        },
        {
          "yaw": 0.5864927484063642,
          "pitch": 0.6880187615548969,
          "rotation": 0,
          "target": "14-tuin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-trap",
      "name": "Trap",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0734549579962476,
          "pitch": 0.8722399488186987,
          "rotation": 0,
          "target": "12-woonkamer"
        },
        {
          "yaw": -1.504432156012932,
          "pitch": -0.2741872474559308,
          "rotation": 0,
          "target": "5-zolder"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kamer-achter",
      "name": "Kamer achter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0172278975734166,
          "pitch": 0.24480456828918662,
          "rotation": 0,
          "target": "11-keuken"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-keuken",
      "name": "Keuken",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1057728187474307,
          "pitch": 0.1513817085711704,
          "rotation": 0,
          "target": "12-woonkamer"
        },
        {
          "yaw": 0.4377086756509563,
          "pitch": 0.12397685353390386,
          "rotation": 0,
          "target": "14-tuin"
        },
        {
          "yaw": -1.447041163199419,
          "pitch": 0.2036007058423337,
          "rotation": 0,
          "target": "10-kamer-achter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-woonkamer",
      "name": "Woonkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.041458480480551785,
          "pitch": 0.08681670760698168,
          "rotation": 0,
          "target": "11-keuken"
        },
        {
          "yaw": 1.3365707446329687,
          "pitch": -0.2140888886146577,
          "rotation": 0,
          "target": "9-trap"
        },
        {
          "yaw": -2.84371240014989,
          "pitch": 0.1624056175023565,
          "rotation": 0,
          "target": "13-woonkamer-voordeur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-woonkamer-voordeur",
      "name": "Woonkamer voordeur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23787863732865233,
          "pitch": 0.025729048649957065,
          "rotation": 0,
          "target": "12-woonkamer"
        },
        {
          "yaw": 0.6953447916828104,
          "pitch": -0.1092547016162122,
          "rotation": 0,
          "target": "9-trap"
        },
        {
          "yaw": -1.2948157970570318,
          "pitch": 0.11236488667536193,
          "rotation": 0,
          "target": "3-douche"
        },
        {
          "yaw": -2.9274283688840477,
          "pitch": 0.1981683701926915,
          "rotation": 0,
          "target": "2-voordeur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-tuin",
      "name": "Tuin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.092190996119248,
          "pitch": -0.10885704541891172,
          "rotation": 0,
          "target": "11-keuken"
        },
        {
          "yaw": -2.5778419664467176,
          "pitch": -0.8644545019196457,
          "rotation": 0,
          "target": "8-zolder-kamer-achter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-night",
      "name": "Night",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4928932343874628,
          "pitch": 0.10797904382303614,
          "rotation": 0,
          "target": "2-voordeur"
        },
        {
          "yaw": 0.8814214219458414,
          "pitch": 0.13807867654277572,
          "rotation": 0,
          "target": "1-voor-huis"
        },
        {
          "yaw": 1.8595188564343523,
          "pitch": 0.05952974499155417,
          "rotation": 0,
          "target": "0-straat"
        },
        {
          "yaw": -0.5180127216409183,
          "pitch": -0.303694766743126,
          "rotation": 0,
          "target": "7-balkon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2020-02 Villa Bears",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
