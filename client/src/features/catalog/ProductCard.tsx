import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
      />
      <CardMedia
        sx={{height: 140, backgroundSize: 'contain' }}
        component="img"
        image={product.pictureUrl}
        alt={product.name}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Basket</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}