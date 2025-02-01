const fs = require("fs");
const dayjs = require("dayjs");
const simpleGit = require("simple-git");


const git = simpleGit();
let year = 2025;

async function commits() {
    for(let month = 1; month <= 12; month++)
    {
        console.log(`month => ${month}\n`)
        for(let day = 1; day <= 28; day++)
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
