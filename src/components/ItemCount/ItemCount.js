import {useState} from 'react';
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


function ItemCount ({stock, initial, onAdd}) {
    const [itemCount, setItemCount] = useState(initial);
  
    return (
      <div style={{ display: "block", padding: 30 }}>
        
        <div>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
          </Badge>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => { if(itemCount < stock) {
                setItemCount(itemCount + 1);
              } else {}
            }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
            <Button onClick={() =>{onAdd(itemCount)}}>Añadir al Carrito</Button>
          </ButtonGroup>
        </div>
      </div>
    );
}

export default ItemCount