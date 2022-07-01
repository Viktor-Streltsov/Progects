class LockalStoregeUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorege = localStorage.getItem(this.keyName);
        if(productsLocalStorege !== null) {
            return JSON.parse(productsLocalStorege);
        }
        return [];
    }
    
    putProducts(id) {
        let pushProduct = false;
        let products = this.getProducts();
        const index = products.indexOf(id);

        if(index === -1) {
            products.push(id);
            pushProduct = true;
        }else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products))

        return { pushProduct, products }
    }
}

const localStorageUtil = new LockalStoregeUtil();

