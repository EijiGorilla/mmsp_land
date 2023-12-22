import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, TextSymbol, SimpleLineSymbol } from '@arcgis/core/symbols';

/* Station Box */
// let stationBoxRenderer = new UniqueValueRenderer({
//   field: 'Layer',
//   uniqueValueInfos: [
//     {
//       value: 'U-Shape Retaining Wall',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Cut & Cover Box',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'TBM Shaft',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'TBM',
//       symbol: new SimpleFillSymbol({
//         color: [178, 178, 178],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.5,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Station Platform',
//       symbol: new SimpleFillSymbol({
//         color: [240, 204, 230],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.4,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Station Box',
//       symbol: new SimpleFillSymbol({
//         color: [0, 0, 0, 0],
//         outline: {
//           width: 2,
//           color: 'red',
//         },
//       }),
//     },
//     {
//       value: 'NATM',
//       symbol: new SimpleFillSymbol({
//         color: [178, 178, 178, 0],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.5,
//           color: 'grey',
//         },
//       }),
//     },
//   ],
// });

export const stationBoxLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 8,
  // renderer: stationBoxRenderer,
  minScale: 150000,
  maxScale: 0,
  title: 'Station Box',
  outFields: ['*'],
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Land */

const lotColor = [
  [112, 173, 71],
  [0, 112, 255],
  [255, 255, 0],
  [255, 170, 0],
  [255, 0, 0],
  [0, 115, 76],
  '#55FF00',
];

const defaultSymbolLot = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: new SimpleLineSymbol({
    color: [110, 110, 110],
    width: 0.7,
  }),
});

const lotLayerStatusRenderer = new UniqueValueRenderer({
  field: 'StatusNVS3',
  defaultSymbol: defaultSymbolLot,
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Paid',
      symbol: new SimpleFillSymbol({
        color: lotColor[0],
      }),
    },
    {
      value: 2,
      label: 'For Payment Processing',
      symbol: new SimpleFillSymbol({
        color: lotColor[1],
      }),
    },
    {
      value: 3,
      label: 'For Legal Pass',
      symbol: new SimpleFillSymbol({
        color: lotColor[2],
      }),
    },
    {
      value: 4,
      label: 'For Appraisal/Offer to Buy',
      symbol: new SimpleFillSymbol({
        color: lotColor[3],
      }),
    },
    {
      value: 5,
      label: 'For Expro',
      symbol: new SimpleFillSymbol({
        color: lotColor[4],
      }),
    },
    {
      value: 6,
      label: 'with WOP Fully Turned-over',
      symbol: new SimpleFillSymbol({
        color: lotColor[5],
      }),
    },
    {
      value: 7,
      label: 'ROWUA/TUA',
      symbol: new SimpleFillSymbol({
        color: lotColor[6],
      }),
    },
  ],
});

const lotLabel = new LabelClass({
  symbol: new TextSymbol({
    color: 'black',
    font: {
      size: 8,
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.CN',
  },
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  title: 'Land Acquisition',
  labelingInfo: [lotLabel],
  renderer: lotLayerStatusRenderer,
  popupTemplate: {
    title: '<p>{Id}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'OWNER',
            label: 'Land Owner',
          },
          {
            fieldName: 'Station1',
          },
          {
            fieldName: 'StatusNVS3',
            label: '<p>Status of Land Acquisition</p>',
          },
        ],
      },
    ],
  },
});

/* Lot boundary only */
const lotLayerBoundaryRenderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    style: 'solid',
    outline: {
      color: [110, 110, 110],
      width: 1.5,
    },
  }),
});

const lotLayerBoundaryLabel = new LabelClass({
  symbol: new TextSymbol({
    color: 'white',
    font: {
      // autocast as new Font()
      family: 'Gill Sans',
      size: 8,
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.CN',
  },
});

export const lotLayerBoundary = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  title: 'Lot Boundary',
  renderer: lotLayerBoundaryRenderer,
  labelingInfo: [lotLayerBoundaryLabel],
});

/* Handed-Over Lot */
const handedOverRenderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: '#FF00C5',
    style: 'solid',
    outline: new SimpleLineSymbol({
      color: [110, 110, 110],
      width: 0.5,
    }),
  }),
});

export const handedOverLotLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  definitionExpression: 'HandedOver = 1',
  title: 'Handed-Over Lots',
  renderer: handedOverRenderer,
  popupEnabled: false,
});

/* Handed-Over Subterranean Lot */
export const pteLotSubteLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  // eslint-disable-next-line no-useless-concat
  definitionExpression: "Type = 'Subterranean'" + ' AND ' + 'PTE = 1',
  title: 'PTE Subterranean Lots',
  renderer: handedOverRenderer,
  popupEnabled: false,
});

/* Structure Layer */
const colorStructure = [
  [112, 173, 71], // Paid #70AD47
  [0, 112, 255], // For Payment Processing #0070FF
  [255, 255, 0], // For Legal Pass #FFFF00
  [255, 170, 0], // For Appraisal/Offer to Compensate #FFAA00
  [255, 0, 0], // For Expro #FF0000
  [0, 115, 76], //Quit Claim #00734C
];

const defaultLotSymbolBoundary = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    style: 'short-dash',
    color: [215, 215, 158],
    width: 1.5,
  },
});

