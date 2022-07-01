class Spinner {
    handlClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
            <div class="spinner-conteiner">
                <img class="spinner__img" src="components/Spinner/img/spiner.svg" />
            </div>
        `;


        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
