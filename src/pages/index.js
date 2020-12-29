
import tw from "twin.macro"
import React from "react"

import "@fontsource/mountains-of-christmas"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl lg:w-1/2 w-full py-12
`

const Heading = tw.h1`
  text-2xl text-black
`

const Text = tw.p`
  text-xl text-black
`


export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="God jul!" />
        <Main>
          <Heading>GOD JUL HANNA<span role="img">&#127876;</span> <br/>Önskar Svante<br/></Heading>
          <Text className="pt-12 text-left">
          <br/>Ära vare gud i höjden
          <br/>denna har min syster gjort i slöjden<br/>
          </Text>
        </Main>
      </Wrapper>
    </Layout>
  )
}
