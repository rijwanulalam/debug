document.getElementById("btn-product").addEventListener("click", function(){
    const inputNameField = document.getElementById("input-name").value;
    const inputValueField = document.getElementById("input-value").value;
    document.getElementById("input-name").value = '';
    document.getElementById("input-value").value = '';
    displayProducts(inputNameField, inputValueField)
    saveProductToLocalStorage(inputNameField, inputValueField)
})

const displayProducts = (inputNameField, inputValueField) => {
    const ul = document.getElementById("list-container");
    const li = document.createElement("li");
    li.innerHTML = `${inputNameField} : ${inputValueField}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}