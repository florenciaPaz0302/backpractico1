class ProductManager {
    constructor() {
        this.products = [];
    }
    static id = 0

    addProduct(titulo, descripcion, precio, imagen, codigo, stock) {
        ProductManager.id++
        this.products.push({ titulo, descripcion, precio, imagen, codigo, stock, id:ProductManager.id });
    }

    getProduct(){
        return this.products;
    }
    getProductById(id){
        if(!this.products.find((producto) => producto.id === id)){
            console.log("Producto no encontrado")
        } else{
            console.log("producto encontrado")
        }

    }
}
const productos = new ProductManager

productos.addProduct("remera", "blanca con mangas", 500, "imagen1", "abc123", 5);
productos.addProduct("short", "negro con blanco", 400, "image21", "abc124", 4);

console.log(productos.getProduct())

console.log(productos.getProductById(2))

