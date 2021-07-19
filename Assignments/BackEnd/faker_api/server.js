const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

// https://github.com/marak/Faker.js/   Faker library


class Users {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}
const userList = []


class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            "street": faker.address.streetAddress(),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}
const companyList = []




//Create
app.get("/api/users/new", (req, res) => {
    console.log("New user created")
    res.json(new Users())
    console.log(userList)
});

app.get("/api/companies/new", (req, res) => {
    console.log("new company has been created")
    res.json(new Company())
    console.log(companyList)
});

app.get("/api/user/company", (req, res) => {
    console.log("created new company and user")
    res.json([new Users(), new Company()])
})





//GET

app.get("/api/users/all", (req, res) => {
    console.log(users);
    res.json(users);
});
app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
    res.json(users[req.params.id]);
});

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    // res.send("Hello World"),
    res.json(users)
});

//responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//POST
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});

//UPDATE
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: "ok" });
});


//DELETE
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json({ status: "ok" });
});



const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);