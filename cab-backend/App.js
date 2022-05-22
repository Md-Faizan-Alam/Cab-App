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

app.get("/getLastId", async (req, res) => {
    const max = await userRepository.getLastId();
    console.log(max);
    const str = `${max}`;
    res.send(str);
});

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
    await userRepository.save(req.body)
        .then((value) => (res.send(value)))
        .catch((error) => {
            handleError(res,error);
        });
});



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