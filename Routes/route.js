const express = require("express");
const router = express.Router();
const User = require( "../Models/user")
const bus = require( "../Models/bus")


const Vol = require( "../Models/vol")
const Circuit = require( "../Models/circuit")
const Hotel=require("../Models/hotel")
const Chambre=require("../Models/chambre");
const bcrypt=require("bcryptjs")
const sekretkey="mlkr,nlkrt,nmlkrn,mlertrk"
const jwt=require("jsonwebtoken")
const  gouvernerat=require("../Models/gouvernerante")
 const chaufeur =require("../Models/chauffeur")


 const multer =require("multer");

//dfefinir un storage pour ajouter une image
const storage =multer.diskStorage({
    //destination de l'image
    destination:function(req,file,callback){
      callback(null,'./uploads/');
    },
    filename:function(req,file,callback){
        callback(null,Date.now()+ '-' + file.originalname) ;
    }
});

const upload=multer({
    storage: storage,
   
})
router.post("/addgouvernerat",upload.any('image'), async(req,res)=>{
    try {
    let Gouv = await gouvernerat.findOne({
        nom:req.body.nom
    })
    if(Gouv){
        res.status(401).json("gouver déja exist ")
    }

        let Gouverne =new gouvernerat({
            nom:req.body.nom,
            desciption:req.body.desciption
        })
    
    if (req.files.length > 0) {
        req.files.map(file => {
  
            Gouverne.imageGouv = "http://127.0.0.1:5000/" + file.path
        })
      } else {
        Gouverne.imageGouv =  "http://127.0.0.1:5000/uploads/image.jpg"
      }
let result =await Gouverne.save();
res.status(200).json("save succes ")
    } catch (error) {
        res.status(400).json("failed save")
        console.log(error)
    }
})
router.get("/getallgouver",async(req,res)=>{
    try {
        let getGouv= await gouvernerat.find().populate({
          path:"hotels",
          populate:{
            path:"chambre"
          }
        })
        res.status(200).json(getGouv)
    } catch (error) {
        res.status(400).json("failed save")
        console.log(error)
    }
})
router.get("/getgouver/:id",async(req,res)=>{
    try {
        let id =req.params.id
      let getOneGouv =await gouvernerat.findById(id).populate({
        path:"hotels",
        populate:{
          path:"chambre"
        }
      })
      res.status(200).json(getOneGouv)
    } catch (error) {
        res.status(400).json("failed save")
        console.log(error)
    }
})

router.delete("/deletgouver/:id",async(req,res)=>{
    try {
      let GOUV = await gouvernerat.findById(id)
      let hotels = await ordonance.findById(GOUV.Hotel)
        let id =req.params.id
         await gouvernerat.findByIdAndDelete({_id:id})
         await Hotel.deleteMany({
          _id: {
            $gte: hotels,

          }})
         res.status(200).json("gouvernerat deleted ")
    } catch (error) {
        console.log(error)
    }
})
router.put("/updategouver/:id",upload.any('image'), async(req,res)=>{
    try {
             
      const updateGouv = {
        nom : req.body.nom ,
        desciption:req.body.desciption
      };
      if (req.files.length > 0) {
        req.files.map(file => {
  
            updateGouv.imageGouv = "http://127.0.0.1:5000/" + file.path
        })
      } 
    
   let updategouv=  await  gouvernerat.findByIdAndUpdate(
    {   _id: req.params.id},
        
      
        {
            ...updateGouv
          }
      )
      res.status(200).json({message:"success updated ",result:updategouv})
    } catch (error) {
        console.log(error)
    }
})


