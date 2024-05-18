let posts = [
    { id: 1, title: "Man1", image: "M1.jpg", category: "Man", price: "100€" },
    { id: 2, title: "Girl1", image: "W1.jpg", category: "Girl", price: "110€" },
    { id: 3, title: "Man2", image: "M2.jpg", category: "Man", price: "120€" },
    { id: 4, title: "Girl2", image: "W2.jpg", category: "Girl", price: "130€" },
    { id: 5, title: "Man3", image: "M3.jpg", category: "Man", price: "140€" },
    { id: 6, title: "Girl3", image: "W3.jpg", category: "Girl", price: "150€" },
    { id: 7, title: "Man3", image: "M4.jpg", category: "Man" ,price: "160€" },
    { id: 8, title: "Girl3", image: "W4.jpg", category: "Girl", price: "170€" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    if (category === "Корзина") {
        category = "All"; 
    }
    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4 >${post.title}</h4>
                                    <p  >${post.price}</p>
                                    <button onclick="addToCart(${post.id})" >Додати в корзину</button>

                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

