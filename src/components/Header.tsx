import React from 'react';
import {Typography} from "@mui/material";

const Header = () => {
    return (
        <Typography variant="h1" gutterBottom sx={{
            background: '#1d3e67',
            padding: '15px',
            marginBottom: '50px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '50px',
            textAlign: 'center',
            textTransform: 'capitalize',
        }}>
            Your exchange rate application
        </Typography>
    );
};

export default Header;