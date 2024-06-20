import Box from "@mui/material/Box";
import HeaderBack from "../../components/templates/HeaderBack.tsx";
import {Controller, useForm} from "react-hook-form";
import {ProductRequest} from "../../../dto/products/productRequest.ts";
import {Grid, Paper, Stack, styled, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";
import {createProduct} from "../../../api/productsApi.ts";
import {CloudUpload} from "@mui/icons-material";
import {useState} from "react";
import Typography from "@mui/material/Typography";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddProductPage = () => {
    const navigate = useNavigate();

    const {handleSubmit, control, formState: {errors}} = useForm<ProductRequest>({
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            stock: 0,
        }
    });

    const addMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            navigate("/products");
        }
    })

    const addProduct = (data: ProductRequest): void => {
        addMutation.mutate(data);
    }

    const [fileNames, setFileNames] = useState<string[]>([]);
    const handleFileChanges = (files: FileList) => {
        setFileNames([]);
        for (let i = 0; i < files.length; i++) {
            setFileNames((prev) => [...prev, files[i].name])
        }
    }

    return (
        <Box>
            <HeaderBack text={'Add Product'} link={"/products"} />
            <Box sx={{
                height: 20
            }} />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Paper elevation={2} sx={{
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '75%',
                    paddingX: 2
                }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Controller
                                name={"name"}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Product Name"
                                        helperText={
                                            errors["name"]
                                                ? errors["name"].message
                                                : ""
                                        }
                                        error={errors["name"] !== undefined}
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name={"description"}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="description"
                                        label="Product Description"
                                        helperText={
                                            errors["description"]
                                                ? errors["description"].message
                                                : ""
                                        }
                                        error={errors["description"] !== undefined}
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name={"price"}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="price"
                                        label="Product Price"
                                        type='number'
                                        helperText={
                                            errors["price"]
                                                ? errors["price"].message
                                                : ""
                                        }
                                        error={errors["price"] !== undefined}
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name={"stock"}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="stock"
                                        label="Product Stock"
                                        type='number'
                                        helperText={
                                            errors["stock"]
                                                ? errors["stock"].message
                                                : ""
                                        }
                                        error={errors["stock"] !== undefined}
                                        {...field}
                                    />
                                )}
                            />
                            <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                                Upload Product Images
                                <Controller
                                    control={control}
                                    name={"images"}
                                    render={({ field: { value, onChange, ...field } }) => {
                                        return (
                                            <VisuallyHiddenInput
                                                type="file"
                                                id={"images"}
                                                multiple={true}
                                                onChange={(event) => {
                                                    try {
                                                        onChange(event.target.files ? event.target.files : null);
                                                        handleFileChanges(event.target.files!)
                                                    } catch (error: unknown) {
                                                        console.log(error)
                                                    }
                                                }}
                                                {...field}
                                            />
                                        );
                                    }}
                                />
                            </Button>
                            <Stack direction={'column'}>
                                {
                                    fileNames.map((fileName: string, index: number) => {
                                        return <Typography key={index}>
                                            {fileName}
                                        </Typography>
                                    })
                                }
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 1, mb: 2}}
                                onClick={handleSubmit((data) => {
                                    addProduct(data);
                                })}
                            >
                                Add New Product
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}

export default AddProductPage