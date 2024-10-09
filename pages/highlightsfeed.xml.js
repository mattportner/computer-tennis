const RSS = require("rss")

const createHighlightsFeed = articles => {
  const highlightsFeed = new RSS({
  })

  articles.results.forEach(article => {
    const numHighlights = article.num_highlights
    const source = article.source_url
    const sourceAuthor = article.author

    var highlightText = ""

    if (numHighlights == 1) {
      highlightText = "highlight"
    } else {
      highlightText = "highlights"
    }

    const articleID = article.id

    const description = `<a href="https://nelson.co/highlights#${articleID}"> <strong>Read ${numHighlights} ${highlightText} →</strong> <br></br><br></br> <a href="${source}">Original article </a> from ${sourceAuthor}`

    if (numHighlights != 0) {
      highlightsFeed.item({
        title: article.title,
        description: description,
        date: new Date(article.last_highlight_at),
        author: "Matt Portner",
        url: `https://nelson.co/highlights#${articleID}`,
      })
    }
  })

  const highlightsRss = highlightsFeed.xml({ indent: true })
  return highlightsRss
}

const HighlightsFeed = () => {}

export async function getServerSideProps({ res }) {
  const headers = {
    headers: { Authorization: `TOKEN ${process.env.READWISE_TOKEN}` },
  }

  const articlesResponse = await fetch(
    `https://readwise.io/api/v2/books/?category=articles`,
    headers
  )

  const articles = await articlesResponse.json()

  res.setHeader("Content-Type", "text/xml")
  res.setHeader(
    "Cache-Control",
    `s-maxage=${60 * 60 * 2}, stale-while-revalidate`
  )
  res.write(createHighlightsFeed(articles))
  res.end()

  return {
    props: {},
  }
}

export default HighlightsFeed
