import React from 'react';
import {AppBar, Hidden, Toolbar} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import {Search, Shortcuts} from 'app';
import NavbarMobileToggleButton from 'app/layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/layouts/shared-components/UserMenu';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
}));

function ToolbarLayout1(props)
{
    const config = useSelector(({}) => .settings.current.layout.config);
    const toolbarTheme = useSelector(({}) => .settings.toolbarTheme);

    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar id="toolbar" className="flex relative z-10" color="default">
                <Toolbar className="p-0">

                    {config.navbar.display && config.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        <Hidden mdDown>
                            <Shortcuts className="px-16"/>
                        </Hidden>
                    </div>

                    <div className="flex">

                        <UserMenu/>

                        <div className={classes.separator}/>

                        <Search/>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>
                    </div>

                    {config.navbar.display && config.navbar.position === 'right' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default ToolbarLayout1;
