import Head from "next/head"

export default function SEO({
  title = "Matt Portner",
  og = "og.png",
  description = "Matt Portner is a software designer based in Los Angeles.",
}) {
  const siteTitle = "Matt Portner"

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Matt Portner" />
      <meta name="theme-color" content="#FAFAFA" media="(prefers-color-scheme: light)"/>
      <meta name="theme-color" content="#171B26" media="(prefers-color-scheme: dark)"/>


        <link rel="apple-touch-icon" sizes="120x120" href="/images/meta/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/meta/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/meta/favicon-16x16.png"/>
        <link rel="manifest" href="/images/meta/site.webmanifest"/>
        <link rel="shortcut icon" href="/images/meta/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/images/meta/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>


    </Head>
  )
}
