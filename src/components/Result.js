import "../styles/Result.css"

export default function Result({answer}){
    const component = () => {
        if (answer) return(
            <div className={"Result"}>{answer}</div>
        )
    }

    return(
        component()
    )
}