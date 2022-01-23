import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/posts";
import HomePage from "./pages/home";
import NewDetail from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await content.render(id);
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewDetail.render(id));
    },
    "/admin/news": () => {
        print(AdminPost);
    },
});

router.resolve();

// callback : 1 hàm được truyền vào 1 hàm khác như 1 đối số
// sync, async: Đồng bộ và bất đồng bộ trong javascript

// const a = 10;
// const b = 20;

// function display(result){
//     document.querySelector('#app').innerHTML = result;
// }

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a, b, display);

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

// callback in callback
// loadScript('https://abc.com/index1.js', function(error, script){
//     loadScript('https://abc.com/index2.js', function(error, script){
//         loadScript('https://abc.com/index3.js', function(error, script){
//             loadScript('https://abc.com/index4.js', function(error, script){
//                 console.log('finished')
//             })
//         })
//     })
// });

// es6 - promise: là một đối tượng đặc biệt, xử lý bất đồng bộ

// const render = () => new Promise((resolve, reject) => {
//     const status = true;
//     setTimeout(() => {
//         if (status) {
//             // lấy dữ liệu từ database
//             resolve([1, 2, 3, 4]);
//         } else {
//             reject(new Error("something bad happened"));
//         }
//     }, 3000);
// });

// render()
//     .then((result) => {
//         result.push(5)
//         return result
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// async/await: cú pháp mới es8, xử lý bất đồng bộ

// const printA = async () => {
//     const result = await render();
//     console.log("result", result);
//     result.push(5);
//     console.log("result", result);
// };
// printA();