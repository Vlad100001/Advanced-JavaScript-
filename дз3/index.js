const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


const feedback = document.querySelector('.feedback');

let idProduct = 0;

initialData.forEach(element => {
    // Название продукта
    const product = document.createElement('p');
    product.textContent += element.product;
    feedback.appendChild(product);

    // Отзывы
    const reviews = document.createElement("ol");
    element.reviews.forEach(element => {
        idProduct = element.id;
        reviews.innerHTML += `<li>${element.text} (ID ${idProduct})</li>`;
    })
    feedback.appendChild(reviews);

    // Поле ввода отзыва
    const inputText = document.createElement("input");
    feedback.appendChild(inputText);

    // Кнопка отправки отзыва
    const btn = document.createElement("button");
    btn.textContent = "Отправить";
    btn.addEventListener("click", () => {
        if (inputText.value.length >= 5 && inputText.value.length <= 500) {
            idProduct++;
            reviews.innerHTML += `<li>${inputText.value} (ID ${idProduct})</li>`;
        } else {
            errorMessage.textContent = "Комментарий должен быть длинной не менее 5 и не более 500 символов";
        }
    });
    feedback.appendChild(btn);

    //Сообщение об ошибке
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "RED";
    feedback.appendChild(errorMessage);
})