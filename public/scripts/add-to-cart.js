
window.onload = () => {
    let cartProducts 
    const seachCartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]")
    if( seachCartProducts != `"[object Object]"`){
        cartProducts =  JSON.parse(localStorage.getItem("cartProducts") || "[]")
    } else{
        cartProducts = []
    }
        
    const slug = arrayPage[2]
    const buttonComprar = document.querySelector('.product-info-button')


    buttonComprar.addEventListener('click', event => {
        event.preventDefault();
        
        
        fetch(`http://localhost:3000/cart/add/${slug}`, {
            method: 'get',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            redirect: 'follow',
        })
        .then(res => res.json())
        .then(resProduct => {

            const isProductInCart = cartProducts.filter(product => product.id == resProduct.id)

            if(isProductInCart.length > 0) {

                if(cartProducts > 2){
                    cartProducts.map(product => {
                        if(product.id == resProduct.id){
                            product.quantity  ++

                        }
                    })
                } else{
                    cartProducts[0].quantity ++

                }
                
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                window.location.href = '/cart' 

                
            } else {

                resProduct.quantity = 1
                cartProducts.push(resProduct)

                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                window.location.href = '/cart' 

            }
            
        })
        .catch(function(err) {
            console.info(err);
        });


    })
} 