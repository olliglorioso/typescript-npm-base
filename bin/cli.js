#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process")

const run = (command) => {
    try {
        execSync(`${command}`, { stdio: "inherit" })
    } catch (e) {
        console.error(`Failed to execute ${command}`, e)
        return false
    }
}

const folderName = process.argv[2]
const gitCloneCmd = `git clone https://github.com/olliglorioso/typescript-npm-base.git ${folderName}`
const installDepsCmd = `cd ${folderName} && npm i`

console.log(`Cloning the repository to a folder with the name ${folderName}`)
const cloned = run(gitCloneCmd)
if (!cloned) process.exit(-1)

console.log(`Installing devDependencies to the folder ${folderName}`)
const installed = run(installDepsCmd)
if (!installed) process.exit(-1)

console.log("Congratulations, you have initiliazed a new Node.js with Typescript project. Run the following command to start:")
console.log(`cd ${folderName}`)
