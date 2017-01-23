import {React, ReactRouter, Main} from "./StdLib/solo-ui"
import {redux_provider_gen} from "./StdLib/solo-redux"
import {HomePage} from "./Page/"
import {Framework} from "./Component/framework"

const Route = ReactRouter.Route
const Router = ReactRouter.Router

const route = <Route path="/" component={Framework}>
                <Route path="categories" component={HomePage}/>
              </Route>

Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
