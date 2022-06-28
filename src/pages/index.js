import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../components/Layout"

// markup
const IndexPage = () => {
  return (

      <Layout pageTitle="Home Page">
          <h1>홈 페이지 임니다.</h1>

          <p>
          시험페이지 생산 중입니다.
          </p>
          <StaticImage
          alt = "Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src = "https://picsum.photos/seed/picsum/200/300"
          />
      </Layout>

  );
};

export default IndexPage
