import Image from 'next/image'
import clsx from 'clsx'

type Props = {
  className?: string
  src: string
  title?: string
}
export const MSImage = ({ className, src, title = '' }: Props) => {
  return (
    <Image
      src={src}
      alt={title}
      width={0}
      height={0}
      sizes="100vh"
      className={clsx('w-auto', className)}
    />
  )
}
