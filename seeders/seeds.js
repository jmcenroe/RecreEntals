function seedModel1(db) {
    const returnablePromise = Promise.all([
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
        



function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

        // seedModel1(db),
        // seedModel2(db)

    ]);
}

module.exports = seed;

