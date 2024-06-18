import iziToast from 'izitoast';

import "izitoast/dist/css/iziToast.min.css";


const default_option = {
    icon: '',
    position: 'center',
    timeout: 5000,
}   


export const showError = (error) =>
    iziToast.error({
        ...default_option,
        title: "Oops!!!",
        message: error.message ? `${error.message}. You can try to reloaded the page.` : error,
        timeout: 5000,
    });

export const showInfo = () =>
    iziToast.info({
        ...default_option,
        title: "Cat not found!",
        message: 'Incorrect cat. Please choose another cat.'
    });

export const showErrorPage = (element, error) => {
    if (element) {
        setTimeout(() => {
            element.hidden = false;
            element.textContent = `Oops!!! ${error.message ? `${error.message}` : error}. You can try to reloaded the page.`
        }, 5000)
    }
}
