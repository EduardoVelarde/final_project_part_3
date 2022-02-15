# final_project_part_2
# This proyect has implemented Dao Structure to have many Databases Mongo/FileStorage
<h1 style="color=BLUE">Dao Services using JavaScript with NodeJS </h1>
<p>In this project youll find an implementation of Ecommerce backend using local persitence storage</p>

# Project Routes {products}
<h1>Prodouct Routes</h1>
<ul>
    <li><br>/getAll</br> use the following endpoint to retrieve all the product that has been added to the database</li>
    <li><br>/getProduct?id=""</br> Get a product using his matching ID and pass it by query</li>
    <li><br>/saveProduct</br> Post method, send the product info using a JSON with the following format:
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
    </li>
<ul>
