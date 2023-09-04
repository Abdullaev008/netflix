import { useState } from "react"
import "./navbar.scss"
import Modal from '../../components/movie/modal/modal'


function Navabr() {

    const [modal, setModalData] = useState()
    return (
        <nav>
            <div className="left-item">
                <h1>NETFLIX</h1>
            </div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV SHOWS</a></li>
                <li><a href="#">HOLLYWOOD</a></li>
                <li><a href="#">HORROR</a></li>
            </ul>
            <div className="right-item">
                <input type="text" placeholder="search your favourite movie" />
            </div>
        </nav>
    )
}

export default Navabr