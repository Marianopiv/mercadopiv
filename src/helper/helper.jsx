export const isInCart = (carrito,id) => {
    return carrito.some((item)=>item.id===id)
}

export const total = (carrito) => {
    let total = 0;
    carrito.forEach(element => {
        total+=element.cantidad*element.precio
    });
    return total
}

/*Como hacerlo con un for for (let i = 0; i < carrito.length; i++) {
    total = (total+(carrito[i].precio*carrito[i].cantidad))
} */