import Head from 'next/head'
import { Inter } from '@next/font/google'
import Title from '@/components/Title';
import BioCard from '@/components/BioCard';
import Projects from '@/components/Projects';
import SkillsBox from '@/components/SkillsBox';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const stack = {
    ruby: { name: 'Ruby', img: "/images/icons/ruby-plain-wordmark.svg" },
    rails: { name: 'Ruby on Rails', img: "/images/icons/rails-plain-wordmark.svg" },
    javascript: { name: 'JavaScript', img: "/images/icons/javascript-original.svg" },
    react: { name: 'React', img: "/images/icons/react-original-wordmark.svg" },
    express: { name: 'Express.js', img: "/images/icons/expressjs-icon.svg" },
    postgres: { name: 'PostgreSQL', img: "/images/icons/postgresql-original-wordmark.svg" },
    redux: { name: 'Redux', img: "/images/icons/redux.svg" },
    sass: { name: 'Sass', img: "/images/icons/sass-original.svg" },
    bootstrap: { name: 'Bootstrap', img: "/images/icons/bootstrap-original-wordmark.svg" },
    figma: { name: 'Figma', img: "/images/icons/figma-original.svg" },
    html: { name: 'HTML5', img: "/images/icons/html5-original-wordmark.svg" },
    mongo: { name: 'MongoDB', img: "/images/icons/mongodb-icon.svg" },
    node: { name: 'Node.js', img: "/images/icons/nodejs-original.svg" },
    npm: { name: 'NPM', img: "/images/icons/npm-original-wordmark.svg" },
    yarn: { name: 'Yarn', img: "/images/icons/yarn-original-wordmark.svg" },
    webpack: { name: 'Webpack', img: "/images/icons/webpack-icon.svg" },
    nextjs: { name: 'NextJS', img: '/images/icons/next.svg' },
    typescript: { name: 'TypeScript', img: '/images/icons/typescript.svg' },
    electron: { name: 'electron', img: '/images/icons/electron.svg' }
  };
  return (
    <>
      <Head>
        <title>Mike Bennett Full Stack Developer</title>
        <meta name="description" content="Mike Bennett Full Stack Developer's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
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
