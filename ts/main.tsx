import {React, ReactRouter, Main} from "./StdLib/solo-ui"
import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage,FavoritePage,HistoryPage,DownloadPage,SettingsPage} from "./Page/"
import {Framework} from "./Component/framework"

const Route = ReactRouter.Route
const Router = ReactRouter.Router

const route = <Route path="/" component={Framework}>
                <Route path="home" component={HomePage}/>
                <Route path="favorite" component={FavoritePage}/>
                <Route path="history" component={HistoryPage}/>
                <Route path="download" component={DownloadPage}/>
                <Route path="settings" component={SettingsPage}/>
              </Route>

Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
