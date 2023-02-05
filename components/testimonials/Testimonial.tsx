import clsx from 'clsx'
import { MSImage } from '../Image'

type Props = {
  className: string
  isClapped: boolean
  isQuotation: boolean
  isVerifiedGraduate: boolean
  subtitle: string
  title: string
  userImageUrl: string
  userName: string
}

export const Testimonial = ({
  className,
  isClapped,
  isQuotation,
  isVerifiedGraduate,
  subtitle,
  title,
  userImageUrl,
  userName,
}: Props) => {
  return (
    <div className={clsx('relative rounded-xl p-10', className)}>
      {/* <!-- Quotes Image --> */}
      {isQuotation && (
        <MSImage
          src="/images/bg-pattern-quotation.svg"
          className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
        />
      )}

      {/* <!-- Box Header --> */}
      <div className="z-10 flex space-x-4">
        <MSImage
          src={userImageUrl}
          className="h-10 w-10 rounded-full ring-2 ring-purple-300"
        />
        <div className="text-sm">
          <h4 className="opacity-90">{userName}</h4>
          <p className="opacity-50">
            {isVerifiedGraduate ? 'Verified Graduate' : 'Not verified graduate'}
          </p>
        </div>
      </div>

      {/* <!-- Large Text --> */}
      <p className="relative z-10 mt-6 text-xl">{title}</p>

      {/* <!-- Small Text --> */}
      <p className={clsx('mt-6 opacity-50', isClapped ? 'line-clamp-5' : '')}>
        &quot;{subtitle}&quot;
      </p>
    </div>
  )
}
