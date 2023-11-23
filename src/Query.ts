import { isfLayer, lotLayer, structureLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';

// For Lot Pie Chart
const statusLot: string[] = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'with WOP Fully Turned-over',
  'ROWUA/TUA',
];

export const statusLotChartQuery = [
  {
    category: statusLot[0],
    value: 1,
  },
  {
    category: statusLot[1],
    value: 2,
  },
  {
    category: statusLot[2],
    value: 3,
  },
  {
    category: statusLot[3],
    value: 4,
  },
  {
    category: statusLot[4],
    value: 5,
  },
  {
    category: statusLot[5],
    value: 6,
  },
  {
    category: statusLot[6],
    value: 7,
  },
];

// For Lot MoA Chart
const statusMOA: String[] = ['1-NVS', '2-Expropriation', '3-ROWUA'];

export const statusMoaLotChartQuery = [
  {
    category: statusMOA[0],
    value: 1,
  },
  {
    category: statusMOA[1],
    value: 2,
  },
  {
    category: statusMOA[2],
    value: 3,
  },
];

// For Structure Pie Chart
const statusStructure = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'Quit Claim',
];

export const statusStructureChartQuery = [
  {
    category: statusStructure[0],
    value: 1,
  },
  {
    category: statusStructure[1],
    value: 2,
  },
  {
    category: statusStructure[2],
    value: 3,
  },
  {
    category: statusStructure[3],
    value: 4,
  },
  {
    category: statusStructure[4],
    value: 5,
  },
  {
    category: statusStructure[5],
    value: 6,
  },
];

const statusMoaStructure = ['1-NVS', '2-Expropriation', '3-ROWUA'];

export const statusMoaStructureChartQuery = [
  {
    category: statusMoaStructure[0],
    value: 1,
  },
  {
    category: statusMoaStructure[1],
    value: 2,
  },
  {
    category: statusMoaStructure[2],
    value: 3,
  },
];

// Non-Land Owner
const statusNlo = ['UNRELOCATED', 'RELOCATED'];

export const statusNloChartQuery = [
  {
    category: statusNlo[0],
    value: 1,
  },
  {
    category: statusNlo[1],
    value: 2,
  },
];

export async function generateLotData() {
  var total_paid_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_paid_lot',
    statisticType: 'sum',
  });

  var total_payp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_payp_lot',
    statisticType: 'sum',
  });

  var total_legalpass_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_legalpass_lot',
    statisticType: 'sum',
  });

  var total_otb_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_otb_lot',
    statisticType: 'sum',
  });

  var total_expro_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_lot',
    statisticType: 'sum',
  });

  var total_dismiss_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_dismiss_lot',
    statisticType: 'sum',
  });

  var total_rowua_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 = 7 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_rowua_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [
    total_paid_lot,
    total_payp_lot,
    total_legalpass_lot,
    total_otb_lot,
    total_expro_lot,
    total_dismiss_lot,
    total_rowua_lot,
  ];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const paid = stats.total_paid_lot;
    const payp = stats.total_payp_lot;
    const legalpass = stats.total_legalpass_lot;
    const otb = stats.total_otb_lot;
    const expro = stats.total_expro_lot;
    const dismissal = stats.total_dismiss_lot;
    const rowua = stats.total_rowua_lot;

    const compile = [
      {
        category: statusLot[0],
        value: paid,
        sliceSettings: {
          fill: am5.color('#70ad47'),
        },
      },
      {
        category: statusLot[1],
        value: payp,
        sliceSettings: {
          fill: am5.color('#0070ff'),
        },
      },
      {
        category: statusLot[2],
        value: legalpass,
        sliceSettings: {
          fill: am5.color('#ffff00'),
        },
      },
      {
        category: statusLot[3],
        value: otb,
        sliceSettings: {
          fill: am5.color('#ffaa00'),
        },
      },
      {
        category: statusLot[4],
        value: expro,
        sliceSettings: {
          fill: am5.color('#ff0000'),
        },
      },
      {
        category: statusLot[5],
        value: dismissal,
        sliceSettings: {
          fill: am5.color('#00734c'),
        },
      },
      {
        category: statusLot[6],
        value: rowua,
        sliceSettings: {
          fill: am5.color('#55ff00'),
        },
      },
    ];
    return compile;
  });
}

