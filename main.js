const merchItems = [
   
    {
        type: 'clothes',
        title: 'T-shirt',
        price: 36.00,
        imgUrl: 'https://i.imgur.com/iMbqr0u.jpg',
    },
    {
        type: 'hat',
        title: 'Beanie', 
        price: 26.00,
        imgUrl: 'https://i.imgur.com/nqTTDJ3.jpg',
    },
    {
        type: 'hat',
        title: 'Trucker',
        price: 30.00,
        imgUrl: 'https://i.imgur.com/TiPGP1J.jpeg',
    },
    {
        type: 'bag',
        title: 'Pouch',
        price: 16.00,
        imgUrl: 'https://i.imgur.com/gkQlgGc.jpg',
    },
    {
        type: 'bag',
        title: 'Tote Bag',
        price: 20.00,
        imgUrl: 'https://i.imgur.com/rd9ZlTW.jpeg',
    },
    {
        type: 'home',
        title: 'Xscape Mug',
        price: 12.00,
        imgUrl: 'https://i.imgur.com/lVzDmsC.jpg',
    },
    {
        type: 'home',
        title: 'Xscape Pillow',
        price: 30.00,
        imgUrl: 'https://i.imgur.com/R97JhCW.jpeg',
    },
    {
        type: 'clothes',
        title: 'Xscape Hoodie',
        price: 40.00,
        imgUrl: 'https://i.imgur.com/PAj6Xlm.jpg',
    },
    {
        type: 'accessory',
        title: 'Xscape Phone Case',
        price: 26.00,
        imgUrl: 'https://i.imgur.com/6pMfcc1.jpeg',
    },
    {
        type: 'accessory',
        title: 'Xscape Mask',
        price: 16.00,
        imgUrl: 'https://i.imgur.com/8dpIe9B.jpeg',
    },
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

const merchPrinter = (merchItems) => {
    let domString = '';
    for (i=0; i<merchItems.length; i++) {
        domString += `
            <div class="card" style="width: 18rem;">
                <img src="${merchItems[i].imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${merchItems[i].title}</h5>
                        <h5 class="card-price">${merchItems[i].price}</h5>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                    </div>
            </div>
        `
    }
    console.log(merchPrinter)
    printToDom('merchItems', domString)
}

  const init = () => { 
      merchPrinter(merchItems);
  }
  init()

