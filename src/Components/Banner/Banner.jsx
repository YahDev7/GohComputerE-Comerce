const Banner = () => {
    return (
        <section className="container mt-5 pt-5 ">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <a href="#/gohcomputer">
                            <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1665883615/Gohcomputer/setup_k3r5ip.jpg" className="d-block w-100 sliderMain" alt="..." />
                        </a>

                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <a href="#/gohcomputer">
                            <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1665883615/Gohcomputer/setup2_ytzn55.jpg" className="d-block w-100 sliderMain" alt="..." />
                        </a>


                    </div>
                    <div className="carousel-item">
                        <a href="#/gohcomputer">
                            <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1665883615/Gohcomputer/setup1_qvhat6.jpg" className="d-block w-100 sliderMain" alt="..." />
                        </a>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Banner;