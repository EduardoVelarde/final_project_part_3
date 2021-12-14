let productDao
let cartsDao
switch('json'){
    case 'json':
        const { default:DaoCartFiles}=await import('./carts/DaoCartsFiles.js')
        const { default:DaoProductsFiles}=await import('./products/DaoProductsFiles.js')
        productDao= new DaoProductsFiles()
        cartsDao=new DaoCartFiles()
        break
}

export {productDao,cartsDao}