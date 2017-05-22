import 'mocha'
import * as chai from 'chai'
const chaiAsPromised = require('chai-as-promised');
import path = require('path');
import {YouGet} from '../../ts/Tools/you-get';

chai.should();
chai.use(chaiAsPromised);
describe('YouGet Test', function() {
    this.timeout(30000)

    it('should get the tools', function() {
        YouGet.get().checkTools().then(v => {
            console.log('check tools:', v)
            v.should.eq(true)
        })
        .catch(err => console.log('err: ', err))
    })

    it('show json', function() {
        YouGet.get().showJson('https://v.youku.com/v_show/id_XMTMzOTkzNjU0OA==.html?spm=a2h1n.8261147.0.0').then(v => {
            console.log('ret: ',v)
            v.should.exist
        }).catch(err => console.log('err: ', err))
    })
})