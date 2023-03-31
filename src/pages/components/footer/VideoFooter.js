import React from 'react'
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="video__footer">
        <div className="video__footer__text">
            <h3>@lucas_pereira</h3>
            <p>#TattooDesenhoEmNeon</p>
            <div className="video__footer__music">
                <MusicNoteIcon className="video__footer__music__icon"/>
                <div className="video__footer__music__text">
                    <p>put ur head on my shoulder - cat</p>
                </div>
            </div>
        </div>
        <img 
            className="video__footer__record"
            alt="Imagem de um vinil rodando"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        />
    </div>
  )
}

export default VideoFooter