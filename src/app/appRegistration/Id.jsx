import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AppRegistrationNavigation from './AppRegistrationNavigation'
import UseAppContainer from '../../hooks/useAppContainer'
import SubmitButton from '../../components/SubmitButton'
import IdCamera from '../../components/IdCamera'

import {
    SET_FRONT_ID,
    SET_BACK_ID,
    emailIDs
} from '../../store/actions/id'

import './id.scss'

const Id = () => {
    const { colors, id, submit } = useSelector(state => state)

    const [takeFrontID, setTakeFrontID] = useState(false)
    const [takeBackID, setTakeBackID] = useState(false)

    const [readyToEmail, setReadyToEmail] = useState(false)

    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
            <AppRegistrationNavigation />
            <div className="id-container">
                <div className="id-header">
                    <h3 style={{ color:colors.dark  }}>3. Email ID</h3>
                </div>
                <div className="id-content">
                    <h3 style={{ color: colors.dark }}>In order to get an appointment with a doctor we need to send a front and back phot of your id. Click on the Icons below to take a photo.</h3>
                    {takeFrontID ? (
                        <IdCamera side="front" setImage={setTakeFrontID} />
                    ) : (
                        <>
                            {id.frontID.uri ? (
                                <img src={{ uri: id.frontID.uri }} alt="front ID" style="id-front-image" />
                            ) : (
                                <div 
                                    className="id-take-front-id"
                                    onClick={() => {
                                        setTakeBackID(false)
                                        setTakeFrontID(true)
                                    }}
                                >
                                    <h2 style={{ color: colors.dark }}>FRONT ID</h2>
                                    <h4 style={{ color: colors.dark}}>click on the icon to open your camera</h4>
                                    <div className="id-front-svg">
                                        <svg width={289} height={194} viewBox="0 0 289 194" fill="none">
                                            <path fill={colors.dark} fillOpacity={0.8} d="M258.566 12.9507H30.3026C21.4246 12.9507 14.2014 20.1485 14.2002 28.9962V164.214C14.2002 173.074 21.4234 180.282 30.3026 180.282H258.566C267.451 180.282 274.68 173.074 274.68 164.214V28.9962C274.68 20.1485 267.451 12.9507 258.566 12.9507ZM266.144 164.214C266.144 168.378 262.745 171.765 258.566 171.765H30.3026C26.1304 171.765 22.7361 168.378 22.7361 164.214V28.9962C22.7361 24.8449 26.1304 21.4674 30.3026 21.4674H258.566C262.745 21.4674 266.144 24.8449 266.144 28.9962V164.214Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M270.846 0.00109863H18.034C8.08962 0.00109863 0 8.06827 0 17.9848V175.226C0 185.142 8.09023 193.21 18.034 193.21H270.846C280.791 193.21 288.881 185.142 288.881 175.226V17.9848C288.881 8.06827 280.79 0.00109863 270.846 0.00109863ZM280.345 175.226C280.345 180.446 276.084 184.693 270.846 184.693H18.034C12.7966 184.693 8.53593 180.446 8.53593 175.226V17.9848C8.53593 12.7646 12.7966 8.51783 18.034 8.51783H270.846C276.084 8.51783 280.345 12.7646 280.345 17.9848V175.226Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M35.6881 108.399H99.2369C101.594 108.399 103.505 106.492 103.505 104.141V40.8284C103.505 38.4766 101.594 36.5701 99.2369 36.5701H35.6881C33.331 36.5701 31.4202 38.4766 31.4202 40.8284V104.141C31.4202 106.492 33.331 108.399 35.6881 108.399ZM39.9561 45.0868H94.9689V99.8822H39.9561V45.0868Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 53.145H116.456C114.099 53.145 112.188 55.0516 112.188 57.4034C112.188 59.7552 114.099 61.6618 116.456 61.6618H253.181C255.538 61.6618 257.449 59.7552 257.449 57.4034C257.449 55.0516 255.538 53.145 253.181 53.145Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 84.7894H116.456C114.099 84.7894 112.188 86.696 112.188 89.0478C112.188 91.3996 114.099 93.3062 116.456 93.3062H253.181C255.538 93.3062 257.449 91.3996 257.449 89.0478C257.449 86.696 255.538 84.7894 253.181 84.7894Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 116.457H35.6881C33.331 116.457 31.4202 118.363 31.4202 120.715C31.4202 123.067 33.331 124.973 35.6881 124.973H253.181C255.538 124.973 257.449 123.067 257.449 120.715C257.449 118.363 255.538 116.457 253.181 116.457Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 148.124H35.6881C33.331 148.124 31.4202 150.031 31.4202 152.382C31.4202 154.734 33.331 156.641 35.6881 156.641H253.181C255.538 156.641 257.449 154.734 257.449 152.382C257.449 150.031 255.538 148.124 253.181 148.124Z" />
                                        </svg>
                                    </div>
                                </div>
                            ) }
                        </>
                    )}

                    {id.frontID.uri && (
                        <div 
                            className="id-retake-front"
                            onClick={() => {
                                dispatchEvent({ type: SET_FRONT_ID, updatedFrontID: {}})
                                setTakeFrontID(true)
                                setTakeBackID(false)
                            }}
                        >
                            <div className="id-retake-svg">
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill={colors.dark} d="M10.5 8.24719C8.77734 8.24719 7.38147 9.63081 7.38147 11.336C7.38147 13.0422 8.77734 14.4248 10.5 14.4248C12.2215 14.4248 13.6185 13.0422 13.6185 11.336C13.6185 9.63081 12.2215 8.24719 10.5 8.24719Z"/>
                                    <path fill={colors.dark} d="M18.06 5.71999H15.7916C15.4798 5.71999 15.1438 5.48058 15.0461 5.18709L14.4594 3.44468C14.3605 3.1514 14.0253 2.91199 13.7135 2.91199H7.28663C6.97478 2.91199 6.63878 3.1514 6.54092 3.44488L5.95418 5.1873C5.85548 5.48079 5.52053 5.7202 5.20847 5.7202H2.94005C1.90097 5.7202 1.05005 6.56301 1.05005 7.5922V16.016C1.05005 17.0452 1.90097 17.888 2.94005 17.888H18.06C19.0991 17.888 19.95 17.0452 19.95 16.016V7.59199C19.95 6.5628 19.0991 5.71999 18.06 5.71999ZM10.5 16.016C7.89017 16.016 5.77505 13.921 5.77505 11.336C5.77505 8.752 7.89017 6.65599 10.5 6.65599C13.1089 6.65599 15.225 8.752 15.225 11.336C15.225 13.921 13.1089 16.016 10.5 16.016ZM17.3983 8.96645C16.9974 8.96645 16.6705 8.64364 16.6705 8.24552C16.6705 7.84824 16.9974 7.52564 17.3983 7.52564C17.8003 7.52564 18.1262 7.84845 18.1262 8.24552C18.1262 8.64364 17.8003 8.96645 17.3983 8.96645Z" />
                                </svg>
                            </div>
                            <p>Retake Front ID</p>
                        </div>
                    )}

                    {takeBackID ? (
                        <IdCamera src={{ uri: id.backID.uri }} alt="Back ID" setImage={setTakeBackID} />
                    ) : (
                        <>
                            {id.backID.uri ? (
                                <img src={{ uri: id.backID.uri }} alt="Back ID" />
                            ) : (
                                <div 
                                    className="id-take-back-id"
                                    onClick={() => {
                                        setTakeFrontID(false)
                                        setTakeBackID(true)
                                    }}
                                >
                                    <h2 style={{ color: colors.dark }}>FRONT ID</h2>
                                    <h4 style={{ color: colors.dark}}>click on the icon to open your camera</h4>
                                    <div className="id-front-svg">
                                        <svg width={289} height={194} viewBox="0 0 289 194" fill="none">
                                            <path fill={colors.dark} fillOpacity={0.8} d="M258.566 12.9503H30.3026C21.4246 12.9503 14.2014 20.1482 14.2002 28.9958V164.214C14.2002 173.073 21.4234 180.282 30.3026 180.282H258.566C267.451 180.282 274.68 173.073 274.68 164.214V28.9958C274.68 20.1482 267.451 12.9503 258.566 12.9503ZM266.144 164.214C266.144 168.378 262.745 171.765 258.566 171.765H30.3026C26.1304 171.765 22.7361 168.378 22.7361 164.214V28.9958C22.7361 24.8445 26.1304 21.4671 30.3026 21.4671H258.566C262.745 21.4671 266.144 24.8445 266.144 28.9958V164.214Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M270.846 0.000732422H18.034C8.08962 0.000732422 0 8.06791 0 17.9844V175.226C0 185.142 8.09023 193.21 18.034 193.21H270.846C280.791 193.21 288.881 185.142 288.881 175.226V17.9844C288.881 8.06791 280.79 0.000732422 270.846 0.000732422ZM280.345 175.225C280.345 180.445 276.084 184.692 270.846 184.692H18.034C12.7966 184.692 8.53593 180.446 8.53593 175.225V17.9844C8.53593 12.7643 12.7966 8.51747 18.034 8.51747H270.846C276.084 8.51747 280.345 12.7643 280.345 17.9844V175.225Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M250.36 53.0006H37.6402C33.9729 53.0006 31 55.0154 31 57.5007C31 59.986 33.9729 62.0008 37.6402 62.0008H250.36C254.027 62.0008 257 59.986 257 57.5007C257 55.0154 254.027 53.0006 250.36 53.0006Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M250.36 85.0007H37.6402C33.9729 85.0007 31 86.7916 31 89.0007C31 91.2098 33.9729 93.0007 37.6402 93.0007H250.36C254.027 93.0007 257 91.2098 257 89.0007C257 86.7916 254.027 85.0007 250.36 85.0007Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 116.456H35.6881C33.331 116.456 31.4202 118.363 31.4202 120.715C31.4202 123.066 33.331 124.973 35.6881 124.973H253.181C255.538 124.973 257.449 123.066 257.449 120.715C257.449 118.363 255.538 116.456 253.181 116.456Z" />
                                            <path fill={colors.dark} fillOpacity={0.8} d="M253.181 148.124H35.6881C33.331 148.124 31.4202 150.03 31.4202 152.382C31.4202 154.734 33.331 156.64 35.6881 156.64H253.181C255.538 156.64 257.449 154.734 257.449 152.382C257.449 150.03 255.538 148.124 253.181 148.124Z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {id.backID.uri && (
                        <div 
                            className="id-retake-front"
                            onClick={() => {
                                dispatchEvent({ type: SET_BACK_ID, updatedBackID: {}})
                                setTakeBackID(true)
                                setTakeFrontID(false)
                            }}
                        >
                            <div className="id-retake-svg">
                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill={colors.dark} d="M10.5 8.24719C8.77734 8.24719 7.38147 9.63081 7.38147 11.336C7.38147 13.0422 8.77734 14.4248 10.5 14.4248C12.2215 14.4248 13.6185 13.0422 13.6185 11.336C13.6185 9.63081 12.2215 8.24719 10.5 8.24719Z"/>
                                    <path fill={colors.dark} d="M18.06 5.71999H15.7916C15.4798 5.71999 15.1438 5.48058 15.0461 5.18709L14.4594 3.44468C14.3605 3.1514 14.0253 2.91199 13.7135 2.91199H7.28663C6.97478 2.91199 6.63878 3.1514 6.54092 3.44488L5.95418 5.1873C5.85548 5.48079 5.52053 5.7202 5.20847 5.7202H2.94005C1.90097 5.7202 1.05005 6.56301 1.05005 7.5922V16.016C1.05005 17.0452 1.90097 17.888 2.94005 17.888H18.06C19.0991 17.888 19.95 17.0452 19.95 16.016V7.59199C19.95 6.5628 19.0991 5.71999 18.06 5.71999ZM10.5 16.016C7.89017 16.016 5.77505 13.921 5.77505 11.336C5.77505 8.752 7.89017 6.65599 10.5 6.65599C13.1089 6.65599 15.225 8.752 15.225 11.336C15.225 13.921 13.1089 16.016 10.5 16.016ZM17.3983 8.96645C16.9974 8.96645 16.6705 8.64364 16.6705 8.24552C16.6705 7.84824 16.9974 7.52564 17.3983 7.52564C17.8003 7.52564 18.1262 7.84845 18.1262 8.24552C18.1262 8.64364 17.8003 8.96645 17.3983 8.96645Z" />
                                </svg>
                            </div>
                            <p>Retake Back ID</p>
                        </div>
                    )}

                    <div className="id-bottom-infor-container">
                        <p>*</p>
                        <h3>>After you have the back and front of your identification ready to go, you will be taken your phones email application, when you send the email you will be taken back to the app. The photos of your ID go directly to the doctor and we do not keep it on file.</h3>
                    </div> 
                </div>

                <SubmitButton
                    formProps={id}
                    isSubmit={submit.id.isSubmit}
                    submitAction={emailIDs}
                    text={readyToEmail ? "EMAIL IDENTIFICATION" : "TAKE PHOTOS OF ID"}
                    submitName="id"
                />

                {(submit.id.errorMessage.length !== 0) 
                    ? <p className="submit-error">{submit.id.errorMessage}</p> 
                    : null 
                }

            </div>

        </UseAppContainer>
    )
}

export default Id