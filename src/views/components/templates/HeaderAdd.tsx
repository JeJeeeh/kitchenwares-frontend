import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Add} from "@mui/icons-material";
import {Link} from "react-router-dom";

interface HeaderProps {
    text: string,
    showButton: boolean,
    buttonText?: string,
    link?: string
}

const HeaderAdd = (props: HeaderProps) => {
    return (
        <Grid container justifyContent={'space-between'}>
            <Grid item>
                <Typography variant={'h4'} sx={{
                    fontWeight: 700
                }}>{props.text}</Typography>
            </Grid>
            {props.showButton && <Grid item>
                <Link to={props.link!}>
                    <Button variant={'contained'} startIcon={<Add />}>
                        {props.buttonText}
                    </Button>
                </Link>
            </Grid>}
        </Grid>
    )
}

export default HeaderAdd