
export class ResourceLoader {
    

 
}

export class Video {
    name: string
    url: string
    time: string
    thumbnail: string
    last_watch: string
    raw: any //原始返回的数据
}

export class VideoCollection {
    name: string
    url: string
    poster: string
    data: Map<string, Video[]>
    last_watch_class: string
    last_watch_number: number
    raw: any //原始返回的数据
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

