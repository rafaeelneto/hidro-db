import * as requests from './../requests';
import {getKeyValues} from './Data';

export default class TableData {
    
    constructor(){
    }

    async loadAll(){
        //const tables = await requests.makeSimpleGetRequest(requests.dashboardBase, `/all` );
        const tables = {
            "poços": {
              "type": "FeatureCollection",
              "features": [
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7371666666667,
                      -2.44033606679063
                    ]
                  },
                  "properties": {
                    "poço_id": 186,
                    "nome": "P3 - Bacabal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.441861,
                      -1.34218299999998
                    ]
                  },
                  "properties": {
                    "poço_id": 23,
                    "nome": "P7 - IPASEP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.882333333,
                      -1.72172222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 132,
                    "nome": "P1 - RPM 01",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7322388888889,
                      -2.44076196903299
                    ]
                  },
                  "properties": {
                    "poço_id": 173,
                    "nome": "P3 - Trevo Irurá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092333333333,
                      -1.90033333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 236,
                    "nome": "P8 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3881916666666,
                      -1.3604
                    ]
                  },
                  "properties": {
                    "poço_id": 264,
                    "nome": "P1 - Maguariaçu"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4816111111111,
                      -1.40251388888889
                    ]
                  },
                  "properties": {
                    "poço_id": 1,
                    "nome": "P4 - CDP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4811194444444,
                      -1.404725
                    ]
                  },
                  "properties": {
                    "poço_id": 2,
                    "nome": "P6 - CDP",
                    "situaçao": "Inativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4803805555555,
                      -1.40250555555556
                    ]
                  },
                  "properties": {
                    "poço_id": 3,
                    "nome": "P1 - CDP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4798916666667,
                      -1.40244586669708
                    ]
                  },
                  "properties": {
                    "poço_id": 4,
                    "nome": "P5 - CDP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.437178,
                      -1.37734099999994
                    ]
                  },
                  "properties": {
                    "poço_id": 5,
                    "nome": "P2 - Panorama XXI",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.431485,
                      -1.32241999999997
                    ]
                  },
                  "properties": {
                    "poço_id": 6,
                    "nome": "P1 - Tenoné",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4568659999999,
                      -1.33717799999994
                    ]
                  },
                  "properties": {
                    "poço_id": 7,
                    "nome": "P1 - Canarinho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4480579999999,
                      -1.35792399999997
                    ]
                  },
                  "properties": {
                    "poço_id": 8,
                    "nome": "P5 - Benjamin Sodré",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0553888888889,
                      -1.99383333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 293,
                    "nome": "P2 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": null,
                  "properties": {
                    "poço_id": 294
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.438525,
                      -1.35290599999996
                    ]
                  },
                  "properties": {
                    "poço_id": 9,
                    "nome": "P1 - Ariri Bolonha",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.464798,
                      -1.35018399999996
                    ]
                  },
                  "properties": {
                    "poço_id": 10,
                    "nome": "P4 - Cordeiro de Farias",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4295519999999,
                      -1.36976599999997
                    ]
                  },
                  "properties": {
                    "poço_id": 11,
                    "nome": "P2 - Coqueiro",
                    "situaçao": "Ativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.430168,
                      -1.37058699999994
                    ]
                  },
                  "properties": {
                    "poço_id": 12,
                    "nome": "P1 - Coqueiro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.442472,
                      -1.37554199999994
                    ]
                  },
                  "properties": {
                    "poço_id": 13,
                    "nome": "P2 - Benguí",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.442202,
                      -1.37640199999993
                    ]
                  },
                  "properties": {
                    "poço_id": 14,
                    "nome": "P5 - Benguí",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.443678,
                      -1.37612999999993
                    ]
                  },
                  "properties": {
                    "poço_id": 15,
                    "nome": "P3 - Benguí",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.480083333,
                      -1.37652777799997
                    ]
                  },
                  "properties": {
                    "poço_id": 16,
                    "nome": "P2 - Pratinha",
                    "situaçao": "Inativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4565259999999,
                      -1.38125199999996
                    ]
                  },
                  "properties": {
                    "poço_id": 17,
                    "nome": "P2 - Catalina",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.447466,
                      -1.35828299999997
                    ]
                  },
                  "properties": {
                    "poço_id": 18,
                    "nome": "P7 - Benjamin Sodré",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4473439999999,
                      -1.35875499999997
                    ]
                  },
                  "properties": {
                    "poço_id": 19,
                    "nome": "P8 - Benjamin Sodré",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4643859999999,
                      -1.34977799999996
                    ]
                  },
                  "properties": {
                    "poço_id": 20,
                    "nome": "P6 - Cordeiro de Farias",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4644519999999,
                      -1.35025199999995
                    ]
                  },
                  "properties": {
                    "poço_id": 21,
                    "nome": "P7 - Cordeiro de Farias",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.442614453,
                      -1.34172222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 22,
                    "nome": "P8 - IPASEP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.441301,
                      -1.34162999999995
                    ]
                  },
                  "properties": {
                    "poço_id": 24,
                    "nome": "P6 - IPASEP",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.38362,
                      -1.33821799999993
                    ]
                  },
                  "properties": {
                    "poço_id": 26,
                    "nome": "P3 - PAAR",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.421685,
                      -1.38952799999993
                    ]
                  },
                  "properties": {
                    "poço_id": 27,
                    "nome": "P1 - Guanabara II",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4254989999999,
                      -1.38391999999993
                    ]
                  },
                  "properties": {
                    "poço_id": 28,
                    "nome": "P1 - Jaderlândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.41578,
                      -1.34560399999998
                    ]
                  },
                  "properties": {
                    "poço_id": 29,
                    "nome": "P1 - Sabiá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.415937,
                      -1.34494999999993
                    ]
                  },
                  "properties": {
                    "poço_id": 30,
                    "nome": "P2 - Sabiá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3997469999999,
                      -1.32758599999994
                    ]
                  },
                  "properties": {
                    "poço_id": 31,
                    "nome": "P1 - Uirapurú",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.315354014,
                      -1.38368456899997
                    ]
                  },
                  "properties": {
                    "poço_id": 32,
                    "nome": "P1 - Beija  Flor",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4099649999999,
                      -1.36954099999997
                    ]
                  },
                  "properties": {
                    "poço_id": 33,
                    "nome": "P13 - Cidade Nova II",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9306916689999,
                      -1.29532777799994
                    ]
                  },
                  "properties": {
                    "poço_id": 116,
                    "nome": "P3 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3739229999999,
                      -1.35174099999995
                    ]
                  },
                  "properties": {
                    "poço_id": 34,
                    "nome": "P2 - Ananindeua Centro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.373083,
                      -1.35244399999993
                    ]
                  },
                  "properties": {
                    "poço_id": 35,
                    "nome": "P1 - Ananindeua Centro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3941579999999,
                      -1.41118099999994
                    ]
                  },
                  "properties": {
                    "poço_id": 36,
                    "nome": "P1 - Verdejante",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.409078,
                      -1.36939499999994
                    ]
                  },
                  "properties": {
                    "poço_id": 38,
                    "nome": "P14 - Cidade Nova II",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.384607,
                      -1.33777599999996
                    ]
                  },
                  "properties": {
                    "poço_id": 39,
                    "nome": "P4 - PAAR",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.332444444,
                      -1.37733333299997
                    ]
                  },
                  "properties": {
                    "poço_id": 40,
                    "nome": "P2 - Mariturba COHAB",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3833873469999,
                      -1.33728333299996
                    ]
                  },
                  "properties": {
                    "poço_id": 41,
                    "nome": "P5 - PAAR",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4556078109999,
                      -1.38121272699993
                    ]
                  },
                  "properties": {
                    "poço_id": 45,
                    "nome": "P1 - Catalina",
                    "situaçao": "Inativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4318888889999,
                      -1.32197499999995
                    ]
                  },
                  "properties": {
                    "poço_id": 46,
                    "nome": "P2 - Tenoné",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.451052778,
                      -1.25516111099995
                    ]
                  },
                  "properties": {
                    "poço_id": 47,
                    "nome": "P1 - Água Boa",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.454370856,
                      -1.30264232599995
                    ]
                  },
                  "properties": {
                    "poço_id": 48,
                    "nome": "P1 - Água Negras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4748089999999,
                      -1.27994299999995
                    ]
                  },
                  "properties": {
                    "poço_id": 49,
                    "nome": "P1 - Brasília",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.466291,
                      -1.26213799999994
                    ]
                  },
                  "properties": {
                    "poço_id": 50,
                    "nome": "P1 - São João do Outeiro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.458805556,
                      -1.28941666699995
                    ]
                  },
                  "properties": {
                    "poço_id": 51,
                    "nome": "P1 - Morada de Deus",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4681459999999,
                      -1.29713999999996
                    ]
                  },
                  "properties": {
                    "poço_id": 52,
                    "nome": "P1 - Cohab",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.47725,
                      -1.29952777799997
                    ]
                  },
                  "properties": {
                    "poço_id": 53,
                    "nome": "P1 - São Roque",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4773572719999,
                      -1.30427155799993
                    ]
                  },
                  "properties": {
                    "poço_id": 54,
                    "nome": "P1 - Souza Franco",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4784035719999,
                      -1.30395249299994
                    ]
                  },
                  "properties": {
                    "poço_id": 55,
                    "nome": "P2 - Souza Franco",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4568055559999,
                      -1.31305833299996
                    ]
                  },
                  "properties": {
                    "poço_id": 56,
                    "nome": "P1 - Eduardo Angelim",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.472194444,
                      -1.31280555599994
                    ]
                  },
                  "properties": {
                    "poço_id": 57,
                    "nome": "P1 - Paracurí",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.454416667,
                      -1.32788888899995
                    ]
                  },
                  "properties": {
                    "poço_id": 58,
                    "nome": "P1 - Tocantins",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.560683333,
                      -1.26398333299994
                    ]
                  },
                  "properties": {
                    "poço_id": 59,
                    "nome": "P1 - Cotijuba",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930694444,
                      -1.29542777799998
                    ]
                  },
                  "properties": {
                    "poço_id": 117,
                    "nome": "P5 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4713416669999,
                      -1.33553081099996
                    ]
                  },
                  "properties": {
                    "poço_id": 60,
                    "nome": "P2 - Mata Fome",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.463826,
                      -1.34759999999994
                    ]
                  },
                  "properties": {
                    "poço_id": 61,
                    "nome": "P1 - Raimundo Jinkings",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.470472222,
                      -1.36869444399997
                    ]
                  },
                  "properties": {
                    "poço_id": 62,
                    "nome": "P2 - Pratinha I",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4701346639999,
                      -1.35679419799993
                    ]
                  },
                  "properties": {
                    "poço_id": 63,
                    "nome": "P1 - Pratinha II",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.464444444,
                      -1.32424999999995
                    ]
                  },
                  "properties": {
                    "poço_id": 64,
                    "nome": "P2 - Viver Primavera",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.464625,
                      -1.32444999999996
                    ]
                  },
                  "properties": {
                    "poço_id": 65,
                    "nome": "P1 - Viver Primavera",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3097222219999,
                      -1.36888888899995
                    ]
                  },
                  "properties": {
                    "poço_id": 66,
                    "nome": "P1 - Almir Gabriel",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.309041667,
                      -1.36883611099995
                    ]
                  },
                  "properties": {
                    "poço_id": 67,
                    "nome": "P2 - Almir Gabriel",
                    "situaçao": "Inativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.314147222,
                      -1.38302720399997
                    ]
                  },
                  "properties": {
                    "poço_id": 69,
                    "nome": "P3 - Beija Flor",
                    "situaçao": "Em construção",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.318416667,
                      -1.35963659499993
                    ]
                  },
                  "properties": {
                    "poço_id": 70,
                    "nome": "P1 - Viver Melhor",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.317333333,
                      -1.35944387099994
                    ]
                  },
                  "properties": {
                    "poço_id": 71,
                    "nome": "P2 - Viver Melhor",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.397694444,
                      -1.41077777799995
                    ]
                  },
                  "properties": {
                    "poço_id": 72,
                    "nome": "P2 - Verdejante",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.908230556,
                      -1.30543611099995
                    ]
                  },
                  "properties": {
                    "poço_id": 73,
                    "nome": "P1 -Milagre",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9080222219999,
                      -1.30443611099997
                    ]
                  },
                  "properties": {
                    "poço_id": 74,
                    "nome": "P2 - Milagre",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27791388899993
                    ]
                  },
                  "properties": {
                    "poço_id": 75,
                    "nome": "P1 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27783888899995
                    ]
                  },
                  "properties": {
                    "poço_id": 76,
                    "nome": "P2 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27776944399994
                    ]
                  },
                  "properties": {
                    "poço_id": 77,
                    "nome": "P3 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27769722199997
                    ]
                  },
                  "properties": {
                    "poço_id": 78,
                    "nome": "P4 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27762222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 79,
                    "nome": "P5 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9191638889999,
                      -1.27791388899993
                    ]
                  },
                  "properties": {
                    "poço_id": 80,
                    "nome": "P6 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.931072222,
                      -1.29558333299997
                    ]
                  },
                  "properties": {
                    "poço_id": 118,
                    "nome": "P6 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9191638889999,
                      -1.27783888899995
                    ]
                  },
                  "properties": {
                    "poço_id": 81,
                    "nome": "P7 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9191638889999,
                      -1.27776944399994
                    ]
                  },
                  "properties": {
                    "poço_id": 82,
                    "nome": "P8 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9191638889999,
                      -1.27769722199997
                    ]
                  },
                  "properties": {
                    "poço_id": 83,
                    "nome": "P9 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9191638889999,
                      -1.27762222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 84,
                    "nome": "P10 - Caiçara",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.942790886,
                      -1.31301518499993
                    ]
                  },
                  "properties": {
                    "poço_id": 85,
                    "nome": "P1 - COHAB",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.942400882,
                      -1.31376772899995
                    ]
                  },
                  "properties": {
                    "poço_id": 86,
                    "nome": "P2 - COHAB",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932163889,
                      -1.28984722199993
                    ]
                  },
                  "properties": {
                    "poço_id": 87,
                    "nome": "PF - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932555556,
                      -1.28981388899996
                    ]
                  },
                  "properties": {
                    "poço_id": 88,
                    "nome": "P1 - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932555556,
                      -1.28984166699996
                    ]
                  },
                  "properties": {
                    "poço_id": 89,
                    "nome": "P2 - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932555556,
                      -1.28986944399998
                    ]
                  },
                  "properties": {
                    "poço_id": 90,
                    "nome": "P3 - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932555556,
                      -1.28989722199998
                    ]
                  },
                  "properties": {
                    "poço_id": 91,
                    "nome": "P4 - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.932555556,
                      -1.28992499999993
                    ]
                  },
                  "properties": {
                    "poço_id": 92,
                    "nome": "P5 - Cte. Assis",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9479666669999,
                      -1.29483333299993
                    ]
                  },
                  "properties": {
                    "poço_id": 93,
                    "nome": "P1 - Cristo",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.910488889,
                      -1.29243333299996
                    ]
                  },
                  "properties": {
                    "poço_id": 94,
                    "nome": "P1 - Ianetama",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.8950833329999,
                      -1.30394444399997
                    ]
                  },
                  "properties": {
                    "poço_id": 95,
                    "nome": "P1 - Jardelândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9066583329999,
                      -1.27722222199998
                    ]
                  },
                  "properties": {
                    "poço_id": 96,
                    "nome": "P1 - Imperador",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919297222,
                      -1.27741388899994
                    ]
                  },
                  "properties": {
                    "poço_id": 97,
                    "nome": "P1 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9310638869999,
                      -1.29573055599997
                    ]
                  },
                  "properties": {
                    "poço_id": 119,
                    "nome": "P7 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919313889,
                      -1.27748888899993
                    ]
                  },
                  "properties": {
                    "poço_id": 98,
                    "nome": "P3 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919252778,
                      -1.27746111099998
                    ]
                  },
                  "properties": {
                    "poço_id": 99,
                    "nome": "P2 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919236111,
                      -1.27750277799993
                    ]
                  },
                  "properties": {
                    "poço_id": 100,
                    "nome": "P4 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9193,
                      -1.27754166699998
                    ]
                  },
                  "properties": {
                    "poço_id": 101,
                    "nome": "P5 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919275,
                      -1.27760277799996
                    ]
                  },
                  "properties": {
                    "poço_id": 102,
                    "nome": "P6 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919263889,
                      -1.27764999999994
                    ]
                  },
                  "properties": {
                    "poço_id": 103,
                    "nome": "P7 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919244444,
                      -1.27769999999992
                    ]
                  },
                  "properties": {
                    "poço_id": 104,
                    "nome": "P8 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.919247222,
                      -1.27776111099996
                    ]
                  },
                  "properties": {
                    "poço_id": 105,
                    "nome": "P9 - Caiçara 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.934527778,
                      -1.29116666699997
                    ]
                  },
                  "properties": {
                    "poço_id": 106,
                    "nome": "P1 - Coronel Leal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.894544444,
                      -1.30294999999995
                    ]
                  },
                  "properties": {
                    "poço_id": 107,
                    "nome": "P2 - Jardelândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.8952305559999,
                      -1.30303333299997
                    ]
                  },
                  "properties": {
                    "poço_id": 108,
                    "nome": "P4 - Jardelândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.8944,
                      -1.30387222199994
                    ]
                  },
                  "properties": {
                    "poço_id": 109,
                    "nome": "P3 - Jardelândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.894833333,
                      -1.30347222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 110,
                    "nome": "P5 - Jardelândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930855556,
                      -1.29497777799997
                    ]
                  },
                  "properties": {
                    "poço_id": 111,
                    "nome": "P1 - Usina",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.931872222,
                      -1.29548888899996
                    ]
                  },
                  "properties": {
                    "poço_id": 112,
                    "nome": "P2 - Usina",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930902778,
                      -1.29513611099998
                    ]
                  },
                  "properties": {
                    "poço_id": 113,
                    "nome": "P1 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930902778,
                      -1.29534999999993
                    ]
                  },
                  "properties": {
                    "poço_id": 114,
                    "nome": "P2 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930908334,
                      -1.29545833299994
                    ]
                  },
                  "properties": {
                    "poço_id": 115,
                    "nome": "P4 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.930783333,
                      -1.29562777799993
                    ]
                  },
                  "properties": {
                    "poço_id": 120,
                    "nome": "P8 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.93105,
                      -1.29587222199996
                    ]
                  },
                  "properties": {
                    "poço_id": 121,
                    "nome": "P9 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.9306611109999,
                      -1.29567777799997
                    ]
                  },
                  "properties": {
                    "poço_id": 122,
                    "nome": "P10 - Usina Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.935191667,
                      -1.27344166699993
                    ]
                  },
                  "properties": {
                    "poço_id": 123,
                    "nome": "P1 - Estrela",
                    "situaçao": "Em construção",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.935480556,
                      -1.27220277799995
                    ]
                  },
                  "properties": {
                    "poço_id": 124,
                    "nome": "P2 - Estrela",
                    "situaçao": "Em construção",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.8883611109999,
                      -1.72997222199996
                    ]
                  },
                  "properties": {
                    "poço_id": 125,
                    "nome": "P3 - Algodoal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.875665361,
                      -1.70984886099995
                    ]
                  },
                  "properties": {
                    "poço_id": 126,
                    "nome": "P1 - Francilândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.8763611109999,
                      -1.70888888899998
                    ]
                  },
                  "properties": {
                    "poço_id": 127,
                    "nome": "P2 - Francilância",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.8767988989999,
                      -1.71019784999993
                    ]
                  },
                  "properties": {
                    "poço_id": 128,
                    "nome": "P3 - Francilândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.8742362259999,
                      -1.70779185799995
                    ]
                  },
                  "properties": {
                    "poço_id": 129,
                    "nome": "P4 - Francilândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.875029519,
                      -1.70905555599995
                    ]
                  },
                  "properties": {
                    "poço_id": 130,
                    "nome": "P5 - Francilândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.873111111,
                      -1.70849999999996
                    ]
                  },
                  "properties": {
                    "poço_id": 131,
                    "nome": "P7 - Francilândia",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.8822222219999,
                      -1.72138888899997
                    ]
                  },
                  "properties": {
                    "poço_id": 133,
                    "nome": "P2 - RPM 02",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.882138889,
                      -1.72191666699996
                    ]
                  },
                  "properties": {
                    "poço_id": 134,
                    "nome": "P3 - RPM 03",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.726283333,
                      -1.95263055599997
                    ]
                  },
                  "properties": {
                    "poço_id": 135,
                    "nome": "P1 - Fazendinha",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.734789647,
                      -1.95499033399994
                    ]
                  },
                  "properties": {
                    "poço_id": 136,
                    "nome": "P1 - Aningal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.747040821,
                      -1.95137856499997
                    ]
                  },
                  "properties": {
                    "poço_id": 137,
                    "nome": "P1 - Serigal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.51875,
                      -1.91147661699995
                    ]
                  },
                  "properties": {
                    "poço_id": 138,
                    "nome": "P5 - S. Terezinha",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.514830053,
                      -1.89708274699996
                    ]
                  },
                  "properties": {
                    "poço_id": 139,
                    "nome": "P6 - São Francisco",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093194444444,
                      -1.89961944444444
                    ]
                  },
                  "properties": {
                    "poço_id": 140,
                    "nome": "P1 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5091861111111,
                      -1.90021666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 141,
                    "nome": "P1 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5083888889999,
                      -1.90261111099994
                    ]
                  },
                  "properties": {
                    "poço_id": 142,
                    "nome": "P3 - Engenho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5253305555556,
                      -1.90376666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 143,
                    "nome": "P4 - Óbidos",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.315113889,
                      -1.38284999999996
                    ]
                  },
                  "properties": {
                    "poço_id": 144,
                    "nome": "P2 - Beija Flor",
                    "situaçao": "Em construção",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -50.4815416669999,
                      -1.68560555599993
                    ]
                  },
                  "properties": {
                    "poço_id": 145,
                    "nome": "P1 - Breves",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -50.483272222,
                      -1.68682499999994
                    ]
                  },
                  "properties": {
                    "poço_id": 146,
                    "nome": "P2 - Breves",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -50.482930556,
                      -1.68634444399993
                    ]
                  },
                  "properties": {
                    "poço_id": 147,
                    "nome": "P3 - Breves",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.559222222,
                      -4.28772222199996
                    ]
                  },
                  "properties": {
                    "poço_id": 148,
                    "nome": "P4 - Dom Eliseu",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -56.7402777779999,
                      -2.16555555599996
                    ]
                  },
                  "properties": {
                    "poço_id": 149,
                    "nome": "P1 - Faro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.775130556,
                      -1.89318611099998
                    ]
                  },
                  "properties": {
                    "poço_id": 150,
                    "nome": "P1 - Moju Paraíso",
                    "situaçao": "Inativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.7751888889999,
                      -1.89308611099995
                    ]
                  },
                  "properties": {
                    "poço_id": 151,
                    "nome": "P2 - Moju Paraíso",
                    "situaçao": "Inativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.773916667,
                      -1.89475833299997
                    ]
                  },
                  "properties": {
                    "poço_id": 152,
                    "nome": "P3 - Moju Paraíso",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.775144444,
                      -1.89308888899996
                    ]
                  },
                  "properties": {
                    "poço_id": 153,
                    "nome": "P4 - Moju Paraíso",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.769919444,
                      -1.89306666699997
                    ]
                  },
                  "properties": {
                    "poço_id": 154,
                    "nome": "P5 - Moju  Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0558898325917,
                      -1.9937629451861
                    ]
                  },
                  "properties": {
                    "poço_id": 155,
                    "nome": "P1 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.055166667,
                      -1.99330555599994
                    ]
                  },
                  "properties": {
                    "poço_id": 156,
                    "nome": "P1 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -46.897911111,
                      -1.54167222199993
                    ]
                  },
                  "properties": {
                    "poço_id": 157,
                    "nome": "P1 - Std Luzia Ponteiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.720727648,
                      -8.86992794899993
                    ]
                  },
                  "properties": {
                    "poço_id": 158,
                    "nome": "P9 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.721146217,
                      -8.86983895199995
                    ]
                  },
                  "properties": {
                    "poço_id": 159,
                    "nome": "P1 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.7211734319999,
                      -8.86985713099995
                    ]
                  },
                  "properties": {
                    "poço_id": 160,
                    "nome": "P3 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.721209614,
                      -8.86991151299998
                    ]
                  },
                  "properties": {
                    "poço_id": 161,
                    "nome": "P5 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.721273512,
                      -8.86983938799995
                    ]
                  },
                  "properties": {
                    "poço_id": 162,
                    "nome": "P7 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.721346377,
                      -8.86980346499996
                    ]
                  },
                  "properties": {
                    "poço_id": 163,
                    "nome": "P8 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.72130104,
                      -8.86976713799993
                    ]
                  },
                  "properties": {
                    "poço_id": 164,
                    "nome": "P6 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093722222222,
                      -1.89954444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 227,
                    "nome": "P10 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.721292072,
                      -8.86973093499995
                    ]
                  },
                  "properties": {
                    "poço_id": 165,
                    "nome": "P4 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.7211919919999,
                      -8.86974867899994
                    ]
                  },
                  "properties": {
                    "poço_id": 166,
                    "nome": "P2 - Std Maria das Barreiras",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7369138888889,
                      -2.44262222222222
                    ]
                  },
                  "properties": {
                    "poço_id": 167,
                    "nome": "P7 - Santarenzinho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7360583333334,
                      -2.44376111057987
                    ]
                  },
                  "properties": {
                    "poço_id": 168,
                    "nome": "P6 - Santarenzinho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7410305555555,
                      -2.43826666663416
                    ]
                  },
                  "properties": {
                    "poço_id": 185,
                    "nome": "P1 - Bacabal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7315472222222,
                      -2.44408888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 169,
                    "nome": "P4 - Irurá",
                    "situaçao": "Inativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7323416666667,
                      -2.44448055555556
                    ]
                  },
                  "properties": {
                    "poço_id": 170,
                    "nome": "P1 - Irurá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7315532577418,
                      -2.44304722222222
                    ]
                  },
                  "properties": {
                    "poço_id": 171,
                    "nome": "P2 - Irurá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7317944444445,
                      -2.44231666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 172,
                    "nome": "P5 - Irurá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.956875,
                      -2.5099
                    ]
                  },
                  "properties": {
                    "poço_id": 174,
                    "nome": "P1 - Alter do Chão",
                    "situaçao": "Em construção",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7228333333333,
                      -2.46645833333333
                    ]
                  },
                  "properties": {
                    "poço_id": 175,
                    "nome": "P1 - Nova República",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7225853581799,
                      -2.46771949415252
                    ]
                  },
                  "properties": {
                    "poço_id": 176,
                    "nome": "P2 - Nova República",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7229333333333,
                      -2.466625
                    ]
                  },
                  "properties": {
                    "poço_id": 177,
                    "nome": "P3 - Nova República (PTNR3)",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7594194113593,
                      -2.46854153352658
                    ]
                  },
                  "properties": {
                    "poço_id": 178,
                    "nome": "P1 - Residencial Salvação",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.6957444444444,
                      -2.44170833330078
                    ]
                  },
                  "properties": {
                    "poço_id": 179,
                    "nome": "P1 - Livramento",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.6959222222222,
                      -2.44042499996747
                    ]
                  },
                  "properties": {
                    "poço_id": 180,
                    "nome": "P2 - Livramento",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7593722222222,
                      -2.46726944441155
                    ]
                  },
                  "properties": {
                    "poço_id": 181,
                    "nome": "P2 - Residencial Salvação",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7526666451116,
                      -2.43991946609237
                    ]
                  },
                  "properties": {
                    "poço_id": 182,
                    "nome": "P1 - Elcione Barbalho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7542111111111,
                      -2.4435277777452
                    ]
                  },
                  "properties": {
                    "poço_id": 183,
                    "nome": "P2 - Elcione Barbalho",
                    "situaçao": "Inativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7385361111111,
                      -2.43954722218969
                    ]
                  },
                  "properties": {
                    "poço_id": 184,
                    "nome": "P2 - Bacabal",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7456127434777,
                      -2.45393830016954
                    ]
                  },
                  "properties": {
                    "poço_id": 187,
                    "nome": "P2 - Amparo",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7077666666667,
                      -2.42183611107881
                    ]
                  },
                  "properties": {
                    "poço_id": 188,
                    "nome": "P1 - Mendoça Furtado",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7232924805949,
                      -2.41950938452524
                    ]
                  },
                  "properties": {
                    "poço_id": 189,
                    "nome": "P1 - Praça Tiradentes",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7340833333333,
                      -2.43915277774527
                    ]
                  },
                  "properties": {
                    "poço_id": 190,
                    "nome": "P8 - Caranazal",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7340472222222,
                      -2.43920833330081
                    ]
                  },
                  "properties": {
                    "poço_id": 191,
                    "nome": "P1 - Caranazal Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7341639029088,
                      -2.43919999996749
                    ]
                  },
                  "properties": {
                    "poço_id": 192,
                    "nome": "P2 - Caranazal Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7425619501309,
                      -2.4281305614966
                    ]
                  },
                  "properties": {
                    "poço_id": 193,
                    "nome": "P1 - Mapiri",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7009888888889,
                      -2.4310749999676
                    ]
                  },
                  "properties": {
                    "poço_id": 194,
                    "nome": "P1 - Julia Passarinho",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.6977166666667,
                      -2.45635277774503
                    ]
                  },
                  "properties": {
                    "poço_id": 195,
                    "nome": "P1 - Uramari",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.7200416666667,
                      -2.46668611111111
                    ]
                  },
                  "properties": {
                    "poço_id": 196,
                    "nome": "P4 - Nova República",
                    "situaçao": "Em construção",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.6957331440651,
                      -2.44169999996745
                    ]
                  },
                  "properties": {
                    "poço_id": 197,
                    "nome": "P3 - Livramento",
                    "situaçao": "Em construção",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9546388888889,
                      -2.94897222222196
                    ]
                  },
                  "properties": {
                    "poço_id": 198,
                    "nome": "P1 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9545555555556,
                      -2.94894444444418
                    ]
                  },
                  "properties": {
                    "poço_id": 199,
                    "nome": "P2 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9545,
                      -2.94891667723797
                    ]
                  },
                  "properties": {
                    "poço_id": 200,
                    "nome": "P3 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9544166666667,
                      -2.94894444444418
                    ]
                  },
                  "properties": {
                    "poço_id": 201,
                    "nome": "P4 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9549166246071,
                      -2.94899995242769
                    ]
                  },
                  "properties": {
                    "poço_id": 202,
                    "nome": "P5 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9542888888889,
                      -2.94886666666641
                    ]
                  },
                  "properties": {
                    "poço_id": 203,
                    "nome": "P7 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9543332939025,
                      -2.94886111771807
                    ]
                  },
                  "properties": {
                    "poço_id": 204,
                    "nome": "P6 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9541666666667,
                      -2.9488333861909
                    ]
                  },
                  "properties": {
                    "poço_id": 205,
                    "nome": "P8 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9541111111111,
                      -2.94880562639691
                    ]
                  },
                  "properties": {
                    "poço_id": 206,
                    "nome": "P9 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9542222222222,
                      -2.94866666666641
                    ]
                  },
                  "properties": {
                    "poço_id": 207,
                    "nome": "P10 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9543333455581,
                      -2.94872223451254
                    ]
                  },
                  "properties": {
                    "poço_id": 208,
                    "nome": "P11 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9543333333333,
                      -2.94874999999973
                    ]
                  },
                  "properties": {
                    "poço_id": 209,
                    "nome": "P12 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9544444444445,
                      -2.9488055555553
                    ]
                  },
                  "properties": {
                    "poço_id": 210,
                    "nome": "P13 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9545277777778,
                      -2.94886111111084
                    ]
                  },
                  "properties": {
                    "poço_id": 211,
                    "nome": "P14 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9545833333333,
                      -2.94886111927189
                    ]
                  },
                  "properties": {
                    "poço_id": 212,
                    "nome": "P15 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9546111111111,
                      -2.94888888888862
                    ]
                  },
                  "properties": {
                    "poço_id": 213,
                    "nome": "P16 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9546944444445,
                      -2.94891666666639
                    ]
                  },
                  "properties": {
                    "poço_id": 214,
                    "nome": "P17 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9548055555556,
                      -2.94891666666639
                    ]
                  },
                  "properties": {
                    "poço_id": 215,
                    "nome": "P18 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9545277777778,
                      -2.94874999999973
                    ]
                  },
                  "properties": {
                    "poço_id": 216,
                    "nome": "P19 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9541666666667,
                      -2.94874999999973
                    ]
                  },
                  "properties": {
                    "poço_id": 217,
                    "nome": "P20 - Tailândia Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3325083333333,
                      -1.37624454957262
                    ]
                  },
                  "properties": {
                    "poço_id": 218,
                    "nome": "P1 - Marituba COHAB",
                    "situaçao": "Inativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093416666667,
                      -1.89965277777778
                    ]
                  },
                  "properties": {
                    "poço_id": 219,
                    "nome": "P2 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092888888889,
                      -1.89968888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 220,
                    "nome": "P3 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092642444508,
                      -1.89949166666667
                    ]
                  },
                  "properties": {
                    "poço_id": 221,
                    "nome": "P4 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093312666795,
                      -1.89943333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 222,
                    "nome": "P5 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5094138888889,
                      -1.89940833333333
                    ]
                  },
                  "properties": {
                    "poço_id": 223,
                    "nome": "P6 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5094333333333,
                      -1.89947777777778
                    ]
                  },
                  "properties": {
                    "poço_id": 224,
                    "nome": "P7 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5095048444316,
                      -1.89955555555556
                    ]
                  },
                  "properties": {
                    "poço_id": 225,
                    "nome": "P8 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093694444444,
                      -1.89951388888889
                    ]
                  },
                  "properties": {
                    "poço_id": 226,
                    "nome": "P9 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093083333333,
                      -1.8995
                    ]
                  },
                  "properties": {
                    "poço_id": 228,
                    "nome": "P11 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092444444444,
                      -1.89958333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 229,
                    "nome": "P12 - Areial Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.509238177765,
                      -1.90024722222222
                    ]
                  },
                  "properties": {
                    "poço_id": 230,
                    "nome": "P2 - Chapéu  Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092916666667,
                      -1.90016944444444
                    ]
                  },
                  "properties": {
                    "poço_id": 231,
                    "nome": "P3 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093551999936,
                      -1.90026388888889
                    ]
                  },
                  "properties": {
                    "poço_id": 232,
                    "nome": "P4 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5093333333333,
                      -1.90002777777778
                    ]
                  },
                  "properties": {
                    "poço_id": 233,
                    "nome": "P5 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092777777778,
                      -1.90029722222222
                    ]
                  },
                  "properties": {
                    "poço_id": 234,
                    "nome": "P6 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092638888889,
                      -1.90030555555556
                    ]
                  },
                  "properties": {
                    "poço_id": 235,
                    "nome": "P7 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5091944444444,
                      -1.90036111111111
                    ]
                  },
                  "properties": {
                    "poço_id": 237,
                    "nome": "P9 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092166666667,
                      -1.90038888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 238,
                    "nome": "P10 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5091833333333,
                      -1.90041666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 239,
                    "nome": "P11 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5092027777778,
                      -1.90045
                    ]
                  },
                  "properties": {
                    "poço_id": 240,
                    "nome": "P12 - Chapéu Ponteira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.5090833333333,
                      -1.89961111111111
                    ]
                  },
                  "properties": {
                    "poço_id": 241,
                    "nome": "P1 - Areial ",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.509,
                      -1.90030555555555
                    ]
                  },
                  "properties": {
                    "poço_id": 242,
                    "nome": "P2 - Chapéu",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4806111111111,
                      -1.40253114186794
                    ]
                  },
                  "properties": {
                    "poço_id": 243,
                    "nome": "P7 - CDP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9553888888889,
                      -2.94791666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 244,
                    "nome": "P1 - TAI 01",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9553888888889,
                      -2.94794444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 245,
                    "nome": "P2 - TAI 02",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.9575555555556,
                      -2.94847222222222
                    ]
                  },
                  "properties": {
                    "poço_id": 246,
                    "nome": "P4 - TAI 04",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4432416666667,
                      -1.12467222222222
                    ]
                  },
                  "properties": {
                    "poço_id": 247,
                    "nome": "P1 - Murubira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4431944444444,
                      -1.12545833333333
                    ]
                  },
                  "properties": {
                    "poço_id": 248,
                    "nome": "P3 - Murubira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4423722222222,
                      -1.12521944444444
                    ]
                  },
                  "properties": {
                    "poço_id": 249,
                    "nome": "P4 - Murubira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4432194444444,
                      -1.12415555555556
                    ]
                  },
                  "properties": {
                    "poço_id": 250,
                    "nome": "P5 - Murubira",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.467775,
                      -1.15807222222222
                    ]
                  },
                  "properties": {
                    "poço_id": 251,
                    "nome": "P1 - Padre Manoel Raiol",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4678777777778,
                      -1.15786666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 252,
                    "nome": "P2 - Padre Manoel Raiol",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4678472222222,
                      -1.15774444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 253,
                    "nome": "P3 - Padre Manoel Raiol",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4675638888889,
                      -1.15820833333333
                    ]
                  },
                  "properties": {
                    "poço_id": 254,
                    "nome": "P4 - Padre Manoel Raiol",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4046361111111,
                      -1.09889166666667
                    ]
                  },
                  "properties": {
                    "poço_id": 255,
                    "nome": "P1 - Carananduba",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3356888888889,
                      -1.06548888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 256,
                    "nome": "P1 - Baía do Sol",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4455,
                      -1.45644444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 257,
                    "nome": "P2 - Laje SEDOP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4445555555556,
                      -1.45679145945098
                    ]
                  },
                  "properties": {
                    "poço_id": 258,
                    "nome": "P1 - Laje SEDOP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4450666666667,
                      -1.45560020721569
                    ]
                  },
                  "properties": {
                    "poço_id": 259,
                    "nome": "P3 - Laje SEDOP",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3840744327783,
                      -1.33682490654943
                    ]
                  },
                  "properties": {
                    "poço_id": 260,
                    "nome": "P? - Paar",
                    "situaçao": "Inativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3303142347789,
                      -1.35844403262984
                    ]
                  },
                  "properties": {
                    "poço_id": 261,
                    "nome": "P1 - Novo Horizonte",
                    "situaçao": "Ativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3435545797818,
                      -1.36967083727679
                    ]
                  },
                  "properties": {
                    "poço_id": 262,
                    "nome": "P4 - Marituba Centro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3430849827705,
                      -1.37014959715665
                    ]
                  },
                  "properties": {
                    "poço_id": 263,
                    "nome": "P3 - Marituba Centro",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0559555555556,
                      -1.99368888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 265,
                    "nome": "P2 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0560222222222,
                      -1.99366666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 266,
                    "nome": "P3 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0561009185957,
                      -1.99354630362653
                    ]
                  },
                  "properties": {
                    "poço_id": 267,
                    "nome": "P4 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0561751722367,
                      -1.99346678149112
                    ]
                  },
                  "properties": {
                    "poço_id": 268,
                    "nome": "P5 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0559722222222,
                      -1.99382222222222
                    ]
                  },
                  "properties": {
                    "poço_id": 269,
                    "nome": "P6 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0560277777778,
                      -1.99375
                    ]
                  },
                  "properties": {
                    "poço_id": 270,
                    "nome": "P7 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0561,
                      -1.993675
                    ]
                  },
                  "properties": {
                    "poço_id": 271,
                    "nome": "P8 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0561722222222,
                      -1.99360833333333
                    ]
                  },
                  "properties": {
                    "poço_id": 272,
                    "nome": "P9 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0562391185378,
                      -1.99353865923997
                    ]
                  },
                  "properties": {
                    "poço_id": 273,
                    "nome": "P10 - Vácuo 1",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0552777777778,
                      -1.99325
                    ]
                  },
                  "properties": {
                    "poço_id": 274,
                    "nome": "P2 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0553888888889,
                      -1.99319444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 275,
                    "nome": "P3 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.055475,
                      -1.99313611111111
                    ]
                  },
                  "properties": {
                    "poço_id": 276,
                    "nome": "P4 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0555555555556,
                      -1.99308333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 277,
                    "nome": "P5 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0556666666667,
                      -1.99302777777778
                    ]
                  },
                  "properties": {
                    "poço_id": 278,
                    "nome": "P6 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0557222222222,
                      -1.99300045663782
                    ]
                  },
                  "properties": {
                    "poço_id": 279,
                    "nome": "P7 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0558055555555,
                      -1.99294444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 280,
                    "nome": "P8 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0558888888889,
                      -1.99288934552671
                    ]
                  },
                  "properties": {
                    "poço_id": 281,
                    "nome": "P9 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0559722222222,
                      -1.99286110754363
                    ]
                  },
                  "properties": {
                    "poço_id": 282,
                    "nome": "P10 - Vácuo 4",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0549222222222,
                      -1.99360555555555
                    ]
                  },
                  "properties": {
                    "poço_id": 283,
                    "nome": "P1 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0549361111111,
                      -1.99356388888889
                    ]
                  },
                  "properties": {
                    "poço_id": 284,
                    "nome": "P2 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548944444444,
                      -1.99358888888889
                    ]
                  },
                  "properties": {
                    "poço_id": 285,
                    "nome": "P3 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0549055555555,
                      -1.99355
                    ]
                  },
                  "properties": {
                    "poço_id": 286,
                    "nome": "P4 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548666666667,
                      -1.99356944444444
                    ]
                  },
                  "properties": {
                    "poço_id": 287,
                    "nome": "P5 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548805555556,
                      -1.99353333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 288,
                    "nome": "P6 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548388888889,
                      -1.99354444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 289,
                    "nome": "P7 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.05485,
                      -1.99351111111111
                    ]
                  },
                  "properties": {
                    "poço_id": 290,
                    "nome": "P8 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548083333333,
                      -1.993525
                    ]
                  },
                  "properties": {
                    "poço_id": 291,
                    "nome": "P9 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.054825,
                      -1.99349722222222
                    ]
                  },
                  "properties": {
                    "poço_id": 292,
                    "nome": "P10 - Vácuo 3",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0554722222222,
                      -1.99375
                    ]
                  },
                  "properties": {
                    "poço_id": 295,
                    "nome": "P1 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0552777777778,
                      -1.99394444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 296,
                    "nome": "P3 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0551944444444,
                      -1.99405555555556
                    ]
                  },
                  "properties": {
                    "poço_id": 297,
                    "nome": "P4 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0551111111111,
                      -1.99416666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 298,
                    "nome": "P5 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.055,
                      -1.99427777777778
                    ]
                  },
                  "properties": {
                    "poço_id": 299,
                    "nome": "P6 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0549444444444,
                      -1.99441666666667
                    ]
                  },
                  "properties": {
                    "poço_id": 300,
                    "nome": "P7 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0548403399812,
                      -1.99451100214306
                    ]
                  },
                  "properties": {
                    "poço_id": 301,
                    "nome": "P8 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0547222222222,
                      -1.99458333333333
                    ]
                  },
                  "properties": {
                    "poço_id": 302,
                    "nome": "P9 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -54.0546388888889,
                      -1.99469444444444
                    ]
                  },
                  "properties": {
                    "poço_id": 303,
                    "nome": "P10 - Vácuo 2",
                    "situaçao": "Ativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4794235475464,
                      -1.40143940315773
                    ]
                  },
                  "properties": {
                    "poço_id": 304,
                    "nome": "P? - CDP",
                    "situaçao": "Inativo",
                    "licenc_situ": "Sem outorga"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -56.4908416666667,
                      -2.10782777777778
                    ]
                  },
                  "properties": {
                    "poço_id": 305,
                    "nome": "P1 - Centro",
                    "situaçao": "Ativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -56.4891870430908,
                      -2.096725
                    ]
                  },
                  "properties": {
                    "poço_id": 306,
                    "nome": "P1 - Cidade Nova",
                    "situaçao": "Ativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -56.4939574013536,
                      -2.1023898208686
                    ]
                  },
                  "properties": {
                    "poço_id": 307,
                    "nome": "P1 - Ponteira?",
                    "situaçao": "Ativo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -46.1946305555556,
                      -1.19764166666667
                    ]
                  },
                  "properties": {
                    "poço_id": 308,
                    "nome": "P1 - Viseu",
                    "situaçao": "Em construção",
                    "licenc_situ": "Outorgado"
                  }
                }
              ]
            },
            "capSuperf": {
              "type": "FeatureCollection",
              "features": [
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.944622222,
                      -1.97871111099994
                    ]
                  },
                  "properties": {
                    "super_id": 1,
                    "nome": "S1 - Igarapé Mirim",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.1363899634404,
                      -5.34600026673264
                    ]
                  },
                  "properties": {
                    "super_id": 2,
                    "nome": "S1 - Marabá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.9392972222222,
                      -0.983765706738715
                    ]
                  },
                  "properties": {
                    "super_id": 3,
                    "nome": "S1 - Anajás",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -50.3876583333333,
                      -0.153399999999999
                    ]
                  },
                  "properties": {
                    "super_id": 4,
                    "nome": "S1 - Afuá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.5613055405566,
                      -4.24641950443994
                    ]
                  },
                  "properties": {
                    "super_id": 5,
                    "nome": "S1 - Dom Eliseu",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.7599805555556,
                      -1.87840283027384
                    ]
                  },
                  "properties": {
                    "super_id": 6,
                    "nome": "S1 - Moju",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -47.0989250349974,
                      -1.30023888888889
                    ]
                  },
                  "properties": {
                    "super_id": 7,
                    "nome": "S1 - Capanema",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.8726444223101,
                      -1.75951608037982
                    ]
                  },
                  "properties": {
                    "super_id": 8,
                    "nome": "S1 - Oriximiná",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -46.7926027777778,
                      -1.09774301952249
                    ]
                  },
                  "properties": {
                    "super_id": 9,
                    "nome": "S1 - Bragança",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4016834741061,
                      -1.45501659628029
                    ]
                  },
                  "properties": {
                    "super_id": 10,
                    "nome": "S1 - Rio Guamá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -55.9836122372931,
                      -4.27888888888889
                    ]
                  },
                  "properties": {
                    "super_id": 11,
                    "nome": "S1- Itaituba",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -46.1831944444444,
                      -1.19832499998391
                    ]
                  },
                  "properties": {
                    "super_id": 12,
                    "nome": "S1 - Viseu",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.0765277777778,
                      -5.3258055555551
                    ]
                  },
                  "properties": {
                    "super_id": 13,
                    "nome": "S2 - Marabá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -51.99875,
                      -6.65088888888832
                    ]
                  },
                  "properties": {
                    "super_id": 14,
                    "nome": "S1 - São Félix do Xingu",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.2637149248859,
                      -8.28408333333267
                    ]
                  },
                  "properties": {
                    "super_id": 15,
                    "nome": "S1 - Conceição do Araguaia",
                    "licenc_situ": "Outorgado"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.5667527777778,
                      -3.76287107686366
                    ]
                  },
                  "properties": {
                    "super_id": 16,
                    "nome": "S1 -  Breu Branco",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -49.1013692732072,
                      -4.46660784627268
                    ]
                  },
                  "properties": {
                    "super_id": 17,
                    "nome": "S1 - Jacundá",
                    "situaçao": "Ativo",
                    "licenc_situ": "Em processo"
                  }
                }
              ]
            },
            "uns": [
              {
                "un_id": 1,
                "nome": "UNSUL"
              },
              {
                "un_id": 2,
                "nome": "UN-NORTE"
              },
              {
                "un_id": 3,
                "nome": "UN-AM"
              },
              {
                "un_id": 4,
                "nome": "UN-BR"
              },
              {
                "un_id": 5,
                "nome": "UN-NE"
              },
              {
                "un_id": 6,
                "nome": "UN-IL"
              },
              {
                "un_id": 7,
                "nome": "UN-BA"
              },
              {
                "un_id": 8,
                "nome": "UN-TO"
              },
              {
                "un_id": 9,
                "nome": "UNSUL"
              }
            ],
            "regionais": [
              {
                "region_id": 1,
                "nome": "Regional Baixo Amazonas"
              },
              {
                "region_id": 2,
                "nome": "Regional Ilhas"
              },
              {
                "region_id": 3,
                "nome": "Regional Metropolitana"
              },
              {
                "region_id": 4,
                "nome": "Regional Nordeste"
              },
              {
                "region_id": 5,
                "nome": "Regional Tocantins"
              }
            ],
            "setoresSedes": {
              "type": "FeatureCollection",
              "features": [
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4425601889999,
                      -1.37566106399981
                    ]
                  },
                  "properties": {
                    "setor_id": 1,
                    "nome": "Benguí",
                    "alimentaçao": "Poços"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4476935999999,
                      -1.35796111899992
                    ]
                  },
                  "properties": {
                    "setor_id": 2,
                    "nome": "Benjamin Sodré",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4388395569999,
                      -1.35284198099993
                    ]
                  },
                  "properties": {
                    "setor_id": 3,
                    "nome": "Ariri Bolonha",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4562060759999,
                      -1.38114454599992
                    ]
                  },
                  "properties": {
                    "setor_id": 4,
                    "nome": "Catalina",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4647832539999,
                      -1.34983504999991
                    ]
                  },
                  "properties": {
                    "setor_id": 5,
                    "nome": "Cord. de Farias",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.42955627,
                      -1.37013545999986
                    ]
                  },
                  "properties": {
                    "setor_id": 6,
                    "nome": "Coqueiro",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.443312826,
                      -1.34149776499993
                    ]
                  },
                  "properties": {
                    "setor_id": 7,
                    "nome": "IPASEP"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4372640529999,
                      -1.37730588199992
                    ]
                  },
                  "properties": {
                    "setor_id": 8,
                    "nome": "Panorama",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4566567579999,
                      -1.33705934799997
                    ]
                  },
                  "properties": {
                    "setor_id": 9,
                    "nome": "Canarinho",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.431435592,
                      -1.32216886599991
                    ]
                  },
                  "properties": {
                    "setor_id": 10,
                    "nome": "Tenoné",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.480155263,
                      -1.37639948999987
                    ]
                  },
                  "properties": {
                    "setor_id": 11,
                    "nome": "Pratinha",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.3943344509999,
                      -1.41095054399995
                    ]
                  },
                  "properties": {
                    "setor_id": 12,
                    "nome": "Verdejante",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4543755509999,
                      -1.30280663299988
                    ]
                  },
                  "properties": {
                    "setor_id": 13,
                    "nome": "Águas Negras",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.474969511,
                      -1.27982899899985
                    ]
                  },
                  "properties": {
                    "setor_id": 14,
                    "nome": "Brasília",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4662526299999,
                      -1.26201263599989
                    ]
                  },
                  "properties": {
                    "setor_id": 15,
                    "nome": "S. J. do Outeir",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4587965499999,
                      -1.28946368099997
                    ]
                  },
                  "properties": {
                    "setor_id": 16,
                    "nome": "Morada de Deus",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4681995709999,
                      -1.29708221899989
                    ]
                  },
                  "properties": {
                    "setor_id": 17,
                    "nome": "COHAB",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4509934309999,
                      -1.25529962099995
                    ]
                  },
                  "properties": {
                    "setor_id": 18,
                    "nome": "Água Boa",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4771402219999,
                      -1.29976629199996
                    ]
                  },
                  "properties": {
                    "setor_id": 19,
                    "nome": "São Roque",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.47774229,
                      -1.30392326099997
                    ]
                  },
                  "properties": {
                    "setor_id": 20,
                    "nome": "Souza Franco",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.456618087,
                      -1.31314949799997
                    ]
                  },
                  "properties": {
                    "setor_id": 21,
                    "nome": "Eduardo Angelim",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4721853009999,
                      -1.31241290399987
                    ]
                  },
                  "properties": {
                    "setor_id": 22,
                    "nome": "Paracurí",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4544361769999,
                      -1.3278131699999
                    ]
                  },
                  "properties": {
                    "setor_id": 23,
                    "nome": "Tocantins",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.5606952429999,
                      -1.26382825799993
                    ]
                  },
                  "properties": {
                    "setor_id": 24,
                    "nome": "Cotijuba",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4711509919999,
                      -1.33568362499989
                    ]
                  },
                  "properties": {
                    "setor_id": 25,
                    "nome": "Mata Fome",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.464045665,
                      -1.34748666699994
                    ]
                  },
                  "properties": {
                    "setor_id": 26,
                    "nome": "Raim. Jinking",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.470505346,
                      -1.36884078699995
                    ]
                  },
                  "properties": {
                    "setor_id": 27,
                    "nome": "Pratinha I",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4701359849999,
                      -1.3568766649999
                    ]
                  },
                  "properties": {
                    "setor_id": 28,
                    "nome": "Pratinha II",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.464467831,
                      -1.32431151799989
                    ]
                  },
                  "properties": {
                    "setor_id": 29,
                    "nome": "Viver Primaver",
                    "alimentaçao": "Poço"
                  }
                },
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -48.4809978418443,
                      -1.40272460167076
                    ]
                  },
                  "properties": {
                    "setor_id": 30,
                    "nome": "CDP - 10º Setor",
                    "alimentaçao": "Poço"
                  }
                }
              ]
            },
            "municipios": [
              {
                "municipio_id": 3,
                "nome": "Acará"
              },
              {
                "municipio_id": 12,
                "nome": "Augusto Corrêa"
              },
              {
                "municipio_id": 13,
                "nome": "Aurora Do Pará"
              },
              {
                "municipio_id": 14,
                "nome": "Aveiro"
              },
              {
                "municipio_id": 39,
                "nome": "Conceição Do Araguaia"
              },
              {
                "municipio_id": 121,
                "nome": "São Geraldo Do Araguaia"
              },
              {
                "municipio_id": 28,
                "nome": "Breves"
              },
              {
                "municipio_id": 30,
                "nome": "Cachoeira Do Piriá"
              },
              {
                "municipio_id": 31,
                "nome": "Cachoeira Do Arari"
              },
              {
                "municipio_id": 32,
                "nome": "Cametá"
              },
              {
                "municipio_id": 33,
                "nome": "Canaã Dos Carajás"
              },
              {
                "municipio_id": 41,
                "nome": "Cumaru Do Norte"
              },
              {
                "municipio_id": 42,
                "nome": "Curionópolis"
              },
              {
                "municipio_id": 44,
                "nome": "Curuá"
              },
              {
                "municipio_id": 139,
                "nome": "Uruará"
              },
              {
                "municipio_id": 15,
                "nome": "Bagre"
              },
              {
                "municipio_id": 16,
                "nome": "Baião"
              },
              {
                "municipio_id": 17,
                "nome": "Bannach"
              },
              {
                "municipio_id": 46,
                "nome": "Dom Eliseu"
              },
              {
                "municipio_id": 48,
                "nome": "Faro"
              },
              {
                "municipio_id": 49,
                "nome": "Floresta Do Araguaia"
              },
              {
                "municipio_id": 50,
                "nome": "Garrafão Do Norte"
              },
              {
                "municipio_id": 51,
                "nome": "Goianésia Do Pará"
              },
              {
                "municipio_id": 52,
                "nome": "Gurupá"
              },
              {
                "municipio_id": 54,
                "nome": "Igarapé-Miri"
              },
              {
                "municipio_id": 56,
                "nome": "Ipixuna Do Pará"
              },
              {
                "municipio_id": 57,
                "nome": "Irituia"
              },
              {
                "municipio_id": 58,
                "nome": "Itaituba"
              },
              {
                "municipio_id": 59,
                "nome": "Itupiranga"
              },
              {
                "municipio_id": 60,
                "nome": "Jacareacanga"
              },
              {
                "municipio_id": 66,
                "nome": "Marabá"
              },
              {
                "municipio_id": 88,
                "nome": "Paragominas"
              },
              {
                "municipio_id": 70,
                "nome": "Medicilândia"
              },
              {
                "municipio_id": 71,
                "nome": "Melgaço"
              },
              {
                "municipio_id": 73,
                "nome": "Moju"
              },
              {
                "municipio_id": 74,
                "nome": "Monte Alegre"
              },
              {
                "municipio_id": 75,
                "nome": "Muaná"
              },
              {
                "municipio_id": 76,
                "nome": "Nova Esperança Do Piriá"
              },
              {
                "municipio_id": 79,
                "nome": "Novo Progresso"
              },
              {
                "municipio_id": 80,
                "nome": "Novo Repartimento"
              },
              {
                "municipio_id": 81,
                "nome": "Óbidos"
              },
              {
                "municipio_id": 82,
                "nome": "Oeiras Do Pará"
              },
              {
                "municipio_id": 83,
                "nome": "Oriximiná"
              },
              {
                "municipio_id": 85,
                "nome": "Ourilândia Do Norte"
              },
              {
                "municipio_id": 86,
                "nome": "Pacajá"
              },
              {
                "municipio_id": 93,
                "nome": "Placas"
              },
              {
                "municipio_id": 100,
                "nome": "Redenção"
              },
              {
                "municipio_id": 101,
                "nome": "Rio Maria"
              },
              {
                "municipio_id": 102,
                "nome": "Rondon Do Pará"
              },
              {
                "municipio_id": 103,
                "nome": "Rurópolis"
              },
              {
                "municipio_id": 112,
                "nome": "Santana Do Araguaia"
              },
              {
                "municipio_id": 113,
                "nome": "Santarém"
              },
              {
                "municipio_id": 119,
                "nome": "São Félix Do Xingu"
              },
              {
                "municipio_id": 18,
                "nome": "Barcarena"
              },
              {
                "municipio_id": 19,
                "nome": "Belém"
              },
              {
                "municipio_id": 20,
                "nome": "Belterra"
              },
              {
                "municipio_id": 128,
                "nome": "Senador José Porfírio"
              },
              {
                "municipio_id": 130,
                "nome": "Tailândia"
              },
              {
                "municipio_id": 98,
                "nome": "Primavera"
              },
              {
                "municipio_id": 141,
                "nome": "Viseu"
              },
              {
                "municipio_id": 1,
                "nome": "Abaetetuba"
              },
              {
                "municipio_id": 2,
                "nome": "Abel Figueiredo"
              },
              {
                "municipio_id": 9,
                "nome": "Anajás"
              },
              {
                "municipio_id": 10,
                "nome": "Ananindeua"
              },
              {
                "municipio_id": 11,
                "nome": "Anapu"
              },
              {
                "municipio_id": 4,
                "nome": "Afuá"
              },
              {
                "municipio_id": 5,
                "nome": "Água Azul Do Norte"
              },
              {
                "municipio_id": 6,
                "nome": "Alenquer"
              },
              {
                "municipio_id": 7,
                "nome": "Almeirim"
              },
              {
                "municipio_id": 8,
                "nome": "Altamira"
              },
              {
                "municipio_id": 23,
                "nome": "Bonito"
              },
              {
                "municipio_id": 24,
                "nome": "Bragança"
              },
              {
                "municipio_id": 25,
                "nome": "Brasil Novo"
              },
              {
                "municipio_id": 34,
                "nome": "Capanema"
              },
              {
                "municipio_id": 35,
                "nome": "Capitão Poço"
              },
              {
                "municipio_id": 21,
                "nome": "Benevides"
              },
              {
                "municipio_id": 120,
                "nome": "São Francisco Do Pará"
              },
              {
                "municipio_id": 22,
                "nome": "Bom Jesus Do Tocantins"
              },
              {
                "municipio_id": 38,
                "nome": "Colares"
              },
              {
                "municipio_id": 26,
                "nome": "Brejo Grande Do Araguaia"
              },
              {
                "municipio_id": 27,
                "nome": "Breu Branco"
              },
              {
                "municipio_id": 29,
                "nome": "Bujaru"
              },
              {
                "municipio_id": 36,
                "nome": "Castanhal"
              },
              {
                "municipio_id": 37,
                "nome": "Chaves"
              },
              {
                "municipio_id": 78,
                "nome": "Nova Timboteua"
              },
              {
                "municipio_id": 40,
                "nome": "Concórdia Do Pará"
              },
              {
                "municipio_id": 131,
                "nome": "Terra Alta"
              },
              {
                "municipio_id": 43,
                "nome": "Curralinho"
              },
              {
                "municipio_id": 45,
                "nome": "Curuçá"
              },
              {
                "municipio_id": 47,
                "nome": "Eldorado Dos Carajás"
              },
              {
                "municipio_id": 53,
                "nome": "Igarapé-Açu"
              },
              {
                "municipio_id": 55,
                "nome": "Inhangapi"
              },
              {
                "municipio_id": 61,
                "nome": "Jacundá"
              },
              {
                "municipio_id": 62,
                "nome": "Juruti"
              },
              {
                "municipio_id": 64,
                "nome": "Mãe Do Rio"
              },
              {
                "municipio_id": 63,
                "nome": "Limoeiro Do Ajuru"
              },
              {
                "municipio_id": 65,
                "nome": "Magalhães Barata"
              },
              {
                "municipio_id": 87,
                "nome": "Palestina Do Pará"
              },
              {
                "municipio_id": 89,
                "nome": "Parauapebas"
              },
              {
                "municipio_id": 90,
                "nome": "Pau D'Arco"
              },
              {
                "municipio_id": 67,
                "nome": "Maracanã"
              },
              {
                "municipio_id": 91,
                "nome": "Peixe-Boi"
              },
              {
                "municipio_id": 68,
                "nome": "Marapanim"
              },
              {
                "municipio_id": 69,
                "nome": "Marituba"
              },
              {
                "municipio_id": 72,
                "nome": "Mocajuba"
              },
              {
                "municipio_id": 77,
                "nome": "Nova Ipixuna"
              },
              {
                "municipio_id": 84,
                "nome": "Ourém"
              },
              {
                "municipio_id": 92,
                "nome": "Piçarra"
              },
              {
                "municipio_id": 94,
                "nome": "Ponta De Pedras"
              },
              {
                "municipio_id": 95,
                "nome": "Portel"
              },
              {
                "municipio_id": 96,
                "nome": "Porto De Moz"
              },
              {
                "municipio_id": 97,
                "nome": "Prainha"
              },
              {
                "municipio_id": 104,
                "nome": "Salinópolis"
              },
              {
                "municipio_id": 99,
                "nome": "Quatipuru"
              },
              {
                "municipio_id": 105,
                "nome": "Salvaterra"
              },
              {
                "municipio_id": 111,
                "nome": "Santa Maria Do Pará"
              },
              {
                "municipio_id": 106,
                "nome": "Santa Bárbara Do Pará"
              },
              {
                "municipio_id": 114,
                "nome": "Santarém Novo"
              },
              {
                "municipio_id": 107,
                "nome": "Santa Cruz Do Arari"
              },
              {
                "municipio_id": 108,
                "nome": "Santa Isabel Do Pará"
              },
              {
                "municipio_id": 109,
                "nome": "Santa Luzia Do Pará"
              },
              {
                "municipio_id": 110,
                "nome": "Santa Maria Das Barreiras"
              },
              {
                "municipio_id": 115,
                "nome": "Santo Antônio Do Tauá"
              },
              {
                "municipio_id": 117,
                "nome": "São Domingos Do Araguaia"
              },
              {
                "municipio_id": 116,
                "nome": "São Caetano De Odivelas"
              },
              {
                "municipio_id": 118,
                "nome": "São Domingos Do Capim"
              },
              {
                "municipio_id": 122,
                "nome": "São João Da Ponta"
              },
              {
                "municipio_id": 123,
                "nome": "São João De Pirabas"
              },
              {
                "municipio_id": 124,
                "nome": "São João Do Araguaia"
              },
              {
                "municipio_id": 125,
                "nome": "São Miguel Do Guamá"
              },
              {
                "municipio_id": 126,
                "nome": "São Sebastião Da Boa Vista"
              },
              {
                "municipio_id": 127,
                "nome": "Sapucaia"
              },
              {
                "municipio_id": 129,
                "nome": "Soure"
              },
              {
                "municipio_id": 132,
                "nome": "Terra Santa"
              },
              {
                "municipio_id": 133,
                "nome": "Tomé-Açu"
              },
              {
                "municipio_id": 134,
                "nome": "Tracuateua"
              },
              {
                "municipio_id": 135,
                "nome": "Trairão"
              },
              {
                "municipio_id": 136,
                "nome": "Tucumã"
              },
              {
                "municipio_id": 137,
                "nome": "Tucuruí"
              },
              {
                "municipio_id": 138,
                "nome": "Ulianópolis"
              },
              {
                "municipio_id": 140,
                "nome": "Vigia"
              },
              {
                "municipio_id": 142,
                "nome": "Vitória Do Xingu"
              },
              {
                "municipio_id": 143,
                "nome": "Xinguara"
              }
            ],
            "outorgas": [
              {
                "outorga_id": 31,
                "num_outorga": "22019/2015",
                "validade": "2019-10-07T03:00:00.000Z"
              },
              {
                "outorga_id": 1,
                "num_outorga": "1918/2015",
                "validade": "2019-07-09T03:00:00.000Z"
              },
              {
                "outorga_id": 2,
                "num_outorga": "889/2013",
                "validade": "2017-02-05T03:00:00.000Z"
              },
              {
                "outorga_id": 3,
                "num_outorga": "649/2011",
                "validade": "2013-08-23T03:00:00.000Z"
              },
              {
                "outorga_id": 4,
                "num_outorga": "2392/2016",
                "validade": "2020-03-30T03:00:00.000Z"
              },
              {
                "outorga_id": 5,
                "num_outorga": "2099/2016",
                "validade": "2020-01-04T03:00:00.000Z"
              },
              {
                "outorga_id": 7,
                "num_outorga": "2051/2015",
                "validade": "2019-11-18T03:00:00.000Z"
              },
              {
                "outorga_id": 8,
                "num_outorga": "2058/2015",
                "validade": "2019-11-18T03:00:00.000Z"
              },
              {
                "outorga_id": 9,
                "num_outorga": "2246/2015",
                "validade": "2019-12-28T03:00:00.000Z"
              },
              {
                "outorga_id": 10,
                "num_outorga": "2185/2015",
                "validade": "2019-12-13T03:00:00.000Z"
              },
              {
                "outorga_id": 11,
                "num_outorga": "2101/2016",
                "validade": "2020-01-19T03:00:00.000Z"
              },
              {
                "outorga_id": 12,
                "num_outorga": "2840/2017",
                "validade": "2022-05-14T03:00:00.000Z"
              },
              {
                "outorga_id": 13,
                "num_outorga": "3110/2017",
                "validade": "2023-01-14T03:00:00.000Z"
              },
              {
                "outorga_id": 14,
                "num_outorga": "2496/2016",
                "validade": "2021-12-25T03:00:00.000Z"
              },
              {
                "outorga_id": 15,
                "num_outorga": "2206/2015",
                "validade": "2019-12-13T03:00:00.000Z"
              },
              {
                "outorga_id": 16,
                "num_outorga": "970/2014",
                "validade": "2018-12-08T03:00:00.000Z"
              },
              {
                "outorga_id": 17,
                "num_outorga": "73/2014",
                "validade": "2018-10-28T03:00:00.000Z"
              },
              {
                "outorga_id": 18,
                "num_outorga": "2334/2015",
                "validade": "2019-12-01T03:00:00.000Z"
              },
              {
                "outorga_id": 19,
                "num_outorga": "940/2018",
                "validade": "2020-08-16T03:00:00.000Z"
              },
              {
                "outorga_id": 20,
                "num_outorga": "1752/2015",
                "validade": "2019-03-29T03:00:00.000Z"
              },
              {
                "outorga_id": 21,
                "num_outorga": "2837/2017",
                "validade": "2022-05-16T03:00:00.000Z"
              },
              {
                "outorga_id": 22,
                "num_outorga": "2729/2017",
                "validade": "2022-01-16T03:00:00.000Z"
              },
              {
                "outorga_id": 23,
                "num_outorga": "2796/2016",
                "validade": "2022-03-23T03:00:00.000Z"
              },
              {
                "outorga_id": 24,
                "num_outorga": "1827/2015",
                "validade": "2019-06-14T03:00:00.000Z"
              },
              {
                "outorga_id": 25,
                "num_outorga": "1722/2015",
                "validade": "2019-02-26T03:00:00.000Z"
              },
              {
                "outorga_id": 26,
                "num_outorga": "3061/2017",
                "validade": "2022-12-19T03:00:00.000Z"
              },
              {
                "outorga_id": 28,
                "num_outorga": "3240/2018",
                "validade": "2023-08-12T17:33:06.000Z"
              },
              {
                "outorga_id": 30,
                "num_outorga": "3186/2018",
                "validade": "2023-04-10T03:00:00.000Z"
              },
              {
                "outorga_id": 32,
                "num_outorga": "2209/2015",
                "validade": "2019-10-07T03:00:00.000Z"
              },
              {
                "outorga_id": 34,
                "num_outorga": "2232/2015",
                "validade": "2019-12-28T03:00:00.000Z"
              },
              {
                "outorga_id": 35,
                "num_outorga": "2783/2017",
                "validade": "2022-03-08T03:00:00.000Z"
              },
              {
                "outorga_id": 36,
                "num_outorga": "2650/2016",
                "validade": "2021-11-03T03:00:00.000Z"
              },
              {
                "outorga_id": 37,
                "num_outorga": "2993/2017",
                "validade": "2022-10-16T03:00:00.000Z"
              },
              {
                "outorga_id": 40,
                "num_outorga": "406/2016",
                "validade": "2037-06-25T03:00:00.000Z"
              },
              {
                "outorga_id": 41,
                "num_outorga": "199/2015",
                "validade": "2041-08-17T03:00:00.000Z"
              },
              {
                "outorga_id": 42,
                "num_outorga": "3208/2018",
                "validade": "2023-05-20T03:00:00.000Z"
              },
              {
                "outorga_id": 43,
                "num_outorga": "2778/2018",
                "validade": "2022-02-13T03:00:00.000Z"
              },
              {
                "outorga_id": 44,
                "num_outorga": "443/2015",
                "validade": "2017-01-15T03:00:00.000Z"
              },
              {
                "outorga_id": 46,
                "num_outorga": "310/2015",
                "validade": "2041-06-10T03:00:00.000Z"
              },
              {
                "outorga_id": 47,
                "num_outorga": "645/2011",
                "validade": "2014-08-23T03:00:00.000Z"
              },
              {
                "outorga_id": 48,
                "num_outorga": "683/2011",
                "validade": "2013-10-20T03:00:00.000Z"
              },
              {
                "outorga_id": 49,
                "num_outorga": "816/2011",
                "validade": "2016-11-13T03:00:00.000Z"
              },
              {
                "outorga_id": 50,
                "num_outorga": "922/2013",
                "validade": "2017-04-22T03:00:00.000Z"
              },
              {
                "outorga_id": 51,
                "num_outorga": "736/2012",
                "validade": "2016-04-18T03:00:00.000Z"
              },
              {
                "outorga_id": 52,
                "num_outorga": "670/2011",
                "validade": "2013-09-26T03:00:00.000Z"
              },
              {
                "outorga_id": 53,
                "num_outorga": "923/2013",
                "validade": "2017-02-27T03:00:00.000Z"
              },
              {
                "outorga_id": 54,
                "num_outorga": "752/2012",
                "validade": "2016-07-16T03:00:00.000Z"
              },
              {
                "outorga_id": 55,
                "num_outorga": "2506/2018",
                "validade": "2018-04-28T03:00:00.000Z"
              },
              {
                "outorga_id": 56,
                "num_outorga": "1067/2018",
                "validade": "2037-06-25T03:00:00.000Z"
              },
              {
                "outorga_id": 57,
                "num_outorga": "2997/2018",
                "validade": "2023-01-21T03:00:00.000Z"
              },
              {
                "outorga_id": 58,
                "num_outorga": "2777/2017",
                "validade": "2022-02-13T03:00:00.000Z"
              },
              {
                "outorga_id": 59,
                "num_outorga": "1271/2018",
                "validade": "2024-08-28T03:00:00.000Z"
              },
              {
                "outorga_id": 60,
                "num_outorga": "806/2015",
                "validade": "2033-06-20T03:00:00.000Z"
              },
              {
                "outorga_id": 61,
                "num_outorga": "2515/2016",
                "validade": "2021-12-11T03:00:00.000Z"
              },
              {
                "outorga_id": 62,
                "num_outorga": "2516/2016",
                "validade": "2021-12-11T03:00:00.000Z"
              },
              {
                "outorga_id": 63,
                "num_outorga": "3578/2019",
                "validade": "2024-03-06T03:00:00.000Z"
              },
              {
                "outorga_id": 64,
                "num_outorga": "1011/2019",
                "validade": "2021-02-05T03:00:00.000Z"
              },
              {
                "outorga_id": 65,
                "num_outorga": "746/2019",
                "validade": null
              },
              {
                "outorga_id": 66,
                "num_outorga": "676/2019",
                "validade": "2029-04-12T03:00:00.000Z"
              },
              {
                "outorga_id": 67,
                "num_outorga": "3676/2019",
                "validade": "2024-05-19T03:00:00.000Z"
              },
              {
                "outorga_id": 68,
                "num_outorga": "3729/2019",
                "validade": "2024-06-08T03:00:00.000Z"
              },
              {
                "outorga_id": 69,
                "num_outorga": "3740/2019",
                "validade": "2024-05-25T03:00:00.000Z"
              },
              {
                "outorga_id": 70,
                "num_outorga": "3819/2019",
                "validade": "2024-07-28T03:00:00.000Z"
              },
              {
                "outorga_id": 71,
                "num_outorga": "3821/2019",
                "validade": "2024-07-28T03:00:00.000Z"
              }
            ],
            "licenças": [],
            "processos": [
              {
                "processo_id": "1",
                "num_processo": "46861/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "2",
                "num_processo": "30392/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "3",
                "num_processo": "30382/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "4",
                "num_processo": "30391/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "5",
                "num_processo": "30390/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "6",
                "num_processo": "30387/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "7",
                "num_processo": "30386/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "8",
                "num_processo": "30383/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "9",
                "num_processo": "51349/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "10",
                "num_processo": "25844/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "11",
                "num_processo": "20206/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "12",
                "num_processo": "5781/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "13",
                "num_processo": "40379/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "14",
                "num_processo": "6462/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "15",
                "num_processo": "8057/2018",
                "situaçao": "Com notificação não respondida"
              },
              {
                "processo_id": "16",
                "num_processo": "59296/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "17",
                "num_processo": "30599/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "18",
                "num_processo": "50415/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "19",
                "num_processo": "50418/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "20",
                "num_processo": "8052/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "21",
                "num_processo": "50413/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "22",
                "num_processo": "50419/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "23",
                "num_processo": "57326/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "24",
                "num_processo": "50419/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "25",
                "num_processo": "50406/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "26",
                "num_processo": "50410/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "27",
                "num_processo": "43601/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "28",
                "num_processo": "12503/2019",
                "situaçao": "Em processo"
              },
              {
                "processo_id": "29",
                "num_processo": "12505/2019",
                "situaçao": "Em processo"
              },
              {
                "processo_id": "30",
                "num_processo": "3515/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "31",
                "num_processo": "3517/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "32",
                "num_processo": "3518/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "33",
                "num_processo": "3508/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "34",
                "num_processo": "3512/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "35",
                "num_processo": "5567/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "36",
                "num_processo": "5569/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "37",
                "num_processo": "12189/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "38",
                "num_processo": "12187/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "39",
                "num_processo": "12188/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "40",
                "num_processo": "12195/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "41",
                "num_processo": "12198/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "42",
                "num_processo": "12191/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "43",
                "num_processo": "13952/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "44",
                "num_processo": "13955/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "45",
                "num_processo": "16856/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "46",
                "num_processo": "57308/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "47",
                "num_processo": "57296/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "48",
                "num_processo": "57328/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "49",
                "num_processo": "57313/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "50",
                "num_processo": "57315/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "51",
                "num_processo": "57324/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "52",
                "num_processo": "57286/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "53",
                "num_processo": "57304/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "54",
                "num_processo": "17256/2019",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "55",
                "num_processo": "45412/2018",
                "situaçao": "Em análise"
              },
              {
                "processo_id": "56",
                "num_processo": "8184/2018",
                "situaçao": "Notificação respondida"
              }
            ],
            "autosInfraçao": [],
            "notificaçoes": [],
            "analisesFQB": [
              {
                "analise_id": 1,
                "numafq": "075/2017",
                "numab": "16/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 2,
                "numafq": "076/2017",
                "numab": "17/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 3,
                "numafq": "078/2017",
                "numab": "18/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 4,
                "numafq": "079/2017",
                "numab": "19/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 5,
                "numafq": "080/2017",
                "numab": "20/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 6,
                "numafq": "082/2017",
                "numab": "21/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 7,
                "numafq": "083/2017",
                "numab": "15/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 8,
                "numafq": "113/2017",
                "numab": "032/2017",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 9,
                "numafq": "46/2018",
                "numab": "62/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 10,
                "numafq": "48/2018",
                "numab": "58/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 11,
                "numafq": "49/2018",
                "numab": "59/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 12,
                "numafq": "47/2018",
                "numab": "57/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 13,
                "numafq": "182/2018",
                "numab": "105/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 14,
                "numafq": "183/2018",
                "numab": "106/2048",
                "potabilidade": "Não"
              },
              {
                "analise_id": 15,
                "numafq": null,
                "numab": "409/2007",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 16,
                "numafq": "146/2003",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 17,
                "numafq": "056/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 18,
                "numafq": "228/2014",
                "numab": "299/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 19,
                "numafq": "223/2014",
                "numab": "295/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 20,
                "numafq": "178/2015",
                "numab": "756/2015",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 21,
                "numafq": "176/2015",
                "numab": "755/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 22,
                "numafq": "176/2015",
                "numab": "755/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 23,
                "numafq": "009/2019",
                "numab": "008/2019",
                "potabilidade": "Não"
              },
              {
                "analise_id": 24,
                "numafq": "528/2018",
                "numab": "1106/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 25,
                "numafq": "231/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 26,
                "numafq": "011/2018",
                "numab": "016/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 27,
                "numafq": "594/2011",
                "numab": "1002/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 28,
                "numafq": "428/2018",
                "numab": "479/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 29,
                "numafq": "010/2019",
                "numab": "009/2019",
                "potabilidade": "Não"
              },
              {
                "analise_id": 30,
                "numafq": "667/2018",
                "numab": "1238/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 31,
                "numafq": "013/2018",
                "numab": "017/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 32,
                "numafq": "662/2008",
                "numab": "1237/2008",
                "potabilidade": "Não"
              },
              {
                "analise_id": 33,
                "numafq": "426/2018",
                "numab": "476/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 34,
                "numafq": "661/2008",
                "numab": "1239/2008",
                "potabilidade": "Não"
              },
              {
                "analise_id": 35,
                "numafq": "111/2009",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 36,
                "numafq": "90/2015",
                "numab": "354/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 37,
                "numafq": "198/2018",
                "numab": "261/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 38,
                "numafq": "144/2015",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 39,
                "numafq": "133/2018",
                "numab": "262/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 40,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 41,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 42,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 43,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 44,
                "numafq": "568/2011",
                "numab": "955/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 45,
                "numafq": "569/2011",
                "numab": "956/2011",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 46,
                "numafq": "566/2011",
                "numab": "952/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 47,
                "numafq": "565/2011",
                "numab": "951/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 48,
                "numafq": "567/2011",
                "numab": "953/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 49,
                "numafq": "564/2011",
                "numab": "950/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 50,
                "numafq": "484/2018",
                "numab": "542/2018",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 51,
                "numafq": "179/2015",
                "numab": "753/2015",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 52,
                "numafq": "373/2018",
                "numab": "397/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 53,
                "numafq": "51/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 54,
                "numafq": "432/2015",
                "numab": "611/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 55,
                "numafq": "480/2016",
                "numab": "610/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 56,
                "numafq": "151/2018",
                "numab": "258/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 57,
                "numafq": "177/2015",
                "numab": "754/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 58,
                "numafq": "374/2018",
                "numab": "398/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 59,
                "numafq": "603/2011",
                "numab": "1010/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 60,
                "numafq": "153/2018",
                "numab": "204/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 61,
                "numafq": "593/2011",
                "numab": "1003/2011",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 62,
                "numafq": "594/2011",
                "numab": "1002/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 63,
                "numafq": "111/2012",
                "numab": "153/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 64,
                "numafq": "453/2013",
                "numab": "489/2013",
                "potabilidade": "Não"
              },
              {
                "analise_id": 65,
                "numafq": "342/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 66,
                "numafq": "007/2018",
                "numab": "012/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 67,
                "numafq": "142/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 68,
                "numafq": "377/2018",
                "numab": "299/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 69,
                "numafq": "009/2018",
                "numab": "013/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 70,
                "numafq": "343/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 71,
                "numafq": "50/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 72,
                "numafq": "435/2015",
                "numab": "617/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 73,
                "numafq": "481/2016",
                "numab": "609/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 74,
                "numafq": "304/2012",
                "numab": "434/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 75,
                "numafq": "070/2012",
                "numab": "114/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 76,
                "numafq": "344/2018",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 77,
                "numafq": "144/2018",
                "numab": "182/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 78,
                "numafq": "482/2018",
                "numab": "608/2019",
                "potabilidade": "Não"
              },
              {
                "analise_id": 79,
                "numafq": "305/2012",
                "numab": "435/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 80,
                "numafq": "1838/06",
                "numab": "1015/06",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 81,
                "numafq": "071/2012",
                "numab": "115/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 82,
                "numafq": "468/2018",
                "numab": "523/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 83,
                "numafq": "433/2015",
                "numab": "612/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 84,
                "numafq": "143/2018",
                "numab": "183/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 85,
                "numafq": "470/2018",
                "numab": "524/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 86,
                "numafq": "250/2014",
                "numab": "326/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 87,
                "numafq": "258/06",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 88,
                "numafq": "142/2018",
                "numab": "184/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 89,
                "numafq": "006/2018",
                "numab": "006/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 90,
                "numafq": "100/2018",
                "numab": "130/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 91,
                "numafq": "284/2014",
                "numab": "324/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 92,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 93,
                "numafq": null,
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 94,
                "numafq": "439/2016",
                "numab": "589/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 95,
                "numafq": "124/2016",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 96,
                "numafq": "117/2017",
                "numab": "150/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 97,
                "numafq": "099/2012",
                "numab": "145/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 98,
                "numafq": "099/2015",
                "numab": "117/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 99,
                "numafq": "125/2016",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 100,
                "numafq": "114/2017",
                "numab": "148/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 101,
                "numafq": "100/2015",
                "numab": "118/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 102,
                "numafq": "126/2016",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 103,
                "numafq": "098/2012",
                "numab": "146/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 104,
                "numafq": "127/2016",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 105,
                "numafq": "115/2017",
                "numab": "149/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 106,
                "numafq": "118/2017",
                "numab": "0151/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 107,
                "numafq": "292/85",
                "numab": null,
                "potabilidade": "Sim"
              },
              {
                "analise_id": 108,
                "numafq": "2544/83",
                "numab": null,
                "potabilidade": "Sim"
              },
              {
                "analise_id": 109,
                "numafq": "807/83",
                "numab": null,
                "potabilidade": "Sim"
              },
              {
                "analise_id": 110,
                "numafq": "470/2016",
                "numab": "588/2016",
                "potabilidade": null
              },
              {
                "analise_id": 111,
                "numafq": "284/2014",
                "numab": "182/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 112,
                "numafq": "260/2014",
                "numab": "172/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 113,
                "numafq": "532/2014",
                "numab": "277/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 114,
                "numafq": "410/2014",
                "numab": "199/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 115,
                "numafq": "283/2014",
                "numab": "181/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 116,
                "numafq": "283/2014",
                "numab": "181/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 117,
                "numafq": "313/2014",
                "numab": "188/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 118,
                "numafq": "316/2014",
                "numab": "190/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 119,
                "numafq": "409/2014",
                "numab": "193/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 120,
                "numafq": "409/2014",
                "numab": "193/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 121,
                "numafq": "414/2011",
                "numab": "821/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 122,
                "numafq": "415/2011",
                "numab": "822/2011",
                "potabilidade": null
              },
              {
                "analise_id": 123,
                "numafq": "253/2014",
                "numab": null,
                "potabilidade": null
              },
              {
                "analise_id": 124,
                "numafq": "116636",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 125,
                "numafq": "420/2016",
                "numab": "765/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 126,
                "numafq": "419/2016",
                "numab": "764/2016",
                "potabilidade": null
              },
              {
                "analise_id": 127,
                "numafq": "310/2016",
                "numab": "406/2016",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 128,
                "numafq": "308/2016",
                "numab": "407/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 129,
                "numafq": "309/2016",
                "numab": "405/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 130,
                "numafq": "557/2013",
                "numab": "663/2013",
                "potabilidade": "Não"
              },
              {
                "analise_id": 131,
                "numafq": "261/2012",
                "numab": "404/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 132,
                "numafq": "225/2018",
                "numab": "291/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 133,
                "numafq": "239/2017",
                "numab": "290/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 134,
                "numafq": "261/2012",
                "numab": "404/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 135,
                "numafq": "69/2015",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 136,
                "numafq": "415/2017",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 137,
                "numafq": "059/2017",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 138,
                "numafq": "413/2017",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 139,
                "numafq": "057/2017",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 140,
                "numafq": "67/2015",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 141,
                "numafq": "416/2017",
                "numab": "02/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 142,
                "numafq": "414/2017",
                "numab": "01/2017",
                "potabilidade": null
              },
              {
                "analise_id": 143,
                "numafq": "68/2015",
                "numab": "01/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 144,
                "numafq": "149/2015",
                "numab": "195/2015",
                "potabilidade": "Não"
              },
              {
                "analise_id": 145,
                "numafq": "067/2012",
                "numab": "111/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 146,
                "numafq": "544/2017",
                "numab": "680/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 147,
                "numafq": "544/2017",
                "numab": "680/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 148,
                "numafq": "135/2016",
                "numab": "155/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 149,
                "numafq": "118/2018",
                "numab": "151/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 150,
                "numafq": "419/2014",
                "numab": "556/2014",
                "potabilidade": null
              },
              {
                "analise_id": 151,
                "numafq": "151/2018",
                "numab": "199/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 152,
                "numafq": "079/2019",
                "numab": "087/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 153,
                "numafq": "542/2014",
                "numab": "674/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 154,
                "numafq": "420/2014",
                "numab": "557/2014",
                "potabilidade": "Não"
              },
              {
                "analise_id": 156,
                "numafq": "274/2018",
                "numab": "351/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 157,
                "numafq": "152/2018",
                "numab": "200/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 158,
                "numafq": "080/2016",
                "numab": "086/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 159,
                "numafq": "559/2013",
                "numab": "665/2013",
                "potabilidade": "Não"
              },
              {
                "analise_id": 160,
                "numafq": "436/2011",
                "numab": "857/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 161,
                "numafq": "433/2011",
                "numab": "855/2011",
                "potabilidade": "Não"
              },
              {
                "analise_id": 162,
                "numafq": "103/2016",
                "numab": "028/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 163,
                "numafq": "104/2016",
                "numab": "029/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 164,
                "numafq": "403/2018",
                "numab": "437/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 165,
                "numafq": "498/2018",
                "numab": "577/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 166,
                "numafq": "285/2018",
                "numab": "367/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 167,
                "numafq": "499/2018",
                "numab": "579/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 168,
                "numafq": "400/2018",
                "numab": "438/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 169,
                "numafq": "401/2018",
                "numab": "439/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 170,
                "numafq": "500/2018",
                "numab": "580/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 171,
                "numafq": "501/2018",
                "numab": "578/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 172,
                "numafq": "495/2018",
                "numab": "581/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 173,
                "numafq": "496/2018",
                "numab": "582/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 174,
                "numafq": "289/2018",
                "numab": "268/2018",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 175,
                "numafq": "286/2018",
                "numab": "369/2018",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 176,
                "numafq": "287/2018",
                "numab": "370/2018",
                "potabilidade": "Não"
              },
              {
                "analise_id": 177,
                "numafq": "288/2018",
                "numab": "366/2018",
                "potabilidade": "Sim"
              },
              {
                "analise_id": 178,
                "numafq": "1165",
                "numab": "1811",
                "potabilidade": "Não"
              },
              {
                "analise_id": 179,
                "numafq": "1166",
                "numab": "1812",
                "potabilidade": "Não"
              },
              {
                "analise_id": 180,
                "numafq": "1167",
                "numab": "1813",
                "potabilidade": "Não"
              },
              {
                "analise_id": 181,
                "numafq": "1168",
                "numab": "1814",
                "potabilidade": "Não"
              },
              {
                "analise_id": 182,
                "numafq": "1169",
                "numab": "1815",
                "potabilidade": "Não"
              },
              {
                "analise_id": 183,
                "numafq": "452/2016",
                "numab": null,
                "potabilidade": "Não"
              },
              {
                "analise_id": 184,
                "numafq": "336/2016",
                "numab": "362/2016",
                "potabilidade": "Não"
              },
              {
                "analise_id": 185,
                "numafq": "1164/07",
                "numab": "1810/07",
                "potabilidade": "Não"
              },
              {
                "analise_id": 186,
                "numafq": "272/2012",
                "numab": "407/2012",
                "potabilidade": "Não"
              },
              {
                "analise_id": 187,
                "numafq": "513/2017",
                "numab": "633/2017L",
                "potabilidade": "Não"
              },
              {
                "analise_id": 188,
                "numafq": "232/2017",
                "numab": "284/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 189,
                "numafq": "514/2017",
                "numab": "634/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 190,
                "numafq": "233/2017",
                "numab": "285/2017",
                "potabilidade": null
              },
              {
                "analise_id": 191,
                "numafq": "515/2017",
                "numab": "635/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 192,
                "numafq": "234/2017",
                "numab": "286/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 193,
                "numafq": "516/2017",
                "numab": "636/2017",
                "potabilidade": null
              },
              {
                "analise_id": 194,
                "numafq": "518/2017",
                "numab": "638/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 195,
                "numafq": "238/2017",
                "numab": "288/2017",
                "potabilidade": "Não"
              },
              {
                "analise_id": 196,
                "numafq": "517/2017",
                "numab": null,
                "potabilidade": null
              },
              {
                "analise_id": 155,
                "numafq": "344/2017",
                "numab": "417/2017",
                "potabilidade": "Não"
              }
            ],
            "oficios": [],
            "orgaos": [],
            "situaçoes": []
          }
        this.tables = tables;
    }

    async update(){
        //UPDATE A FEATURE AND RELOAD INFOS
    }

    getFeaturesProperties(layer){
      
      const tableFeatures = this.tables[layer].features;

      const layerFeatures = []
      for (let i = 0; i < tableFeatures.length; i++) {
        layerFeatures.push(tableFeatures[i].properties);
      }
      return layerFeatures;
    }

    search(query, table, tableNameQuery, tableLabelQuery, labelColumn){
        //MAKE THE QUERY IN ALL THE TABLES AND RETURN THE VALUES OF KEYS AND NAMES
        let queryLower = query.toLowerCase();
        
        //FILTER VALUES TO THE MATCH ARRAY
	      let match = table.filter((value) => {
          if(value[labelColumn] === undefined){
            return false;
          }

          const valueLower = value[labelColumn].toLowerCase();
          
          if(valueLower.includes(queryLower)){
            return value;
          }else {
            return false;
          }
        });
        
        //RETURN THE LI ELEMENTS
        let elements = [];
        for (let i = 0; i < match.length; i++) {
          let val = getKeyValues(match[i]).values;
          elements.push({
            tableName: tableNameQuery,
            tableLabel: tableLabelQuery,
            id: val[0],
            label: val[1]
          });
        }
        return elements;
    }

    //console.log(tableData.searchByID(tablesKeys.uns, 'un_id', 2, 'nome'));
    searchByID(table, key, queryID, property){
        let s = this.tables[table];
        if(s.properties){
            s = s.properties;
        }
        for(let i in s) {
            let id = s[i][key];
            if (id === queryID){
                return s[i][property];
            }
        }
    }
}