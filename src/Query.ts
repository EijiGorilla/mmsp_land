import { dateTable, isfLayer, lotLayer, pteLotSubteLayer1, structureLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';
import {
  statusLotLabel,
  statusLotColor,
  statusMOA,
  statusMoaStructure,
  statusIsf,
  statusStructure,
  lotStatusField,
  statusLotQuery,
  statusLotMoaField,
  statusStructureField,
  statusStructureQuery,
  statusIsfQuery,
  statusIsfField,
  statusIsfLabel,
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

export async function generateLotData(contractp: any, landtype: any, landsection: any) {
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  var total_count = new StatisticDefinition({
    onStatisticField: lotStatusField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outFields = [lotStatusField];
  query.outStatistics = [total_count];
  query.orderByFields = [lotStatusField];
  query.groupByFieldsForStatistics = [lotStatusField];

  if (!contractp) {
    query.where = '1=1';
  } else if (contractp && !landtype && !landsection) {
    query.where = qCP;
  } else if (contractp && landtype && !landsection) {
    query.where = qCpLandType;
  } else {
    query.where = qCpLandTypeSection;
  }

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.StatusNVS3;
      const count = attributes.total_count;
      return Object.assign({
        category: statusLotLabel[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    statusLotLabel.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
        sliceSettings: {
          fill: am5.color(statusLotQuery[index].color),
        },
      };
      data1.push(object);
    });
    return data1;
  });
}

export async function generateLotNumber() {
  var total_lot_number = new StatisticDefinition({
    onStatisticField: 'Id',
    outStatisticFieldName: 'total_lot_number',
    statisticType: 'count',
  });

  const ononStatisticFieldValue = 'CASE WHEN ' + lotStatusField + ' >=1 THEN 1 ELSE 0 END';
  var total_lot_pie = new StatisticDefinition({
    onStatisticField: ononStatisticFieldValue,
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

export async function generateLotMoaData(contractp: any, landtype: any, landsection: any) {
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  var total_count = new StatisticDefinition({
    onStatisticField: statusLotMoaField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outFields = [statusLotMoaField];
  query.outStatistics = [total_count];
  query.orderByFields = [statusLotMoaField];
  query.groupByFieldsForStatistics = [statusLotMoaField];

  if (!contractp) {
    query.where = '1=1';
  } else if (contractp && !landtype && !landsection) {
    query.where = qCP;
  } else if (contractp && landtype && !landsection) {
    query.where = qCpLandType;
  } else {
    query.where = qCpLandTypeSection;
  }

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.S_MOA;
      const count = attributes.total_count;
      return Object.assign({
        category: statusMOA[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    statusMOA.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
      };
      data1.push(object);
    });
    return data1;
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

export async function generateStructureData(contractp: any, landtype: any, landsection: any) {
  const qCP = "Package = '" + contractp + "'";
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  var total_count = new StatisticDefinition({
    onStatisticField: statusStructureField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = structureLayer.createQuery();
  query.outFields = [statusStructureField];
  query.outStatistics = [total_count];
  query.orderByFields = [statusStructureField];
  query.groupByFieldsForStatistics = [statusStructureField];

  if (!contractp) {
    query.where = '1=1';
  } else if (contractp && !landtype && !landsection) {
    query.where = qCP;
  } else if (contractp && landtype && !landsection) {
    query.where = qCpLandType;
  } else {
    query.where = qCpLandTypeSection;
  }

  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.Status;
      const count = attributes.total_count;
      return Object.assign({
        category: statusStructure[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    statusStructure.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
      };
      data1.push(object);
    });
    return data1;
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
  // const qCP = "Package = '" + contractp + "'";
  // const qLandType = "Type = '" + landtype + "'";
  // const qCpLandType = qCP + ' AND ' + qLandType;
  // const qLandSection = "Station1 ='" + landsection + "'";
  // const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;

  // var total_count = new StatisticDefinition({
  //   onStatisticField: statusIsfField,
  //   outStatisticFieldName: 'total_count',
  //   statisticType: 'count',
  // });

  // var query = isfLayer.createQuery();
  // query.outFields = [statusIsfField];
  // query.outStatistics = [total_count];
  // query.orderByFields = [statusIsfField];
  // query.groupByFieldsForStatistics = [statusIsfField];

  // if (!contractp) {
  //   query.where = '1=1';
  // } else if (contractp && !landtype && !landsection) {
  //   query.where = qCP;
  // } else if (contractp && landtype && !landsection) {
  //   query.where = qCpLandType;
  // } else {
  //   query.where = qCpLandTypeSection;
  // }

  // return isfLayer.queryFeatures(query).then((response: any) => {
  //   var stats = response.features;
  //   const data = stats.map((result: any, index: any) => {
  //     const attributes = result.attributes;
  //     const status_id = attributes.RELOCATION;
  //     const count = attributes.total_count;
  //     return Object.assign({
  //       category: statusIsfLabel[status_id - 1],
  //       value: count,
  //     });
  //   });

  //   const data1: any = [];
  //   statusIsfLabel.map((status: any, index: any) => {
  //     const find = data.find((emp: any) => emp.category === status);
  //     const value = find === undefined ? 0 : find?.value;
  //     const object = {
  //       category: status,
  //       value: value,
  //       sliceSettings: {
  //         fill: am5.color(statusIsfQuery[index].color),
  //       },
  //     };
  //     data1.push(object);
  //   });
  //   return data1;
  // });
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
