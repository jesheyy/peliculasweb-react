import { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from './StarRating.jsx';

function Description({ movies, match }) {
    const [isEditing, setIsEditing] = useState(false);       
    const [newDesc, setNewDesc] = useState("");              
    const [isEditingVideo, setIsEditingVideo] = useState(false); 
    const [newVideo, setNewVideo] = useState("");            

    let movie = movies.find((el) => el.name === match.params.name);


    
    const handleEditClick = () => {
        setIsEditing(true);
        setNewDesc(movie.desc);
    };

    const handleSaveClick = () => {
        movie.desc = newDesc;  
        setIsEditing(false);   
    };

    const handleEditVideoClick = () => {
        setIsEditingVideo(true);
        setNewVideo(movie.trailer);  
    };

    const handleSaveVideoClick = () => {
        movie.trailer = newVideo;    
        setIsEditingVideo(false);    
    };

    return (
        <div className="description">
            <div className="moviecard">
                <div className="video">
                    {movie.trailer ? (
                        <iframe
                            width="600"
                            height="315"
                            src={movie.trailer}
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No hay video disponible.</p>
                    )}
                </div>
                <div className="movieinfo">
                    <h2>Nombre: <div className="title">{movie.name}</div></h2>
                    <h2>Fecha Estreno: <div className="title">{movie.date}</div></h2>
                    <h2>
                        Descripción:
                        <div className="details">
                            {isEditing ? (
                                <textarea
                                    value={newDesc}
                                    onChange={(e) => setNewDesc(e.target.value)}
                                />
                            ) : (
                                movie.desc
                            )}
                        </div>
                    </h2>

                    <StarRating rate={movie.rating} />
                </div>
            </div>

            <button onClick={handleEditClick}>Descripción</button>
            {isEditing && <button onClick={handleSaveClick}>Guardar</button>}

            <button onClick={handleEditVideoClick}>Video</button>
            {isEditingVideo && (
                <>
                    <input
                        type="text"
                        placeholder="Ingrese enlace de YouTube"
                        value={newVideo}
                        onChange={(e) => setNewVideo(e.target.value)}
                    />
                    <button onClick={handleSaveVideoClick}>Guardar</button>
                </>
            )}

            <button>
                <Link to="/">Atrás</Link>
            </button>
        </div>
    );
}

export default Description;
