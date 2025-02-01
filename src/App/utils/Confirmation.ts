import bcryptjs from 'bcryptjs'

export const isComnfirmed = ( entered: string, saved: string ) => {
    const isMatched = bcryptjs.compare( entered, saved );
    return isMatched;
}