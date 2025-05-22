export const NameBlock = ({id, name, onClick}) => {
    return (
        <div className="card" onClick={onClick} style={{width: "10rem"}}>
        <div className="card-body" target-id={id}>
            {name}
        </div>
        </div>
    )
}