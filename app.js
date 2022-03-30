//***Array  */
// const food = ['alu', 'bagun','lao','kumra', 'kocho', 'jhanga', 'chili', 'redchili'];




// for(let i= 0; i< food.length; i++){
//     console.log(food[i]);
// }



// const flower =['Rose','Bali','Red-rose','White-rose','water-lilies','peony','Sunflower','Jasmine', 'Aster','Irse','Tulip'];


// for(let i= 0; i<flower.length; i++){
//     console.log(flower[i]);
// }


//forEach loop and callback function


// flower.forEach(function(data){
//     console.log(data);
// })


//map loop and arrow function
// flower.map(data => console.log(data));
 

// Multidimensional array

// const food = [['alo', 'potol', 'lao', 'kumra'], 
// ['Red-rose', 'Bali', 'Tulip','Hasnahena'],
// ['poti', 'pangash', 'rui', 'taki'] 
// ];

// food.map(data => console.log(data));

// for(let i = 0 ; i < food.length; i++){
//  console.log(food[i] [3]);
// }

// food[2].map(data => console.log(data));


// const deves = [
//     ['Joy Sarker', 27, 'Javascript', 'Sunamganj'],
//     ['Jubaiyer khan', 20, 'PHP', 'Dhaka'],
//     ['Tohid Islam', 27, 'Javascript', 'Dhaka'],
//     ['Asrif Sir', 30, 'Javascript', 'Mirpur'],
//     ['Ausan habib', 27, 'PHP', 'Dhaka'],
//     ['Apu das', 27, 'Go lang', 'Dhaka'],
//     ['Shriful Islam', 23, 'Payton', 'Sylhet'],
//     ['Afjal', 25, 'Payton', 'Sylhet'],
//     ['Probir Islam', 26, 'Java', 'Sylhet'],
//     ['Joy ', 24, 'PHP', 'Sylhet'],
// ]

// for (let i = 0; i < deves.length; i++) {

     
//     if (deves[i] [3] == 'Dhaka' && deves[i] [2]== 'PHP') {
//         console.log(`=============================`);
//         deves[i].map (data => console.log(data));
//     }
//     if (deves[i] [2] == 'Javascript' || deves[i] [2] == 'PHP') {
//         console.log(`================`);
//         deves[i].map(data => console.log(data) );
        
//     }

//     if (deves[i][3] == 'Sylhet' && deves[i] [2] == 'PHP' && deves [i] [1] > 20 ){
        
//         console.log(`====================`);
//         deves[i].map(data => console.log((data)));
//     }

// }



const food = ['kodom', 'polash', 'rose', 'lily', 'alo' , 'anaroush' , 'lao', 'borta'];
 
// Last a data add korta chila// food.push('darous');
//frist a data add korta chila// food.unshift('Mango');

//const food2 = food.slice(1,6); //slice copy korta use kora hoy..
const food2 = food.splice( 2 , 3 ,  'Rahime', 'Karim', 'Haq'); // Cut korar janno splice user kora hoy..


console.log(food);
console.log(food2);
