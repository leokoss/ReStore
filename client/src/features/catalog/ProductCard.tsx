import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
      />
      <CardMedia
        component="img"
        src={product.pictureUrl}
        title={product.name}
        sx={{
          objectFit: 'contain',
          height: 140
        }}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Basket</Button>


        <Button size="small">
          <Link to={`/catalog/${product.id}`} style={{
            textDecoration: "none"
          }}>
            View
          </Link>
        </Button>

      </CardActions>
    </Card>
  )
}