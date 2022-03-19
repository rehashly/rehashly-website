import { slug } from 'github-slugger'

export function kebabCase(str: string) {
  return slug(str)
}