export const structureLayerRenderer = new UniqueValueRenderer({
  field: 'Status',
  defaultSymbol: defaultLotSymbolBoundary,
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Paid',
      symbol: new SimpleFillSymbol({
        color: colorStructure[0],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
    {
      value: 2,
      label: 'For Payment Processing',
      symbol: new SimpleFillSymbol({
        color: colorStructure[1],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
    {
      value: 3,
      label: 'For Legal Pass',
      symbol: new SimpleFillSymbol({
        color: colorStructure[2],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
    {
      value: 4,
      label: 'For Appraisal/Offer to Buy',
      symbol: new SimpleFillSymbol({
        color: colorStructure[3],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
    {
      value: 5,
      label: 'For Expro',
      symbol: new SimpleFillSymbol({
        color: colorStructure[4],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
    {
      value: 6,
      label: 'Quit Claim',
      symbol: new SimpleFillSymbol({
        color: colorStructure[5],
        style: 'backward-diagonal',
        outline: {
          color: '#6e6e6e',
          width: 0.7,
        },
      }),
    },
  ],
});

export const structureLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'Existing Structure',
  outFields: ['*'],
  renderer: structureLayerRenderer,
  popupTemplate: {
    title: 'Structure ID: <b>{STRUCTURE_TAG_NO_}</b>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'STATION',
            label: 'Station',
          },
          {
            fieldName: 'Status',
            label: '<b>Status of Structure</b>',
          },
          {
            fieldName: 'LOT_OWNER',
            label: 'Lot Owner',
          },
        ],
      },
    ],
  },
});

/* Structure Demolished Layer */
const structureDemolishedRenderer = new UniqueValueRenderer({
  field: 'REMARKS',
  defaultSymbol: defaultLotSymbolBoundary, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      // All features with value of "North" will be blue
      value: 'Demolished',
      label: 'Demolished',
      symbol: new SimpleFillSymbol({
        color: '#FFAA00',
        style: 'solid', // "backward-diagonal"
        outline: {
          color: '#6E6E6E',
          width: 0.7,
        },
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 'Not Yet',
      label: 'Occupied',
      symbol: new SimpleFillSymbol({
        color: '#99A5A2',
        style: 'solid',
        outline: {
          color: '#6E6E6E',
          width: 0.7,
        },
      }),
    },
  ],
});

export const structureDemolishedLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'Demolished Structure',
  outFields: ['*'],
  renderer: structureDemolishedRenderer,
  popupTemplate: {
    title: 'Structure ID: <b>{STRUCTURE_TAG_NO_}</b>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'STATION',
            label: 'Station',
          },
          {
            fieldName: 'Status',
            label: '<b>Status of Structure</b>',
          },
          {
            fieldName: 'LOT_OWNER',
            label: 'Lot Owner',
          },
        ],
      },
    ],
  },
});

/* ISF Layer */
const colorIsf = ['#267300', '#FF0000'];

let isfRenderer = new UniqueValueRenderer({
  field: 'RELOCATION',
  uniqueValueInfos: [
    {
      value: 'RELOCATED',
      label: 'Relocated',
      symbol: new SimpleMarkerSymbol({
        size: 9,
        color: colorIsf[0], // the first two letters dictate transparency.
        outline: {
          width: 1.5,
          color: 'white',
        },
      }),
    },
    {
      value: 'FOR RELOCATION',
      label: 'For Relocation',
      symbol: new SimpleMarkerSymbol({
        size: 9,
        color: colorIsf[1], // the first two letters dictate transparency.
        outline: {
          width: 1.5,
          color: 'white',
        },
      }),
    },
  ],
});

export const isfLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 7,
  title: 'ISF (Informal Settlers Families)',
  outFields: ['*'],
  renderer: isfRenderer,
  labelsVisible: false,
});

/* Construction Boundary */
const ConstructionBoundaryFill = new UniqueValueRenderer({
  field: 'MappingBoundary',
  uniqueValueInfos: [
    {
      value: 1,
      label: '',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2.5,
          color: [255, 255, 255],
          style: 'short-dash',
        },
      }),
    },
  ],
});

export const constructionBoundaryLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  outFields: ['*'],
  renderer: ConstructionBoundaryFill,
  definitionExpression: 'MappingBoundary = 1',
  title: 'Construction Boundary',
  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupEnabled: false,
});

/* Alignment Line */
export const alignmentLine = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 13,
  outFields: ['*'],
  title: 'Alignment',
  popupEnabled: false,
});

/* Segment DPWH */
export const dpwhSegmentLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'DPWH Segment',
  outFields: ['*'],
  popupEnabled: false,
});

/* Depot Building */
export const depotBuildingLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'Depot Building',
  outFields: ['*'],
  popupEnabled: false,
});

/* BSS Building */
export const bssDepotBuildingLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 7,
  title: 'BSS Building',
  outFields: ['*'],
  popupEnabled: false,
});

/* East Valenzuela */
export const evsLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 9,
  title: 'East Valenzuela Station',
  outFields: ['*'],
  popupEnabled: false,
});

/* NNC Construction boundary (Senate) */
export const senateBoundaryLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 5,
  title: 'NCC Property',
  outFields: ['*'],
  popupEnabled: false,
});

/* Station Layer */
const stationLabels = new LabelClass({
  labelExpressionInfo: { expression: '$feature.Station1' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 1,
    font: {
      size: 10,
      weight: 'bold',
    },
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  labelingInfo: [stationLabels],
  title: 'Station',
  definitionExpression: "Project = 'MMSP'",
  //screenSizePerspectiveEnabled: false, // gives constant size regardless of zoom
});
stationLayer.listMode = 'hide';

export const creekDivLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 10,
  title: 'Creek Diversion',
  outFields: ['*'],
  popupEnabled: false,
});
