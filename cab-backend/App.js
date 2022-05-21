const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const userRepository = require('./userRepository');
const cabRepository = require('./cabRepository');
const tripRepository = require('./tripRepository');
const locationRepository = require('./locationRepository');

// ===================================== Configurations ==============================================
app.use(bodyParser.json());
// ======================================= Utilities ============================================

function handleError(res, error) {
    console.log(error);
    res.send(error.message + '\nTransaction Failed');
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
        .findByKey('type', 'customer')
        .then(value => res.send(value))
        .catch(error => {
            handleError(res,error);
        });
});

// ======================================== Post Mappings ============================================

app.post("/setUserList", async (req, res) => {
    await repository.saveAll(req.body)
        .then((value) => (res.send(value)))
        .catch((error) => {
            handleError(res,error);
        });
});

// ======================================== Put Mappings ============================================

app.put("/updateData", async (req, res) => {
    await repository.update(req.body)
        .then((value) => res.send('Updated Successfully'))
        .catch((error) => {
            handleError(res,error);
        });
});

// ========================================= Listening at Port ===========================================

app.listen(3333, () => {
    console.log("Application running on port 3333");
});

// ========================================= Basic Testing ===========================================