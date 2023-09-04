import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./movie_inner.scss"
import Clock from '../../assets/svg/clock.svg'
import Data from '../../assets/svg/data.svg'
import Player from '../../assets/svg/player.svg'
import Star from '../../assets/svg/star.svg'
import Steam from '../../assets/svg/steam.svg'
import Strelka from '../../assets/svg/strelka.svg'
import Loader from "../loader/loader"
import Modal from '../movie/modal/modal'
import Error from '../error/error'



function MovieInner() {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const { movieId } = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)


    useEffect(() => {
        fetch(`https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films/${movieId}`)
            .then((res) => res?.json())
            .then(data => setData(data))
            .finally(() => {
                setLoading(false)
            })
            .catch(() => {
                setError(true)
            })
    }, [])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1><Error /></h1>
    }

    console.log(data?.img);


    return (
        <div className="container">
            <div className="movie_inner" data-img={data?.img} style={{ backgroundImage: `url(${data?.img})` }}>
                <button className="home-page" onClick={() => {
                    navigate('/')
                }}><img src={Strelka} alt="" /><span>back</span>

                </button>
                <img className="main-img" src={data?.img} alt="" />

                <div className="elements">
                    <h4>NEW EPISODES</h4>
                    <h1>

                        <div>{data?.name},</div>
                    </h1>

                    <div className="inner-about">
                        <button className="inner-movie">Movie</button>
                        <button className="inner-hd">HD</button>
                        <p>
                            Action, Drama, Adventure, Science fiction
                        </p>
                        <div className="inner-clock"><img src={Clock} alt="" />{`${data.time} min`}</div>
                        <div className="inner-data"><img src={Data} alt="" />{data?.year}</div>

                    </div>


                    <div className="inner-share">

                        <div className="share">
                            <img className="inner-steam" src={Steam} alt="" />
                            <p>
                                Share
                            </p>
                        </div>
                        <div className="inner-band">
                            <img className="inner-star" src={Star} alt="" />
                            <p>
                                <div>{data?.rating}</div>

                            </p>
                        </div>
                        <div className="inner-btn">
                            <button className="openModalBtn" onClick={() => {
                                setModalOpen(true)
                            }}>
                                <img className="inner-player" src={Player} alt="error" />
                                <span>PLAY NOW</span>
                            </button>
                        </div>
                    </div>


                    <div className="inner-footer">
                        <p>
                            <div>{data?.desc}</div>
                        </p>
                    </div>
                </div>
            </div>
            <Modal open={modalOpen} setOpen={setModalOpen} urlData={data?.url} />

        </div>

    )
}
export default MovieInner