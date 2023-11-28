document.addEventListener('DOMContentLoaded', function() {
    const pestsButton = document.getElementById('pests-button');
    const weedsButton = document.getElementById('weeds-button');
    const commonPestList = document.querySelector('.info-box');

pestsButton.addEventListener('click', function() {
    showPests(pestsData);

    pestsButton.style.backgroundColor = '#4CAF50';
    pestsButton.style.color = '#fff';

    weedsButton.style.backgroundColor = '#fff';
    weedsButton.style.color = '#000';

});

weedsButton.addEventListener('click', function() {
    showWeeds(weedsData);

    weedsButton.style.backgroundColor = '#4CAF50';
    weedsButton.style.color = '#fff';

    pestsButton.style.backgroundColor = '#fff';
    pestsButton.style.color = '#000';


});

function showPests(pests) {
    commonPestList.innerHTML = ''; // Clear the existing content

    pests.forEach(pest => {
        const pestItem = document.createElement('div');
        pestItem.className = 'pest';

        const pestLink = document.createElement('a');  // anchor element
        pestLink.href = pest.destination;

        const pestImage = document.createElement('img');
        pestImage.src = pest.image;
        pestImage.className = 'listIcon';

        const pestName = document.createElement('p');
        pestName.textContent = pest.name;

        pestLink.appendChild(pestImage);
        pestLink.appendChild(pestName);

        pestItem.appendChild(pestLink);
        commonPestList.appendChild(pestItem);
    });
}

function showWeeds(pests) {
    commonPestList.innerHTML = ''; // Clear the existing content

    pests.forEach(pest => {
        const pestItem = document.createElement('div');
        pestItem.className = 'pest';

        const pestLink = document.createElement('a');  // anchor element
        pestLink.href = pest.destination; // destination page url

        const pestImage = document.createElement('img');
        pestImage.src = pest.image;
        pestImage.className = 'listIcon';

        const pestName = document.createElement('p');
        pestName.textContent = pest.name;

        pestLink.appendChild(pestImage);
        pestLink.appendChild(pestName);
        
        pestItem.appendChild(pestLink);
        commonPestList.appendChild(pestItem);
    });
}


});