const fs = require("fs");
const dayjs = require("dayjs");
const simpleGit = require("simple-git");
const { exit } = require("process");


const git = simpleGit();
let year = 2023;
let month_start = 6;
let month_end = 6;
let day_start = 1;
let day_end = 28;

if(day_start < 1 || day_start > 28 || day_end < 1 || day_end > 28 || month_start < 1 || month_start > 12 || month_end < 1 || month_end > 12)
    exit;

async function commits() {
    for(let month = month_start; month <= month_end; month++)
    {
        console.log(`month => ${month}\n`)
        for(let day = day_start; day <= day_end; day++)
        {
            console.log(`day => ${day}\n`);
            fs.appendFileSync("history.txt", `Commit on\n`);
            await git.add("history.txt");
            const formattedDate = dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DD");
            await git.commit(`Commit on ${formattedDate}`, {"--date": formattedDate});
            await git.push("origin", "main");
        }
        
    }
}

commits();
