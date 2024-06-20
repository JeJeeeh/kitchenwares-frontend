import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ArrowBackIosNew} from "@mui/icons-material";
import {Link} from "react-router-dom";

interface HeaderProps {
    text: string,
    link: string
}

const HeaderBack = (props: HeaderProps) => {
    return (
        <Grid container justifyContent={'space-between'}>
            <Grid item>
                <Typography variant={'h4'} sx={{
                    fontWeight: 700
                }}>{props.text}</Typography>
            </Grid>
            <Grid item>
                <Link to={props.link}>
                    <Button variant={'contained'} startIcon={<ArrowBackIosNew />} color={'error'}>
                        Back
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default HeaderBack