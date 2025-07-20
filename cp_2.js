//step 3:use fetch and .then() to retrieve data
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            return response.json();
        })
        .then(data=> {
            console.log('Using .then():');
            data.forEach(product=> {
                console.log(product.fields.name);
            });
        })
        .catch(error=> {
            console.error('Fetch error (then):', error);
        });
    }

    //step 4: Fetch products async/await, try/catch
    async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}

// Step 5: Display products, images and price
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; // Clear previous content if any

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = image[0].url;
    img.alt = name;

    const title = document.createElement('h2');
    title.textContent = name;

    const cost = document.createElement('p');
    cost.textContent = `$${(price / 100).toFixed(2)}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(cost);

    container.appendChild(card);
  });
}

// step 6: Handle error function
function handleError(error) {
  console.error('An error occurred:', error.message);
}

// Step 7: Call functions
fetchProductsThen();
fetchProductsAsync();