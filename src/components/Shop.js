import Item from "./Item";
import { useState } from 'react';
import uniqid from "uniqid";
import Navbar from "./Navbar";
import chicken from '../images/chicken.jpg';
import groucho from "../images/groucho.jpg";
import usb_rock from "../images/usb-rock.jpg";
import useless from "../images/useless.jpg";
import whoopee from "../images/whoopee.jpg";
import Cart from "./Cart";
import './Shop.css'

const Shop=()=>{
  const ITEM_DATA=[
     {
      itemID: 122863,
      itemTitle: "Rubber Chicken",
      itemImage: chicken,
    },
    {
      itemID:  122864,
      itemTitle: "Groucho Glasses",
      itemImage: groucho,
    },
    {
      itemID:  122865,
      itemTitle: "USB Pet Rock",
      itemImage: usb_rock,
    },
    {
      itemID:  122866,
      itemTitle: "Useless Box",
      itemImage: useless,
    },
    {
      itemID:  122867,
      itemTitle: "Whoopee Cushion",
      itemImage: whoopee,
    },
  ]
  const CART_DATA=
  
   [
    
      {
        itemID:  "122866",
        itemTitle: "Useless Box",
        itemImage: useless,
        itemQuantity: "4",
      },
      {
        itemID:  "122867",
        itemTitle: "Whoopee Cushion",
        itemImage: whoopee,
        itemQuantity: "2",
      },
    
  ]

  const [items,setItems]=useState(ITEM_DATA);
  const [cartItems,setCartItems]=useState([]);
  const addItem=(itemToAdd)=>{
let newCart;
 const exist=cartItems.some(function(cartItem) {return cartItem.itemID==itemToAdd.itemID
 });
// console.log(exist)
if (exist) {
 newCart=cartItems.map(function(cartItem){
    if (cartItem.itemID==itemToAdd.itemID) {
    return  {...cartItem,itemQuantity: cartItem.itemQuantity+itemToAdd.itemQuantity}
    //  cartItem;
    // console.log(cartItem)
    }
    return cartItem
  })
  console.log(newCart)
}
else {
newCart=[...cartItems,itemToAdd]
}



//  const newCart=exist ? cartItems.map(cartItem=>cartItem.itemID===itemToAdd.itemID ? {...cartItem,itemQuantity: cartItem.itemQuantity+ itemToAdd.itemQuantity}:cartItem) : setCartItems([...cartItems,newCart]);
// console.log(item)
// newCart.push(item)
//  console.log(newCart)
 setCartItems(newCart);
// console.log(cartItems)
  }
  const deleteItem=(id)=>{
    const remainingItems = cartItems.filter((item) => id !== item.itemID);
    setCartItems(remainingItems);
  }
// console.log(items)
    return (
        <div>
    <Navbar />
    <div className="mai">
    <Cart cartItems={cartItems} deleteItem={deleteItem}/>
    <div className="items">
    {items.map(item=>{
return  <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} addItem={addItem} displayItem={true}/>
    })}
       
        </div>
    </div>    
    </div>
    )
}

export default Shop;