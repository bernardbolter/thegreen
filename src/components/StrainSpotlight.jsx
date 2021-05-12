import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_REGISTRATION_COMPONENT } from '../store/actions/navigation'

import { getAppCurrentStrain } from '../store/actions/strains'

const StrainSpotlight = () => {
    const dispatch = useDispatch()
    const { colors, user, strains } = useSelector(state => state)

    useMemo(() => {
        if (Object.values(strains.appCurrentStrain).length === 0) {
            dispatch(getAppCurrentStrain(user.currentStrainId))
        }
    }, [])

    return (
        <div className="strain-spotlight-container">
            {(Object.values(strains.appCurrentStrain).length === 0) ? (
                <div className="strain-spotlight-view">
                    <div className="strain-spotlight-magnify-svg">
                        <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="3" stroke="#1B2F1F" stroke-opacity="0.8" stroke-width="2"/>
                            <line x1="6.70711" y1="6.29289" x2="10.7071" y2="10.2929" stroke="#1B2F1F" stroke-opacity="0.8" stroke-width="2" />
                        </svg>
                    </div>
                    <p>Strain Spotlight</p>
                    <h1>{strains.appCurrentStrain.strainName}</h1>
                    <h2>{strains.appCurrentStrain.dispensaryName}</h2>
                    <div 
                        className="strain-spotlight-image"
                        onClick={() => dispatch({ 
                            type: SET_REGISTRATION_COMPONENT, updatedRegistrationNavName: 'Strain' })}
                    >
                        <img src={{ uri: strains.appCurrentStrain.strainImageUrl }} alt={strains.appCurrentStrain.strainName}/>
                        <div className="strain-spotlight-image-shadow" />
                    </div>
                </div>
            ) : (
                <div className="strain-spotlight-loader">
                    <h1>X</h1>
                </div>
            )}
        </div>
    )
}

export default StrainSpotlight