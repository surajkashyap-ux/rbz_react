import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from 'app';
import {appsConfigs} from 'app/main/apps/appsConfigs';
import {pagesConfigs} from 'app/main/pages/pagesConfigs';

const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/apps/dashboards/project"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
