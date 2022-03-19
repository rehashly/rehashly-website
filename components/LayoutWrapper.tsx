import { Footer } from '@/components/Footer'
import { InvertibleImage } from '@/components/InvertibleImage'
import { Link } from '@/components/Link'
import { MobileNav } from '@/components/MobileNav'
import { SectionContainer } from '@/components/SectionContainer'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { headerNavLinks } from '@/data/headerNavLinks'
import { siteMetadata } from '@/data/siteMetadata'
import { ReactElement, ReactNode } from 'react'

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps): ReactElement<LayoutWrapperProps> {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <InvertibleImage
                  className="mr-2"
                  lightSrc="/static/images/logo-light.svg"
                  darkSrc="/static/images/logo-dark.svg"
                  width={150}
                  height={70}
                />
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="mr-2 hidden sm:mr-0 sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
