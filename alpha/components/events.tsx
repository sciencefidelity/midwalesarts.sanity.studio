import { FC } from "react"
import { Layout } from "components/layout"
import {
  Label,
  Navigation,
  Organisation,
  Page,
  PageContext,
  Settings
} from "lib/interfaces"

interface Props {
  labels:Label[]
  navigation: Navigation[]
  organisation: Organisation
  page: Page
  pageContext: PageContext
  settings: Settings
}

export const Events: FC<Props> = ({
  labels,
  navigation,
  organisation,
  page,
  pageContext,
  settings
}) => {
  return (
    <Layout
      caption={page.events[0].title}
      heroImage={page.events[0].mainImage}
      labels={labels}
      navigation={navigation}
      organisation={organisation}
      pageContext={pageContext}
      settings={settings}
    >
      <div>{page.title}</div>
    </Layout>
  )
}
