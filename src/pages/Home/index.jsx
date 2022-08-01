import Houses from "../../components/Houses"
import Slogan from "../../components/Slogan"
import Header from "../../components/Header"
import "../../styles/PageContainer.css"
import "../../styles/Home.css"

function Home() {
  return (
    <div className='page_container'>
      <Header />
      <main id='main_home' className='main_home'>
        <Slogan isHome={true} />
        <Houses />
      </main>
    </div>
  )
}
export default Home
