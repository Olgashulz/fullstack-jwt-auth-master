import { Box } from '@mui/material';
import React, {useContext, useState} from 'react';
import LeftPart from "./leftPart";
import RightPart from "./RightPart";

const Main = () => {
    const [isConvert, setIsConvert] = useState(true);

    // const {store} = useContext(Context);
    // const [amount, setPrice] = useState<number>(1000)
    // const [to, setTo] = useState<string>('')
    // const [from, setFrom] = useState<string>('')
    // return (
    //     <div>
    //         <input
    //             onChange={e => setFrom(e.target.value)}
    //             value={from}
    //             type="from"
    //             placeholder='USD'
    //         />
    //         <input
    //             onChange={e => setPrice(+e.target.value)}
    //             onBlur={() => store.currency(from, amount, to)}
    //             value={amount}
    //             type="number"
    //             placeholder='1000'
    //         />
    //         <input
    //             onChange={e => setTo(e.target.value)}
    //             value={to}
    //             type="to"
    //             placeholder='ILS'
    //         />
    //         <button onClick={() => store.currency(from, amount, to)}>
    //             Converter
    //         </button>
    //     </div>
    // );
    return(
        <Box sx={{display:"flex", justifyContent: "space-between"}}>
        <LeftPart/>
        <RightPart/>
        </Box>
    )
};

export default Main;