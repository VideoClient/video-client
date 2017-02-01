import {ISearchAdapter, IClassifiedVideoAdapter} from '.'

export class ResourceLoader implements ISearchAdapter, IClassifiedVideoAdapter {
    search_adapters: ISearchAdapter[]
    classified_adapters: IClassifiedVideoAdapter[]

    regSearchAdapter(searcher: ISearchAdapter) {
        this.search_adapters.push(searcher)
    }

    regClassifiedAdapter(classified: IClassifiedVideoAdapter) {
        this.classified_adapters.push(classified)
    }


    search_video(name: string, page: number, count?: number):Promise<Video[]>  // 视频
    {
        return this.search_basic<Video>('search_video', name, page, count)
    }

    search_album(name: string, page: number, count?: number):Promise<VideoCollection[]> // 专辑
    {
        return this.search_basic<VideoCollection>('search_album', name, page, count)
    }

    search_show(name: string, page: number, count?: number):Promise<VideoCollection[]> // 节目
    {
        return this.search_basic<VideoCollection>('search_show', name, page, count)
    }

    
    search_basic<T>(funcname: string, name: string, page: number, count?: number):Promise<T[]>
    {
        return new Promise<T[]>(async (resolve, reject) => {
            let ret:Promise<T[]>[] = []
            for (let i of this.search_adapters) {
                 ret.push(i[funcname](name, page, count / this.search_adapters.length))
            }
            let ans:T[] = []
            for (let i in ret) {
                let data = await ret[i]
                ans.concat(data)
            }
            resolve(ans)
        })
    }

    get_video(classname: string, page: number, count?: number):Promise<Video[]>
    {
        return new Promise<Video[]>((resolve, reject) => {

        })
    }

    get_album(classname: string, page: number, count?: number):Promise<VideoCollection[]> 
    {
        return new Promise<VideoCollection[]>((resolve, reject) => {
            
        })
    }
    
    get_show(classname: string, page: number, count?: number):Promise<VideoCollection[]> 
    {
        return new Promise<VideoCollection[]>((resolve, reject) => {
            
        })
    }
 
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

