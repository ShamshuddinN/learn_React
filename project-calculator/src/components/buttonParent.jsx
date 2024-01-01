import ChildButtons from "./childrenButtons";

const ButtonContainer = ({btnsObj, calBtnClick}) => {

    return <>
    {btnsObj.map((rows) => (<div key={rows.key} className="row justify-content-center p-1 "> <div key={rows.key} className="col-lg-6 col-md-8 mt-2 p-2 text-center "> <ChildButtons children = {rows.row} mykey = {rows.key} calBtnClick = {calBtnClick} ></ChildButtons> </div>  </div>))}
    </>
}

export default ButtonContainer;