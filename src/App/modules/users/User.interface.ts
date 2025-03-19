export type TFullName = {
    firstName: string,
    lastName: string,
}

export type TPaymentdetails = {
    cardNumber: string,
    cardHolderName: string,
    expiryDate: string,
    cvv: string,
    cardType: string,
}

export type TUser = {
    username: string,
    role: 'User',
    status: 'Active' | 'Blocked',
    email: string,
    password: string,
    number: string,
    fullname?: TFullName,
    address?: string,
    paymentdetails?: TPaymentdetails,
}