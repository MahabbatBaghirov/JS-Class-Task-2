// class Animal {
//     constructor (ad) {
//         this.ad = ad;
//     }
// }

// class Voice extends Animal {
//     constructor (ad,ses) {
//         super(ad);
//         this.voice = ses;
//     }
// }

// let mycar = new Voice("serce", "cip");
// console.log(mycar);

// class Tree {
//     constructor (ad, reng) {
//         this.ad = ad;
//         this.reng = reng;
//         function Full(){
//             return this.ad +" +" +this.reng
//         }
//     }
// }

// class Nov extends Tree {
//     constructor (ad,reng,uz) {
//         super(ad,reng);
//         this.uz = uz;
//     }
// }

// let hamisi = new Nov("palid", "yasil",14);
// console.log(hamisi);

let originalProducts = [
    {
        "id": 4,
        "supplierId": 2,
        "categoryId": 3,
        "quantityPerUnit": "48 - 6 oz jars",
        "unitPrice": 22,
        "unitsInStock": 53,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Chef Anton's Cajun Seasoning",
        "supplier": {
            "id": 2,
            "companyName": "New Orleans Cajun Delights",
            "contactName": "Shelley Burke",
            "contactTitle": "Order Administrator",
            "address": {
                "street": "P.O. Box 78934",
                "city": "New Orleans",
                "region": "LA",
                "postalCode": 70117,
                "country": "USA",
                "phone": "(100) 555-4822"
            }
        },
        "category": {
            "id": 3,
            "description": "Desserts candies and sweet breads",
            "name": "Confections"
        }
    },
    {
        "id": 5,
        "supplierId": 2,
        "categoryId": 2,
        "quantityPerUnit": "36 boxes",
        "unitPrice": 21.35,
        "unitsInStock": 0,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Chef Anton's Gumbo Mix"
    },
    {
        "id": 6,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 8 oz jars",
        "unitPrice": 25,
        "unitsInStock": 120,
        "unitsOnOrder": 0,
        "reorderLevel": 25,
        "discontinued": false,
        "name": "Grandma's Boysenberry Spread"
    },
    {
        "id": 7,
        "supplierId": 3,
        "categoryId": 7,
        "quantityPerUnit": "12 - 1 lb pkgs.",
        "unitPrice": 30,
        "unitsInStock": 15,
        "unitsOnOrder": 0,
        "reorderLevel": 10,
        "discontinued": false,
        "name": "Uncle Bob's Organic Dried Pears"
    },
    {
        "id": 8,
        "supplierId": 3,
        "categoryId": 2,
        "quantityPerUnit": "12 - 12 oz jars",
        "unitPrice": 40,
        "unitsInStock": 6,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Northwoods Cranberry Sauce"
    },
    {
        "id": 9,
        "supplierId": 4,
        "categoryId": 6,
        "quantityPerUnit": "18 - 500 g pkgs.",
        "unitPrice": 97,
        "unitsInStock": 29,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": true,
        "name": "Mishi Kobe Niku"
    },
    {
        "id": 10,
        "supplierId": 4,
        "categoryId": 8,
        "quantityPerUnit": "12 - 200 ml jars",
        "unitPrice": 31,
        "unitsInStock": 31,
        "unitsOnOrder": 0,
        "reorderLevel": 0,
        "discontinued": false,
        "name": "Ikura"
    },

]



// let arr=[]
// for(let i=0;i<originalProducts.length;i++){
//     arr.push(originalProducts[i].unitPrice)
// }
// console.log(Math.max(...arr));



// let sum = 0;
// let avg;
// for (let i = 0; i < originalProducts.length; i++) {
//     sum += originalProducts[i].unitPrice
//     avg = sum/originalProducts.length
// }
// console.log(avg);




// let arr = [];
// let count = 0;
// for (let i = 0; i < originalProducts.length; i++) {
//     if (originalProducts[i].unitsInStock < 10) {
//         count++;
//     }

// }
// console.log(count);


// let arr = [];
// for (let i = 0; i < originalProducts.length; i++) {
//     arr.push(originalProducts[i].name)
//     if (arr[i].includes("x")) {
//         console.log(arr[i])
//     }
// }




// let num = 0;
// for (let i = 0; i < originalProducts.length; i++) {
    // const num = 0;
    // console.log(originalProducts[i].discontinued);
    // arr.push(originalProducts[i].discontinued)
    // if (originalProducts[i].discontinued === true) {
    //     num++
        // console.log(arr[i]);
//     }
// }
// console.log(num);

// let yaz = [];
// for (let i = 0; i < originalProducts.length; i++) {
//     yaz.push(originalProducts[i].categoryId)
//     if (originalProducts[i].categoryId === 2) {
//         console.log(originalProducts[i].name)
//     }
// }



let countries = {
    Afghanistan: [
      "Herat",
      "Kabul",
      "Kandahar",
      "Molah",
      "Rana",
      "Shar",
      "Sharif",
      "Wazir Akbar Khan",
    ],
    Albania: [
      "Elbasan",
      "Petran",
      "Pogradec",
      "Shkoder",
      "Tirana",
      "Ura Vajgurore",
    ],
  };







  