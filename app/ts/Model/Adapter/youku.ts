import {IResAdapter} from './res-adapter'
const Youku = require('youku-client');


export class YoukuAdapter implements IResAdapter {
    static client_id = '69a5ea43a68899c9'
    static client_secret = 'fd2606fc758a3f55fc61ee06fdc4d451'

    client = new Youku({
        client_id: YoukuAdapter.client_id,
        client_secret: YoukuAdapter.client_secret
    });

    search(name: string, page: number) {
        this.client.get('searches/show/by_keyword', {
            keyword: name,
            unite: 1,
            page: page,
            count: 20
        }, function(err, video, resp) {
            if (err) {
                return console.log("Error: " + err);
            }
            console.log(video);
            return console.log(resp);
        });
    }

}