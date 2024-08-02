import React from 'react'
import { Title, TitleSm } from '@/components/common/Title'


function Captech2023() {
  return (
    <div className='container'>
        <div>
              <section className="agency bg-top">
        <div className="container">
          <TitleSm title="" />
          <TitleSm title="#CapTech2023 Summit" className="title-bg" />
        </div>

        <video autoPlay muted loop className="video-background">
          <source
            src={
              "/images/c2023.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" />
          </div>
        </div>
      </section>

      <section className="agency bg-top capMain">
        <div className="capContainer">
          <Title title="What is #CapTech2023" />


                <div className='capText'>
                    <p>
                    Sydney Investors, Professionals and Business Networking Group (SIPBN
                    Inc) presents a monumental Global Summit at Sydney’s iconic
                    International Convention Centre connecting movers and shakers from
                    the business world.
                    <br /> #CapTech2023 aims to place Australia at the centre of
                    innovation and entrepreneurship by connecting and bringing together
                    the brightest minds, industry leaders, ventures, technology and
                    capital from Australia and globally.
                </p>

                <Title title="Sectors" />
                <p>
                    Education, Healthcare, Real Estate, Critical Minerals, Clean Energy,
                    AI, Financial Services
                </p>
                <br />
                <Title title="Who Will Attend" />
                <p>
                    Investors, finance houses, private equity, banks, start ups, venture
                    capital, media, Government bodies, professional bodies, incubation
                    and accelerators and tech firms.
                </p>

                <br />
                <Title title="Global Pitching Sessions" />
                <p>
                    Witness a global pitching session with entrants from India, Hong
                    Kong, and Australia all vying for an opportunity to secure funding
                    from prominent global investors.
                </p>

                <Title title="Activities" />
                <p>
                    Key note session, Panel discussion, Industry sessions, Global
                    pitching session, Post event drinks, Private Dinner(invitation only)
                </p>
                </div>
        </div>
      </section>
      <br />
      <section className="gallery">
        <div className="container">
          <Title title="Gallery" />
          <br />
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c1.jpg"
                alt="Gallery item 1"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c2.jpg"
                alt="Gallery item 2"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c3.jpg"
                alt="Gallery item 3"
              />
            </div>

            <div className="gallery-item">
              <img
                className="capImg"
               src="/images/c4.jpg"
                alt="Gallery item 1"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c5.jpg"
                alt="Gallery item 2"
              />
            </div>

            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c6.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c7.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c8.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="/images/c9.jpg"
                alt="Gallery item 3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Captech2023
