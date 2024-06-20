import {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import {ProductResponse} from "../../../dto/products/productResponse.ts";
import {findAllProducts} from "../../../api/productsApi.ts";
import HeaderAdd from "../../components/templates/HeaderAdd.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {hasRole} from "../../../utils/helpers/hasRole.ts";
import ProductCard from "../../components/products/ProductCard.tsx";

const ProductPage = () => {
    const [products, setProducts] = useState<ProductResponse[]>([])
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        findAllProducts().then((response) => setProducts(response))
    }, []);

    return (
        <Box>
            {
                 auth.user && hasRole(auth.user!, "Seller") ? (
                    <HeaderAdd text={'Products Page'} showButton={true} buttonText={"Add Product"} link={'add'} />
                ) : (
                    <HeaderAdd text={'Products Page'} showButton={false}/>
                )
            }
            <Box sx={{
                height: 20
            }} />
            <Grid spacing={1} container>
                {products.map((product, index) => {
                    return <Grid key={index} item xs={4}>
                        <ProductCard key={index} {...product} />
                    </Grid>
                })}
            </Grid>
        </Box>
    )
}

export default ProductPage