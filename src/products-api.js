import productsData from './products-mock.json'

export const findProductsByTag = (tag) => {
    return productsData.filter((product) => product.tag === tag)
}