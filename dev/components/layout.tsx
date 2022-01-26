import { ReactNode } from "react"
import Head from "next/head"
import {
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "@/generated/schema"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Scrollup from "@/components/scrollup"
import styles from "@/components/layout.module.scss"
// import utilStyles from "@/styles/utils.module.scss"

const Layout = ({ children, heroImage }: {
  children: ReactNode
  heroImage: {
    _type: "Image"
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
    caption: string
  }
}) => {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Header
        heroImage={heroImage}
      />
      <main>
        {children}
        <Scrollup />
      </main>

      <Footer />
    </div>
  )
}
export default Layout
