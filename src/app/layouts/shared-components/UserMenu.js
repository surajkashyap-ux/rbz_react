import React, {useState} from 'react';
import {Avatar, Button, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';

function UserMenu(props)
{
    const user = useSelector(({auth}) => auth.user);

    const [setUserMenu] = useState(null);

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

 

    return (
        <React.Fragment>

            <Button className="h-64" onClick={userMenuClick}>
                {user.data.photoURL ?
                    (
                        <Avatar className="" alt="user photo" src={user.data.photoURL}/>
                    )
                    :
                    (
                        <Avatar className="">
                            {user.data.displayName[0]}
                        </Avatar>
                    )
                }

                <div className="hidden md:flex flex-col ml-12 items-start">
                    <Typography component="span" className="normal-case font-600 flex">
                        {user.data.displayName}
                    </Typography>
                    <Typography className="text-11 capitalize" color="textSecondary">
                        {user.role.toString()}
                    </Typography>
                </div>
            </Button>

            
        </React.Fragment>
    );
}

export default UserMenu;
