import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Print from '@arcgis/core/widgets/Print';
import Locate from '@arcgis/core/widgets/Locate.js';
import {
  lotLayer,
  structureLayer,
  stationBoxLayer,
  stationLayer,
  alignmentLine,
  isfLayer,
  creekDivLayer,
  evsLayer,
  constructionBoundaryLayer,
  senateBoundaryLayer,
  dpwhSegmentLayer,
  depotBuildingLayer,
  bssDepotBuildingLayer,
  structureDemolishedLayer,
  handedOverLotLayer,
  pteLotSubteLayer,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group Layers
const lotGroupLayer = new GroupLayer({
  title: 'Land',
  visible: true,
  visibilityMode: 'exclusive',
  layers: [pteLotSubteLayer, handedOverLotLayer, lotLayer],
});

const evsBoundaryPoGroupLayer = new GroupLayer({
  title: 'EVS Station/Creek',
  visible: false,
  visibilityMode: 'independent',
  layers: [creekDivLayer, evsLayer],
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, alignmentLine],
});

const boundaryGroupLayer = new GroupLayer({
  title: 'Boundary',
  visible: true,
  visibilityMode: 'independent',
  layers: [constructionBoundaryLayer, senateBoundaryLayer, dpwhSegmentLayer],
});

const depotBuildingsGroupLayer = new GroupLayer({
  title: 'Depot Buildings',
  visible: true,
  visibilityMode: 'independent',
  layers: [depotBuildingLayer, bssDepotBuildingLayer],
});

const structuresGroupLayer = new GroupLayer({
  title: 'Structures',
  visible: false,
  visibilityMode: 'independent',
  layers: [structureLayer, structureDemolishedLayer],
});

map.add(lotGroupLayer);
map.add(depotBuildingsGroupLayer);
map.add(evsBoundaryPoGroupLayer);
map.add(alignmentGroupLayer);
map.add(structuresGroupLayer);
map.add(isfLayer);
map.add(boundaryGroupLayer);
map.add(stationLayer);

export const view = new MapView({
  container: undefined,
  map,
  center: [121.0194387, 14.6972616],
  zoom: 12,
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Existing Structure' ||
    item.title === 'Demolished Structure' ||
    item.title === 'ISF (Informal Settlers Families)' ||
    item.title === 'East Valenzuela Station' ||
    item.title === 'Senate-DepEd Boundary' ||
    item.title === 'PTE Subterranean Lots' ||
    item.title === 'Handed-Over Lots' ||
    item.title === 'Structures' ||
    item.title === 'EVS Station/Creek'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: lotLayer,
    searchFields: ['ID'],
    displayField: 'ID',
    exactMatch: false,
    outFields: ['ID'],
    name: 'Lot No',
    placeholder: 'example: DP89',
    suggestionsEnabled: true,
    // filter: { where: "ID LIKE '%32266'" },
  },
  {
    layer: structureLayer,
    searchFields: ['Id_1'],
    displayField: 'Id',
    exactMatch: false,
    outFields: ['Id_1'],
    name: 'Structure ID',
    placeholder: 'example: QH-MMSP-02-01-S045C',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'LotID, StructureID',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});

const locateBtn = new Locate({
  view,
  // container: undefined,
});
view.ui.add(locateBtn, { position: 'top-right' });

// Printer
// const print = new Print({
//   view: view,
//   // specify your own print service
//   printServiceUrl:
//     'https://gis.railway-sector.com/server/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
// });

// view.ui.add(print, 'top-right');
