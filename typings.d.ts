interface Image {
    asset: {
        url: String
    }
}

export interface Cards {
    _id: string
    img: Image
    title: string
}

export interface Collection {
    _id: string
    img: Image
    location: string
    distance: string
}

export interface Results {
    _id: string,
    img:Image
    location:string
    title:string
    description: string
    star: number
    price:string
    total: string
    long:number
    lat:number
}