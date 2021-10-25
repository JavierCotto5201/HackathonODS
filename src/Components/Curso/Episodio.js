import React from 'react'
import './Episodio.css'

function Episodio(props) {
    const episodio = props.location.state
    console.log(episodio.link)
    const embedId = episodio.link.substr(17)
    return (
        <div className="container">
            <div className="video-responsive">
                <iframe
                width="500"
                height="380"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
        </div>
    </div>
    )
}

export default Episodio

