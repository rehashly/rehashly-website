import { Link } from '@/components/Link'

export function TextLink({ ...rest }) {
  return (
    <Link
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      {...rest}
    />
  )
}
