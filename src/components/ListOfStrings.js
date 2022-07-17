import LOSList from "./listOfStrings/LOSList";

export default function ListOfStrings({label}){
    return(
        <div>
            <div>{label}</div>
            <LOSList/>
        </div>
    )
}