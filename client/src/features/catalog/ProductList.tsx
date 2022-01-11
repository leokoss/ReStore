import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
  }


export default function ProductList({products}: Props){
  return(
    
    <List>
        {products.map((product) =>(
          <ProductCard product={product} />
        ))}
      </List>
      
  )
}