const Mongoose=require('mongoose')
const bcrypt=require('bcryptjs');
const users=require('../Models/user')
const data= async()=>{
    try {
        await Mongoose.connect(
            "mongodb://127.0.0.1:27017/skytours",
            {
                 useNewUrlParser : true , 
                 useUnifiedTopology : true , 
                   
              },
              async (err) => {
                if (err) console.log(err);
                else {
                    let admin = await users.findOne({
                        role: 'admin',
                        
                    });
                   
                    if (!admin) {
                        let password = 'adminpassword'
                        const salt = await bcrypt.genSalt(10);
                        const hashed = await bcrypt.hash(password, salt);
                        let new_user = new users({
                         nom:"admin",
                         prenom:"admin",
                         email:"adminpass@gmail.com",
                         password:hashed,
                         role:"admin",
                        });
                         await new_user.save();
                         console.log(`admin account has been added : ${users.email}`);
                    }else{
                        console.log(` admin account already exist \n admin email : ${admin.email}`);
        
                    }
                    
                }
        
            }
            
        
              )
              console.log('data base connect' )
             } 
     catch (error)
             {
             console.log(error)
             console.log('data base not connect ')
             };   
    
            }
module.exports=data 