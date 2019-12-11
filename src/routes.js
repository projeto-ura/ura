import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import QuemSomos from './pages/quemsomos/index';
import Tutoriais from './pages/tutoriais/index';
import Notíciais from './pages/notícias/index';
import Metodologia from './pages/metodologia/index';
import FaleConosco from './pages/FaleConosco/index';

function Routes() {
    return(
        <Switch>
            <Route path="/ura" exact component={Home} />
            <Route path="/ura/QuemSomos" component={QuemSomos} />
            <Route path="/ura/Tutoriais" component={Tutoriais} />
            <Route path="/ura/Notíciais" component={Notíciais} />
            <Route path="/ura/Metodologia" component={Metodologia} />
            <Route path="/ura/FaleConosco" component={FaleConosco} />
        </Switch>
    )
}

export default Routes;