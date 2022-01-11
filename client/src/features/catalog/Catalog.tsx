import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return(
        <>
          <ProductList products={products} />
          <Button variant='contained' onClick={addProduct}>AddProduct</Button>
    
        </>
    )
}