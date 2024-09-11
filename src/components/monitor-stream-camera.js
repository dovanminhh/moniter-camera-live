import { useEffect, useRef, useState } from 'react'
import './StreamCamera.css'
import IconCamera from '../assets/images/speed_camera.png'
import LogoCsgt from '../assets/images/Phu_hieu_canh_sat_giao_thong 1.png'
import InforVehicleViolation from '../assets/images/Rectangle 78.png'
import ArrowVecter from '../assets/images/Vector 8.png'
import QR from '../assets/images/adobe-express-qr-code 1.png'
import ImageDot from '../assets/images/Group 34.png'
import ImageDot1 from '../assets/images/Group 33.png'
import ImageDescListVio from '../assets/images/Rectangle 69.png'
import ArrowUp from '../assets/images/Vector 7.png'
import ThanhNgang1 from '../assets/images/Rectangle 54.png'
import ThanhNgang2 from '../assets/images/Rectangle 55.png'
import Triangle from '../assets/images/Vector 9.png'
// Dữ liệu giả lập cho các playlist
const playlists = [
    {
        id: 1,
        title: "Mix 1",
        videos: [
            { id: 101, title: "Video 1", src: "/videos/street_19627.mp4" },
            { id: 102, title: "Video 2", src: "/videos/street_19627.mp4" },
        ],
    },
    {
        id: 2,
        title: "Mix 2",
        videos: [
            { id: 103, title: "Video 3", src: "/videos/street_19627.mp4" },
            { id: 104, title: "Video 4", src: "/videos/street_19627.mp4" },
        ],
    },
    {
        id: 3,
        title: "Mix 3",
        videos: [
            { id: 105, title: "Video 5", src: "/videos/street_19627.mp4" },
            { id: 106, title: "Video 6", src: "/videos/street_19627.mp4" },
        ],
    },

];

