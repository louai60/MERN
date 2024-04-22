const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 5000;


const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.imei(),        
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName()
    };
};



const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        street: faker.location.streetName(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    };
};



app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
    console.log(`Server running on PORT : ${port}`);
});
