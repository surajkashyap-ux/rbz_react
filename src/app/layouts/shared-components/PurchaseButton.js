import React from 'react';
import {Button, Icon} from '@material-ui/core';

function PurchaseButton()
{
    return (
        <Button component="a"
                href=""
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
            <Icon className="text-16 mr-4">computer</Icon>
            <span>Used Code Here</span>
        </Button>
    );
}

export default PurchaseButton;
