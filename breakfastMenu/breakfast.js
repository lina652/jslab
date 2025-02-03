const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $35.99', 'Grilled Salmon - $28.99', 'Chicken Alfredo - $25.50', 'Veggie Stir Fry - $19.99'];
const dessertMenu = ['Cheesecake - $10.50', 'Chocolate Lava Cake - $12.99', 'Ice Cream Sundae - $8.99', 'Fruit Tart - $9.50'];

function displayMenu(menuArray, elementId) {
    const menuList = document.getElementById(elementId);
    menuArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });
}

// Display menus on page load
displayMenu(breakfastMenu, 'breakfastMenu');
displayMenu(mainCourseMenu, 'mainCourseMenu');
displayMenu(dessertMenu, 'dessertMenu');
