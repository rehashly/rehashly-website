import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath: string) => {
  return statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) => join(prefix, extraPath)

export function getAllFilesRecursively(folder: string): string[] {
  return pipe(readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)
}
