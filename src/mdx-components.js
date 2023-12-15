import { Image } from './components/bootstrap/bootstrap'
import styles from './app/[lang]/page.module.css'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...components,
    h1: ({ children }) => (
      <h1 className={`${styles.heading1Mdx} ${styles.mdx}`}>{children}</h1>
    ),
    img: ({ src, alt, ...rest }) => (
      <Image src={src} alt={alt ?? 'image'} {...rest} fluid />
    ),
    // ul: ({ children }) => <ul className={`${styles.mdxUl}`}>{children}</ul>,
    hr: () => <hr className={styles.mdxHr}></hr>,
  }
}
