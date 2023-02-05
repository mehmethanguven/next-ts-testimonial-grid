import { testimonials } from '@/data'
import { Testimonial } from './Testimonial'

export const Testimonias = () => {
  return (
    <div className="continer mx-auto max-w-7xl p-2 md:p-10">
      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-4 md:grid-rows-2">
        {(testimonials || []).map((item, id) => (
          <Testimonial key={id} {...item} />
        ))}
      </div>
    </div>
  )
}
