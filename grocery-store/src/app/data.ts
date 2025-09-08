export interface Product {
    id:number;
    name:string;
    category:string;
    price:number;
}
export const PRODUCTS:Product[]=[
    {id:1,name:'Apple',category:'Fruits',price:100},
     {id:2,name:'Bananana',category:'Fruits',price:30},
      {id:3,name:'Orange',category:'Fruits',price:60},
       {id:4,name:'Apple',category:'Vegitables',price:20},
        {id:5,name:'Brocoli',category:'Vegitables',price:50},
         {id:6,name:'Carrot',category:'Vegitables',price:30},
          {id:7,name:'Milk',category:'Dairy',price:60},
           {id:8,name:'Cheese',category:'Daily',price:120},
            {id:9,name:'Yogurt',category:'Daily',price:40} 
];