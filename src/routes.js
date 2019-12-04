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
            <Route path="/" exact component={Home} />
            <Route path="/QuemSomos" component={QuemSomos} />
            <Route path="/Tutoriais" component={Tutoriais} />
            <Route path="/Notíciais" component={Notíciais} />
            <Route path="/Metodologia" component={Metodologia} />
            <Route path="/FaleConosco" component={FaleConosco} />
        </Switch>
    )
}

export default Routes;