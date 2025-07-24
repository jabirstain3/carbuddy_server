import bcryptjs from 'bcryptjs'

export const isComnfirmed = ( entered: string, saved: string ) => {
    const isMatched = bcryptjs.compare( entered, saved );
    // console.log(isMatched);
    // console.log( saved, entered );
        
    return isMatched;
}