import Cart from '../../containers/carts/cartsContainerMongo.js'

class DaoCartsMongo extends Cart {
    constructor(){
        super({
           name:'product'
        },'cart')
    }
    
}

export default DaoCartsMongo;