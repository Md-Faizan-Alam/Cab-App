const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const userRepository = require('./userRepository');
const cabRepository = require('./cabRepository');
const tripRepository = require('./tripRepository');
const locationRepository = require('./locationRepository');
const userList = require('./DummyData');
const cors=require("cors");
const transporter = require('../../../CRUD/mail.js');

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


// ===================================== Configurations ==============================================
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json());
// ======================================= Utilities ============================================

function handleError(res, error) {
    console.log(error);
    res.send(error.message + '\nTransaction Failed');
    // res.send('Transaction Failed');
}
function showObject(object){
    console.log(object[0])
    // for(const key in object){
    //     console.log(`${key} : ${showObject2(object[key])}`);
    // }
}
function showObject2(object){
    for(const key in object){
        console.log(`${key} : ${object[key]}`);
    }
}


// ======================================= Get Mappings ============================================

app.get("/user", async (req, res) => {
    await userRepository
        .findAll()
        .then((value) => res.send(value))
        .catch((error) => {
            handleError(res,error);
        });
});

app.get("/admin", async (req, res) => {
    await userRepository
        .findByKey('type', 'admin')
        .then(value => res.send(value))
        .catch(error => {
            handleError(res,error);
        });
});

app.get("/customer", async (req, res) => {
    await userRepository
        .findByKey('type', 'customer')
        .then(value => res.send(value))
        .catch(error => {
            handleError(res,error);
        });
});

app.get("/driver", async (req, res) => {
    await userRepository
        .findByKey('type', 'driver')
        .then(value => res.send(value))
        .catch(error => {
            handleError(res,error);
        });
});

app.get("/userById/:id", async (req, res) => {
    await userRepository
        .findById(req.params.id)
        .then(value => res.send(value))
        .catch(error => {
            handleError(res,error);
        });
});

app.get("/available", async(req,res)=>{
    let driverList;
    let cabList;
    let availableList = [];
    let ratePerKm;
    let carType;

    await userRepository
        .findByKey('type', 'driver')
        .then(value => driverList = value)
        .catch(error =>handleError(res,error));

    await cabRepository
        .findAll().then(value=>cabList = value)
        .catch(error=>handleError(res,error));

    for(const i in driverList){
        for(const j in cabList){
            if(cabList[j].cab_id == driverList[i].cab_id){
                ratePerKm = cabList[j].per_km_rate;
                carType = cabList[j].type;
                break;
            }
        }
        availableList.push({
            driverId: driverList[i].user_id,
            id: i,
            name: driverList[i].first_name,
            rating: driverList[i].driver_rating,
            ratePerKm: ratePerKm,
            carType: carType
        });
    }

    res.send(availableList);
});

app.get("/getLastId", async (req, res) => {
    const max = await userRepository.getLastId();
    console.log(max);
    const str = `${max}`;
    res.send(str);
});

app.get("/trips",async(req,res)=>{
    await tripRepository
        .findAll()
        .then((value) => res.send(value))
        .catch((error) => {
            handleError(res,error);
        });
})
app.get("/tripsCustomer/:id",async(req,res)=>{
    await tripRepository
        .findByKey('customer_id',req.params.id)
        .then((value) => res.send(value))
        .catch((error) => {
            handleError(res,error);
        });
})

app.get("/tripsDriver/:id",async(req,res)=>{
    await tripRepository
        .findByKey('driver_id',req.params.id)
        .then((value) => res.send(value))
        .catch((error) => {
            handleError(res,error);
        });
})

// ======================================== Post Mappings ============================================

app.post("/validation", async (req,res)=>{
    const action = req.body;
    console.log(action);
    let userList = null;
    let user = null;
    await userRepository.findByKey('type',action.type)
    .then(value=>{
        userList=value;
        console.log(`userList is ${userList}`);
    })
    .catch(error=>handleError(res,error));

    for(let i in userList){
        console.log(userList[i]);
        if((userList[i].first_name == action.userName) && (userList[i].password == action.password)){
            user = userList[i];
        }
    }
    console.log('The user is');
    console.log(user);
    res.send(user);
});

app.post("/setUserList", async (req, res) => {
    await userRepository.saveAll(userList)
        .then((value) => (res.send(value)))
        .catch((error) => {
            handleError(res,error);
        });
});

app.post("/saveUser", async (req, res) => {
    const user = req.body.user;
    let cab;
    let cabId;
    const mail = {
        from: 'wheelin.app@gmail.com',
        to: user.email,
        subject: 'Account Created',
        text: 'Hello,\n\tYour account has been successfully created\n\tWe hope you have a pleasant experience\n\t\t\t\t\tRegards, Wheelin Team'
      };
    if(user.type == 'driver'){
        cab = req.body.cab;
        await cabRepository.save(cab).catch(error=>handleError(res,error));
        cabId = await cabRepository.getLastId();
        user.cab_id = cabId;
    }
    await userRepository.save(user)
        .then(async (value) => {
            transporter.sendMail(mail, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.send(value);
        })
        .catch((error) => {
            handleError(res,error);
        });
});

app.post('/postTrip',async (req,res)=>{
    const trip = req.body;
    await tripRepository.save(trip)
    .then(async (value) => {
        res.send(value);
    })
    .catch((error) => {
        handleError(res,error);
    });
})



// ======================================== Put Mappings ============================================

app.put("/updateData", async (req, res) => {
    await userRepository.update(req.body)
        .then((value) => res.send('Updated Successfully'))
        .catch((error) => {
            handleError(res,error);
        });
});

// ======================================== Delete Mappings ============================================

app.delete("/deleteById/:id", async (req, res) => {
    await userRepository.deleteById(req.params.id)
        .then((value) => res.send('Deleted Successfully'))
        .catch((error) => {
            handleError(res,error);
        });
});



// ========================================= Listening at Port ===========================================

app.listen(3333, () => {
    console.log("Application running on port 3333");
});

// ========================================= Basic Testing ===========================================

// console.log(userList);