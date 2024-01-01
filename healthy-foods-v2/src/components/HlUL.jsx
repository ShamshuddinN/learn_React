import { useState } from "react";
import ListChildren from "./listItems";
const HLul = ({Hfs, bought}) => {

    let [currentItmList, setList] = useState([]);

    const BuyBtnHandler = (li) => {
        if (currentItmList.includes(li) === false) {
            currentItmList.push(li)
            setList([...currentItmList])
            
        } else {
            let newArr = [];
            for (let i = 0; i < currentItmList.length; i++) {
                // console.log(`comparing ${currentItmList[i]} &  ${li}`)
                if (currentItmList[i] !== li) {
                    // console.log(currentItmList[i]);
                    newArr.push(currentItmList[i]);
                }
                
            }

            setList([...newArr]);
        }
        
        };
  
    return <ul key ='random' className="list-group">
    {Hfs.map((itm) => (<ListChildren key={itm} li = {itm} bought={currentItmList.includes(itm)}  BuyBtnHandler = { BuyBtnHandler } ></ListChildren>))}
    </ul>

} 

export default HLul; 