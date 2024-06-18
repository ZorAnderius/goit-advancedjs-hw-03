export const createOptions = async (options) => options.map(({id, name}) => `
        <option value="${id}">${name}</option>
        ` ).join('');


export const drawCat = ({name, description, temperament, url}) => `
        <div class="img-thumb">
            <img class="breed-img" src="${url}" alt="${name ?? 'Here must be some image'}">
        </div>
        <div class='cat-info-text'>
            <div>
                <h2 class="breed-title">${name ?? 'Here must be some text'}</h2>
                <p class="breed-desc">${description ?? 'Here must be some text'}</p>
            </div>
            <div>
                <h3 class="breed-subtitle">Temperaments: </h3>
                <p class="breed-desc">${temperament ?? 'Here must be some text'}</p>
            </div>
        </div>`;