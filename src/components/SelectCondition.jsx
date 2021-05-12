import React,  { useState } from 'react'
import { useSelector } from 'react-redux'

const SelectCondition = ({ setAllConditions, allConditions, condition }) => {
    const colors = useSelector(state => state.colors)
    const [selected, setSelected] = useState(false)

    return (
        <div 
            className="select-condition-container"
            style={{
                borderColor: colors.dark,
                backgroundColor: selected ? "rgba(255,255,255,.6" : "rgba(255,255,255,.3",
                fontWeight: selected ? 400 : 700
            }}
            onClick={() => {
                console.log("selecting condition", allConditions)
                setSelected(!selected)
                if (!selected) {
                    setAllConditions([...allConditions, condition])
                } else {
                    setAllConditions(allConditions.filter(condition => condition !== condition))
                }
            }}
        >
            <div className="circle-container">
                <svg height="14px" width="14px" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="6" stroke={colors.dark} strokeWidth="1" fill={selected ? "transparent" : "#22A800"} />
                </svg>
            </div>
            <h3 style={{ color: colors.dark }}>{condition}</h3>
        </div>
    )
}

export default SelectCondition