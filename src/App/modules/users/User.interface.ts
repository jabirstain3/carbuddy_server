export type TFullName = {
    firstName: string,
    lastName: string,
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
}