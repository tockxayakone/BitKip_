const form = document.querySelector('#invoice-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const customerName = form.elements.customer-name.value;
  const itemName = form.elements.item-name.value;
  const quantity = form.elements.quantity.value;
  const price = form.elements.price.value;
  
  const total = quantity * price;
  
  console.log(`
    Invoice:
    Customer Name: ${customerName}
    Item Name: ${itemName}
    Quantity: ${quantity}
    Price: ${price}
    Total: ${total}
  `);
});
