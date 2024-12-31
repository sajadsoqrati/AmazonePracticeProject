import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
async function loadPage(){
try{
    await loadProductsFetch();

await new Promise((resolve,reject)=>{
    loadCart(()=>{
        //reject('error01')
        resolve();
    });
});
}catch (error){
    console.log('Unexpected error . please try again later.')
}
renderCheckoutHeader(); 
renderOrderSummary();
renderPaymentSummary();   


}
loadPage();
/*
Promise.all([
loadProductsFetch(),
   new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    renderOrderSummary();
    renderPaymentSummary();
});
/*
loadProducts(()=>{
    renderCheckoutHeader(); 
    renderOrderSummary();
    renderPaymentSummary();    
});*/ 
 