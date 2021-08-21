
function createNewCard (newProduct) {
    const newCard = document.createElement ("div");
    const title = document.createElement ("h2");
    const img = document.createElement ("img");
    const priceP = document.createElement ("p");
    const button = document.createElement ("button");

    title.textContent = newProduct.name;
    img.src = newProduct.image;
    priceP.textContent = "$" + newProduct.price;
    button.textContent = newProduct.button;

    newCard.appendChild(title);
    newCard.appendChild(img);
    newCard.appendChild(priceP);
    newCard.appendChild(button);

    newCard.classList.add("product");

    const container = document.getElementsByTagName("div");
    container[0].appendChild(newCard);
     }



     const listOfProducts = [
         
         {
           id: 1,
           name: "Purple Match",
           image: "https://biladrugs.com/wp-content/uploads/2020/07/Purple-Kush-Indica.jpg",
           price: 1500,
           button: "Comprar"
         },
         {
            id: 2,
            name: "Sunrise Sherbert",
            image: "https://www.royalseedbank.com/wp-content/uploads/2021/02/sunset-sherbet-feminized-4.jpg",
            price: 1600,
            button: "Comprar"
          },
          {
            id: 3,
            name: "Bubba Cheese",
            image: "https://www.seed-city.com/components/com_virtuemart/shop_image/product/Bubba_Cheese_Aut_56f195b0af527.jpg",
            price: 1800,
            button: "Comprar"
          },
          {
            id: 4,
            name: "Lemon Juice Express",
            image: "https://www.humboldtseeds.net/uploads/HS0028-lemon-juice-auto.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 5,
            name: "Lost Coast Skunk",
            image: "https://www.humboldtseeds.net/uploads/HS0103-lost-coast-skunk-auto.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 6,
            name: "Sour Diesel",
            image: "https://www.nirvanashop.com/1311-nr1_700/sour-diesel-hembra.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 7,
            name: "Blue Dream CBD",
            image: "https://mastersenseigenetics.com/wp-content/uploads/2021/03/BlueDreamCBDAuto1.jpeg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 8,
            name: "Dedoverde Haze",
            image: "https://www.cannabisseeds.co.za/media/products/humboldt-feminised-gorilla-breath.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 9,
            name: "Blue Fire",
            image: "https://herbiesheadshop.com/resized/origin/common/56/Blue-Fire-cannabis-seeds__LXNgbUgFdWg54wzv.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 10,
            name: "Forbidden Dream",
            image: "https://herbiesheadshop.com/resized/origin/common/53/Forbidden-Dream-buds__NQQdk8yOzwDmnbIr.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 11,
            name: "OG Kush",
            image: "https://revistathc.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-22-at-12.32.28.jpeg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 12,
            name: "Fast Flowering OGKZ",
            image: "https://www.deliciousseeds.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/h/s/hso-ogkz_3.jpg",
            price: 2300,
            button: "Comprar"
          },
          {
            id: 13,
            name: "Lost coast SKUNK",
            image: "https://boaterragrow.com/image/cache/data/medical%20seeds/sour%20diesel-700x700.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 14,
            name: "Blueberry Headband",
            image: "https://www.seed-city.com/components/com_virtuemart/shop_image/product/Blueberry_Headba_5c66fe4338be2.jpg",
            price: 1900,
            button: "Comprar"
          },
          {
            id: 15,
            name: "Chocolate Mint OG",
            image: "https://media.lamota.org/hs0130-chocolate-mint_600x690.jpg",
            price: 1900,
            button: "Comprar"
          },
     ];
 
     listOfProducts.map(function(productList) {
         createNewCard(productList);
     })

     module.exports = listOfProducts