import ResponsiveAppBar from "../../components/templates/ResponsiveAppBar.tsx";
import {Outlet} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const MasterPage = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{
                height: 20
            }} />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default MasterPage