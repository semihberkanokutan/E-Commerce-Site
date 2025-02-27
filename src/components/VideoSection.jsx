import styled from 'styled-components'
import vid from '../assets/video/vvv.mp4'

const VideoSectionBuild = styled.section`
    height: calc(100vh - 180px);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    & video {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;      
        z-index: -1;

    }

    & .videoContent {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: #fff;

        & h1 {
            font-size: 2.4rem;
            font-weight: bold;
        }

        & button {
            background: #B771E5;
            padding: 10px 20px;
            font-weight: bold;
            margin-top: 1rem;

            &:hover {
                filter: brightness(80%);
            }

        }

        
    }
`

export default function VideoSection() {
    return (
        <VideoSectionBuild>
            <video src={vid} className='brightness-50'></video>
            <div className='videoContent'>
                <h1>Where Style Meets Convenience!</h1>
                <p className='text-center'>Discover top-quality products at unbeatable prices! Enjoy hassle-free shopping, exclusive deals, and fast delivery. <br />Upgrade your lifestyle with just a click.</p>
                <button>Go shopping →</button>
            </div>
        </VideoSectionBuild>
    )
}