import {IResAdapter} from './res-adapter'

class YoukuAdapter implements IResAdapter {
    client_id = '69a5ea43a68899c9'
    secret = 'fd2606fc758a3f55fc61ee06fdc4d451'

    search_url = 'https://openapi.youku.com/router/rest.json'

    search(name: string) {
        fetch(this.search_url).then(function(response){
            console.log(response)
        });
    }

}