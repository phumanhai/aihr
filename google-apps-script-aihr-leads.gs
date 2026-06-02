function doPost(e) {
  var spreadsheet = SpreadsheetApp.openById('1nt0-2M0rY1Z71n40ruYZTTpQDrtDYh38rNrdx37OeDk');
  var sheet = spreadsheet.getSheetByName('Leads');

  if (!sheet) {
    sheet = spreadsheet.insertSheet('Leads');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Thoi gian',
      'Ho va ten',
      'Chuc danh',
      'Cong ty',
      'Quy mo nhan su',
      'So dien thoai',
      'Email',
      'Nhu cau quan tam',
      'Biet den AIHR tu dau'
    ]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.role || '',
    data.company || '',
    data.size || '',
    data.phone || '',
    data.email || '',
    data.interest || '',
    data.source || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
