const products = [
    {id: '1', name: 'Fixie S', price:'$35000', category: 'cuadros', img: 'https://pedalia.cc/wp-content/uploads/2019/12/ArmaTuFixie_TribeBicycleCo-1024x754.jpg', stock:10 , description: 'Cuadro Tribe Fixie S'},
    {id: '2', name: 'Gravel M', price:'$47000', category: 'cuadros', img: 'https://vukbikes.com/wp-content/uploads/2020/10/ftp_f_freewheel_imagessportlinefwbikesgn21110_side_vuk_bikes_853_genesis.jpg', stock:7 , description: 'Cuadro Genesis Gravel M'},
    {id: '3', name: 'Plato Palanca Shimano 105 FC-R7000 53-39T', price:'$45000', category: 'platos-palancas', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/052/201/products/cms32004-palancas-shimano-fc-r7000-105-11-velocidades1-8d504889989f792be916017358115588-1024-1024.jpg', stock:5 , description: 'Plato y Palanca Shimano 105 FC-R7000'},
    {id: '4', name: 'Plato Palanca Shimano FC-TY301', price:'$5000', category: 'platos-palancas', img: 'https://canaglia.com/wp-content/uploads/2020/01/FC-TY301.jpg', stock:15 , description: 'Plato y Palanca Shimano FC-TY301'},
    {id: '5', name: 'Shimano Sti Sora R3000 2x9', price:'$45000', category: 'frenos-shifters', img: 'https://http2.mlstatic.com/D_NQ_NP_709857-MLA48539198828_122021-O.webp', stock:3 , description: 'Frenos Shimano Sti Sora R3000 2x9'},
    {id: '6', name: 'Shifters Integrados Shimano Acera M3050 Frenos Hidraulicos', price:'$21000', category: 'frenos-shifters', img: 'https://borabikes.com.ar/63561-large_default/shifters-integrados-shimano-acera-m3050-frenos-hidraulicos.jpg', stock:4 , description: 'Shifters Integrados Shimano Acera M3050 Frenos Hidraulicos'}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}