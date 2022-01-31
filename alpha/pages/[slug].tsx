/**
 * Page component (dynamic).
 *
 * @remarks
 * Generates all top level pages (not inculding index).
 *
 * @param data - all props fetched with `pageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `pathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { pagePathQuery, pageQuery } from "lib/queries"
import Layout from "components/layout"
import PageTemplate from "components/pageTemplate"
import Artists from "components/artists"
import ErrorTemplate from "components/errorTemplate"
import Events from "components/events"
import Exhibitions from "components/exhibitions"
import News from "components/news"
import Videos from "components/videos"
import Visit from "components/visit"
import { Image, PageData } from "lib/interfaces"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(pagePathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(pageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const PagesTemplage = ({ data }: { data: PageData }) => {
  const router = useRouter()
  const { locale } = router
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const {
    artists,
    currentExhibitions,
    futureExhibitions,
    heroArtist,
    menu,
    page,
    pastEvents,
    pastExhibitions,
    posts,
    recurringEvents,
    sidebar,
    site,
    socialLinks,
    spaces,
    upcomingEvents,
    videos
  } = data
  const template = page.template[0]
  let exhibitionHero: Image = data.pastExhibitions[0].mainImage
  if (futureExhibitions[0]) exhibitionHero = futureExhibitions[0].mainImage
  if (currentExhibitions[0]) exhibitionHero = currentExhibitions[0].mainImage
  let heroImage: Image = site.seoImage
  if (template === "artists") heroImage = heroArtist.mainImage
  if (template === "events") heroImage = upcomingEvents[0].mainImage
  if (template === "exhibitions") heroImage = exhibitionHero
  if (template === "news") heroImage = posts[0].image
  if (template === "page") heroImage = page.mainImage
  if (template === "visit-us") heroImage = page.mainImage
  if (template === "videos") heroImage = videos[0].mainImage
  return (
    <Layout
      heroImage={heroImage}
      menu={menu}
      site={site}
      socialLinks={socialLinks}
      title={locale === "cy" && page.title.cy ? page.title.cy : page.title.en}
    >
      {template === "page" && (
        <PageTemplate
          page={page}
          events={sidebar.events}
          exhibitions={sidebar.exhibitions}
          posts={sidebar.posts}
        />
      )}
      {template === "visit-us" && (
        <Visit page={page} spaces={spaces} />
      )}
      {template === "artists" && (
        <Artists page={page} artists={artists} />
      )}
      {template === "events" && (
        <Events
          page={page}
          upcomingEvents={upcomingEvents}
          pastEvents={pastEvents}
          recurringEvents={recurringEvents}
        />
      )}
      {template === "exhibitions" && (
        <Exhibitions
          page={page}
          currentExhibitions={currentExhibitions}
          futureExhibitions={futureExhibitions}
          pastExhibitions={pastExhibitions}
        />
      )}
      {template === "news" && (
        <News page={page} posts={posts} />
      )}
      {template === "videos" && (
        <Videos page={page} videos={videos} />
      )}
    </Layout>
  )
}
export default PagesTemplage
