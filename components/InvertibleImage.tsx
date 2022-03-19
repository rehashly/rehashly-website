import { Image } from '@/components/Image'
import { ImageProps } from 'next/image'

type InvertibleImageProps = Omit<ImageProps, 'src'> & { lightSrc: string; darkSrc: string }

export function InvertibleImage(props: InvertibleImageProps) {
  const { lightSrc, darkSrc, alt, ...rest } = props

  return (
    <div>
      <div className="dark:hidden">
        <Image alt={alt} src={lightSrc} {...rest} />
      </div>
      <div className="hidden dark:block">
        <Image alt={alt} src={darkSrc} {...rest} />
      </div>
    </div>
  )
}
