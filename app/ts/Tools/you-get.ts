import {Cmd} from './utils'

export class YouGet {
    private static inst = new YouGet()
    static get() { return YouGet.inst }
    private cmd_path

    async checkTools(path?: string) {
        if (path == null) path = 'you-get'
        this.cmd_path = path
        return Cmd.run(path, ['--version'])
            .catch<boolean>(err => false)
            .then<boolean>(value => true)
    }

    async download(path: string) {
        return Cmd.run(this.cmd_path, [path])
    }

    async showJson(path: string) {
        return Cmd.run(this.cmd_path, [path, '--json'])
    }
}