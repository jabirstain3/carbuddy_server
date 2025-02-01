// export type TFullName = {
//     firstName: string,
//     lastName: string,
// } 

export type TAdmin = {
    username: string,
    role: 'Admin',
    status: 'Active' | 'Blocked',
    email: string,
    password: string,
    number?: string,
    // fullname: TFullName,
    // address: string,
}