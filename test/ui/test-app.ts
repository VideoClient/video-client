import 'mocha'
import * as chai from 'chai'
const expect = chai.expect
import chaiAsPromised = require('chai-as-promised');
import path = require('path');
const Application = require('spectron').Application

var electronPath = path.join(__dirname, '..', '..', '..', 'node_modules', '.bin', 'electron');

if (process.platform === 'win32') {
    electronPath += '.cmd';
}

var appPath = path.join(__dirname, '..', '..', '..');
var app
console.log('electron:', electronPath)
console.log('app:', appPath)

chai.should();
chai.use(chaiAsPromised);

describe('AppTest', function () {
    this.timeout(30000)
    
    before(() => {
        app = new Application({
            path: electronPath,
            args: [appPath]
        });
        return app.start().catch(err => console.log(err))
    })

    after(() => {
        if (app && app.isRunning()) {
            return app.stop()
        }
    })

    it('opens a window', function () {
        return app.client.getWindowCount().should.eventually.gt(0)
    });

    it('tests the title', function () {
        return app.client.waitUntilWindowLoaded()
        .getTitle().should.eventually.equal('VideoClient');
    });
    // it('should load all resource without error', () => {
    //     const {App} = require( '../app/ts/Model/app')
    //     App.get().loadAll();
    // });
    // it('should get right config', async () => {
    //     const {App} = require( '../app/ts/Model/app')
    //     expect(App.getConfig().getDBPath()).exist;
    //     await App.getConfig().init();
    //     expect(App.getConfig().db).exist;
    //     expect(App.getConfig().getQuality()).eq(2);
    // });
});
