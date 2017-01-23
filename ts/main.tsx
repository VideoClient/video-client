import {React, ReactRouter, Main} from "./StdLib/solo-ui"
import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage} from "./Page/"
import {Framework} from "./Component/framework"

const Route = ReactRouter.Route
const Router = ReactRouter.Router

const route = <Route path="/" component={Framework}>
                <Route path="home" component={HomePage}/>
                <Route path="favorite" component={HomePage}/>
                <Route path="history" component={HomePage}/>
                <Route path="download" component={HomePage}/>
                <Route path="settings" component={HomePage}/>
              </Route>

Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
