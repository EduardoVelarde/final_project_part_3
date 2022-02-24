import config from '../../config.js'
import mongoose from 'mongoose'
import Product from '../products/containerProducts.js';

const Schema = mongoose.Schema;
const model = mongoose.model;

class Cart{
    constructor(tableReference,tableName){
        // database connection to mongoDB
        mongoose.connect(config.mongoose.database);
        mongoose.connection.on("open",()=>{
         console.log('database connection SUCCESS')
        })
        mongoose.connection.on("error",()=>{
        console.log('database connection ERROR')
        })
        //Note always use the world this for variable declared in the constructor since is require to use the value 
        //thorught the class
        this.cartSchema=new Schema({
            user:{type: Schema.Types.ObjectId,ref:tableReference.nameRef2},
            products:[{ type: Schema.Types.ObjectId, ref: tableReference.nameRef1 }],
            status:{type:String,
            default:'Not Submited'},
            username:String
        },{
            timestamps: true,
        })
    
        this.Cart=model(tableName,this.cartSchema);
    }
    async createCart(currentUser) {
            let cart1 = new this.Cart()
            let newCart = await cart1.save()
            newCart.user= currentUser
            newCart.username=currentUser.username
            newCart.save()
            return newCart;
    }
    async deleteCart(cartId) {
        try{
            let cartDeleted = this.Cart.findByIdAndDelete({_id:id});
            if(!cartDeleted){
                return "Card was not found"
            }
            return "Card has been successfully deleted"
        }catch(err){
            return "Card was not found"
        }
    }
    async showAllItems(user) {
        try{
            let query = this.Cart.find({username:user}).populate('products').populate('user').exec()
            return query;
        }catch(err){
            console.log(err)
            return "theres no items yet to display"
        }
    }
    async deleteUserCartNotSubmited(user){
        try{
            let query = await this.Cart.deleteMany({status:"Not Submited"},{username:user.username})
            return true;
        }catch(err){
            console.log(err)
            return "Not carts has been found"
        }
    }
    async currentUserCart(){
        try{
            let query = await this.Cart.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
                console.log( post );
              });
            return query
        }catch(err){

        }
    }
    async addItems(cartId, product) {
        try{
            let cartFound=await this.Cart.findById({_id:cartId});
            cartFound.products.push(product)
            return await cartFound.save();
        }catch(err){
            console.log(err)
            return "something went wrong =("
        }
        
    }
    async deleteItem(idCart, product) {
        try{
            let cartFound=await this.Cart.findById({_id:idCart});
            //Populate saves the refference of the product which has already been created
            // in the other route
            cartFound.products=cartFound.products.filter(x=>x.toString()!=product._id.toString())
            return await cartFound.save();
        }catch(err){
            console.log(err)
            return "something went wrong =("
        }
    }
}

export default  Cart