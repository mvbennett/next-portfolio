import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import App from '../components/App';
import Title from '@/components/Title';
import BioCard from '@/components/BioCard';
import Projects from '@/components/Projects';
import SkillsBox from '@/components/SkillsBox';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const stack = {
    ruby: { Ruby: "/images/icons/ruby-plain-wordmark.svg" },
    rails: { 'Ruby on Rails': "/images/icons/rails-plain-wordmark.svg" },
    javascript: { JavaScript: "/images/icons/javascript-original.svg" },
    react: { React: "/images/icons/react-original-wordmark.svg" },
    express: { 'Express.js': "/images/icons/expressjs-icon.svg" },
    postgres: { PostgreSQL: "/images/icons/postgresql-original-wordmark.svg" },
    redux: { Redux: "/images/icons/redux.svg" },
    sass: { Sass: "/images/icons/sass-original.svg" },
    bootstrap: { Bootstrap: "/images/icons/bootstrap-original-wordmark.svg" },
    figma: { Figma: "/images/icons/figma-original.svg" },
    html: { HTML5: "/images/icons/html5-original-wordmark.svg" },
    mongo: { MongoDB: "/images/icons/mongodb-icon.svg" },
    node: { 'Node.js': "/images/icons/nodejs-original.svg" },
    npm: { NPM: "/images/icons/npm-original-wordmark.svg" },
    yarn: { Yarn: "/images/icons/yarn-original-wordmark.svg" },
    webpack: { Webpack: "/images/icons/webpack-icon.svg" }
  };
  return (
    <>
      <Head>
        <title>Mike Bennett Full Stack Developer</title>
        <meta name="description" content="Mike Bennett Full Stack Developer's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
      {/* <App /> */}
      <Title />
      <div className="container">
        <BioCard />
        <Projects stack={stack} />
        <SkillsBox stack={stack} />
      </div>
      <Footer />
    </>
  )
}
