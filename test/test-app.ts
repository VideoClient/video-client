import 'mocha'
import * as chai from 'chai'
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised');
import path = require('path');
const Application = require('spectron').Application

var electronPath = path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron');

if (process.platform === 'win32') {
    electronPath += '.cmd';
}

var appPath = path.join(__dirname, '..', '..');
var app = new Application({
            path: electronPath,
            args: [appPath]
        });
console.log('electron:', electronPath)
console.log('app:', appPath)

chai.should();
chai.use(chaiAsPromised);

describe('AppTest', function () {
    this.timeout(30000)
    
    beforeEach(() => {
        return app.start()
    })

    afterEach(() => {
        if (app && app.isRunning()) {
            return app.stop()
        }
    })
    it('shows an initial window', function () {
        return app.client.getWindowCount().then(function (count) {
            count.should.eq(2)
        })
    })
    it('opens a window', function () {
        return app.client.waitUntilWindowLoaded()
        .getWindowCount().should.eventually.eq(2);
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