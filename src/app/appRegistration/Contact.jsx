import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import AppRegistrationNavigation from './AppRegistrationNavigation'
import SubmitButton from '../../components/SubmitButton'

import UseAppContainer from '../../hooks/useAppContainer'

import { saveContact } from '../../store/actions/contact'

import'./contact.scss'

const contactSchema = yup.object({
    fullname: yup.string().required().min(2).max(99),
    email: yup.string().required().email(),
    telephone: yup.string().required().min(14).max(14),
    address: yup.string().required().min(2).max(99),
    city: yup.string().required().min(2).max(99),
    zipcode: yup.string().required().min(5).max(5),
    occupation: yup.string(),
    careProvider: yup.string()
})

const Contact = () => {
    const { colors, submit, user } = useSelector(state => state)

    return (
        <UseAppContainer
            xs={550}
            s={570}
            m={600}
            l={610}
            xl={630}
        >
            <AppRegistrationNavigation />
            <section className="contact-container">
                <div className="registration-header-svg">
                    <svg width="133" height="18" viewBox="0 0 133 18">
                        <path fill={colors.dark} d="M2.13477 16.0876H0.0347656V15.0876L2.03477 10.3576H3.23477V15.0876H3.75477V16.0876H3.23477V17.3576H2.13477V16.0876ZM2.13477 15.0876V12.3576H2.11477L1.03477 15.0876H2.13477ZM4.29867 16.2976H5.35867V17.3576H4.29867V16.2976ZM12.079 17.5976C10.815 17.5976 9.847 17.2376 9.175 16.5176C8.519 15.7976 8.191 14.7816 8.191 13.4696V4.4456C8.191 3.1336 8.519 2.1176 9.175 1.3976C9.847 0.677604 10.815 0.317604 12.079 0.317604C13.343 0.317604 14.303 0.677604 14.959 1.3976C15.631 2.1176 15.967 3.1336 15.967 4.4456V6.2216H13.471V4.2776C13.471 3.2376 13.031 2.7176 12.151 2.7176C11.271 2.7176 10.831 3.2376 10.831 4.2776V13.6616C10.831 14.6856 11.271 15.1976 12.151 15.1976C13.031 15.1976 13.471 14.6856 13.471 13.6616V11.0936H15.967V13.4696C15.967 14.7816 15.631 15.7976 14.959 16.5176C14.303 17.2376 13.343 17.5976 12.079 17.5976ZM21.4094 17.5976C20.1134 17.5976 19.1214 17.2296 18.4334 16.4936C17.7454 15.7576 17.4014 14.7176 17.4014 13.3736V4.5416C17.4014 3.1976 17.7454 2.1576 18.4334 1.4216C19.1214 0.685604 20.1134 0.317604 21.4094 0.317604C22.7054 0.317604 23.6974 0.685604 24.3854 1.4216C25.0734 2.1576 25.4174 3.1976 25.4174 4.5416V13.3736C25.4174 14.7176 25.0734 15.7576 24.3854 16.4936C23.6974 17.2296 22.7054 17.5976 21.4094 17.5976ZM21.4094 15.1976C22.3214 15.1976 22.7774 14.6456 22.7774 13.5416V4.3736C22.7774 3.2696 22.3214 2.7176 21.4094 2.7176C20.4974 2.7176 20.0414 3.2696 20.0414 4.3736V13.5416C20.0414 14.6456 20.4974 15.1976 21.4094 15.1976ZM27.2028 0.557604H30.5148L33.0828 10.6136H33.1308V0.557604H35.4828V17.3576H32.7708L29.6028 5.0936H29.5548V17.3576H27.2028V0.557604ZM39.5089 2.9576H36.7489V0.557604H44.9089V2.9576H42.1489V17.3576H39.5089V2.9576ZM47.1256 0.557604H50.7016L53.4376 17.3576H50.7976L50.3176 14.0216V14.0696H47.3176L46.8376 17.3576H44.3896L47.1256 0.557604ZM50.0056 11.7896L48.8296 3.4856H48.7816L47.6296 11.7896H50.0056ZM58.3915 17.5976C57.1275 17.5976 56.1595 17.2376 55.4875 16.5176C54.8315 15.7976 54.5035 14.7816 54.5035 13.4696V4.4456C54.5035 3.1336 54.8315 2.1176 55.4875 1.3976C56.1595 0.677604 57.1275 0.317604 58.3915 0.317604C59.6555 0.317604 60.6155 0.677604 61.2715 1.3976C61.9435 2.1176 62.2795 3.1336 62.2795 4.4456V6.2216H59.7835V4.2776C59.7835 3.2376 59.3435 2.7176 58.4635 2.7176C57.5835 2.7176 57.1435 3.2376 57.1435 4.2776V13.6616C57.1435 14.6856 57.5835 15.1976 58.4635 15.1976C59.3435 15.1976 59.7835 14.6856 59.7835 13.6616V11.0936H62.2795V13.4696C62.2795 14.7816 61.9435 15.7976 61.2715 16.5176C60.6155 17.2376 59.6555 17.5976 58.3915 17.5976ZM65.923 2.9576H63.163V0.557604H71.323V2.9576H68.563V17.3576H65.923V2.9576ZM76.4449 0.557604H80.4769C81.7889 0.557604 82.7729 0.909604 83.4289 1.6136C84.0849 2.3176 84.4129 3.3496 84.4129 4.7096V13.2056C84.4129 14.5656 84.0849 15.5976 83.4289 16.3016C82.7729 17.0056 81.7889 17.3576 80.4769 17.3576H76.4449V0.557604ZM80.4289 14.9576C80.8609 14.9576 81.1889 14.8296 81.4129 14.5736C81.6529 14.3176 81.7729 13.9016 81.7729 13.3256V4.5896C81.7729 4.0136 81.6529 3.5976 81.4129 3.3416C81.1889 3.0856 80.8609 2.9576 80.4289 2.9576H79.0849V14.9576H80.4289ZM86.1949 0.557604H93.3949V2.9576H88.8349V7.3976H92.4589V9.7976H88.8349V14.9576H93.3949V17.3576H86.1949V0.557604ZM96.9777 2.9576H94.2177V0.557604H102.378V2.9576H99.6177V17.3576H96.9777V2.9576ZM104.594 0.557604H108.17L110.906 17.3576H108.266L107.786 14.0216V14.0696H104.786L104.306 17.3576H101.858L104.594 0.557604ZM107.474 11.7896L106.298 3.4856H106.25L105.098 11.7896H107.474ZM112.187 0.557604H114.827V17.3576H112.187V0.557604ZM116.804 0.557604H119.444V14.9576H123.788V17.3576H116.804V0.557604ZM128.486 17.5976C127.206 17.5976 126.238 17.2376 125.582 16.5176C124.926 15.7816 124.598 14.7336 124.598 13.3736V12.4136H127.094V13.5656C127.094 14.6536 127.55 15.1976 128.462 15.1976C128.91 15.1976 129.246 15.0696 129.47 14.8136C129.71 14.5416 129.83 14.1096 129.83 13.5176C129.83 12.8136 129.67 12.1976 129.35 11.6696C129.03 11.1256 128.438 10.4776 127.574 9.7256C126.486 8.7656 125.726 7.9016 125.294 7.1336C124.862 6.3496 124.646 5.4696 124.646 4.4936C124.646 3.1656 124.982 2.1416 125.654 1.4216C126.326 0.685604 127.302 0.317604 128.582 0.317604C129.846 0.317604 130.798 0.685604 131.438 1.4216C132.094 2.1416 132.422 3.1816 132.422 4.5416V5.23761H129.926V4.3736C129.926 3.7976 129.814 3.3816 129.59 3.1256C129.366 2.8536 129.038 2.7176 128.606 2.7176C127.726 2.7176 127.286 3.2536 127.286 4.3256C127.286 4.9336 127.446 5.5016 127.766 6.0296C128.102 6.5576 128.702 7.1976 129.566 7.9496C130.67 8.9096 131.43 9.7816 131.846 10.5656C132.262 11.3496 132.47 12.2696 132.47 13.3256C132.47 14.7016 132.126 15.7576 131.438 16.4936C130.766 17.2296 129.782 17.5976 128.486 17.5976Z" />
                    </svg>
                </div>
                <Formik
                    initialValues={{
                        fullname: user.contactInfo.fullname === undefined ? '' : user.contactInfo.fullname,
                        email: user.email !== undefined ? user.email : '',
                        telephone: user.contactInfo.telephone !== undefined ? user.contactInfo.telephone : '',
                        address: user.contactInfo.address !== undefined ? user.contactInfo.address : '',
                        city: user.contactInfo.city !== undefined ? user.contactInfo.city : '',
                        zipcode: user.contactInfo.zipcode !== undefined ? user.contactInfo.zipcode : '',
                        occupation: user.contactInfo.occupation !== undefined ? user.contactInfo.occupation : '',
                        careProvider: user.contactInfo.careProvider !== undefined ? user.contactInfo.careProvider : ''
                    }}
                    validationSchema={contactSchema}
                >
                    {(contactProps) => {
                        var isSubmitReady = false
                        if (contactProps.dirty && !contactProps.errors) {
                            isSubmitReady = true
                        } else {
                            isSubmitReady = false
                        }
                        return (
                            <Form className="contact-form">
                                <div className="input-container input-100">
                                    <p 
                                        className="contact-label"
                                        style={{ borderBottomColor: colors.dark, color: colors.dark}}
                                    >Fullname</p>
                                    <Field
                                        name="fullname"
                                        id="fullname"
                                        className="input"
                                    />
                                    <p className="input-error">{contactProps.touched.fullname && contactProps.errors.fullname}</p>
                                </div>

                                <div className="input-container input-100">
                                    <p 
                                        className="contact-label"
                                        style={{ borderBottomColor: colors.dark, color: colors.dark}}
                                    >Fullname</p>
                                    <Field
                                        name="fullname"
                                        id="fullname"
                                        className="input"
                                    />
                                    <p className="input-error">{contactProps.touched.fullname && contactProps.errors.fullname}</p>
                                </div>

                                <SubmitButton
                                    formProps={contactProps}
                                    isSubmitReady={isSubmitReady}
                                    isSubmit={submit.contact.isSubmit}
                                    submitAction={saveContact}
                                    text={isSubmitReady ? "SAVE AND CONTINUE" : "ENTER INFORMATION"}
                                    submitName="medications"
                                />

                                {(submit.contact.errorMessage.length !== 0) 
                                    ? <p className="submit-error">{submit.contact.errorMessage}</p> 
                                    : null 
                                }

                            </Form>
                        )
                    }}
                </Formik>
            </section>
        </UseAppContainer>
    )
}

export default Contact