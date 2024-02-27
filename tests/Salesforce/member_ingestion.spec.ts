import { test, expect, Locator, Page } from "@playwright/test";
import XLSX from "xlsx";
 
 
 
test('test', async ({ page, request}, testInfo) =>{
   
    // read the original data and store in jason format
    const org_path = "original.xlsx";
    const originalExcelData = readExcel(org_path);
 
    // test goto app and download the excel file
    await page.goto('file:///Y:/VENDORS/MuleSoft/FROM_PHC/QA/');
    const [download] = await Promise.all([
        page.waitForEvent( 'download'),
        await page.locator("//a[contains(text(),'Download Excel')]").click()
    ]);
    // get the excel file name
    const path = download.suggestedFilename();
    await download.saveAs(path);
    //attach the downloaded file to the report
    await testInfo.attach('downloaded', { path: path });
 
    //read the data and convert to json format
    const fromDownloadedFile = readExcel(path);
    expect(originalExcelData).toStrictEqual(fromDownloadedFile)
 
 
})
 
//function readExcel(path: string) {
    //const workbook = XLSX.readFile(path);
    //const sheet = workbook.Sheets[workbook.SheetNames[0]];
    //const jsonSheet = XLSX.utils.sheet_to_json(sheet);
    //console.log(jsonSheet);
 
//}