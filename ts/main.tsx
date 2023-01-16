import * as React from 'react'
import {Route,Routes,createRoutesFromElements} from 'react-router-dom'
import {Main} from "./StdLib/solo-ui"
// import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage,FavoritePage,HistoryPage,DownloadPage,SettingsPage,SearchPage,PlayerPage,DetailPage,SubCategories} from "./Page/"
import {Framework} from "./Component/framework"
import {App} from './Model/app'
// require('electron-cookies')
import {initialize} from '@electron/remote/main'
initialize()

import {YouGet} from './Tools/you-get'

YouGet.get().checkTools().then(v => console.log('check tools:', v))

const router = <Routes>
    <Route path="/" element={<Framework />}>
      {/* <Route index element={<HomePage />} />
      <Route path="home"  element={<HomePage/>}>
        <Route path="/home/:tab" element={<HomePage/>}/>
      </Route> */}
      <Route path="favorite" element={<FavoritePage/>}/>
      <Route path="history" element={<HistoryPage/>}/>
      <Route path="download" element={<DownloadPage/>}/>
      <Route path="settings" element={<SettingsPage/>}/>
      <Route path="subcategories/*" element={<SubCategories/>}/>
      <Route path="search/:q" element={<SearchPage/>}/>
      {/* <Route path="detail/:url" element={<DetailPage/>} />
      <Route path="watch/:v" element={<PlayerPage/>} 
          onEnter={() => App.getFramework().setHidebar(true)}
          onLeave={() => App.getFramework().setHidebar(false)}/> */}
    </Route>
  </Routes>

// Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
Main.bootstrap(router, "app")

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



