import { Box, Button, Typography } from "@mui/material";

const Login = () => {
    return (
        <Box>
            <Typography variant="h4">Login</Typography>
            <Typography variant="h5">or register</Typography>
            <Button variant="contained" href="/#/register">Register</Button>
        </Box>
    )
}

export default Login;