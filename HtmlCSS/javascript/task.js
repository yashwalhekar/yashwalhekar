const inventory = [
  { name: "Laptop", category: "Electronics", price: 899.99, quantity: 15 },
  { name: "Headphones", category: "Electronics", price: 199.99, quantity: 30 },
  { name: "Office Chair", category: "Furniture", price: 149.99, quantity: 20 },
  { name: "Coffee Maker", category: "Appliances", price: 79.99, quantity: 25 },
  { name: "Running Shoes", category: "Footwear", price: 120.0, quantity: 50 },
  {name: "Bluetooth Speaker",category: "Electronics",price: 99.99,quantity: 40,},
  { name: "Water Bottle", category: "Accessories", price: 25.0, quantity: 100 },
  { name: "Desk Lamp", category: "Furniture", price: 45.0, quantity: 10 },
  { name: "Smartphone", category: "Electronics", price: 699.99, quantity: 8 },
  { name: "Jacket", category: "Clothing", price: 129.99, quantity: 60 },
];

//!add Item
const addItem = (name, category, price, quantity) => {
  const temp = {
    name,
    category,
    price,
    quantity,
  };
  inventory.push(temp);
};
addItem("Tablet", "Electronics", 250, 19);

//!update the  details

const updateItem = (name, newName) => {
  const itemIndex = inventory.findIndex((item) => item.name === name);

  if (itemIndex !== -1) {
    inventory[itemIndex] = Object.assign({}, inventory[itemIndex], {
      name: newName,
    });
  } else {
    console.log("no data found");
  }
};
updateItem("Laptop","Gaming Laptop")

//!Delete item from inventory

const deleteItem = (name)=>{
    const updatedList = inventory.filter((item)=>item.name !== name)
    console.log("----------------------------------------------",updatedList);
     
}
deleteItem("Tablet")

//!List all the items in the array

const listAllTheItem = (inventory) => {
  inventory.map((items) => {
    console.log(items);
  });
};
listAllTheItem(inventory);
