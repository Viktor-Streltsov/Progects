class Header {

    hendlShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <span class="header-logo">computer shop</span>
                <div class="header-counter" onclick="headerPage.hendlShoppingPage()">
                    🛒 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();