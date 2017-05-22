import {Video, VideoCollection} from './resource'

export interface ISearchAdapter {
    search_video(name: string, page: number, count?: number):Promise<Video[]>  // 视频
    search_album(name: string, page: number, count?: number):Promise<VideoCollection[]> // 专辑
    search_show(name: string, page: number, count?: number):Promise<VideoCollection[]> // 节目
}

export interface IClassifiedVideoAdapter{ 
    get_video(classname: string, page: number, count?: number):Promise<Video[]>
    get_album(classname: string, page: number, count?: number):Promise<VideoCollection[]> 
    get_show(classname: string, page: number, count?: number):Promise<VideoCollection[]> 
}
