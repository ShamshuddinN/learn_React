const ChildButtons = ({children, calBtnClick, mykey}) => {

    
    return <>
    {children.map((btns) => (<button key =  {mykey + `${btns}txt`} onClick={() => calBtnClick(event)} className='btn btn-light border border-secondary p-3 ms-2 me-2' > {btns} </button>))}
    </>
}

export default ChildButtons;