function seedModel1(db) {
    const bcrypt=require('bcrypt');
    const saltRounds = 10;
    const returnablePromise = Promise.all([
    bcrypt.hash('password1',saltRounds,(error,hash) => {
           
        db.User.create({
            username: 'sampleUser', 
            password: hash,
            displayName: 'Sample User',
            usertype: 'local',
            email: 'sampleuser@gmail.com',
            phone: '555 555-5555'
        }).then( () => {
            db.Item.create({
                itemName: 'Skis', 
                itemDescription: 'Downhill skis',
                category: 'Winter Sports',
                daily: 50,
                weekly: 150,
                imageURL: 'https://cdn.levelninesports.com/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/e/head-the-link-pro-r-skis-169cm_2.jpg',
                UserId: 1
                
            })
        })
    }),
    bcrypt.hash('1drowssap',saltRounds,(error,hash) => {
        db.User.create({
            username: 'otherUser', 
            password: hash,
            displayName: 'Other User',
            usertype: 'local',
            email: 'otheruser@gmail.com',
            phone: '555 666-5555'
        }).then( () => {
            return Promise.all([
            db.Item.create({
                itemName: 'Trampoline', 
                itemDescription: 'Full size Olympic Trampoline',
                category: 'Large Equipment',
                weekly: 200,
                imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA2d4ADz3YnXS3TgNf5y8WorsD_3Z92f6tLKJkFQvqLxgld5-Zw',
                UserId: 2
            }),
            db.Item.create({
                itemName: 'Kid\'s Snowboard', 
                itemDescription: 'Snow Daze 110 cm Blue Lightning Kids Beginner Snowboard',
                category: 'Winter Sports',
                weekly: 50,
                imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61jRhAr-aGL._SL1000_.jpg',
                UserId: 2
            }),

        ])

        })
    })

    ])
}

function seedModel2(db) {
    const returnablePromise = Promise.all([
        db.Item.create({
            itemName: 'Skis', 
            itemDescription: 'Downhill skis',
            category: 'Winter Goods',
            daily: 50,
            weekly: 150,
            imageURL: 'https://cdn.levelninesports.com/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/e/head-the-link-pro-r-skis-169cm_2.jpg',
            UserId: 1
            
        }),
        db.Item.create({
            itemName: 'Trampoline', 
            itemDescription: 'Full size Olympic Trampoline',
            category: 'Large Equipment',
            weekly: 200,
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA2d4ADz3YnXS3TgNf5y8WorsD_3Z92f6tLKJkFQvqLxgld5-Zw',
            UserId: 2
        }),

    ])
}
        



function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

        seedModel1(db)

    ]);
}

module.exports = seed;

