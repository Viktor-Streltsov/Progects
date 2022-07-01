import { ROOT_INDEX } from '../../constans/root';

import './Error.css';

class Error {
    render() {
        const htmlWrapper = `
            <div class="error__container">
                <span>
                    <p class="error__alert">Error</p>
                    <p class="error__alert">Try again</p>
                </span>
            </div>
        `;
        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error()