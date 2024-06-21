import ResponsiveAppBar from "../../components/templates/ResponsiveAppBar.tsx";
import {Outlet} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ConsentModal from "../../components/modals/ConsentModal.tsx";

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
            <ConsentModal />
        </>
    )
}

export default MasterPage