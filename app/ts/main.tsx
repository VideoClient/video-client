import React = require('react')
import {Route,Router,IndexRedirect} from 'react-router'
import {Main} from "./StdLib/solo-ui"
// import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage,FavoritePage,HistoryPage,DownloadPage,SettingsPage,SearchPage,PlayerPage,DetailPage} from "./Page/"
import {Framework} from "./Component/framework"
import {App} from './Model/app'
// require('electron-cookies')

const route = <Route path="/" component={Framework}>
                <IndexRedirect to="/home" />
                <Route path="home" component={HomePage}>
                  <Route path="/home/:tab" component={HomePage}/>
                </Route>
                <Route path="favorite" component={FavoritePage}/>
                <Route path="history" component={HistoryPage}/>
                <Route path="download" component={DownloadPage}/>
                <Route path="settings" component={SettingsPage}/>
                <Route path="search/:q" component={SearchPage}/>
                <Route path="detail/:url" component={DetailPage} />
                <Route path="watch/:v" component={PlayerPage} 
                    onEnter={() => App.getFramework().setHidebar(true)}
                    onLeave={() => App.getFramework().setHidebar(false)}/>
              </Route>

// Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
Main.bootstrap(route, "app")

// drop file
document.body.ondragover = e => false
document.body.ondragleave = e => false
document.body.ondragend = e => false
document.body.ondrop = e => {
	e.preventDefault();
  let files = e.dataTransfer.files
  if (files.length > 0) {
    console.log('File(s) you dragged here: ', files[0].path)
    App.goto('/watch/' + encodeURIComponent('local://'+files[0].path))
	}
	return false
}



