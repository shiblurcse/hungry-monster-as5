function searchingMeal(){
    const mealItem = document.getElementById('mealInput').value

    async function searchingMealResult(){
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+mealItem)
        const data = await response.json()
        return data
    }
    searchingMealResult().then(data => {
        showMeal(data)
    })
}

const showMeal = mealNumber =>{
    const mealDetails = document.getElementById('meal')
    mealDetails.innerHTML = ''
    document.getElementById('aboutMeal').innerHTML = ''
    mealNumber.meals.forEach(mealF => {
        const colDiv = document.createElement('div')
        colDiv.className = 'col-lg-3'
        const itemDiv = document.createElement('div')
        itemDiv.className = 'meal-item'
        const mealImgDiv = document.createElement('div')
        mealImgDiv.className = 'meal-img'
        const itemNameDiv = document.createElement('div')
        itemNameDiv.className = 'meal-itemName'

        const mealImgDetails = `
            <a href="#" onclick="showMealDetails('${mealF.strMeal}')">
                <img src="${mealF.strMealThumb}" class="meal-img">
            </a>
        `
        const mealNameDetails = `
            <a href="#">
                <h4 onclick="showMealDetails('${mealF.strMeal}')">${mealF.strMeal}</h4>
            </a>
        `
        mealImgDiv.innerHTML = mealImgDetails
        itemDiv.appendChild(mealImgDiv)
        itemNameDiv.innerHTML = mealNameDetails
        itemDiv.appendChild(itemNameDiv)
        colDiv.appendChild(itemDiv)
        mealDetails.appendChild(colDiv)
    });
    document.getElementById('mealInput').value = ""
};


const showMealDetails = mealName =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
    .then(res => res.json())
    .then(data => extractMealDetails(data.meals[0]))
};

const extractMealDetails = mealF => {
    const mealDiv = document.getElementById('aboutMeal')
    mealDiv.innerHTML = ''
    const colDiv = document.createElement('div')
    colDiv.className = 'col-lg-6'
    const mealItemDiv = document.createElement('div')
    mealItemDiv.className = 'meal-item'
    const itemImageDiv = document.createElement('div')
    itemImageDiv.className = 'meal-img'
    const itemNameDiv = document.createElement('div')
    itemNameDiv.className = 'meal-name'

    const mealImg = `
        <a href="#">
            <img src="${mealF.strMealThumb}" class="meal-img">
        </a>
    `
    const mealNameDetails = `
        <a href="#">
            <h2>${mealF.strMeal}</h4>
        </a>
        <div class="ingredients">
            <h3>Ingredients</h5>
            <ul id="ingredients-list">
                <li>${mealF.strIngredient1}</li>
                <li>${mealF.strIngredient2}</li>
                <li>${mealF.strIngredient3}</li>
                <li>${mealF.strIngredient4}</li>
                <li>${mealF.strIngredient5}</li>
                <li>${mealF.strIngredient6}</li>
                <li>${mealF.strIngredient7}</li>
                <li>${mealF.strIngredient8}</li>
                <li>${mealF.strIngredient9}</li>
                <li>${mealF.strIngredient10}</li>
            </ul>
        </div>
    `
    itemImageDiv.innerHTML = mealImg
    mealItemDiv.appendChild(itemImageDiv)
    itemNameDiv.innerHTML = mealNameDetails
    mealItemDiv.appendChild(itemNameDiv)
    colDiv.appendChild(mealItemDiv)
    mealDiv.appendChild(colDiv)
}



