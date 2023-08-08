
function changeDetailImage() {
    let detailTitle = document.querySelector('[data-detail-title]');
    detailTitle.textContent = "Opps!";

    let detailImage = document.querySelector('[data-detail-image]');
    detailImage.setAttribute('src', 'images/otter5.jpg');

    detailImage.addEventListener('click', () => {
        console.log('you clicked!');
    });
}