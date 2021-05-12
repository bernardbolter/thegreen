import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useScrollbarSize } from 'react-scrollbar-size'
import { useWindowSize } from '../hooks/useWindowSize'

///////////////////////////////////////
//   SCREEN WIDTHS
//   xs = 320 width
//   s = 375 width
//   m = 414 width
//   l = 480 width
//   xl = 768 width
//
//   for each screen the height that the screen must scroll,
//   shoulf be entered at these breakpoints in the component

const UseAppContainer = ({ children, xs, s, m , l, xl }) => {
    const { width, height } = useWindowSize()
    const scrollbar = useScrollbarSize()

    const colors = useSelector(state => state.colors)

    const [appWidth, setAppWidth] = useState(0)
    const [appHeight, setAppHeight] = useState(0)
    const [smallHeight, setSmallHeight] = useState(false)
    const [largeWidth, setLargeWidth] = useState(false)

    useEffect(() => {
        if (width > 768) {
            if (height < xl) {
                setAppHeight(xl)
                setSmallHeight(true)
                setLargeWidth(true)
                setAppWidth(768)
            } else {
                setAppHeight(height)
                setSmallHeight(false)
                setLargeWidth(true)
                setAppWidth(768)

            }
        }

        if (width > 479 && width < 769) {
            if (height < l) {
                setAppHeight(l)
                setSmallHeight(true)
                setAppWidth(width - scrollbar.width)
                setLargeWidth(false)
            } else {
                setAppHeight(height)
                setSmallHeight(false)
                setAppWidth(width)
                setLargeWidth(false)
            }
        }

        if (width > 413 && width < 480) {
            if (height < m) {
                setAppHeight(m)
                setSmallHeight(true)
                setAppWidth(width - scrollbar.width)
                setLargeWidth(false)
            } else {
                setAppHeight(height)
                setSmallHeight(false)
                setAppWidth(width)
                setLargeWidth(false)
            }
        }

        if (width > 374 && width < 414) {
            if (height < s) {
                setAppHeight(s)
                setSmallHeight(true)
                setAppWidth(width - scrollbar.width)
                setLargeWidth(false)
            } else {
                setAppHeight(height)
                setSmallHeight(false)
                setAppWidth(width)
                setLargeWidth(false)
            }
        }

        if (width < 375 ) {
            console.log('xs')
            if (height < xs) {
                setAppHeight(xs)
                setSmallHeight(true)
                setAppWidth(width - scrollbar.width)
                setLargeWidth(false)
            } else {
                setAppHeight(height)
                setSmallHeight(false)
                setAppWidth(width)
                setLargeWidth(false)
            }
        }
    }, [width, height, xs, s, m ,l, xl, scrollbar.width])

    return (
        <section 
            className="app-container" 
            style={{ 
                width: appWidth, 
                height: appHeight,
                position: smallHeight ? 'relative' : 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                left: largeWidth ? (width - 768) / 2 : 'auto',
                borderRight: largeWidth ? '1px solid rgba(0,0,0,.1)' : 'none',
                borderLeft: largeWidth ? '1px solid rgba(0,0,0,.1)' : 'none',
                background: colors.light
            }}
        >
            { children }
        </section>
    )
}

export default UseAppContainer