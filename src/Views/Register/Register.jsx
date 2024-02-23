import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { createClient } from "../../Services/ClientService";
import { useFormik } from "formik";
import { validationClientSchema } from "../../Utils/yup.client.schema";

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
    const formik = useFormik({
        initialValues: {
            rs: "",
            ruc: "",
            address: "",
            phone: "",
            email: "",
        },
        validationSchema: validationClientSchema,
        onSubmit: (values) => {
            createClient(values)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        },
    });



    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={centerStyle}>
                <Typography variant="h4">Registrarse</Typography>
            </Box>
            <Divider />
            {/* Formulario de registro de empresa */}
            <Box sx={centerForm}>
                <Typography variant="h5">Empresa</Typography>
                <TextField
                    sx={{ width: '100%', maxWidth: '65%' }}
                    onChange={formik.handleChange}
                    id="rs"
                    label="Nombre de la empresa"
                    value={formik.values.rs}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.rs && formik.errors.rs ? (
                    <Typography variant="caption" color="red">{formik.errors.rs}</Typography>
                ) : null}
                <TextField
                    sx={{ width: '100%', maxWidth: '65%' }}
                    onChange={formik.handleChange}
                    id="ruc"
                    label="RUC"
                    value={formik.values.ruc}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.ruc && formik.errors.ruc ? (
                    <Typography variant="caption" color="red">{formik.errors.ruc}</Typography>
                ) : null}
                <TextField
                    sx={{ width: '100%', maxWidth: '65%' }}
                    onChange={formik.handleChange}
                    id="address"
                    label="Dirección"
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                    <Typography variant="caption" color="red">{formik.errors.address}</Typography>
                ) : null}
                <TextField
                    sx={{ width: '100%', maxWidth: '65%' }}
                    onChange={formik.handleChange}
                    id="phone"
                    label="Teléfono"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <Typography variant="caption" color="red">{formik.errors.phone}</Typography>
                ) : null}
                <TextField
                    sx={{ width: '100%', maxWidth: '65%' }}
                    onChange={formik.handleChange}
                    id="email"
                    label="Correo"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <Typography variant="caption" color="red">{formik.errors.email}</Typography>
                ) : null}
                <Button variant="contained" onClick={formik.handleSubmit}>Registrar</Button>
            </Box>
        </Box>
    )
}

export default Register;