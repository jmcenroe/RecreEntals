function seedModel1(db) {
    const returnablePromise = Promise.all([

        db.User.create({
            username: 'sampleuser',
            password: 'password'
        }),
        db.User.create({
            username: 'Chris',
            password: 'Chris123'
        })
    
    ]);

    return returnablePromise;
}


function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

        seedModel1(db)

    ]);
}

module.exports = seed;

/*

//in the other file

const seed = require('./seed/seed');

db.sync({ force: true }).then(seed()).then(function () {
    //start listening
})

*/