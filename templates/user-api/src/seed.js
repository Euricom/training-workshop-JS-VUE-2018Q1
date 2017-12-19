const faker = require('faker');

module.exports = {
  generateUsers(count) {
    const users = [];
    for (let i = 0; i < count; i += 1) {
      let firstName;
      let imageUrl;
      const random = faker.random.number(2);
      if (random === 1) {
        firstName = faker.name.findName(1);
        imageUrl = `https://api.randomuser.me/portraits/women/${faker.random.number(
          100,
        )}.jpg`;
      } else {
        firstName = faker.name.findName(0);
        imageUrl = `https://api.randomuser.me/portraits/men/${faker.random.number(
          100,
        )}.jpg`;
      }
      const lastName = faker.name.lastName();
      users.push({
        id: 1000 + i,
        firstName,
        lastName,
        age: faker.random.number(100),
        email: `${firstName}.${lastName}@${faker.internet.domainName()}`.toLowerCase(),
        image: imageUrl,
        phone: faker.phone.phoneNumber(),
        company: faker.company.companyName(),
        address: {
          street: faker.address.streetName(),
          city: faker.address.city(),
          zip: faker.address.zipCode(),
        },
      });
    }
    return users;
  },
};
