import SlimSelect from 'slim-select';
import SimpleBar from 'simplebar';

import { refs } from './refs';
import { fetchBreeds } from './cat-api';
import { createOptions, drawCat } from './markups';
import { fetchCatByBreed } from './cat-api';
import { showError, showErrorPage, showInfo } from './notification';

const handlerLoader = () => {
    refs.loader.classList.add('loader-hidden');
}
window.addEventListener('load', handlerLoader)

const handlerSelectBreed = async ([{ value }]) => {
    if (value) {
        try {
            refs.catContainer.classList.toggle('cat-info-hidden');
            refs.loader.classList.toggle('loader-hidden');
            const data = await fetchCatByBreed(value);
            if (data && data.length) {
                refs.catContainer.innerHTML = '';
                refs.catContainer.insertAdjacentHTML('afterbegin', drawCat({ ...data[0].breeds[0], url: data[0].url }));
                refs.loader.classList.toggle('loader-hidden');
                refs.catContainer.classList.toggle('cat-info-hidden');
            } else {showInfo()}
        } catch (error) {
            refs.loader.classList.toggle('loader-hidden');
            showError(error);
            showErrorPage(refs.errorField, error);
        }
    }
}


const initSelect = async () => {
    try {
        const data = await fetchBreeds();
        refs.select.innerHTML = await createOptions(data);
        const select = new SlimSelect({
            select: 'select.breed-select',
            events: {
                afterChange: handlerSelectBreed,
            }
        })
        if (select) new SimpleBar(document.querySelector('.ss-list'));
    } catch (error) {
        showError(error);
        showErrorPage(refs.errorField, error);
    }
}

initSelect();