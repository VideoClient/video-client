import {Cmd} from './utils'

export class YoutubeDL {
    private static inst = new YoutubeDL()
    getInstance() { return YoutubeDL.inst }

    async checkTools(path?: string): Promise<boolean> {
        if (path == null) path = 'youtube-dl'
        return Cmd.run(path, ['--version'])
            .catch<boolean>(err => false)
            .then<boolean>(value => true)
    }

    
}