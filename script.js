

async function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value;
    const appId = '32647047'; //  Edamam App ID
    const appKey = 'f26ff4496f58281d09f7186218d1a3d0'; //  Edamam App Key
    const apiUrl = `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const recipeHTML = `
            <h2>${recipe.recipe.label}</h2>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <p>Calories: ${Math.round(recipe.recipe.calories)}</p>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        `;

        recipeDiv.innerHTML = recipeHTML;
        recipeList.appendChild(recipeDiv);
    });
}

/////////////////////////////////////////////////////////////////

// function displayRecipes(recipes) {
//     const recipeList = document.getElementById('recipeList');
//     recipeList.innerHTML = '';

//     recipes.forEach(recipe => {
//         const recipeDiv = document.createElement('div');
//         recipeDiv.classList.add('recipe');

//         const ingredientsList = recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('');
//         const instructions = recipe.recipe.url;

//         const recipeHTML = `
//             <h2>${recipe.recipe.label}</h2>
//             <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
//             <h3>Ingredients:</h3>
//             <ul>${ingredientsList}</ul>
//             <h3>Instructions:</h3>
//             <p><a href="${instructions}" target="_blank">View Recipe</a></p>
//         `;

//         recipeDiv.innerHTML = recipeHTML;
//         recipeList.appendChild(recipeDiv);

//         // Add event listener to toggle visibility of ingredients
//         recipeDiv.addEventListener('click', () => {
//             const ingredientsList = recipeDiv.querySelector('ul');
//             ingredientsList.classList.toggle('hidden'); // Toggle visibility by adding/removing 'hidden' class
//         });
//     });
// }

