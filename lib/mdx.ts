import { remarkCodeTitles } from '@/lib/remark-code-title'
import { remarkExtractFrontmatter } from '@/lib/remark-extract-frontmatter'
import { remarkImgToJsx } from '@/lib/remark-img-to-jsx'
import { remarkTocHeadings } from '@/lib/remark-toc-headings'
import { getAllFilesRecursively } from '@/lib/utils/files'
import { existsSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import { extname, join } from 'path'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCitation from 'rehype-citation'
import rehypeKatex from 'rehype-katex'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrismPlus from 'rehype-prism-plus'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import remarkFootnotes from 'remark-footnotes'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'

const root = process.cwd()

export function getFiles(type: 'blog' | 'authors') {
  const prefixPaths = join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(type: 'authors' | 'blog', slug: string | string[]) {
  const mdxPath = join(root, 'data', type, `${slug}.mdx`)
  const mdPath = join(root, 'data', type, `${slug}.md`)
  const source = existsSync(mdxPath) ? readFileSync(mdxPath, 'utf8') : readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  const toc: Toc = []

  // Parsing frontmatter here to pass it in as options to rehype plugin
  const { data: frontmatter } = matter(source)
  const { code } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  }
}

export async function getAllFilesFrontMatter(folder: 'blog') {
  const prefixPaths = join(root, 'data', folder)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter: PostFrontMatter[] = []

  files.forEach((file: string) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (extname(fileName) !== '.md' && extname(fileName) !== '.mdx') {
      return
    }
    const source = readFileSync(file, 'utf8')
    const matterFile = matter(source)
    const frontmatter = matterFile.data as AuthorFrontMatter | PostFrontMatter
    if ('draft' in frontmatter && frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
