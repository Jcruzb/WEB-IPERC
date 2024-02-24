import { Box } from "@mui/material"
import { useState } from "react"
import RegisterClient from "./RegisterClient"

const Register = () => {
    const [registeringClient, setRegisteringClient] = useState(true)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        client: null
    })
    console.log(user)

    return (
        <Box>
            {
                registeringClient ?
                    <RegisterClient
                        setRegisteringClient={setRegisteringClient}
                        setUser={setUser}
                    /> :
                    <p>Registerin User</p>
            }
        </Box>
    )
}

export default Register