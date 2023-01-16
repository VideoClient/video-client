import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  };

export class Main {
    static bootstrap(router: JSX.Element, id: string, Provider: (any, his:any)=>JSX.Element = null) {
        let main = new Main(id)
        main.render(router, Provider)
    }

    constructor(id: string) {
        this.ctn_id = id
    }

    render_data(router: JSX.Element): JSX.Element {
        return <BrowserRouter>
                {router}
            </BrowserRouter>
    }

    render(router: JSX.Element, Provider: (any, his:any) => JSX.Element = null): void {
        let nodes = this.render_data(router)
        
        ReactDOM.render(
            <ThemeProvider theme={themeOptions}>
                {nodes}
            </ThemeProvider>,            
            document.getElementById(this.ctn_id)
        );
    }
    
    private ctn_id: string
}





