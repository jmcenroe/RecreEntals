function seedModel1(db) {
    const bcrypt=require('bcrypt');
    const saltRounds = 10;
    return Promise.all([
    bcrypt.hash('password1',saltRounds,(error,hash) => {
        console.log('Done with User 1 hash')
           
        db.User.create({
            username: 'sampleUser', 
            password: hash,
            displayName: 'Sample User',
            usertype: 'local',
            email: 'sampleuser@gmail.com',
            phone: '555 555-5555'
        }).then(() => {
            console.log('Done with User 1 create');
        })
    }),

    bcrypt.hash('1drowssap',saltRounds,(error,hash) => {
        console.log('Done with User 2 hash')

        db.User.create({
            username: 'otherUser', 
            password: hash,
            displayName: 'Other User',
            usertype: 'local',
            email: 'otheruser@gmail.com',
            phone: '555 666-5555'

        }).then(() => {
            Promise.all([
                seedModel3(db),
                seedModel4(db)
            ])

        })
    })

    ])
}

function seedModel2(db) {
    
    return Promise.all([
        
        db.Category.create({
            name: 'Winter Sports'
        }),
        db.Category.create({
            name: 'Bikes, Skates and Boards'
        }),
        db.Category.create({
            name: 'Camping and Outdoors'
        }),
        db.Category.create({
            name: 'Water Sports'
        }),
        db.Category.create({
            name: 'Field and Court Sports'
        }),
        db.Category.create({
            name: 'Golf'
        }),
        db.Category.create({
            name: 'Other'
        }).then(()=>{
            console.log('Done with last category');
        })


    ])
}
    
function seedModel3(db) {
    console.log('Starting items');
    const returnablePromise = Promise.all([
        
        db.Item.create({
            itemName: 'Trampoline', 
            itemDescription: 'Full size Olympic Trampoline',
            category: 'Other',
            weekly: 200,
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA2d4ADz3YnXS3TgNf5y8WorsD_3Z92f6tLKJkFQvqLxgld5-Zw',
            UserId: 2,
            CategoryId: 7
        }),
        db.Item.create({
            itemName: 'Kid\'s Snowboard', 
            itemDescription: 'Snow Daze 110 cm Blue Lightning Kids Beginner Snowboard',
            category: 'Winter Sports',
            weekly: 50,
            imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61jRhAr-aGL._SL1000_.jpg',
            UserId: 1,
            CategoryId: 1
        }),
        db.Item.create({
            itemName: 'Skis', 
            itemDescription: 'Downhill skis',
            category: 'Winter Sports',
            daily: 50,
            weekly: 150,
            imageURL: 'https://cdn.levelninesports.com/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/e/head-the-link-pro-r-skis-169cm_2.jpg',
            UserId: 1,
            CategoryId: 1            
        })

    ])
}

        
function seedModel4(db) {
    const returnablePromise = Promise.all([
        db.Item.create({
            itemName: 'Running Shoes',
            itemDescription: 'Saucony Peregrine 7 Trail-Running Shoes - Men\'s',
            category: 'Road Sports',
            daily: 75,
            weekly: 90,
            imageURL:'https://www.rei.com/media/44cc290b-8e64-4501-b4b6-da10baf6d58c?size=1020x510',
            UserId: 1,
            CategoryId: 7
        }),
        db.Item.create({
            itemName: 'Helmet',
            itemDescription: 'Daytona Women 3/4 OPEN Face Motorcycle Helmet',
            category: 'Motor Sports',
            daily: 50,
            weekly: 110,
            imageURL:'https://images.craigslist.org/00e0e_aml1hPeReoY_1200x900.jpg',
            UserID: 1,
            CategoryId: 5
        }),
        db.Item.create({
            itemName: 'Inner Tube',
            itemDescription: 'HO Water Sports Water Tube',
            category: 'Water Sports',
            weekly: 35,
            imageURL:'https://images.craigslist.org/01212_fbUSvh55E2l_600x450.jpg',
            UserID: 2,
            CategoryId: 4
        }),
        db.Item.create({
            itemName: 'Skates',
            itemDescription: 'K2 Andura ALU Inline Skates',
            category: 'Wheeled Sports',
            weekly: 55,
            imageURL:'https://images.craigslist.org/00P0P_l5GZIqcBmMM_600x450.jpg',
            UserID: 2,
            CategoryId: 6
        }),
    ])
}


function seed(db) {
    
    //Run seed functions to populate db
    console.log('Trying seeds');
    return Promise.all([

        seedModel1(db),
        seedModel2(db)

    ])
}

module.exports = seed;

