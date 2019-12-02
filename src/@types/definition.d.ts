declare module '*.png|jpg|jpeg' {
      export const value: string
}

declare module '*.less' {
      const less: any

      export default less
}