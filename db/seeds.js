function seedModel1(db) {
    const returnablePromise = Promise.all([
        db.Products.create({
            productname: 'Static Snowboard',
            price: 100,
            picture: url('https://images.craigslist.org/00z0z_72EIf0HMh2Y_1200x900.jpg'),
            condition: fair,
            available: true
        }),
        db.Products.create({
            productname: 'Daytona Women 3/4 OPEN Face Motorcycle Helmet',
            price: 99,
            picture: url('https://images.craigslist.org/00e0e_aml1hPeReoY_1200x900.jpg'),
            condition: 'like new',
            available: true
        }),
        db.Products.create({
            productname: 'HO Water Sports Water Tube',
            price: 35,
            picture: url('https://images.craigslist.org/01212_fbUSvh55E2l_600x450.jpg'),
            available: false
        }),
        db.Products.create({
            productname: 'Tom Carroll Stand Up Paddle Board',
            price: 799,
            picture: url('https://images.craigslist.org/00r0r_2mLLIQi9HsX_600x450.jpg'),
            available: true
        }),
        db.Products.create({
            productname: 'Oakley Sunglasses',
            price: 100,
            picture: url('https://images.craigslist.org/01515_Ov2criwPBm_600x450.jpg'),
            available: true
        }),
        db.Products.create({
            productname: 'K2 Andura ALU Inline Skates',
            price: 55,
            picture: url('https://images.craigslist.org/00P0P_l5GZIqcBmMM_600x450.jpg'),
            available: true
        }),
        db.Products.create({
            productname: 'Sector 9 Skateboard',
            price: 50,
            picture: url('https://images.craigslist.org/00808_31kzPW6a9lc_600x450.jpg'),
            available: true
        }),
        db.Products.create({
            productname: 'Liberty Origin Snow Skiis',
            price: 350,
            picture: url('https://images.craigslist.org/00w0w_3yvuywvwq4G_600x450.jpg'),
            available: false
        }),
        db.Products.create({
            productname: "Saucony Peregrine 7 Trail-Running Shoes - Men's",
            price: 90,
            picture: url('https://www.rei.com/media/44cc290b-8e64-4501-b4b6-da10baf6d58c?size=1020x510'),
            available: true
        }),
        db.Products.create({
            productname: 'Lifetime 54" Portable Basketball System',
            price: 400,
            picture: url('https://www.big5sportinggoods.com/catalogimage/img/product/thumb/1520_12087_9064_000_thumb_02.jpg'),
            available: true
        })
    ]);
    return returnablePromise;
}