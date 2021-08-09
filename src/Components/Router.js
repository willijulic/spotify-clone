import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Music from './Ready';
import Bottom from './Bottom';

function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Body}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/bottom' component={Bottom}/>
        </BrowserRouter>
    )
}

export default Router;