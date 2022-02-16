import Navigo from "navigo";
import AdminListNew from "./admin/business/news";
import AddNewPage from "./admin/business/news/add";
import AdminDashboard from "./admin/views";
import HomePage from "./client/business/home";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("content").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender(id);
};

router.on({
    // phần user
    "/": () => {
        print(HomePage);
    },
    //-------------------------------
    // phần admin
    "/admin": () => {
        print(AdminDashboard);
    },
    "/admin/news": () => {
        print(AdminListNew);
    },
    "/admin/news/add": () => {
        print(AddNewPage);
    },
    //------------------
});
router.resolve();