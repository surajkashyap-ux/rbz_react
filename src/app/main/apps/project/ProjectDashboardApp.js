import React, {useEffect, useRef, useState} from 'react';
import {Menu, MenuItem, Hidden, Icon, IconButton, Tab, Tabs, Typography} from '@material-ui/core';
import {AnimateGroup, PageSimple} from '@';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import _ from 'lodash';
import clsx from 'clsx';

import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import WidgetNow from './widgets/WidgetNow';
import WidgetWeather from './widgets/WidgetWeather';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    content          : {
        '& canvas': {
            maxHeight: '100%'
        }
    },
    selectedProject  : {
        background  : theme.palette.primary.main,
        color       : theme.palette.primary.contrastText,
        borderRadius: '8px 0 0 0'
    },
    projectMenuButton: {
        background  : theme.palette.primary.main,
        color       : theme.palette.primary.contrastText,
        borderRadius: '0 8px 0 0',
        marginLeft  : 1
    },
}));

function ProjectDashboardApp(props)
{
    const dispatch = useDispatch();
    const widgets = useSelector(({projectDashboardApp}) => projectDashboardApp.widgets);
    const projects = useSelector(({projectDashboardApp}) => projectDashboardApp.projects);

    const classes = useStyles(props);
    const pageLayout = useRef(null);
    const [tabValue, setTabValue] = useState(0);
    const [selectedProject, setSelectedProject] = useState({
        id    : 1,
        menuEl: null
    });


    useEffect(() => {
        dispatch(Actions.getWidgets());
        dispatch(Actions.getProjects());
    }, [dispatch]);

    function handleChangeTab(event, tabValue)
    {
        setTabValue(tabValue);
    }

    function handleChangeProject(id)
    {
        setSelectedProject({
            id,
            menuEl: null
        });
    }

    function handleOpenProjectMenu(event)
    {
        setSelectedProject({
            id    : selectedProject.id,
            menuEl: event.currentTarget
        });
    }

    function handleCloseProjectMenu()
    {
        setSelectedProject({
            id    : selectedProject.id,
            menuEl: null
        });
    }

    if ( !widgets || !projects )
    {
        return null;
    }

    return (
        <PageSimple
            classes={{
                header      : "min-h-160 h-160",
                toolbar     : "min-h-48 h-48",
                rightSidebar: "w-288",
                content     : classes.content,
            }}
            header={
                <div className="flex flex-col justify-between flex-1 px-24 pt-24">
                    <div className="flex justify-between items-start">
                        <Typography className="py-0 sm:py-24" variant="h4">Welcome back, Suraj!</Typography>
                        <Hidden lgUp>
                            <IconButton
                                onClick={(ev) => pageLayout.current.toggleRightSidebar()}
                                aria-label="open left sidebar"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                    <div className="flex items-end">
                        <div className="flex items-center">
                            <div className={clsx(classes.selectedProject, "flex items-center h-40 px-16 text-16")}>
                                {_.find(projects, ['id', selectedProject.id]).name}
                            </div>
                            <IconButton
                                className={clsx(classes.projectMenuButton, "h-40 w-40 p-0")}
                                aria-owns={selectedProject.menuEl ? 'project-menu' : undefined}
                                aria-haspopup="true"
                                onClick={handleOpenProjectMenu}
                            >
                                <Icon>more_horiz</Icon>
                            </IconButton>
                            <Menu
                                id="project-menu"
                                anchorEl={selectedProject.menuEl}
                                open={Boolean(selectedProject.menuEl)}
                                onClose={handleCloseProjectMenu}
                            >
                                {projects && projects.map(project => (
                                    <MenuItem key={project.id} onClick={ev => {
                                        handleChangeProject(project.id)
                                    }}>{project.name}</MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </div>
                </div>
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="off"
                    className="w-full border-b-1 px-24"
                >
                    <Tab className="text-14 font-600 normal-case" label="Home"/>
                    <Tab className="text-14 font-600 normal-case" label="Mood Tracker Summary"/>
                    <Tab className="text-14 font-600 normal-case" label="Therapists"/>
                </Tabs>
            }
            content={
                <div className="p-12">
                    {tabValue === 0 &&
                    (
                        <AnimateGroup
                            className="flex flex-wrap"
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                            
                            
                            <div className="widget flex w-full sm:w-1/2 p-12">
                                <Widget8 widget={widgets.widget8}/>
                            </div>
                            <div className="widget flex w-full sm:w-1/2 p-12">
                                <Widget7 widget={widgets.widget7}/>
                            </div>
                        </AnimateGroup>
                    )}
                    {tabValue === 1 && (
                        <AnimateGroup
                            className="flex flex-wrap"
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                            <div className="widget flex w-full sm:w-1/2 p-12">
                                <Widget6 widget={widgets.widget6}/>
                            </div>
                            <div className="widget flex w-full sm:w-1/2 p-12">
                                <Widget9 widget={widgets.widget9}/>
                            </div>
                            <div className="widget flex w-full p-12">
                                <Widget5 widget={widgets.widget5}/>
                            </div>
                        </AnimateGroup>
                    )}
                    {tabValue === 2 && (
                        <AnimateGroup
                            className="flex flex-wrap"
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >
                            <div className="widget flex w-full p-12">
                                <Widget11 widget={widgets.widget11}/>
                            </div>
                        </AnimateGroup>
                    )}
                </div>
            }
            rightSidebarContent={
                <AnimateGroup
                    className="w-full"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <div className="widget w-full p-12">
                        <WidgetNow/>
                    </div>
                    <div className="widget w-full p-12">
                        <WidgetWeather widget={widgets.weatherWidget}/>
                    </div>
                </AnimateGroup>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