export async function generateLotNumber() {
  var total_lot_number = new StatisticDefinition({
    onStatisticField: 'ID',
    outStatisticFieldName: 'total_lot_number',
    statisticType: 'count',
  });

  var total_lot_pie = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lot_pie',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_lot_number, total_lot_pie];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalLotNumber = stats.total_lot_number;
    const totalLotPie = stats.total_lot_pie;
    return [totalLotNumber, totalLotPie];
  });
}

// For Permit-to-Enter
export async function generateHandedOver() {
  var total_handedover_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN HandedOver = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_handedover_lot',
    statisticType: 'sum',
  });

  var total_lot_N = new StatisticDefinition({
    onStatisticField: 'ID',
    outStatisticFieldName: 'total_lot_N',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_handedover_lot, total_lot_N];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const handedover = stats.total_handedover_lot;
    const totaln = stats.total_lot_N;
    const percent = ((handedover / totaln) * 100).toFixed(0);
    return [percent, handedover];
  });
}

export async function generateLotMoaData() {
  var total_nvs_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_nvs_lot',
    statisticType: 'sum',
  });

  var total_expro_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_lot',
    statisticType: 'sum',
  });

  var total_rowua_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_rowua_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_nvs_lot, total_expro_lot, total_rowua_lot];
  query.returnGeometry = true;
  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const nvs = stats.total_nvs_lot;
    const expro = stats.total_expro_lot;
    const rowua = stats.total_rowua_lot;

    const compile = [
      {
        category: statusMOA[0],
        value: nvs,
      },
      {
        category: statusMOA[1],
        value: expro,
      },
      {
        category: statusMOA[2],
        value: rowua,
      },
    ];
    return compile;
  });
}

// For monthly progress chart of lot
export async function generateLotProgress(contractp: any, landtype: any, landsection: any) {
  var total_count_handover = new StatisticDefinition({
    onStatisticField: 'HandOverDate',
    outStatisticFieldName: 'total_count_handover',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_count_handover];
  // eslint-disable-next-line no-useless-concat
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  if (!contractp) {
    lotLayer.definitionExpression = '1=1';
  } else if (contractp && !landtype) {
    lotLayer.definitionExpression = qLandType;
  } else if (contractp && landtype) {
    lotLayer.definitionExpression = qCpLandType;
  } else {
    lotLayer.definitionExpression = qCpLandTypeSection;
  }

  query.outFields = ['HandOverDate'];
  query.orderByFields = ['HandOverDate'];
  query.groupByFieldsForStatistics = ['HandOverDate'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.HandedOverDate;
      const count = attributes.total_count_handover;

      // compile in object array
      return Object.assign({
        date: date,
        value: count,
      });
    });

    return data;
  });
}

export async function generateStructureData() {
  var total_paid_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_paid_struc',
    statisticType: 'sum',
  });

  var total_payp_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_payp_struc',
    statisticType: 'sum',
  });

  var total_legalpass_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_legalpass_struc',
    statisticType: 'sum',
  });

  var total_otc_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_otc_struc',
    statisticType: 'sum',
  });

  var total_expro_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_struc',
    statisticType: 'sum',
  });

  var total_quit_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_quit_struc',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();
  query.outStatistics = [
    total_paid_struc,
    total_payp_struc,
    total_legalpass_struc,
    total_otc_struc,
    total_expro_struc,
    total_quit_struc,
  ];
  query.returnGeometry = true;
  query.outFields = ['*'];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const paid = stats.total_paid_struc;
    const payp = stats.total_payp_struc;
    const legalpass = stats.total_legalpass_struc;
    const otc = stats.total_otc_struc;
    const expro = stats.total_expro_struc;
    const quit = stats.total_quit_struc;

    const compile = [
      {
        category: statusStructure[0],
        value: paid,
      },
      {
        category: statusStructure[1],
        value: payp,
      },
      {
        category: statusStructure[2],
        value: legalpass,
      },
      {
        category: statusStructure[3],
        value: otc,
      },
      {
        category: statusStructure[4],
        value: expro,
      },
      {
        category: statusStructure[5],
        value: quit,
      },
    ];
    return compile;
  });
}

