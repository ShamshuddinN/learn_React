import ListItem from "./childEle";
const Parent = ({farray}) => {
    return <ul className="list-group list-group-flush text-center ">
        {farray.map((food) => (<ListItem key={food} fi = {food} ></ListItem>))}

    </ul>
}

export default Parent;