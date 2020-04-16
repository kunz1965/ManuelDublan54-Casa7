var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso-calle",
      "name": "Acceso-Calle",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10308172240263147,
          "pitch": 0.14382112550197945,
          "rotation": 0,
          "target": "1-acceso-condominio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.42141933267720333,
          "pitch": -0.21346228376157228,
          "title": "Manuel Dublan #54",
          "text": "Casa en renta"
        }
      ]
    },
    {
      "id": "1-acceso-condominio",
      "name": "Acceso-Condominio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.11518996781193636,
        "pitch": 0.248670705599352,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2780650435497716,
          "pitch": 0.6403147491024335,
          "rotation": 0,
          "target": "0-acceso-calle"
        },
        {
          "yaw": -0.21247281052332667,
          "pitch": 0.19798746873985706,
          "rotation": 0,
          "target": "2-acceso-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-acceso-casa7",
      "name": "Acceso-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4669147034202812,
          "pitch": 0.2615968601801022,
          "rotation": 0,
          "target": "3-recibidor-casa7"
        },
        {
          "yaw": 2.9484154532920197,
          "pitch": 0.13782022378881997,
          "rotation": 0,
          "target": "1-acceso-condominio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7851279103067768,
          "pitch": -0.2798982436475619,
          "title": "Casa 7: 130 m2",
          "text": "Cuenta con un lugar de estacionamiento"
        }
      ]
    },
    {
      "id": "3-recibidor-casa7",
      "name": "Recibidor-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.03064884328278339,
        "pitch": 0.39478631337975756,
        "fov": 1.5464235424185249
      },
      "linkHotspots": [
        {
          "yaw": 1.0137204605188028,
          "pitch": 0.7204932531152579,
          "rotation": 0.7853981633974483,
          "target": "4-cocina-casa7"
        },
        {
          "yaw": -3.0038379926109684,
          "pitch": 0.5886621585776748,
          "rotation": 0,
          "target": "2-acceso-casa7"
        },
        {
          "yaw": 2.5107436081505234,
          "pitch": 0.6953550116658445,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        },
        {
          "yaw": -0.21964476620279427,
          "pitch": 0.5723201620306888,
          "rotation": 0,
          "target": "5-estancia-casa7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8376476233846333,
          "pitch": 0.004590860615694581,
          "title": "Planta Baja (PB):",
          "text": "Recibidor, estancia, cocina y un medio baño"
        },
        {
          "yaw": 1.7844693359180601,
          "pitch": -0.34030861003473944,
          "title": "Baño PB",
          "text": "Espacio para lavadora"
        }
      ]
    },
    {
      "id": "4-cocina-casa7",
      "name": "Cocina-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.888041890042456,
        "pitch": 0.43949038921881645,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.589340326503713,
          "pitch": 0.42628173586347984,
          "rotation": 0,
          "target": "3-recibidor-casa7"
        },
        {
          "yaw": -0.9051282903651412,
          "pitch": 0.34700860018635815,
          "rotation": 0,
          "target": "5-estancia-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-estancia-casa7",
      "name": "Estancia-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.19446945475428556,
        "pitch": 0.10908426278787076,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6983096758854463,
          "pitch": 0.42862798675882985,
          "rotation": 0,
          "target": "3-recibidor-casa7"
        },
        {
          "yaw": 0.17065856455231554,
          "pitch": 0.36744396226572285,
          "rotation": 7.0685834705770345,
          "target": "4-cocina-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-distribuidorpa-casa7",
      "name": "DistribuidorPA-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.266662991655199,
        "pitch": 0.1263556914091346,
        "fov": 1.572047505268162
      },
      "linkHotspots": [
        {
          "yaw": -0.10444944551248625,
          "pitch": 0.5518047707164175,
          "rotation": 0,
          "target": "8-recmara1-casa7"
        },
        {
          "yaw": 0.6501851300023489,
          "pitch": 0.6414106596521538,
          "rotation": 0,
          "target": "9-recmara2-casa7"
        },
        {
          "yaw": 1.2313661587644198,
          "pitch": 0.5336898813145456,
          "rotation": 0.7853981633974483,
          "target": "10-recmara3-casa7"
        },
        {
          "yaw": -1.8024889345744537,
          "pitch": 0.6412665375107309,
          "rotation": 0,
          "target": "7-baopa-casa7"
        },
        {
          "yaw": 2.342507181283926,
          "pitch": 0.7004816301754566,
          "rotation": 0,
          "target": "3-recibidor-casa7"
        },
        {
          "yaw": 2.985476110826532,
          "pitch": 0.7234330581962283,
          "rotation": 0,
          "target": "11-cuartoservicio-casa7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6260950668528587,
          "pitch": -0.19711363118147673,
          "title": "Planta Alta (PA):",
          "text": "3 Recámaras y un baño completo"
        }
      ]
    },
    {
      "id": "7-baopa-casa7",
      "name": "BañoPA-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.048669243791630734,
        "pitch": 1.126299434384535,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9822416683802118,
          "pitch": 0.5328586453027349,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-recmara1-casa7",
      "name": "Recámara1-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.2908132765350437,
        "pitch": 0.36999625414854265,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7892890432012276,
          "pitch": 0.7334416864496713,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara2-casa7",
      "name": "Recámara2-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.836884937010634,
        "pitch": 0.41257492649914695,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3073556795359043,
          "pitch": 0.5508515895654149,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-recmara3-casa7",
      "name": "Recámara3-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.979917628630794,
        "pitch": 0.4877698139522266,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.272382299769358,
          "pitch": 0.6321036159587159,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuartoservicio-casa7",
      "name": "CuartoServicio-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.4218142551475328,
        "pitch": 0.4547358678931879,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01308942834161897,
          "pitch": 0.6603755421215318,
          "rotation": 0,
          "target": "12-baoservicio-casa7"
        },
        {
          "yaw": -2.2563282513166456,
          "pitch": 0.6843203746885251,
          "rotation": 0,
          "target": "6-distribuidorpa-casa7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-baoservicio-casa7",
      "name": "BañoServicio-Casa7",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.06815165068905316,
        "pitch": 0.9765042756481783,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0421201053804943,
          "pitch": 0.6164782013377703,
          "rotation": 0,
          "target": "11-cuartoservicio-casa7"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ManuelDublan54-Casa7",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