const MonitorStreamCamera = () => {
    const [currentVideo, setCurrentVideo] = useState(playlists[0].videos[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showWaitingScreen, setShowWaitingScreen] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        setCurrentVideo(playlists[0].videos[0]);
        setIsPlaying(false);
        setShowWaitingScreen(true);
    }, []);

    const handleVideoSelect = (video) => {
        setCurrentVideo(video);
        setIsPlaying(true);
        setShowWaitingScreen(false);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    };

    const handlePlayClick = () => {
        setIsPlaying(true);
        setShowWaitingScreen(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };


    return (
        <div className='wrapper'>
            <div className='container-fluid'>
                <div className='animate-round-dot text-center'>
                    <img src={ImageDot} alt='' />
                </div>
                <div className='main-top position-relative'>
                    <div className='main-top-header text-white position-absolute d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <div className="parallelogram">
                                <div className="parallelogram1"></div>
                                <div className="parallelogram2"></div>
                            </div>
                            <img src={IconCamera} alt='' className='mw-100 img-icon-camera me-2' />
                            <h6 className='title mb-0'>Điểm giao Nguyễn Lương Bằng - Phố Huế</h6>
                        </div>
                        <div className='time d-flex align-items-center text-end'>
                            <div className='time-text me-2'><span>12:20:33</span>
                                <br /><span>13/08/2024</span>
                            </div>
                            <div className='time-icon'>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                        </div>
                    </div>


                    <div className='screen-stream d-flex '>
                        <div className='col-start '>
                            <div className='media-placeholder'>
                                <div className='bg-img'>
                                    <div className='video-wrapper'>
                                        <video
                                            ref={videoRef}
                                            className='video-player'
                                            controls
                                            autoPlay={isPlaying}
                                            onPlay={() => setShowWaitingScreen(false)}
                                        >
                                            <source src={currentVideo.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        {showWaitingScreen && !isPlaying && (
                                            <div onClick={handlePlayClick} className='waiting-screen'>
                                                <div className='play-icon'>▶</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-end flex-grow-1'>
                            <div className='violation-block'>
                                <div className='violation-list'>
                                    <div className='violation-item'></div>
                                    <div className='violation-item'></div>
                                    <div className='violation-item'></div>
                                </div>
                            </div>
                        </div> */}
                        <div className='Logo-csgt d-flex align-items-center'>
                            <div className='img-logo'>
                                <img src={LogoCsgt} alt='' className='mw-100' />
                            </div>
                            <h3 className='mb-0'>PHÒNG CSGT <br /> TỈNH TÂY NINH</h3>
                        </div>
                    </div>
                    <div className='col-end'>
                        <div className='violation-block'>
                            <div className='violation-list text-white'>
                                {playlists.flatMap(playlist =>
                                    playlist.videos.map(video => (
                                        <div
                                            key={video.id}
                                            className={`violation-item ${currentVideo.id === video.id ? 'active' : ''}`}
                                            onClick={() => handleVideoSelect(video)}
                                        >
                                            <div className='bg-img-list flex-shrink-0'>
                                                {/* <img src='' alt='' /> */}
                                            </div>
                                            <div className='violation-item-end flex-grow-1'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5>70G1-59629</h5>
                                                    <p>12:14</p>
                                                </div>
                                                <p>Không chấp hành hiệu lệnh của đèn tín hiệu giao thông</p>
                                            </div>
                                        </div>
                                    ))
                                )}

                                {/* <div className='violation-item'>
                                    <div className='bg-img-list'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='violation-item-end'>
                                        <div className='d-flex justify-content-between align-items-center mb-2'>
                                            <h5>70G1-59629</h5>
                                            <p>12:14</p>
                                        </div>
                                        <p>Không chấp hành hiệu lệnh của đèn tín hiệu giao thông</p>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                    <div className='description-list-violation'>
                        <div className='custom-chose'>
                            <img src={ImageDescListVio} alt='' />
                            <div className='chose-text text-center'>
                                <img src={ArrowUp} alt='' />
                                <br />
                                <span className='text-white'>VI PHẠM GIAO THÔNG</span>
                            </div>
                        </div>
                    </div>
                    <div className='crossbar'>
                        <span className='crossbar-one'>
                            <img src={ThanhNgang1} alt='' />

                        </span>
                        <span className='crossbar-two'>
                            <img src={ThanhNgang2} alt='' />

                        </span>
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className='row d-flex align-items-center mb-3'>
                        <div className='col-sm-12 col-md-4 col-log-4'>
                            <div className='infor-vehicle-andviolation'>
                                <div className='row text-white'>
                                    <div className='col-md-6 infor-vehicle'>
                                        <span className='img-vehicleviolation'>
                                            <img src={InforVehicleViolation} alt='' />
                                            <span className='triangle'>
                                                <img src={Triangle} alt='' />
                                            </span>
                                        </span>
                                        <div className='infor-vehicle-text text-center'>
                                            <span className='infor-vehicle-text-number'>12.230</span>
                                            <br />
                                            <span className='infor-vehicle-text-text'>Lượt phương tiện</span>
                                        </div>

                                    </div>
                                    <div className='col-md-6 infor-violation infor-vehicle'>
                                        <span className='img-vehicleviolation'>
                                            <img src={InforVehicleViolation} alt='' />
                                            <span className='triangle'>
                                                <img src={Triangle} alt='' />
                                            </span>
                                        </span>
                                        <div className='infor-vehicle-text text-center'>
                                            <span className='infor-vehicle-text-number'>456</span>
                                            <br />
                                            <span className='infor-vehicle-text-text'>Lỗi vi phạm</span>
                                        </div>
                                        {/* <span className='triangle'>
                                            <img src={Triangle} alt='' />
                                        </span> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <div className='infor-law text-center'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators pt-5">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner text-center">
                                        <div className="carousel-item active">
                                            <div className="d-block w-100 text-slide">
                                                <p className='mb-0 infor-law-text fade-in'>Người dân tham gia giao thông cần nghiêm chỉnh chấp hành luật lệ giao thông.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-block w-100 text-slide">
                                                <p className='mb-0 infor-law-text fade-in'>Người dân tham gia giao thông cần nghiêm chỉnh chấp hành luật lệ giao thông.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-block w-100 text-slide">
                                                <p className='mb-0 infor-law-text fade-in'>Người dân tham gia giao thông cần nghiêm chỉnh chấp hành luật lệ giao thông.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <div className='contact-phone-qr'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='contact-text text-center flex-grow-1'>
                                        <div className='group-icon-phone d-flex align-items-center justify-content-center'>
                                            <div className='icon-phone d-flex align-items-center justify-content-center'>
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <h5 className='mb-0 phone-number'>1900 12345</h5>
                                        </div>
                                        <p className='mb-0 text-white'>Kiểm tra vi phạm giao thông tại <span className='email-address'>phatnguoi.csgttn.gov.vn</span></p>
                                        <div className='img-vecter-arrow text-end'>
                                            <img src={ArrowVecter} alt='' />
                                        </div>
                                    </div>
                                    <div className='image-qr flex-shrink-0'>
                                        <img src={QR} alt='' />
                                    </div>
                                </div>
                                <div className='animate-round-dot1 text-end'>
                                    <img src={ImageDot1} alt='' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            

        </div>
        
    )
}

export default MonitorStreamCamera;