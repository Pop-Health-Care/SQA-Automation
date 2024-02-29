import { readFile } from 'xlsx';

const filePath = process.argv.slice(2)[0];
const workbook = readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const posts = [];
let post = {};

for (let cell in worksheet) {
    const cellAsString = cell.toString;

    if(cellAsString[1] !== 'r'
        && cellAsString !== 'm' && cellAsString[1] > 1) {
            if(cellAsString[0] === 'A') {
                post.External_Unique_ID = worksheet[cell].v;
            }
            if(cellAsString[0] === 'D') {
                post.Zone = worksheet[cell].v;
            }
            if(cellAsString[0] === 'E') {
                post.Type_of_admission = worksheet[cell].v;
            }
            if(cellAsString[0] === 'F') {
                post.Pre_admit_Target_Program = worksheet[cell].v;
            }
            if(cellAsString[0] === 'G') {
                post.Target_Program = worksheet[cell].v;
            }
            if(cellAsString[0] === 'M') {
                post.First_Name = worksheet[cell].v;
            }
            if(cellAsString[0] === 'O') {
                post.Last_Name = worksheet[cell].v;
            }
            if(cellAsString[0] === 'P') {
                post.Sex = worksheet[cell].v;

                posts.push(post);
                posts = {};
            }
}

console.log(posts);
