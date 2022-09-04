const { User } = require('../models');

const userData = [
    {
        username: "richard_bore",
        twitter: "richardb",
        github: "richardb",
        email: "richard_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "trevor_b",
        twitter: "trevb",
        github: "trevb",
        email: "trev_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "lisa_c",
        twitter: "lisa",
        github: "lisa",
        email: "lisa_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "mary_n",
        twitter: "marynorris",
        github: "marynorris",
        email: "mary_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "ash_c",
        twitter: "ashcarr23",
        github: "ashcarr23",
        email: "ashcarruth@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "blinka",
        twitter: "blinka_w",
        github: "blinka",
        email: "blinka@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;