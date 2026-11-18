export type Category='Pho'|'Cold Noodles'|'Rice & Plates'|'Sides';
export type MenuItem={id:string;name:string;category:Category;description:string;price:number;emoji:string;tag?:string};
// DEMO PRICES ONLY. Replace with approved menu and prices before accepting live orders.
export const menu:MenuItem[]=[
{id:'signature',name:'Signature Pho',category:'Pho',description:'Our slow-simmered beef broth, brisket, rare beef, tripe & meatball.',price:18,emoji:'🍜',tag:'BEST SELLER'},
{id:'spicy',name:'Spicy Intestines Pho',category:'Pho',description:'Bold lemongrass and annatto broth with tender intestines.',price:21,emoji:'🌶️',tag:'FAN FAVORITE'},
{id:'belly',name:'Smoky Beef Belly Pho',category:'Pho',description:'Smoky sliced beef belly with our signature beef broth.',price:20,emoji:'🥩'},
{id:'seaweed',name:'Seaweed Soup Pho',category:'Pho',description:'A comforting Korean twist with seaweed and beef.',price:19,emoji:'🌿',tag:'NEW'},
{id:'perilla',name:'Perilla Cold Noodles',category:'Cold Noodles',description:'Chilled rice noodles with fragrant perilla.',price:18,emoji:'🥢',tag:'NEW'},
{id:'coldspicy',name:'Spicy Cold Noodles',category:'Cold Noodles',description:'Refreshing cold noodles with a spicy kick.',price:18,emoji:'🌶️'},
{id:'donkatsu',name:'Donkatsu',category:'Rice & Plates',description:'Golden, crispy pork cutlet.',price:19,emoji:'🍛'},
{id:'pork',name:'Spicy Pork Over Rice',category:'Rice & Plates',description:'Tender spicy pork over warm rice.',price:18,emoji:'🍚'},
{id:'summer',name:'Shrimp Summer Rolls',category:'Sides',description:'Fresh rice paper rolls with shrimp and herbs.',price:8,emoji:'🥬'},
{id:'spring',name:'Spring Rolls',category:'Sides',description:'Crisp and golden, served with dipping sauce.',price:8,emoji:'🥟'}];
export const sides=['Shrimp Summer Roll (1 pc)','Spring Rolls (2 pcs)','Sweet Pumpkin Croquettes (2 pcs)'] as const;
export const drinks=['Iced Tea','Iced Coffee','Iced Lemonade'] as const;
export type CartLine={id:string;quantity:number;setSide?:string;setDrink?:string};
export function pricedLine(line:CartLine){const item=menu.find(m=>m.id===line.id);if(!item)throw Error('Invalid menu item');if(!Number.isInteger(line.quantity)||line.quantity<1||line.quantity>20)throw Error('Invalid quantity');const isSet=!!line.setSide||!!line.setDrink;if(isSet&&(item.category!=='Pho'||!sides.includes(line.setSide as any)||!drinks.includes(line.setDrink as any)))throw Error('Invalid set selection');return {item,quantity:line.quantity,unitCents:Math.round(item.price*100)+(isSet?800:0),isSet};}
