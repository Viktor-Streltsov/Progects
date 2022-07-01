import { ROOT_MODUL } from '../../constans/root';

import imgCloseBlack from './img/close-black.svg';

import './Notificarion.css';

class Notificarion {
    render() {
        const htmlWrapper = `
            <div class="notification__container">
                <span>Sorry No data</span>
                <button 
                class="btn__noti notification__close"
                onclick="modul.innerHTML = ''"
                style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
        `;
        ROOT_MODUL.innerHTML = htmlWrapper;
    }
}

export default new Notificarion();