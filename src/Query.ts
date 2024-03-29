import { dateTable, isfLayer, lotLayer, pteLotSubteLayer1, structureLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';
import {
  statusLot,
  statusLotColor,
  statusMOA,
  statusMoaStructure,
  statusIsf,
  statusStructure,
} from './StatusUniqueValues';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "category = 'Land Acquisition'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

export const statusLotChartQuery = statusLot.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// For Lot MoA Chart
export const statusMoaLotChartQuery = statusMOA.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// For Structure Pie Chart
export const statusStructureChartQuery = statusStructure.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

export const statusMoaStructureChartQuery = statusMoaStructure.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// ISF Owner
export const statusIsfChartQuery = statusIsf.map((status: any, index: any) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

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
    onStatisticField: 'Id',
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
    onStatisticField: 'Id',
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

export async function generatePTE() {
  var total_pte_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN PTE = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pte_lot',
    statisticType: 'sum',
  });

  var total_lot_N = new StatisticDefinition({
    onStatisticField: 'Id',
    outStatisticFieldName: 'total_lot_N',
    statisticType: 'count',
  });

  var query = pteLotSubteLayer1.createQuery();
  query.outStatistics = [total_pte_lot, total_lot_N];

  return pteLotSubteLayer1.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const handedover = stats.total_pte_lot;
    const totaln = stats.total_lot_N;
    const percent = ((handedover / totaln) * 100).toFixed(0);
    console.log(handedover, '; ', totaln);
    return [percent, handedover];
  });
}

export async function generateHandedOverPTE() {
  var total_handedover_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN HandedOver = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_handedover_lot',
    statisticType: 'sum',
  });

  var total_pte_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN PTE = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pte_lot',
    statisticType: 'sum',
  });

  var total_number_handedover = new StatisticDefinition({
    onStatisticField: "CASE WHEN Type = 'Station' THEN 1 ELSE 0 END",
    outStatisticFieldName: 'total_number_handedover',
    statisticType: 'count',
  });

  var total_number_pte = new StatisticDefinition({
    onStatisticField: "CASE WHEN Type = 'Subterranean' THEN 1 ELSE 0 END",
    outStatisticFieldName: 'total_number_pte',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_handedover_lot, total_number_handedover];

  const qHandedOver: any = lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const handedover = stats.total_handedover_lot;
    const totaln = stats.total_number_handedover;
    // const percent = ((handedover / totaln) * 100).toFixed(0);
    return [handedover, totaln];
  });

  var query2 = pteLotSubteLayer1.createQuery();
  query2.outStatistics = [total_pte_lot, total_number_pte];

  const qPte: any = pteLotSubteLayer1.queryFeatures(query2).then((response: any) => {
    var stats = response.features[0].attributes;
    const pte = stats.total_pte_lot;
    const totaln = stats.total_number_pte;
    // const percent = ((handedover / totaln) * 100).toFixed(0);
    return [pte, totaln];
  });

  // concat
  const handedOver = await qHandedOver;
  const pte = await qPte;

  const totalHandedOverPte = handedOver[0] + pte[0];
  const totalNumber = handedOver[1] + pte[1];
  const totalPercentHandedOverPte = ((totalHandedOverPte / totalNumber) * 100).toFixed(0);

  return [totalPercentHandedOverPte, totalHandedOverPte];
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
export async function generateLotProgress(
  yearSelected: any,
  contractp: any,
  landtype: any,
  landsection: any,
) {
  var total_count_handover = new StatisticDefinition({
    onStatisticField: 'HandOverDate',
    outStatisticFieldName: 'total_count_handover',
    statisticType: 'count',
  });
  console.log(yearSelected);
  // let year;
  let years: any;
  years = Number(yearSelected);

  var query = lotLayer.createQuery();
  query.outStatistics = [total_count_handover];
  // eslint-disable-next-line no-useless-concat
  const qStatus = 'HandOverDate IS NOT NULL';
  const qYear = 'HandedOverYear = ' + years;
  const qCP = "Package = '" + contractp + "'";
  const qYearCp = qYear + ' AND ' + qCP;
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qYearCpLandType = qYear + ' AND ' + qCpLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;
  const qYearCpLandTypeSection = qYear + ' AND ' + qCpLandTypeSection;

  // When year is undefined,
  if (!years && !contractp) {
    query.where = qStatus;
  } else if (!years && contractp && !landtype) {
    query.where = qStatus + ' AND ' + qCP;
  } else if (!years && contractp && landtype && !landsection) {
    query.where = qStatus + ' AND ' + qCpLandType;
  } else if (!years && contractp && landtype && landsection) {
    query.where = qStatus + ' AND ' + qCpLandTypeSection;

    // When year is defined,
  } else if (years && !contractp) {
    query.where = qStatus + ' AND ' + qYear;
  } else if (years && contractp && !landtype && !landsection) {
    query.where = qStatus + ' AND ' + qYearCp;
  } else if (years && contractp && landtype && !landsection) {
    query.where = qStatus + ' AND ' + qYearCpLandType;
  } else if (years && contractp && landtype && landsection) {
    query.where = qStatus + ' AND ' + qYearCpLandTypeSection;
  }

  query.outFields = ['HandOverDate'];
  query.orderByFields = ['HandOverDate'];
  query.groupByFieldsForStatistics = ['HandOverDate'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.HandOverDate;
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

export async function generateIsfData() {
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
        category: statusIsf[0],
        value: unrelocate,
        sliceSettings: {
          fill: am5.color('#ff0000'),
        },
      },
      {
        category: statusIsf[1],
        value: relocate,
        sliceSettings: {
          fill: am5.color('#70AD47'),
        },
      },
    ];
    return compile;
  });
}

export async function generateIsfNumber() {
  var total_isf = new StatisticDefinition({
    onStatisticField: 'RELOCATION',
    outStatisticFieldName: 'total_isf',
    statisticType: 'count',
  });

  var query = isfLayer.createQuery();
  query.outStatistics = [total_isf];
  return isfLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalisf = stats.total_isf;

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
