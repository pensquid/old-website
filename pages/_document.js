import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset='utf-8' />

          <meta name='description' content='We&apos;re a Discord programming community that welcomes people of all skillsets. We&apos;re devoted to being as supportive and friendly as we can and offering help and resources.' />
          <meta name='image' content='https://pwnsquad.net/static/logo.png' />

          <meta itemprop='description' content='We&apos;re a Discord programming community that welcomes people of all skillsets. We&apos;re devoted to being as supportive and friendly as we can and offering help and resources.' />
          <meta itemprop='image' content='https://pwnsquad.net/static/logo.png' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:description' content='We&apos;re a Discord programming community that welcomes people of all skillsets. We&apos;re devoted to being as supportive and friendly as we can and offering help and resources.' />
          <meta name='twitter:site' content='@kognise' />
          <meta name='twitter:image:src' content='https://pwnsquad.net/static/logo.png' />

          <meta name='og:description' content='We&apos;re a Discord programming community that welcomes people of all skillsets. We&apos;re devoted to being as supportive and friendly as we can and offering help and resources.' />
          <meta name='og:image' content='https://pwnsquad.net/static/logo.png' />
          <meta name='og:image:width' content='500' />
          <meta name='og:image:height' content='500' />
          <meta name='og:url' content='https://pwnsquad.net/' />
          <meta name='og:site_name' content='PwnSquad' />
          <meta name='og:type' content='website' />

          <link href='https://fonts.googleapis.com/css?family=Overpass+Mono:400,700,700i&display=swap' rel='stylesheet' />
          <link href='/static/favicon.ico' rel='shortcut icon' />
          <link href='/static/favicon.ico' rel='icon' />

          <style>{`
            body {
              margin: 0;
              font-family: Overpass Mono, monospace;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
