import {Product} from "../../../dto/products/product.ts";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";

const ProductCard = (props: Product) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://http.cat/102"
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard