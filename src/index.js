document.getElementById('grid-container')?.addEventListener('mouseover', hoverState);

const articles = document.querySelectorAll('article');
articles.forEach((icon) => icon.addEventListener('mouseleave', removeState));

//When the github container gets hovered over
function hoverState(event) {
    const image = event.target;

    //Only does something when hovered over the image
    if(image instanceof HTMLImageElement) {
        const text = image.closest('ul');
        const div = image.closest('div');

        //Adds border class so that the image becomes transparent and zoomed in
        if(div instanceof HTMLDivElement) {
            div.classList.add('border');
        }

        //Adds class to the first li element so that CHECK IT OUT is shown
        if(text?.firstElementChild instanceof HTMLLIElement) {
            text.firstElementChild.classList.add('uncover');
        }
    }
}
//When mouse leaves image 
function removeState(event) {
    const image = event.target;

    //Only does something when mouse goes away from image
    if(image instanceof HTMLElement) {
        const list = image.querySelector('.uncover');
        const picture = image.querySelector('.border');
        
        //Removes border class so that the image goes back to original state
        if(picture instanceof HTMLDivElement) {
            picture.classList.remove('border');
        }
        // //Removes class to the first li element and goes back to original state
        if(list instanceof HTMLLIElement) {
            list.classList.remove('uncover');
        }     
    }
}
