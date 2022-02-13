import Footer from "../views/footer";
import Header from "../views/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <main class="mt-[10px]">
            <div class="max-w-[1440px] mx-auto">
                <div class="flex">
                    <div class="w-[1020px] h-[500px] bg-slate-600 mr-[10px]">
                        <div class="container">
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>
                            <div class="mySlides">
                                <img src="https://picsum.photos/1020/420">
                            </div>

                            <a class="prev" onclick="plusSlides(-1)">❮</a>
                            <a class="next" onclick="plusSlides(1)">❯</a>

                            <div class="row">
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(1)">
                                </div>
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(2)">
                                </div>
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(3)">
                                </div>
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(4)">
                                </div>
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(5)">
                                </div>
                                <div class="column">
                                    <img class="demo cursor" src="https://picsum.photos/170/80"
                                        onclick="currentSlide(6)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[410px] h-[500px] bg-slate-400">

                    </div>
                </div>
            </div>
            <div class="max-w-[1440px] mx-auto">

            </div>
        </main>
        ${Footer.render()}
        `;
    },
};

export default HomePage;