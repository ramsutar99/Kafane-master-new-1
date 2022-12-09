




const products = document.querySelector("#products");

// setting products on page
async function setProducts(){
    if(localStorage.getItem('products')){
      products.innerHTML = await JSON.parse(localStorage.getItem("products"))
        .map((item) => {
          return `<tr>
                <td class='unique id'>${item.id}</td>
                <td class='brandName'>${item.medicineName}</td>
                <td class='unique brandName'>${item.medicineBrand}</td>
                <td >${item.expiryDate}</td>
                <td class='unique price'>$${item.unitPrice}</td>
                <td class='unique stock'>${item.stock}</td>
              </tr>
            `;
        })
        .join("");
      }

      setTimeout(() => {
        loginStatus = false;
        alert('Your Session has been end!')
        window.location.replace('../index.html')
      }, 50000); 
      
  }