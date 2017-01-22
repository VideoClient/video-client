import {React, ReactRouter, Main} from "./StdLib/solo-ui"
import {redux_provider_gen} from "./StdLib/solo-redux"
import {Welcome} from "./Page/"
import {Container} from "./Component/container"

const Route = ReactRouter.Route
const Router = ReactRouter.Router

const route = <Route path="/" component={Container}>
                <Route path="welcome" component={Welcome}/>
              </Route>

Main.bootstrap(route, "app", true, redux_provider_gen({}, React, Router))
