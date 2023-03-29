 let stocks = {
    Fruits : ["Strawberry","Grapes", "Banana", "Apple"],
    liquid : ["Water", "Ice"],
    holder : ["Cone", "Cup"],
    topping : ["Chocolate", "Peanuts"],
 };
 
 //---------This is beginning of callback method -----------------

//  let order = (Fruit_name, call_production) => {
//     // learn what this line means actually with every sign.
//     setTimeout(() => {
        
//         console.log(`${stocks.Fruits[Fruit_name]} was selected.`);

//         call_production();

//     }, 2000);

    
//  };

//  let production = () => {
//     //first timeout
//     setTimeout(() => {
//         console.log("Production has started.");
//         setTimeout(()=>{
//             console.log("The fruit has been chopped.");

            

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            
//             setTimeout(()=>{
//                 console.log("The machine has started :o");
                
//                 setTimeout(()=> {
//                     console.log(`Icecream is being placed in a ${stocks.holder[0]}`);

//                 setTimeout(()=>{
//                     console.log(`${stocks.topping[0]} are being added as toppings.`);

//                 setTimeout(()=>{
//                     console.log("The Icecream is served. Enjoy your meal ^_^");
//                 },1000)

//                 }, 2000);

//                 }, 2000)

//             }, 1000)
//             }, 1000);

//         }, 2000);
//     },0000);


//  };

//  order(0,production); 

//---------======This is the end of callback method used for making this project====;

// We actually created a callback hell when we used the upper method.
//-------------------------------------


//==== Now we will use promises ==============

let is_shop_open = true;

// let order = (time, work) => {

//     return new Promise( (resolve, reject)=> {

//         if(is_shop_open){

//             setTimeout(()=>{
//                 resolve(work() );
//             },time)
//             // resolve(work());
//         }
//         else{
//             reject(console.log("Our shop is closed!"));
//         }

//     } );

// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))

// .then(()=>{

//     return order(0000, ()=>console.log("Production has started."));
// })

// // resume video in 57:49;
// .then(()=>{
//     return order(2000, ()=>console.log("the fruit was chooped"));
// })  

// .then(()=> {
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     });

// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log("start the machine")
// });

// })

// .then (()=>{
//     return order(2000, ()=>{
//         console.log(`Icecream placed on ${stocks.holder[0]}`)
//     });

// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.topping[0]} was selected.`)
//     });
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log("Icecream was served.")
//     })
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{
//     console.log("Day ended, Shop is closed.")
// })

//promise ended

//----------===============================-------------------------------==============================



// let order = () =>{
//     return new Promise( (resolve, reject) =>{
//         if() {
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// asyn/await

// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesnt exist.",error)
//     } 
//     finally{
//         console.log("runs code anyways.")
//     }
// }

// order()
// .then(()=> {
//     console.log("sussy baka. ")
// })

// using await 


// let toppings_choice =()=> {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{

//             resolve(console.log("which topping would you love?"));
//         }, 3000)
//     })
// }

// async function kitchen (){
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await toppings_choice()

//     console.log("D");
//     console.log("E");
// }

// kitchen()

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");

// final code

function time(ms){
    return new Promise ( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen (){
    try{

        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected.`);

        await time(0000)
        console.log(
            "start the production"
        );

        await time(2000)
        console.log("cut the fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

        await time(1000)
        console.log("start the machine");

        await time(2000)
        console.log(`icecream placed on ${stocks.holder[0]} `);

        await time(3000)
        console.log(`${stocks.topping[0]} was selected`);

        await time(2000)
        console.log("Icecream is served.");
    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("day ended, shop is closed.")
    }
}

kitchen();