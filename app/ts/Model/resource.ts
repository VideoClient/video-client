
export class ResourceLoader {



}

export class Video {
    name: string
    url: string
    time: string
    last_watch: string
}

export class VideoCollection {
    name: string
    data: Map<string, Video[]>
    getClassName(): string[] {
        let ret:string[] = []
        for (var i in this.data) {
            ret.push(i)
        }
        return ret
    }
}

export class Movie extends VideoCollection {

}

export class Animate extends VideoCollection {

}

export class Series extends VideoCollection {

}

