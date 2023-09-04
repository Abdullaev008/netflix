import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./movie.scss"
import Netflix from "../netflix/netflix"
import Error from "../error/error"
import Clock from '../../assets/svg/clock.svg'
import Star from '../../assets/svg/star.svg'


function Movie() {

    const [modalData, setModalData] = useState()
    const [modalActive, setModalActive] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(() => {
                setError(true)
            })
    }, [])

    setTimeout(() => {
        setLoading(false)
    }, 6000)

    if (loading) {
        return <Netflix />
    }
    if (error) {
        return <Error />
    }


    return (
        <div className="container">
            <div className="wrapper">
                {
                    data && data?.map((item, index) => {
                        return (
                            <NavLink to={`${"/movie_inner"}/${item.id}`}>

                                <div className="cards">
                                    <img className="main-cards" src={item?.img} alt="" />

                                    <div className="cards-inner">
                                        <div className="left-item">
                                            <h4 className="card-name">{item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}</h4>
                                            <button className="hd">
                                                <span>HD</span>
                                            </button>
                                        </div>
                                        <div className="right-item">
                                            <div className="year">{`${item.year}`}</div>

                                            <div className="right-inner">
                                                <div className="min"><img className="clock" src={Clock} alt="error" />{`${item.time} min`}</div>
                                                <div className="rayt"><img className="star" src={Star} alt="error" />{`${item.rating}`}</div>
                                            </div>
                                        </div>



                                    </div>
                                    {/* <button className='btn' onClick={() => {
                                        setModalActive(true), setModalData(item)
                                    }}>Read more</button> */}
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Movie


















