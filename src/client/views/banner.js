const Banner = {
    render() {
        return /* html */`
            <div class="max-w-[1440px] mx-auto">
                <div class="w-[1440px] h-[500px]">
                    <div class="container">
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>
                        <div class="mySlides">
                            <img src="https://picsum.photos/1440/420" class="image">
                        </div>

                        <a class="prev" onclick="plusSlides(-1)">❮</a>
                        <a class="next" onclick="plusSlides(1)">❯</a>

                        <div class="row">
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(1)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(2)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(3)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(4)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(5)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(6)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(7)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(8)">
                            </div>
                            <div class="column">
                                <img class="demo cursor" src="https://picsum.photos/160/80" onclick="currentSlide(9)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("demo");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += "active";
        }
    },
};
export default Banner;