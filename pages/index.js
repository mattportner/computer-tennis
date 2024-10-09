import Link from "next/link"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Section from "@/components/section"
import { Arena, ArrowExternal } from "../components/svg"
import Post from "@/components/post"
import { Feature } from "../components/post"
import Project from "@/components/project"
import { MultiProject, ExternalProject } from "../components/project"
import Icon from "@/components/icon"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

import magic from "../public/images/previews/magic.jpg"
import prixview from "../public/images/previews/prixview.jpg"
import royal from "../public/images/previews/royal.jpg"
import stems from "../public/images/previews/stems.jpg"
import compton from "../public/images/previews/compton.jpg"
import wavedash from "../public/images/previews/wavedash.jpg"
import id3 from "../public/images/previews/id3.jpg"

const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <>
      <Layout>
        <SEO />
        <div className="grid max-w-full gap-16 auto-rows-auto">
          
          <div>
            <p className="mt-4">
             Computer Tennis is a digital product studio based in Los Angeles.
             </p>
             <p className="mt-4">
             We'll design and develop great software for your business so that you can focus on the other stuff.</p>
             <p className="mt-4">
             Our team has over fifteen years of experience designing apps and websites at companies like Google, Snap, BuzzFeed, and GoFundMe.</p>
             <p className="mt-4">
            If you'd like to work with us, please send us an email!</p>
          </div>
          <Section title="Recent Work">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4">
            
            <div className="min-w-full">

            <Icon src={magic} link="/posts/magic" anchor="magic"/>
            <Icon src={prixview} link="/posts/prixview" anchor="prixview"/>
            <Icon src={royal} link="/posts/royal" anchor="royal"/>
            <Icon src={stems} link="/posts/stems" anchor="stems"/>
            <Icon src={compton} link="/posts/compton-pledge" anchor="compton-pledge"/>
            <Icon src={wavedash} link="/posts/wavedash" anchor="wavedash"/>
            <Icon src={id3} link="/posts/id3fm" anchor="id3-fm"/>
            </div>
            
           
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
