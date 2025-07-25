import bcryptjs from 'bcryptjs'

export const isComnfirmed = async( entered: string, saved: string ) => {
    const isMatched = await bcryptjs.compare( entered, saved );
    // console.log(isMatched);
    // console.log( saved, entered );
        
    return isMatched;
}