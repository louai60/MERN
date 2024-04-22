const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;


// Function to create a new User object
const createUser = () => {
    return {
        _id: faker.string.uuid(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.imei(),        
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName()
    };
};



// Function to create a new Company object
const createCompany = () => {
    return {
        _id: faker.string.uuid()(),
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        street: faker.location.streetName(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    };
};

// API route to create a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// API route to create a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// API route to create a new user and a new company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on PORT : ${port}`);
});
