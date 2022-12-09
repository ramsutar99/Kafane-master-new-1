
const orderCount = document.querySelector("#order-count");
const orders = document.querySelector("#orders");

// setting orders on page

async function setOrders() {
    if(localStorage.getItem('orders')){
    orders.innerHTML = await JSON.parse(localStorage.getItem("orders"))
      .filter((value) => {
        return value;
      })
      .map((item, index) => {
        // console.log(item);
        orderCount.innerHTML = index + 1;
        return `<tr>
        <td class='unique id'>${item.id}</td>
        <td>${item.customerName}</td>
        <td>${item.orderDate}<br/><span class='unique'> ${item.orderTime}</span></td>
        <td class='unique'>$${item.amount}</td>
        <td>${item.orderStatus}</td>
      </tr>
    `;
      })
      .join("");
    }
    // checking status

      setTimeout(() => {
        loginStatus = false;
        alert('Your Session has been end!')
        window.location.replace('../index.html')
      }, 50000); 
      
  }
  
  // setOrders();