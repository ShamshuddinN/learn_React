import styles from "./listItems.module.css";

const ListChildren = ({li, BuyBtnHandler, bought}) => {


    return <li id={li} className= {`list-group-item ${bought ? 'active' : ''} `} >{li} <button className= {` ${styles.mybtn} btn ${bought ? 'btn-danger' : 'btn-success'}`} 
    onClick={() => BuyBtnHandler(li)}
    >{bought ? 'Remove' : 'Buy'}</button> </li>
}

export default ListChildren;