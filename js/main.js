/*
    Дано 3 блоки
    1. В лівій частині сторінки - перелік категорій.
    2. При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
    3. Клік на товар - інформацію про товар у правому блоці.
    4. В інформації товару - кнопка “купити”.
    5. При натисканні на “купити” з'являється повідомлення, що товар куплений
       і повернення у вихідний стан програми (коли відображається лише список категорій).
*/

const refs = {
    categories: document.querySelectorAll('a'),
    productList: document.querySelector('.list-of-products'),
    productInformation: document.querySelector('.info-about-products'),
}

const products = {
    clothes: [
        { article: 'CL1044490', name: "Светр", description: 'Светр Хакі Вільного Крою', price: 600.00 },
        { article: 'CL1054968', name: "Сорочка", description: 'Сорочка З Довгим Рукавом Біла', price: 500.00 },
        { article: 'CL1055530', name: "Джинси", description: 'Джинси Сині Вузького Крою', price: 800.00 }
    ],
    shoes: [
        { article: 'KW8373', name: "Кросівки", description: 'Кросівки Skechers Virtue', price: 1400.00 },
        { article: 'VS74-116561', name: "Туфлі", description: 'Туфлі RESPECT', price: 700.00 },
        { article: '409258_30050_011', name: "Черевики", description: 'Черевики RESPECT зимові', price: 1500.00 }
    ],
    accessories: [
        { article: 'CL1041120', name: "Ремінь", description: 'Ремінь Чорний', price: 100.00 },
        { article: 'CL1061351', name: "Рукавички", description: 'Рукавички Чорні', price: 250.00 },
        { article: 'CL1054122', name: "Шкарпетки", description: 'Шкарпетки Сірі', price: 50.00 }
    ]
};

refs.categories.forEach(function (elem, index) {
    elem.addEventListener('click', function () {
        // start function "clothesCategory"
        function productsCategory() {
            if (index === 0) {
                refs.productList.innerHTML = `
                    <ul>
                        <li><a class="link"" onclick="showClothesInfo1()">${products.clothes[0].name}</a></li>
                        <li><a class="link"" onclick="showClothesInfo2()">${products.clothes[1].name}</a></li>
                        <li><a class="link"" onclick="showClothesInfo3()">${products.clothes[2].name}</a></li>
                    </ul>
                `;
            }
            if (index === 1) {
                refs.productList.innerHTML = `
                    <ul>
                        <li><a class="link"" onclick="showShoesInfo1()">${products.shoes[0].name}</a></li>
                        <li><a class="link"" onclick="showShoesInfo2()">${products.shoes[1].name}</a></li>
                        <li><a class="link"" onclick="showShoesInfo3()">${products.shoes[2].name}</a></li>
                    </ul>
                `;
            }
            if (index === 2) {
                refs.productList.innerHTML = `
                    <ul>
                        <li><a class="link"" onclick="showAccessoriesInfo1()">${products.accessories[0].name}</a></li>
                        <li><a class="link"" onclick="showAccessoriesInfo2()">${products.accessories[1].name}</a></li>
                        <li><a class="link"" onclick="showAccessoriesInfo3()">${products.accessories[2].name}</a></li>
                    </ul>
                `;
            }
        }
        productsCategory();
        // finish function "clothesCategory"
    });
});

// start info clothes
function showClothesInfo1() {
    if (products.clothes[0].name === 'Светр') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.clothes[0].article}</p>
            <p>Товар: ${products.clothes[0].name}</p>
            <p>Опис: ${products.clothes[0].description}</p>
            <span>Ціна: ${products.clothes[0].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showClothesInfo2() {
    if (products.clothes[1].name === 'Сорочка') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.clothes[1].article}</p>
            <p>Товар: ${products.clothes[1].name}</p>
            <p>Опис: ${products.clothes[1].description}</p>
            <span>Ціна: ${products.clothes[1].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showClothesInfo3() {
    if (products.clothes[2].name === 'Джинси') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.clothes[2].article}</p>
            <p>Товар: ${products.clothes[2].name}</p>
            <p>Опис: ${products.clothes[2].description}</p>
            <span>Ціна: ${products.clothes[2].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}
// finish info clothes

// start info shoes
function showShoesInfo1() {
    if (products.shoes[0].name === 'Кросівки') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.shoes[0].article}</p>
            <p>Товар: ${products.shoes[0].name}</p>
            <p>Опис: ${products.shoes[0].description}</p>
            <span>Ціна: ${products.shoes[0].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showShoesInfo2() {
    if (products.shoes[1].name === 'Туфлі') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.shoes[1].article}</p>
            <p>Товар: ${products.shoes[1].name}</p>
            <p>Опис: ${products.shoes[1].description}</p>
            <span>Ціна: ${products.shoes[1].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showShoesInfo3() {
    if (products.shoes[2].name === 'Черевики') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.shoes[2].article}</p>
            <p>Товар: ${products.shoes[2].name}</p>
            <p>Опис: ${products.shoes[2].description}</p>
            <span>Ціна: ${products.shoes[2].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}
// finish info shoes

// start info accessories
function showAccessoriesInfo1() {
    if (products.accessories[0].name === 'Ремінь') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.accessories[0].article}</p>
            <p>Товар: ${products.accessories[0].name}</p>
            <p>Опис: ${products.accessories[0].description}</p>
            <span>Ціна: ${products.accessories[0].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showAccessoriesInfo2() {
    if (products.accessories[1].name === 'Рукавички') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.accessories[1].article}</p>
            <p>Товар: ${products.accessories[1].name}</p>
            <p>Опис: ${products.accessories[1].description}</p>
            <span>Ціна: ${products.accessories[1].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}

function showAccessoriesInfo3() {
    if (products.accessories[2].name === 'Шкарпетки') {
        refs.productInformation.innerHTML = `
            <p>Артикул: ${products.accessories[2].article}</p>
            <p>Товар: ${products.accessories[2].name}</p>
            <p>Опис: ${products.accessories[2].description}</p>
            <span>Ціна: ${products.accessories[2].price}₴</span>
            <br>
            <button class="btn-buy" style="margin-top: 15px;" onclick="buyProduct()">Купити</button>
        `;
    }
}
// finish info accessories

// button "buy"
function buyProduct() {
    refs.productList.innerHTML = '';
    refs.productInformation.innerHTML = '';
    alert('Товар куплений');
}