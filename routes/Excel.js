const excel = require('exceljs');
const workBook = new excel.Workbook();
    const worksheet = workBook.addWorksheet("Query Records");
    worksheet.columns = [
        {header: 'Name', key: 'name', width: 32},
        {header: 'Email', key: 'email', width: 32},
        {header: 'Subject', key: 'subject', width: 50},
        {header: 'Message', key: 'message', width: 100},
        {header: 'Date And Time', key: 'date', width: 50}
    ];
function AppendDate(obj){
Object.assign(obj, {date: Date()})
}
const writeDataToExcel = (obj)=>{
AppendDate(obj)
worksheet.addRow({name: obj.name, email: obj.email, subject: obj.subject, message: obj.message, date:obj.date});
workBook.xlsx.writeFile('export.xlsx');
if(workBook.xlsx.writeFile('export.xlsx'))
    console.log("DATA ENTERED!!")
}
exports.writeDataToExcel = writeDataToExcel;