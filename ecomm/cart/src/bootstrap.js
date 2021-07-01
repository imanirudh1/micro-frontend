import faker from 'faker'


const mountCart = (el) => {
    
    const cartDisplay = `<div> ${faker.datatype.number()} items in the cart </div>`
    
    el.innerHTML = cartDisplay

}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev')
    if (el) {
        mountCart(el)
    }
}
export { mountCart }