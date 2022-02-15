# final_project_part_2
# This proyect has implemented Dao Structure to have many Databases Mongo/FileStorage
<h1 style="color:red;">Dao Services using JavaScript with NodeJS </h1>
<p>In this project youll find an implementation of Ecommerce backend using local persitence storage</p>

# Project Routes {products}

    * /getAll use the following endpoint to retrieve all the product that has been added to the database
    * /getProduct?id=""** Get a product using his matching ID and pass it by query
    * /saveProduct** Post method, send the product info using a JSON with the following format:
    object:{
            name:{
                type:String
            },
            price:{
                type:Number
            },
            description:{
                type:String
            },
            url:String,
            stock:Number
        }

    * /updateProduct Put method, is require to send the product ID and the attributes you want to change, send Id using query params and Json for attributes
    * /deleteProduct Delete method, is require to send the product ID and the attributes you want to change, send Id using query params and Json for attributes
    * /deleteAllProduct Delete method, using this endpoint should delete all the carts that has been created

# Project Routes {carts}
    Brief Resume
    * /createCart creates a cart and return his Id as value
    * /deleteCart deletes a cart and return success
    * /showAllItems return all the carts and the product that has been added to it
    * /addItems?idCart=""&idProduct="" with idCart and idProdct adds a product to the specified cart
    * /deleteItems?idCart=""&idProduct="" with the specified carts delete a product within it