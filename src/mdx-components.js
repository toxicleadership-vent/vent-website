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
      <h1 style={{ fontSize: '100px', border: '1px solid red' }}>{children}</h1>
    ),
  }
}
