function render() {
    const productsStor = localStorageUtil.getProducts();

    headerPage.render(productsStor.length);
    productPage.render();
    footerPage.render();
}

spinnerPage.render();

let CATALOG = [];

    fetch('server/catalog.json')
        .then(res => res.json())
        .then(body => {
            CATALOG = body;

            setTimeout(() => {
                spinnerPage.handlClear();
                render();
            }, 1000)
            
        })
        .catch(() => {
            spinnerPage.handlClear();
            errorPage.render()
        })

