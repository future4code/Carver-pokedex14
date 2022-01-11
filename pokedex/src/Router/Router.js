import DetailPage from '../Pages/DetailPage/DetailPage'
import HomePage from '../Pages/HomePage/HomePage'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function Router(){
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path={'/'}>
                        <HomePage/>
                    </Route>
                    <Route exact path={'/detail/:name'}>
                        <DetailPage/>
                    </Route>
                    <Route exact path={'/pokedex'}>
                        <PokedexPage/>
                    </Route>
                    <Route exact path={'*'}>
                        <HomePage/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )
}