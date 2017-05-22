
const remote = require("electron").remote;
const cp = remote.require('child_process');
const app = remote.app;

export class Cmd {
    public static async run(shell:string, args:string[]): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            cp.execFile(shell, args, {env: remote.process.env},
                (error, stdout, stderr) => {
                    if (error != null) {
                        if (stderr != null)
                            reject(stderr)
                        else
                            reject(stdout)
                    } else 
                        resolve(stdout)
                })
        })
    }

    // 令electron作为node执行新进程
    public static async run_as_node(js:string, args:string[]=null): Promise<string> {
        return new Promise<string>((resolve, reject)=>{
            cp.fork(js, args, {env: remote.process.env},
                (error, stdout, stderr)=> {
                    if (error != null) {
                        console.log(error)
                        if (stderr != null)
                            reject(stderr)
                        else
                            reject(stdout)
                    } else 
                        resolve(stdout)
                })
        })
    }
}