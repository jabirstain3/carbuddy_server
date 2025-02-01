export type TArea = {
    address: string,
    city: string, 
}

export type TCar = {
    name: string,
    image: string,
    doors: number,
    category: string,
    passengers: number,
    transmission: "Automatic | Manual",
    area: TArea,
    luggage: number,
    price: number,
    model: string,
    drive: string,
    engine: string,
    power: string,
    fuel:"Degale | Patrol | Octen",
    mileage: string,
    features: string[],
    addfeatures: string[],
    isDeleted?: true,
}