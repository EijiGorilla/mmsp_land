// Lot
export const lotStatusField = 'StatusNVS3';
export const statusLotLabel = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'with WOP Fully Turned-over',
  'ROWUA/TUA',
];

export const statusLotColor = [
  '#70ad47', // Paid
  '#0070ff', // For Payment Processing
  '#ffff00', // For Legal Pass
  '#ffaa00', // For Appraisal/Offer to Buy
  '#ff0000', // For Expro
  '#00734c', // With WOP...
  '#55ff00', // ROWUA/TUA
];

export const statusLotQuery = statusLotLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: statusLotColor[index],
  });
});

// Lot MOA
export const statusLotMoaField = 'S_MOA';
export const statusMOA = ['1-NVS', '2-Expropriation', '3-ROWUA'];
export const statusLotMoaQuery = statusMOA.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// Structure
export const statusStructureField = 'Status';
export const statusStructure = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'Quit Claim',
];

export const colorStructure = [
  [112, 173, 71], // Paid #70AD47
  [0, 112, 255], // For Payment Processing #0070FF
  [255, 255, 0], // For Legal Pass #FFFF00
  [255, 170, 0], // For Appraisal/Offer to Compensate #FFAA00
  [255, 0, 0], // For Expro #FF0000
  [0, 115, 76], //Quit Claim #00734C
];

export const colorStructureHex = ['#70AD47', '#0070FF', '#FFFF00', '#FFAA00', '#FF0000', '#00734C'];

export const statusStructureQuery = statusStructure.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: colorStructureHex[index],
  });
});

// Structure demolished
export const statusStructureDemolish = ['Demolished', 'Not Yet'];
export const statusStructureDemolishLabel = ['Demolished', 'Occupied'];
export const statusStructureDemolishColor = ['#FFAA00', '#99A5A2'];

// Structure MOA
export const statusMoaStructure = ['1-NVS', '2-Expropriation', '3-ROWUA'];

// ISF
export const statusIsfField = 'RELOCATION';
export const statusIsf = ['UNRELOCATED', 'RELOCATED'];
export const statusIsfLabel = ['Unrelocated', 'Relocated'];
export const colorIsf = ['#FF0000', '#267300'];
export const statusIsfQuery = statusIsf.map((status, index) => {
  return Object.assign({
    category: status,
    value: statusIsf[index],
    color: colorIsf[index],
  });
});
