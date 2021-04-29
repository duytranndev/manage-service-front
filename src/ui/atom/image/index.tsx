import React, { ImgHTMLAttributes, useRef } from 'react'

const Image = (props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  const ref = useRef<HTMLImageElement>(null)
  const { className, src, width, height, alt, ...imgProps } = props
  return <img ref={ref} src={src} className={className} width={width} height={height} alt={alt} {...imgProps} />
}
export default Image
