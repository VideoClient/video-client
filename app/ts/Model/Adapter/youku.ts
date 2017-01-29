const Youku = require('youku-client');
import {Video, VideoCollection} from '../resource'

export class YoukuAdapter{
    static client_id = '69a5ea43a68899c9'
    static client_secret = 'fd2606fc758a3f55fc61ee06fdc4d451'

    client = new Youku({
        client_id: YoukuAdapter.client_id,
        client_secret: YoukuAdapter.client_secret
    });

    async search_show(name: string, page: number): Promise<VideoCollection[]> {
        return new Promise<VideoCollection[]>((fulfill, reject) => {
            this.client.get('searches/show/by_keyword', {
                keyword: name,
                unite: 1,
                page: page,
                count: 20
            }, function(err, video: SearchShowResult, resp) {
                if (err) {
                    reject(err)
                }
                console.log(video);
                let videos:VideoCollection[] = []
                for (var v of video.shows) {
                    let newv = new VideoCollection()
                    newv.name = v.name
                    newv.poster = v.bigPoster
                    newv.url = v.link
                    newv.raw = v
                    videos.push(newv)
                }
                fulfill(videos)
            });           
        });
    }

    async search_video(name: string, page: number): Promise<Video[]> {
        return new Promise<Video[]>((fulfill, reject) => {
            this.client.get('searches/video/by_keyword', {
                keyword: name,
                page: page,
                count: 20
            }, function(err, video: SearchShowResult, resp) {
                if (err) {
                    reject(err)
                }
                let videos:Video[] = []
                for (var v of video.shows) {
                    let newv = new Video()
                    newv.name = v.name
                    newv.thumbnail = v.bigThumbnail
                    newv.url = v.play_link
                    newv.raw = v
                    videos.push(newv)
                }
                console.log(video);
                fulfill(videos)
            });           
        });
    }

}


export interface SearchShowResult {
    shows: YoukuVideo[]
    total: string // 总共个数
}

export interface YoukuVideo {
    bigPoster: string       // 纵向海报
    bigThumbnail: string    // 横向截屏
    completed: number       // 是否完结
    description: string     // 描述
    episode_count: string   // 总共的剧集
    episode_updated: string // 最新剧集
    episodes: any[7]        // 剧集资源
    hasvideotype: string[]  // 视频类型（正片，预告，资讯，首映式等）
    id: string              // Youku内唯一ID
    link: string            // 剧集链接
    name: string            // 视频名
    paid: number            // 是否需要付费
    play_link: string       // 播放链接
    poster: string          // 小海报
    published: string       // 发布时间
    score: string           // 得分
    showcategory: string    // 类型（电视剧，电影等）
    streamtypes: string[]   // 数据类型（hd2，flv）等
    thumbnail: string       // 小截图
    view_count: string      // 观看次数
}