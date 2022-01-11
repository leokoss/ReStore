import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
  }


export default function ProductList({products}: Props){
    <List>
        {products.map((product) =>(
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
}