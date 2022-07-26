import "../../styles/TaskInput.css"

export default function LOSItem({value, label, destroy}){
    const destroyThis = () => {
        destroy(value)
    }

    return(
        <div className={"LOSItem"}>
            <div className={"label"}>{label}</div>
            <button onClick={destroyThis}>delete</button>
        </div>
    )
}