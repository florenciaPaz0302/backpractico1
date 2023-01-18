class ProductManager {
    constructor() {
        this.products = [];
    }
    static id = 0

    addProduct(title, description, price, imagen, code, stock) {
        for(let i = 0; i < this.products.length;i++){
            if (this.products[i].code === code) {
                console.log(`el codigo ${code} esta repetido`);
                break;
            }
        }

     const newProduct ={
        title,
        description, 
        price, 
        imagen, 
        code, 
        stock,
     }
        if(!Object.values(newProduct).includes(undefined)){
          ProductManager.id++
          this.products.push({ 
            ...newProduct,
            id: ProductManager.id, 
          });
        }else{
            console.log("llenar todos los campos")
        }    
    }

    getProduct(){
        return this.products;
    }
    existe (id) {
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id) {
      !this.existe(id) ? console.log("not found") : console.log(this.existe(id));
    }
}
const productos = new ProductManager();

console.log(productos.getProduct());

productos.addProduct("remera", "blanca con mangas", 500, "imagen1", "abc123",5 );
productos.addProduct("short", "negro con blanco", 400, "imagen2", "abc124");


console.log(productos.getProduct());

productos.addProduct("medias", "negras", 200, "imagen3", "abc124", 2);

productos.getProductById(2);

