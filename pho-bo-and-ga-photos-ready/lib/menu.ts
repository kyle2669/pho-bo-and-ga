export type Category='Pho'|'Cold Noodles'|'Platters'|'Appetizers'|'To Share'|'Drinks';
export type MenuItem={id:string;name:string;category:Category;description:string;emoji:string;tag?:string;image?:string};
// Menu names/descriptions transcribed from BO AND GA Flushing Uber Eats listing (Nov 2026).
// Photos should be exported from merchant-owned originals before publication.
export const menu:MenuItem[]=[
{id:'signature',name:'PH2. Signature',category:'Pho',description:'Brisket, rare steak, tripe, and meatballs.',emoji:'🍜',image:'/menu/signature.jpg',tag:'BEST SELLER'},
{id:'spicy',name:'PH1. Spicy Intestines',category:'Pho',description:'Spicy intestines with chewy tripe.',emoji:'🌶️',image:'/menu/spicy.jpg',tag:'FAN FAVORITE'},
{id:'brisket',name:'PH3. Brisket',category:'Pho',description:'Beef brisket pho.',emoji:'🍜',image:'/menu/brisket.jpg'},
{id:'belly',name:'PH4. Smoky Beef Belly',category:'Pho',description:'Charred and smoky beef belly.',emoji:'🥩'},
{id:'chicken',name:'PH5. Chicken',category:'Pho',description:'Hand-pulled chicken.',emoji:'🍜',image:'/menu/chicken.jpg'},
{id:'seafood',name:'PH6. Seafood',category:'Pho',description:'Chicken broth, shrimp, baby octopus, and fish ball.',emoji:'🍤',image:'/menu/seafood.jpg'},
{id:'galbi',name:'PH8. Galbi',category:'Pho',description:'Braised beef ribs.',emoji:'🥩',image:'/menu/galbi.jpg'},
{id:'meatlovers',name:'PHS. Meat Lovers',category:'Pho',description:'Galbi, brisket, rare steak, tripe and meatballs.',emoji:'🍜',image:'/menu/meatlovers.jpg'},
{id:'rawbeef',name:'PH7. Raw Beef',category:'Pho',description:'Thinly sliced raw beef.',emoji:'🍜'},
{id:'nomeat',name:'PH0. No Meat (Chicken Broth)',category:'Pho',description:'Chicken broth without protein.',emoji:'🍜'},
{id:'seaweed',name:'Seaweed Pho',category:'Pho',description:'Korean-inspired seaweed pho.',emoji:'🌿',image:'/menu/seaweed.jpg',tag:'NEW'},
{id:'spicycold',name:'Spicy Cold Noodles',category:'Cold Noodles',description:'Chilled brisket, sesame oil, and spicy lemongrass sauce.',emoji:'🌶️',tag:'NEW'},
{id:'perilla',name:'Perilla Cold Noodles',category:'Cold Noodles',description:'Beef belly, perilla oil, and garlic soy sauce.',emoji:'🥢',tag:'NEW'},
{id:'pork-rice',name:'R1. Pork Chop Rice Platter',category:'Platters',description:'Pork chops with rice, soup and vegetables.',emoji:'🍚'},
{id:'belly-rice',name:'R2. Smoky Beef Belly Rice Platter',category:'Platters',description:'Smoky beef belly with rice, soup and vegetables.',emoji:'🍚'},
{id:'galbi-rice',name:'R3. Galbi Rice Platter',category:'Platters',description:'Braised beef ribs with rice, soup and vegetables.',emoji:'🍚'},
{id:'belly-buncha',name:'B2. Smoky Beef Belly Buncha Platter',category:'Platters',description:'Smoky beef belly with cold dipping noodles and nước chấm.',emoji:'🥢'},
{id:'pork-buncha',name:'B1. Pork Chop Bun Cha Platter',category:'Platters',description:'Pork chops with cold dipping noodles and nước chấm.',emoji:'🥢'},
{id:'galbi-buncha',name:'B3. Galbi Buncha Platter',category:'Platters',description:'Braised beef ribs with cold dipping noodles and nước chấm.',emoji:'🥢'},
{id:'summer',name:'Shrimp Summer Rolls',category:'Appetizers',description:'Fresh shrimp and crisp vegetables with peanut sauce.',emoji:'🥬',image:'/menu/summer.jpg'},
{id:'spring',name:'Fried Veggie Spring Rolls',category:'Appetizers',description:'Served with fish sauce.',emoji:'🥟',image:'/menu/spring.jpg'},
{id:'mushroom',name:'Beef Mushroom Rolls',category:'Appetizers',description:'Four soy-glazed beef mushroom rolls.',emoji:'🥩',image:'/menu/mushroom.jpg'},
{id:'pumpkin',name:'Sweet Pumpkin Croquettes',category:'Appetizers',description:'Crunchy sweet pumpkin croquettes.',emoji:'🎃',image:'/menu/pumpkin.jpg'},
{id:'porkchop',name:'Pork Chop',category:'Appetizers',description:'Juicy pork chops.',emoji:'🥩'},
{id:'friedchicken',name:'Korean Fried Chicken',category:'Appetizers',description:'Sweet and spicy garlic sauce.',emoji:'🍗',image:'/menu/friedchicken.jpg'},
{id:'fries',name:'French Fries',category:'Appetizers',description:'Served with spicy mayo.',emoji:'🍟'},
{id:'calamari',name:'Fried Calamari',category:'Appetizers',description:'Served with nước chấm.',emoji:'🦑'},
{id:'galbi-side',name:'Galbi (Braised Beef Rib)',category:'Appetizers',description:'Braised beef rib.',emoji:'🥩'},
{id:'mandu',name:'Fried Pork Mandu',category:'Appetizers',description:'Six fried pork dumplings.',emoji:'🥟'},
{id:'brisket-share',name:'Beef Brisket',category:'To Share',description:'Slow-cooked beef brisket and chewy tripe.',emoji:'🥩'},
{id:'belly-share',name:'Stir-Fried Beef Belly',category:'To Share',description:'Smoky beef belly and bean sprouts in soy sauce.',emoji:'🥩'},
{id:'intestine-share',name:'Stir-fried Spicy Intestines',category:'To Share',description:'Spicy stir-fried intestines.',emoji:'🌶️'},
...['Coca-Cola','D. Coke','Sprite','Fanta Orange','Ginger Ale','Brisk','Seltzer','Bottled Water'].map((name,i)=>({id:'drink-'+i,name,category:'Drinks' as Category,description:'',emoji:'🥤'}))
];
