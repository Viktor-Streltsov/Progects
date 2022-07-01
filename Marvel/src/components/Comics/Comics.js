import { getDataApi } from '../../utils/getDataApi';
import { API_URL, URL_COMICS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTERS } from '../../constans/api';
import { ROOT_INDEX } from '../../constans/root';

import Characters from '../Characters';
import Error from '../Error';

import './Comics.css';

class Comics {

    renderComics(data) {
        let htmlContent = '';

        data.forEach( ({id, title, thumbnail: {extension, path}}) => {

            if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
                const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics__item__even comics__item__styles" data-uri="${uri}">
                        <span class="comics__name">${title}</span>
                        <img class="img__contain comics__img" src="${imgSrc}" />
                    </li>
                    `;
            }

        });

        const htmlWrapper = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        data ? this.renderComics(data) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__item__even').forEach(element => {
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri);
            })
        })
    }

}

export default new Comics()