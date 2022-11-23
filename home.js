import React from 'react'

import { Helmet } from 'react-helmet'

import CategoryCard from '../components/category-card'
import SectionHeading from '../components/section-heading'
import BlogPostCard from '../components/blog-post-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>magnum</title>
        <meta property="og:title" content="magnum" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-container01"></div>
            <a href="#Portfolio" className="home-text navbar-link">
              PORTFOLIO
            </a>
            <div className="home-middle">
              <div className="home-left"></div>
              <span className="home-logo-center navbar-logo-title">
                magnum.eth
              </span>
              <div className="home-right">
                <a href="#About" className="home-text01 navbar-link">
                  ABOUT
                </a>
              </div>
            </div>
            <a href="#Contact" className="home-text02 navbar-link">
              CONTACT
            </a>
            <a href="#Blog" className="home-text03 navbar-link">
              BLOG
            </a>
            <div className="home-icons">
              <a
                href="https://twitter.com/MagnumEth"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <img
                  alt="iconsbxscart3271299"
                  src="/playground_assets/twitter-round-icon.svg"
                  className="home-image"
                />
              </a>
              <a
                href="https://medium.com/@1289eth"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <img
                  alt="iconsbxsheartcircle3271300"
                  src="/playground_assets/medium_logo_icon_189223.svg"
                  className="home-image1"
                />
              </a>
              <a
                href="mailto:1289eth@protonmail.com?subject=I want to buy your domain!"
                className="home-link2"
              >
                <img
                  alt="AccountCircle3271301"
                  src="/playground_assets/mail-icon-white-on-black.svg"
                  className="home-image2"
                />
              </a>
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container02">
                <span className="home-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <span className="home-text04">SHOP</span>
                <span className="home-text05">LOOKBOOK</span>
                <span className="home-text06">SPECIAL</span>
                <span className="home-text07">ABOUT</span>
                <span className="home-text08">BLOG</span>
                <span className="home-text09">CONTACT</span>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <img
              alt="pastedImage"
              src="/playground_assets/blue-orange-color-flames-h31wqyb940cwrdc0-1100w.gif"
              className="home-pasted-image"
            />
          </div>
        </div>
        <div className="home-categories section-container column">
          <div className="home-max-width1 max-width-container">
            <div className="home-container03">
              <div className="home-section-heading"></div>
            </div>
            <div className="home-cards-container">
              <CategoryCard
                name="dentista.eth"
                category_img="/playground_assets/unnamed-1500w.png"
              ></CategoryCard>
              <CategoryCard
                name="sagres.eth"
                category_img="/playground_assets/unnamed%20%5B2%5D-1500w.png"
              ></CategoryCard>
              <CategoryCard
                name="arquitecto.eth"
                category_img="/playground_assets/unnamed%20%5B1%5D-1500w.png"
              ></CategoryCard>
              <CategoryCard
                name="golfe.eth"
                category_img="/playground_assets/image.svg"
              ></CategoryCard>
              <CategoryCard
                name="suministros.eth"
                category_img="/playground_assets/unnamed%20%5B3%5D-1500w.png"
              ></CategoryCard>
              <CategoryCard
                name="magnum.eth"
                category_img="/playground_assets/image%20%5B1%5D.svg"
              ></CategoryCard>
              <CategoryCard
                name="salamanca.eth"
                category_img="/playground_assets/54c352ce7f1d928713e0cdd5e28f450a.svg"
              ></CategoryCard>
            </div>
          </div>
          <div className="home-banner"></div>
          <div id="About">
            <h1 className="home-text10 Heading-2">ABOUT</h1>
            <div className="home-container05 max-width-container">
              <div className="home-container06">
                <span className="home-text11">
                  <br></br>
                  <span>ENS CONSULTANT AND INVESTOR.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Use ‘Portfolio’ tab to browse through my extensive list of
                    domains and click ‘Contact’ get in touch with me for any
                    additional information or queries.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <img
                  alt="M3271427"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                  className="home-svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-trending-items section-container column">
          <div id="Portfolio">
            <span className="home-text22">Portfolio</span>
            <img
              alt="pastedImage"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/53c45c19-7434-4f82-9610-03a46aeb6880/c55acbb0-d3a5-4fe3-9ba1-4d6c560580c3?org_if_sml=133630"
            />
          </div>
        </div>
        <div className="home-full-width-banner section-container">
          <div className="home-left1">
            <div className="home-content">
              <span className="home-text23">Marketplaces</span>
              <span className="home-text24">
                Find our collection in the following Marketplaces
              </span>
            </div>
            <a
              href="https://ens.vision/0x/magnum"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <div className="home-btn button">
                <span className="home-text25">ENS.Vision</span>
              </div>
            </a>
            <a
              href="https://opensea.com/magnum3"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-btn1 button">
                <span className="home-text26">Opensea</span>
              </div>
            </a>
          </div>
          <img
            alt="Rectangle13271410"
            src="/playground_assets/2ec67247-0fa7-44d6-b968-be020a98b05c-1500w.webp"
            className="home-image3"
          />
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading
              heading="Our blog"
              subtitle="Read the latest news and articles"
              rootClassName="section-heading-root-class-name"
            ></SectionHeading>
            <div id="Blog" className="home-container08">
              <div className="home-container09">
                <BlogPostCard
                  link_to="https://www.medium.com/@1289eth"
                  new_prop="Medium Posts"
                  image_src="/playground_assets/sdasd-1500w.png"
                  description="My latest posts on everything ENS"
                  rootClassName="blog-post-card-root-class-name"
                ></BlogPostCard>
                <BlogPostCard
                  title="Unique natural color combinations"
                  link_to="https://forum.ensacademy.io/u/1289.eth/"
                  new_prop="ENS Academy"
                  image_src="/playground_assets/ens%20academy-1500w.png"
                  description="Forum dedicated to ENS"
                ></BlogPostCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container10">
              <div id="Contact" className="home-container11">
                <h3 className="home-text27 Heading-3">magnum.eth</h3>
                <span className="home-text28">1289eth@protonmail.com</span>
                <span className="home-text29">
                  <span>@MagnumEth</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <a
        href="https://twitter.com/MagnumEth"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link5"
      >
        <img
          alt="image"
          src="/playground_assets/twitter-round-icon.svg"
          className="home-image4"
        />
      </a>
    </div>
  )
}

export default Home
