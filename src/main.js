import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewDetail from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewDetail.render(id));
    },
});

router.resolve();

// function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         callback(null, script);
//     };
//     script.onerror = () => {
//         callback("lỗi rồi");
//     };
//     document.head.append(script);
// }

// loadScript("https://www.youtube.com/", (error, script) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("script", script);
//     }
// });

const render = () => new Promise((resolve, reject) => {
    const status = true;
    setTimeout(() => {
        if (status) {
            // lấy dữ liệu từ database
            resolve([1, 2, 3, 4]);
        } else {
            reject(new Error("something bad happened"));
        }
    }, 3000);
});

render()
    .then((result) => {
        result.push(5);
        return result;
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));