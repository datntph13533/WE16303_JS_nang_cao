import Footer from "../views/footer";
import Header from "../views/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <main class="mt-[10px]">
            <!-- start banner -->
            <div class="max-w-[1440px] mx-auto">
                <!-- start banner -->
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
                <!-- end banner -->

            </div>
            <!-- end banner -->
            <div class="max-w-[1440px] mx-auto">
                
            </div>
        </main>
        ${Footer.render()}
        `;
    },
    afterRender() {

    },
};

export default HomePage;