document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Product 1" },
        { name: "Product 2" },
        { name: "Product 3" },
        { name: "Product 4" }
    ];

    const productSelect = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
