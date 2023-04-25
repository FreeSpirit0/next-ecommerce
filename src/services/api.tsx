export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch("http://ec2-13-239-63-84.ap-southeast-2.compute.amazonaws.com:8000/product/",
    {
        method: "GET"
    })

    const data = await response.json()

    return data
}

export const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`http://localhost:8000/product/${id}`,
    {
        method: "GET"
    })

    const data = await response.json()

    return data
}

export const createOrder = async (address: string, items: Product[], user: string) => {
    const response = await fetch("http://localhost:8000/order/create",
    {
        method: "POST",
        body: JSON.stringify({
            user: user,
            items: items,
            start_date: Date.now(),

        })
    })
}