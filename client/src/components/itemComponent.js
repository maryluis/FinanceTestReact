import { useEffect, useState } from "react"

export const Item = ({title, percent, changed, price}) => {
    const [oldPrice, changePrice] = useState(price);
    const [color, changeColor] = useState("green");
    function checkPrice(old, actual) {
        if(old < actual) {
            changeColor("green")
        } else {
            changeColor("red")
        }
        changePrice(actual)
    }
    useEffect(() => checkPrice(oldPrice, price), [price])

    return(
        <div role="item" className={`flex spaceBetween itemWidth itemHeight paddingOver item textStyle`}>
            <div className="flex center">
                <div className="flex center margin">
                    {color === "green" ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`i bi-arrow-up-short ${color} svgGreen`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                  </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`bi bi-arrow-down-short ${color} svgRed`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                  </svg>}
                </div>
                <div>
                    <div className="titleItem">{title}</div>
                    <span> {price}</span>
                </div>
            </div>
            <div className="flex column center">
                <span className={`${color}`}>{color === "green" ? "+" + changed : "-" + changed}</span>
                <span className={`${color}`}>{color === "green" ? "+" + percent: "-" + percent}%</span>
            </div>
        </div>
    )
}


