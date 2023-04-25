type Product = {
    name: string,
    price: number,
    tags: Tag,
    category: Category
    description: string,
    image: string
}

interface Category {
    title: string,
    description: string,
    image: string
}

type Tag = {
    name: string
}