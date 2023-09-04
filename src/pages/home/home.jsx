import Movie from "../../components/movie/movie"
import Modal from "../../components/movie/modal/modal"
import Navabr from "../../components/navbar/navbar"
import Slider from "../../components/movie/slider/slider"


function Home() {
    return (
        <>
            
            <Navabr />
            <Slider />
            <Movie />
            <Modal />
        </>
    )
}
export default Home