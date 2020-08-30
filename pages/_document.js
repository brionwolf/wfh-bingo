import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>WFH Bingo</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="apple-touch-icon" href="/public/touch-icon-128.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/public/touch-icon-256.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/public/touch-icon-512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
