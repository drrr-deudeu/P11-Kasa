import Houses from '../../components/Houses'
import Slogan from '../../components/Slogan'
import '../../styles/Home.css'

function Home() {
    return(<main><Slogan isHome={true}/><Houses/></main>)
}
export default Home