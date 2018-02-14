function seedModel1(db) {
    const returnablePromise = Promise.all([
<<<<<<< HEAD

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
=======
        db.User.create({
            username: 'sampleUser', 
            password: 'password',
            displayName: 'Sample User',
            usertype: 'local',
            email: 'sampleuser@gmail.com',
            phone: '555 555-5555'
        }),
        db.User.create({
            username: 'otherUser', 
            password: 'drowssap',
            displayName: 'Other User',
            usertype: 'local',
            email: 'otheruser@gmail.com',
            phone: '555 666-5555'
        })

    ])
}

function seedModel2(db) {
    const returnablePromise = Promise.all([
        db.Item.create({
            itemName: 'Skis', 
            itemDescription: 'Downhill skis',
            price: '$20'
        }),
        db.Item.create({
            itemName: 'Trampoline', 
            itemDescription: 'Full size Olympic Trampoline',
            price: '$50'
        }),

    ])
}
        

>>>>>>> 22ec338d33a18047d0107f60d4b24e373e5428f7


function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

<<<<<<< HEAD
        seedModel1(db)
=======
        seedModel1(db),
        seedModel2(db)
>>>>>>> 22ec338d33a18047d0107f60d4b24e373e5428f7

    ]);
}

module.exports = seed;

