class Footer {
    render() {
        const html = `
            <div class="footer-container">
                <span class="footer-text">Простой проект магазина</span>
                <a class="footer-set" href="https://github.com/Viktor-Streltsov">Жми и переходи на мой GitHub)</a>
            </div>
        `;

        ROOT_FOOTER.innerHTML = html;
    }
}

const footerPage = new Footer();