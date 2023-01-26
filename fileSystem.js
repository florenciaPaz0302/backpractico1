import { promises as fs } from "fs"

class ProductManager {
  constructor() {
    this.path = "./productos.txt"
    this.products = []
  }

  static id = 0

  addProduct = async (title, description, price, imagen, code, stock) => {

    ProductManager.id++

    let newProduct = {
        title, description, price, imagen, code, stock, id: ProductManager.id
    };
    this.products.push(newProduct)
    
    await fs.writeFile(this.path, JSON.stringify(this.products))
  };
  readProducts = async () => {
    let respuesta = await fs.readFile(this.path, "utf-8")
    return JSON.parse(respuesta)

  }

  getProducts = async () => {
    let otraRespuesta = await this.readProducts()
    return console.log(otraRespuesta)
  }
  getProductsById = async (id) => {
    let respuesta3 = await this.readProducts()
    if(!respuesta3.find(product => product.id === id)){
        console.log("no se encontro el producto")
    }else {
        console.log(respuesta3.find(product => product.id === id))
    }
  }
  deleteProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productfilter = respuesta3.filter(products => products.id != id)
    await fs.writeFile(this.path, JSON.stringify(productfilter));
    console.log("se elimino el Prod")
 };
  updateProducts = async ({id, ...producto}) => {
    await this.deleteProductsById(id);
    let prod = await this.readProducts()
    console.log(prod)
    let productAgregado = [{ id, ...producto }, ...prod];
    await fs.writeFile(this.path, JSON.stringify(productAgregado));
  };
};

const productos = new ProductManager

/*productos.addProduct("Remera rosa", "Rosa mangas cortas", 500, "Imagen1", "prueba123", 3)
productos.addProduct("Remera verde", "verde mangas cortas", 400, "Imagen2", "prueba123", 4)
productos.addProduct("Remera roja", "roja mangas cortas", 300, "Imagen", "prueba123", 5)*/

//productos.getProducts()

//productos.getProductsById(2)
//productos.deleteProductsById(3)
productos.updateProducts({
  title: 'Remera verde',
    description: 'verde mangas cortas',
    price: 2400,
    imagen: 'Imagen2',
    code: 'prueba123',
    stock: 4,
    id: 2
})