router.post('/ajoutvols',upload.any('image'),async(req,res)=>{
    try {
        let vole = new  Vol({ 
            nom : req.body.nom ,
            aereportDepart : req.body.aereportDepart,
            aereportArriver:req.body.aereportArriver,
            dateDepart:req.body.dateDepart,
            dateArrivee:req.body.dateArrivee,
            nbrAdult: req.body.nbrAdult,
            nbrEnfant:req.body.nbrEnfant,
            nbrBebe:req.body.nbrBebe
         });
         if (req.files.length > 0) {
            req.files.map(file => {
      
                vole.image = "http://127.0.0.1:5000/" + file.path
            })
          } else {
            vole.image =  "http://127.0.0.1:5000/uploads/image.jpg"
          }
        let result= await vole.save()
      res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
        
    }
    })

    router.get("/getvol",async(req,res)=>{
        try {
            const vol= await Vol.find()
            res.status(200).send(vol)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    })

    router.delete("/deletvol/:id",async(req,res)=>{
        try{
            await Vol.findByIdAndDelete({_id:req.params.id})
            res.status(200).send("suprimer avec success")
        }catch(error){
            res.status(400).send(error)
        }
    })

    router.put("/editvol/:id",upload.any('image'),async (req, res) => {
        try{

      
      const updateRecord = {
        nom : req.body.nom ,
        aereportDepart : req.body.aereportDepart,
        aereportArriver:req.body.aereportArriver,
        dateDepart:req.body.dateDepart,
        dateArrivee:req.body.dateArrivee,
        nbrAdult: req.body.nbrAdult,
        nbrEnfant:req.body.nbrEnfant,
        nbrBebe:req.body.nbrBebe
      };
      if (req.files.length > 0) {
        req.files.map(file => {
  
          updateRecord.image = "http://127.0.0.1:5000/" + file.path
        })
      } 
    
   let updatevol=  await  Vol.findByIdAndUpdate(
    {   _id: req.params.id},
        
      
        {
            ...updateRecord
          }
      )
      res.status(200).send({response:updatevol,Message:"edit succes"})
    }catch(error){
        res.status(400).send('error')
        console.log(error)
    }
    });

    router.get("/getvol/:id",async (req, res) =>{
        try {
            const vol= await Vol.findById(req.params.id)
            res.status(200).send(vol)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    });


    router.post('/ajoutbus/:id',upload.any('image'),async(req,res)=>{
        try {
            let Bus = new  bus({ 
                nom : req.body.nom ,
                matricul:req.body.matricul
             });
             if (req.files.length > 0) {
                req.files.map(file => {
          
                    Bus.imageBus = "http://127.0.0.1:5000/" + file.path
                })
              } else {
                Bus.imageBus =  "http://127.0.0.1:5000/uploads/image.jpg"
              }
            let result= await bus.save()
            await Circuit.findByIdAndUpdate(
              req.params.id,
              {
              $push: { bus: result._id }
              },
              { new: true }
          )

         
                      
          res.status(200).send(result);
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
            
        }
        })
    
        router.get("/getbus",async(req,res)=>{
            try {
                const Bus= await bus.find()
                res.status(200).send(Bus)
            } catch (error) {
                res.status(400).send(error)
                console.log(error)
            }
        })
    
        router.delete("/deletbus/:id",async(req,res)=>{
            try{
                await bus.findByIdAndDelete({_id:req.params.id})
                res.status(200).send("suprimer avec success")
            }catch(error){
                res.status(400).send(error)
            }
        })
    
        router.put("/editbus/:id",upload.any('image'),async (req, res) => {
            try{
          if (!bus.isValid(req.params.id))
            return res.status(400).send("ID unknow : " + req.params.id)
          
          const updateRecord = {
            nom : req.body.nom ,
            matricul:req.body.matricul
          };
          if (req.files.length > 0) {
            req.files.map(file => {
      
                updateRecord.imageBus = "http://127.0.0.1:5000/" + file.path
            })
          }
        
       let updatebus=  await  bus.findByIdAndUpdate(
        {   _id: req.params.id},
            
          
            {
                ...updateRecord
              }
          )
          res.status(200).send({response:updatebus,Message:"edit succes"})
        }catch(error){
            res.status(400).send('error')
            console.log(error)
        }
        });
    
        router.get("/getbus/:id",async (req, res) =>{
            try {
                const Bus= await bus.findById(req.params.id)
                res.status(200).send(Bus)
            } catch (error) {
                res.status(400).send(error)
                console.log(error)
            }
        });


    router.post('/ajouthotels/:id',upload.any('image'),async(req,res)=>{
        try {
        let hotel = new  Hotel({ 
            nom: req.body.nom,
            etoile: req.body.etoile,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            type_chambre : req.body.type_chambre
        });
        if (req.files.length > 0) {
            req.files.map(file => {
      
                hotel.imagehotel = "http://127.0.0.1:5000/" + file.path
            })
          } else {
            hotel.imagehotel =  "http://127.0.0.1:5000/uploads/image.jpg"
          }
        let result= await hotel.save()
        await gouvernerat.findByIdAndUpdate(
          req.params.id,
          {
          $push: { hotels: result._id }
          },
          { new: true }
      )
      res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
        
    }
    });


    router.delete("/delethotel/:id",async(req,res)=>{
        try{
          let id =req.params.id
          let hot = await Hotel.findById(id)
          let chambre = await ordonance.findById(hot.Chambre)
            await Hotel.findByIdAndDelete({_id:req.params.id}),
            await Chambre.deleteMany({
                _id: {
                  $gte: chambre
                }})
            res.status(200).send("suprimer avec success")
        }catch(error){
            res.status(400).send(error)
        }
    })

    router.put("/edithotel/:id",upload.any('image'),async (req, res) => {
        try{
      
      
      const updateRecord = {
        nom: req.body.nom,
            etoile: req.body.etoile,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            type_chambre : req.body.type_chambre
      };
      if (req.files.length > 0) {
        req.files.map(file => {
  
            updateRecord.imagehotel = "http://127.0.0.1:5000/" + file.path
        })
      }
     await  Hotel.findByIdAndUpdate(
        req.params.id,
        
      
        {
            ...updateRecord
          }
      )
      res.status(200).send("edit succes")
    }catch(error){
        res.status(400).send('error')
        console.log(error)
    }
    });

        router.post('/ajoutchauffeur/:id',async(req,res)=>{
             try {
            let Chauffeur = new  chaufeur({ 
                nom: req.body.nom,
                prenom: req.body.prenom,
                naissance : req.body.naissance,
                adresse: req.body.adresse,
                telephone: req.body.telephone
        });
        

        let result= await Chauffeur.save()
        await Circuit.findByIdAndUpdate(
          req.params.id,
          {
          $push: { chaufeur: result._id }
          },
          { new: true }
      )
        res.status(200).send(result);
        } catch (error) {
        console.log(error)
        res.status(400).json(error);

        }
        });



    
        router.delete("/deletchauffeur/:id",async(req,res)=>{
            try{
                await chaufeur.findByIdAndDelete({_id:req.params.id})

                await Circuit.findByIdAndUpdate(
                  {_id:hot.hotel},
                 {
                   $pull: { hotel: hot._id },
                 }),
                res.status(200).send("suprimer avec success")
            }catch(error){
                res.status(400).send(error)
            }
        })
    
        router.put("/editchauffeur/:id",async (req, res) => {
            try{
          
          
          const updateRecord = {
            nom: req.body.nom,
                prenom: req.body.prenom,
                naissance : req.body.naissance,
                adresse: req.body.adresse,
                telephone: req.body.telephone
          };
        
         await  chaufeur.findByIdAndUpdate(
            req.params.id,
            
          
            {
                ...updateRecord
              }
          )
          res.status(200).send("edit succes")
        }catch(error){
            res.status(400).send('error')
            console.log(error)
        }
        });





    router.post('/ajoutcircuit',upload.any('image'),async(req,res)=>{
        try {
        let circuit = new  Circuit({ 
            nom : req.body.nom ,
            description : req.body.description,
            destinationDepart : req.body.destinationDepart,
            destinationArrivee: req.body.destinationArrivee,
            dateDepart: req.body.datDepart,
            dateArrivee: req.body.dateArrivee,
            nbrAdult: req.body.nbrAdult
        });
        if (req.files.length > 0) {
          req.files.map(file => {
    
            circuit.image = "http://127.0.0.1:5000/" + file.path
          })
        } else {
          circuit.image =  "http://127.0.0.1:5000/uploads/image.jpg"
        }
        let result= await circuit.save()
      res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
        
    }
    });

    router.get("/getcircuit",async(req,res)=>{
        try {
            const circuit = await Circuit.find()
            res.status(200).send(circuit)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    })
    router.get("/getcircuit/:id",async(req,res)=>{
        try{
            const circuit = await Circuit.findById({_id:req.params.id}).populate("chaufeur").populate("bus")
            res.status(200).send(circuit)
        }catch(error){
            res.status(400).send(error)
        }
    })

    router.delete("/deletcircuit/:id",async(req,res)=>{
        try{
          let id =req.params.id
          let circ = await Circuit.findById(id)
          let chauf = await chaufeur.findById(circ.chaufeur)
          let Bus = await Circuit.findById(circ.bus)
          
            await Circuit.findByIdAndDelete({_id:req.params.id})
            await chaufeur.deleteMany({
              _id: {
                $gte: chauf
              }})
              await bus.deleteMany({
                _id: {
                  $gte: Bus
                }})
            res.status(200).send("suprimer avec success")
        }catch(error){
            res.status(400).send(error)
        }
    })

    router.put("/editcircuit/:id",upload.any('image'),async (req, res) => {
        try{
      
      
      const updateRecord = {
        nom : req.body.nom ,
        description : req.body.description,
        destinationDepart : req.body.destinationDepart,
        destinationArrivee: req.body.destinationArrivee,
        dateDepart: req.body.datDepart,
        dateArrivee: req.body.dateArrivee,
        nbrAdult: req.body.nbrAdult
      };
      if (req.files.length > 0) {
        req.files.map(file => {
  
          updateRecord.image = "http://127.0.0.1:5000/" + file.path
        })
      } 
     await  Circuit.findByIdAndUpdate(
        req.params.id,
        
      
        {
            ...updateRecord
          }
      )
      res.status(200).send("edit succes")
    }catch(error){
        res.status(400).send('error')
        console.log(error)
    }
    });

    router.post('/ajoutchambre/:id',upload.any('image'),async(req,res)=>{
        try {
        let chambre = new  Chambre({ 
          nom:req.body.nom,
          description:req.body.description,
          numero_chambre:req.body.numero_chambre,
          etage:req.body.etage
        });
        if (req.files.length > 0) {
          req.files.map(file => {
    
            chambre.image = "http://127.0.0.1:5000/" + file.path
          })
        } 
        
        let result= await chambre.save()
        await Hotel.findByIdAndUpdate(
            {_id:req.params.id},
           {
             $addToSet: { chambre: result._id },
           },
           { new: true },)
      res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
        
    }
    });

    router.delete("/deletchambre/:id",async(req,res)=>{
        try{
             let hot =Chambre.findById(req.params.id)
           let chamb= await  Chambre.findByIdAndDelete({_id:hot})
            await Hotel.findByIdAndUpdate(
                {_id:hot.hotel},
               {
                 $pull: { hotel: hot._id },
               }),
            res.status(200).send("suprimer avec success")
        }catch(error){
            res.status(400).send(error)
        }
    })
    
    router.put("/editchambre/:id",upload.any('image'),async (req, res) => {
        try{
     
      const updateRecord = {
        nom:req.body.nom,
          description:req.body.description,
          numero_chambre:req.body.numero_chambre,
          etage:req.body.etage
      };
      if (req.files.length > 0) {
        req.files.map(file => {
  
          updateRecord.image = "http://127.0.0.1:5000/" + file.path
        })
      } 
     await  Chambre.findByIdAndUpdate(
        req.params.id,
        
      
        {
            ...updateRecord
          }
      )
      res.status(200).send("edit succes")
    }catch(error){
        res.status(400).send('error')
        console.log(error)
    }
    });

    router.post('/ajoutfacturation',async(req,res)=>{
        try {
        let facturation = new  Facturation({ 
            numfacturation: req.body.numfacturation,
            reffactfournisseur: req.body.reffactfournisseur,
            date: req.body.date,
            codetva: req.body.codetva,
            reffactfournisseur: req.body.reffactfournisseur,
            datealler: req.body.datealler,
            dateretour: req.body.dateretour,
            designation: req.body.designation,
            nbrs: req.body.nbrs,
            jrs: req.body.jrs,
            prixuttc: req.body.prixuttc,
            prixttc: req.body.prixttc,
            tauxtva: req.body.tauxtva,
            montanttva: req.body.montanttva,
            timbrefiscale: req.body.timbrefiscale,
            montantht: req.body.montantht,
            montantttc: req.body.montantttc,
            montantttc: req.body.montantttc,
            rib: req.body.rib
});
let result= await facturation.save()
res.status(200).send(result);
} catch (error) {
console.log(error)
res.status(400).json(error);

}
});

router.get("/getfacturation",async(req,res)=>{
    try {
        const facturation = await Facturation.find()
        res.status(200).send(facturation)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})
router.get("/getfacturation/:id",async(req,res)=>{
    try{
        const facturationi = await Facturation.findById({_id:req.params.id})
        res.status(200).send(facturation)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete("/deletfacturation/:id",async(req,res)=>{
    try{
        await Facturation.findByIdAndDelete({_id:req.params.id})
        res.status(200).send("suprimer avec success")
    }catch(error){
        res.status(400).send(error)
    }
})

router.put("/editfacturation/:id",async (req, res) => {
    try{
  
  
  const updateRecord = {
    numfacturation: req.body.numfacturation,
    reffactfournisseur: req.body.reffactfournisseur,
    date: req.body.date,
    codetva: req.body.codetva,
    reffactfournisseur: req.body.reffactfournisseur,
    datealler: req.body.datealler,
    dateretour: req.body.dateretour,
    designation: req.body.designation,
    nbrs: req.body.nbrs,
    jrs: req.body.jrs,
    prixuttc: req.body.prixuttc,
    prixttc: req.body.prixttc,
    tauxtva: req.body.tauxtva,
    montanttva: req.body.montanttva,
    timbrefiscale: req.body.timbrefiscale,
    montantht: req.body.montantht,
    montantttc: req.body.montantttc,
    montantttc: req.body.montantttc,
    rib: req.body.rib
  };

 await  Facturation.findByIdAndUpdate(
   {_id: req.params.id},
    
  
    {
        ...updateRecord
      }
  )
  res.status(200).send("edit succes")
}catch(error){
    res.status(400).send('error')
    console.log(error)
}
});


///Register                                                                                                                                                                                                                                                                                                                                                                                                                         

exports.register = async (req, res) => {
    const {
        nom,
        prenom,
        email,
        password,
        name,
    } = req.body;
  
  
    try {
      const newUser = new User({
        nom,
        prenom,
        email,
        password,
        name,
       
        role: "client"
      });
  
      const searchUser = await User.findOne({
        email
      });
      if (searchUser) {
        return res.status(500).send({
          msg: "compte déja existe"
        });
      }
  
  
  
      const salt = 10;
      const gensalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(password, gensalt);
      newUser.password = hashedPassword;
  
  
      let result = await newUser.save();
  
      res.status(200).send({
        user: result,
        msg: "enregistrer avec succes"
      });
    } catch (error) {
      console.log(error)
      res.status(400).send("vous pouvez pas enregistrer utilisteur");
    }
  };
  

router.put("/updatuser/:id",async(req,res)=>{
    try {
      
    } catch (error) {
      
    }
})
  //Login
    router.post("/login", async (req, res) => {
      let exist = await User.findOne({
        email: req.body.email
      })
      console.log(exist);
      try {
        if (!exist) {
          return res.status(400).json({
            message: {
              error: "Email  is incorrect",
            },
          });
        }
    
        const validPass = await bcrypt.compare(req.body.password, exist.password);
        console.log(validPass);
        if (!validPass) {
          return res.status(400).json({
            message: {
              error: " Password is incorrect",
            },
          });
        }
        const payload = {
          _id: exist._id,
          type: exist.role
        };
    
        const token = jwt.sign(payload,sekretkey);
    
        delete exist.password;
        exist.token = token;
        res.status(200).json({
          User: exist,
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          status: false,
          error
        })
      }
    
    
    }
    )

    module.exports = router