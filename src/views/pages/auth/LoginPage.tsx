import {Alert, Container, CssBaseline, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Controller, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {login} from "../../../api/authApi.ts";
import {AuthResponse} from "../../../dto/auth/authResponse.ts";
import {AxiosError} from "axios";
import {jwtDecode} from "jwt-decode";
import AccessToken from "../../../dto/auth/accessToken.ts";
import {LoginRequest} from "../../../dto/auth/loginRequest.ts";
import {User} from "../../../dto/auth/user.ts";
import {authSliceActions} from "../../../features/authSlice.ts";
import {Navigate} from "react-router-dom";


const LoginPage = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const {handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            username: "",
            password: ""
        },
    });

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data: AuthResponse) => {
            const accessToken = data.accessToken;
            const decodedToken = jwtDecode<AccessToken>(accessToken);
            const user: User = {
                username : decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                roles : decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            }

            dispatch(
                authSliceActions.setCredentials({
                    user: user,
                    accessToken: accessToken
                })
            )
        },
        onError: (error: unknown) => {
            if (error instanceof AxiosError) {
                setErrorMessage(error.response?.data)
            }
        }
    })

    if (loginMutation.isSuccess) {
        return <Navigate to={"/products"} />
    }

    const handleLogin = (data: LoginRequest) => {
        setErrorMessage("");
        loginMutation.mutate(data);
    }

    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box sx={{mt: 1}}>
                <Controller
                    name="username"
                    control={control}
                    render={({field}) => (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoComplete="username"
                            autoFocus
                            helperText={
                                errors["username"]
                                    ? errors["username"].message
                                    : ""
                            }
                            error={errors["username"] !== undefined}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={
                                errors["password"]
                                    ? errors["password"].message
                                    : ""
                            }
                            error={errors["password"] !== undefined}
                            {...field}
                        />
                    )}
                />
                <Grid item xs={12}>
                    {errorMessage !== "" ? <Alert severity='error'>
                        {errorMessage}
                    </Alert> : <></>}
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 1, mb: 2}}
                    onClick={handleSubmit((data) => {
                        handleLogin(data);
                    })}
                >
                    Sign In
                </Button>
                <Grid container justifyContent={'center'}>
                    <Link href={"/register"} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Box>
        </Box>
    </Container>
}

export default LoginPage