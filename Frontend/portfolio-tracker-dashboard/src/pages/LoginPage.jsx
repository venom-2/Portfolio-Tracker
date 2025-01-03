import React from 'react';
import { TextField, Button, Box, Typography, Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#535C91', // Light blue for primary
        },
        background: {
            default: '#070F2B', // Dark background
            paper: '#1B1A55',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

const LoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login submitted');
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Box sx={{
                    width: '100%',
                    height: '50%',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: 'background.paper',
                }}
                    textAlign="center">
                    <Typography variant="h5" component="h4" gutterBottom>
                        Login to Your Account
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
                        Track Your Growth, Secure Your Future
                    </Typography>
                    <form onSubmit={handleLogin} style={{ width: '100%' }}>
                        <Box mb={2}>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                variant="outlined"
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                required
                                variant="outlined"
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ padding: 1.5 }}
                        >
                            Login
                        </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default LoginPage;
