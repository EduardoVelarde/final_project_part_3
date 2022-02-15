let productDao
let cartsDao
switch('mongo'){
    case 'json':
        const { default:DaoCartFiles}=await import('./carts/DaoCartsFiles.js')
        const { default:DaoProductsFiles}=await import('./products/DaoProductsFiles.js')
        productDao= new DaoProductsFiles()
        cartsDao=new DaoCartFiles()
        break
        case 'mongo':
            const { default:DaoCartsMongo}=await import('./carts/DaoCartMongo.js')
            const { default:DaoProductsMongo}=await import('./products/DaoProductsMongo.js')
            productDao= new DaoProductsMongo()
            cartsDao=new DaoCartsMongo()
            break
}

export {productDao,cartsDao}