import { Link } from '@/components/Link'
import { SocialIcon } from '@/components/social-icons'
import { siteMetadata } from '@/data/siteMetadata'

export function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-5 flex space-x-4">
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.legalName}</Link>
        </div>
        <div className="mb-4 flex flex-col items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>302 Washington St #150-4568</div>
          <div>San Diego, CA 92103</div>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="/privacy">Privacy Policy</Link> ⦁{' '}
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