// For Permit-to-Enter
export async function generateStrucNumber() {
  var total_demolished_structure = new StatisticDefinition({
    onStatisticField: "CASE WHEN REMARKS = 'Demolished' THEN 1 ELSE 0 END",
    outStatisticFieldName: 'total_demolished_structure',
    statisticType: 'sum',
  });

  var total_struc_forDemolished = new StatisticDefinition({
    onStatisticField: 'CASE WHEN REMARKS IS NOT NULL THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_struc_forDemolished',
    statisticType: 'sum',
  });

  var total_struc_N = new StatisticDefinition({
    onStatisticField: 'Id',
    outStatisticFieldName: 'total_struc_N',
    statisticType: 'count',
  });

  var total_pie_structure = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pie_structure',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();

  query.outStatistics = [
    total_demolished_structure,
    total_struc_forDemolished,
    total_struc_N,
    total_pie_structure,
  ];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const demolished = stats.total_demolished_structure;
    const totalnDemolished = stats.total_struc_forDemolished;
    const totaln = stats.total_struc_N;
    const totalpie = stats.total_pie_structure;
    const percDemolished = Number(((demolished / totalnDemolished) * 100).toFixed(0));
    return [percDemolished, demolished, totaln, totalpie];
  });
}

export async function generateStrucMoaData() {
  var total_nvs_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_nvs_struc',
    statisticType: 'sum',
  });

  var total_expro_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_struc',
    statisticType: 'sum',
  });

  var total_rowua_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN S_MOA = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_rowua_struc',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_nvs_struc, total_expro_struc, total_rowua_struc];
  query.returnGeometry = true;
  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const nvs = stats.total_nvs_struc;
    const expro = stats.total_expro_struc;
    const rowua = stats.total_rowua_struc;

    const compile = [
      {
        category: statusMoaStructure[0],
        value: nvs,
      },
      {
        category: statusMoaStructure[1],
        value: expro,
      },
      {
        category: statusMoaStructure[2],
        value: rowua,
      },
    ];
    return compile;
  });
}

export async function generateNloData() {
  var total_unrelocated_lot = new StatisticDefinition({
    onStatisticField: "CASE WHEN RELOCATION <> 'RELOCATED' THEN 1 ELSE 0 END",
    outStatisticFieldName: 'total_unrelocated_lot',
    statisticType: 'sum',
  });

  var total_relocated_lot = new StatisticDefinition({
    onStatisticField: "CASE WHEN RELOCATION = 'RELOCATED' THEN 1 ELSE 0 END",
    outStatisticFieldName: 'total_relocated_lot',
    statisticType: 'sum',
  });

  var query = isfLayer.createQuery();
  query.outStatistics = [total_unrelocated_lot, total_relocated_lot];
  query.returnGeometry = true;

  return isfLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const unrelocate = stats.total_unrelocated_lot;
    const relocate = stats.total_relocated_lot;

    const compile = [
      {
        category: statusNlo[0],
        value: unrelocate,
        sliceSettings: {
          fill: am5.color('#00C5FF'),
        },
      },
      {
        category: statusNlo[1],
        value: relocate,
        sliceSettings: {
          fill: am5.color('#70AD47'),
        },
      },
    ];
    return compile;
  });
}

export async function generateNloNumber() {
  var total_isf = new StatisticDefinition({
    onStatisticField: 'RELOCATION',
    outStatisticFieldName: 'total_isf',
    statisticType: 'count',
  });

  var query = isfLayer.createQuery();
  query.outStatistics = [total_isf];
  return isfLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalisf = stats.total_lbp;

    return totalisf;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        //speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}

export function highlightUrgent(layer: any) {
  let highlight: any;
  view.whenLayerView(layer).then((urgentLayerView) => {
    var query = layer.createQuery();
    layer.queryFeatures(query).then((results: any) => {
      const length = results.features.length;
      let objID = [];
      for (var i = 0; i < length; i++) {
        var obj = results.features[i].attributes.OBJECTID;
        objID.push(obj);
      }

      if (highlight) {
        highlight.remove();
      }
      highlight = urgentLayerView.highlight(objID);
    });
  });
}
