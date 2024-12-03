document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display coffee and food items
    fetch('/api/coffees')
    .then(response => response.json())
    .then(coffees => {
        const coffeeList = document.getElementById('coffee-list');
        coffeeList.innerHTML = ''; // Clear existing list
        coffees.forEach(coffee => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${coffee.image_url}" class="card-img-top" alt="${coffee.name}">
                <div class="card-body">
                    <h5 class="card-title">${coffee.name}</h5>
                    <p class="card-text">Price: $${coffee.price}</p>
                </div>
            `;
            coffeeList.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching coffee data:', error));

    fetch('/api/food')
    .then(response => response.json())
    .then(foods => {
        const foodList = document.getElementById('food-list');
        foodList.innerHTML = ''; // Clear existing list
        foods.forEach(food => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${food.image_url}" class="card-img-top" alt="${food.FName}">
                <div class="card-body">
                    <h5 class="card-title">${food.FName}</h5>
                    <p class="card-text">Price: $${food.Price}</p>
                </div>
            `;
            foodList.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching food data:', error));
});

// Handle form submission for adding coffee
document.getElementById('add-coffee-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('coffee-name').value;
    const price = document.getElementById('coffee-price').value;
    const image_url = document.getElementById('coffee-image').value;

    fetch('/api/coffees', {
        method: 'POST',
        body: JSON.stringify({ name, price, image_url }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
        if (result.success) {
            document.getElementById('add-coffee-form').reset();
            // Optionally reload coffees
        }
    })
    .catch(error => console.error('Error adding coffee:', error));
});

// Handle form submission for adding food
document.getElementById('add-food-form').addEventListener('submit', event => {
    event.preventDefault();
    const FName = document.getElementById('food-name').value;
    const Price = document.getElementById('food-price').value;
    const image_url = document.getElementById('food-image').value;

    fetch('/api/food', {
        method: 'POST',
        body: JSON.stringify({ FName, Price, image_url }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
        if (result.success) {
            document.getElementById('add-food-form').reset();
            // Optionally reload foods
        }
    })
    .catch(error => console.error('Error adding food:', error));
});
