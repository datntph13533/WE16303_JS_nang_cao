import Footer from "../views/footer";
import Header from "../views/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <main class="mt-[10px]">
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

            <div class="max-w-[1440px] mx-auto">
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                    </div>
                </div>
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                    </div>
                </div>
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                    </div>
                </div>
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                    </div>
                </div>
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                        <div class="border p-3">
                            <a href="">
                                <img src="http://placeimg.com/250/300/transport" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">ahihi</a></h3>
                            <p>ahihi</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
    afterRender() {

    },
};

export default HomePage;