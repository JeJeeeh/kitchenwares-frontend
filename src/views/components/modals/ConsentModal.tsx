import Typography from "@mui/material/Typography";
import {Box, Modal, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {consentModalSliceActions} from "../../../features/consentModalSlice.ts";
import Button from "@mui/material/Button";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConsentModal = () => {
    const consentModal = useSelector((state: RootState) => state.consentModal)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(consentModalSliceActions.close())
    }

    return (
        <Modal
            open={consentModal.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    User Data Agreement
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your data will be saved and used for saving preferences etc.
                </Typography>
                <Box sx={{
                    height: 10
                }} />
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Button variant={'outlined'} onClick={handleClose}>Agree</Button>
                    <Button variant={'outlined'} color={'error'} onClick={handleClose}>Disagree</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ConsentModal