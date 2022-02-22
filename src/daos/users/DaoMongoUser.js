import User from '../../containers/users/containerMongoUsers.js'

class DaoUsersMongo extends User {
    constructor(){
        super({
            username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    name:{type:String},
    age:{type:Number},
    avatar:String
        },'user')
    }
    
}

export default DaoUsersMongo;