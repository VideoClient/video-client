
const remote = require("remote");
const cp = remote.require('child_process')

export class Cmd {
    public static async run(shell, args): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            cp.execFile(shell, args, {env: remote.process.env},
                (error, stdout, stderr) => {
                    if (error != 0) {
                        reject(stderr)
                    } else 
                        resolve(stdout)
                })
        })
    }
}