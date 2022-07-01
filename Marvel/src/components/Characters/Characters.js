import { getDataApi } from '../../utils/getDataApi';
import { IMG_STANDART_XLARGE } from '../../constans/api';
import { ROOT_MODUL } from '../../constans/root';

import Notificarion from '../Notificarion';
import imgCloseWhite from './img/close-white.svg';

import './Characters.css';

class Characters {

    renderContent(data) {

        let htmlContent = '';

        data.forEach(({ name, thumbnail: {path, extension} }) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
            
            htmlContent += `
                <li class="characters__item">
                    <img class="img__cover characters__img" src="${imgSrc}" />
                    <span class="characters__name">${name}</span>
                </li>
            `;
        })

        const htmlWrapper = `
            <div class="wrapper">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button 
                class="btn characters__close"
                onclick="modul.innerHTML = ''"
                style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
        `;

        ROOT_MODUL.innerHTML = htmlWrapper;

    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : Notificarion.render();
    }
}

export default new Characters();