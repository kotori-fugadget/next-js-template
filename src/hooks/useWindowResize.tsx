'use client'
import { useCallback, useEffect, useState } from 'react'

export const useWindowResize = () => {
  const w = (typeof window !=='undefined')?window.innerWidth:1000
  const [kind, setKind] = useState("pc")
  const [widthSize, setWidthSize] = useState<Number>(w)
  

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setKind("pc")
    } else if (window.innerWidth>=768 && window.innerWidth < 1280 ) {
      setKind("tb")
    } else {
      setKind("mobile")
    }
    resizeEvent()
    return () => window.removeEventListener('resize', resizeEvent);
  }, [])

  const resizeEvent = useCallback(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280) {
        setKind("pc")
      } else if (window.innerWidth>=768 && window.innerWidth < 1280 ) {
        setKind("tb")
      } else {
        setKind("mobile")
      }
      setWidthSize(window.innerWidth)
    })
  },[])

  return [ kind, widthSize ];
}