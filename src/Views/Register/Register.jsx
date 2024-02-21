import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";

const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    with: "100%",
}
const centerForm = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    with: "100%",
}

const Register = () => {
    const [Client, setClient] = useState({
        rs: '',
        ruc: '',
        address: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setClient({
            ...Client,
            [e.target.id]: e.target.value
        });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={centerStyle}>
                <Typography variant="h4">Registrarse</Typography>
            </Box>
            <Divider />
            {/* Formulario de registro de empresa */}
            <Box sx={centerForm}>
                <Typography variant="h5">Empresa</Typography>
                <TextField sx={{ width: '100%', maxWidth: '65%' }} onChange={handleChange} id="rs" label="Nombre de la empresa" />
                <TextField sx={{ width: '100%', maxWidth: '65%' }} onChange={handleChange} id="ruc" label="RUC" />
                <TextField sx={{ width: '100%', maxWidth: '65%' }} onChange={handleChange} id="address" label="Dirección" />
                <TextField sx={{ width: '100%', maxWidth: '65%' }} onChange={handleChange} id="phone" label="Teléfono" />
                <TextField sx={{ width: '100%', maxWidth: '65%' }} onChange={handleChange} id="email" label="Correo" />
                <Button variant="contained" onClick={() => console.log(Client)}>Registrar</Button>
            </Box>
        </Box>
    )
}

export default Register;