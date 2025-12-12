let array = document.querySelectorAll('.alt-images');
array.forEach(element => {
    element.addEventListener('mouseenter', () => {
        let mainImage = document.querySelector('.product_info_left img');
        mainImage.src = element.src;
    });
});