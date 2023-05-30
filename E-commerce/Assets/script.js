// const cardData = [
//   {
//     heading:"card 1",
//     body:"card body n",
//   }
//   {
//     heading:"card 2",
//     body:"card body n",
//   }
//   {
//     heading:"card 3",
//     body:"card body n",
//   }
//   {
//     heading:"card 4",
//     body:"card body n",
//   }
//   {
//     heading:"card 5",
//     body:"card body n",
//   }

// ]

// const postContainer = document.querySelector(".card-container");
  
// const postMethods = ()=>{
//   cardData.map((postData)=>{
// const postElement.classList.add(".card")
// postElement.innerHTML=
// '
//   <div class="card">
//         <h3>$(postData.heading)</h3>
// <p class="card-body">$(postData.body)</p>
//     </div>'
// postContainer.apprendChild(postElement)
//   })
// }
//   postMethods()



// const productsArray = [
//   {
//     id: 1,
//     Product: "Gaming PC",
//     Price: "R1000",
//     Delivery: "Yes",
//     pictureUrl:
//       "./Images/pngtree-retro-gadgets-in-black-and-pink-lighting-picture-image_2776428.jpg",
//     imageAlt: "gamingPC"
//   },
//   {
//     id: 2,
//     product: "PS5",
//     price: "R111000",
//     Delivery: "Yes",
//     pictureUrl:
//       "",
//     imageAlt: "gamingPC"
//   },
// ];


// let dispProducts = document.querySelector(".card");
// card.forEach((data) => {
//   dispProductsinnerHTML += "
// <h3>$(data.product)</h3>
// <p class="card-body">$(data.price)</p>
// });

// const productsArray = document.querySelector(".section1");
// let htmlCode = "";
// productsArray.forEach(function(productsStock) {
//   htmlCode = ""
//     htmlCode +
//     `
//     <section class="section1">
//       <div class="card-container>
//       <img src="${productsStock.pictureUrl}" alt="${
//       productsStock.imageAlt
//     }">
//       </div>
//       <div>
//       <h3>Product: ${productsStock.product}</h3>
//       <p>Price: ${productsStock.price}</p>
//       <p>Delivery: ${productsStock.delivery}</p>
//       </div>
//     </section>
//   `;
// });
  


// let products =[
//   { id:1,
//    picture:"https://ibb.co/PTLzBsh",
//    name: "Camera",
//    title: "Camera",
//   cost : "R550",
//    },
//    { id:2,
//        picture:"https://ibb.co/PTLzBsh",
//        name: "gaming pc",
//        title: "Pc",
//       cost : "R15000",
//        },
//        { id:2,
//            picture:"https://ibb.co/PTLzBsh",
//            name: "Xbox",
//            title: "Xbox Series X",
//           cost : "R10000",
//            },
//            { id:2,
//                picture:"https://ibb.co/PTLzBsh",
//                name: "Playstation 5",
//                title: "Playstation 5",
//               cost : "R12000",
//                },
//                { id:2,
//                    picture:"https://ibb.co/PTLzBsh",
//                    name: "headphones",
//                    title: "headphones",
//                   cost : "R 400",
//                    },
// ]
// let divContainer = document.querySelector(".card");
// card.forEach((data)=> {
//    divContainer.innerHTML += `
//    <div class= "card">
//    <div class="images">
//    <img src="${data.picture}" alt="${data.name}" loading="lazy" class="img-fluid">
//    <h3>${data.title}</h3>
//    </div>
//    <p class="price">${data.cost}</p>
//    </div>
//    `
// })