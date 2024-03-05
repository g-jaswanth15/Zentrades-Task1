
const apiUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';

function addProductRow(product){
        const tableBody = document.getElementById('products_table');
        
        const newRow = document.createElement('tr');
        
        const att =document.createAttribute("id");
        att.value="subcategory";

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        
        cell1.setAttributeNode(att);
        
        cell1.textContent = product.subcategory;
        cell2.textContent = product.title;
        cell3.textContent = product.price;
        cell4.textContent = product.popularity;
        
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        
        tableBody.appendChild(newRow);
}

function updateTable(data){
    for(let product_id in data.products){
        var product=data.products[product_id];
        addProductRow(product,product_id)
    }
}

fetch(apiUrl)
  .then(response => {
    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the data received from the API
    updateTable(data)
  })
  .catch(error => {
    // Handle errors that may occur during the request
    console.error('There was a problem with the fetch operation:', error);
  });


  