/**
 * First way to input (currently for first task)
 * Two extendable lists of strings
 *
 * @returns {JSX.Element}
 * @constructor
 */
import ListOfStrings from "./ListOfStrings";

export default function TaskInputTypeOne(){
    return(
        <div>
            <ListOfStrings label={'first listOfStrings'}/>
            <ListOfStrings label={'second listOfStrings'}/>
        </div>
    )
}