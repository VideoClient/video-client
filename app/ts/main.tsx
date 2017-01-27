import {React, ReactRouter, Main} from "./StdLib/solo-ui"
import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage,FavoritePage,HistoryPage,DownloadPage,SettingsPage,SearchPage,PlayerPage} from "./Page/"
import {Framework} from "./Component/framework"

const {Route,Router,IndexRedirect} = ReactRouter

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
                <Route path="watch/:v" component={PlayerPage}/>
              </Route>

Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
