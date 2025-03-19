export type TReviewer = {
    userId: string,
    userName: string,
    image: string,
    city:string
}

export type TReview = {
    carId: string,
    rate: number,
    comment: string,

    revirwer: TReviewer
}
