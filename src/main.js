import "../style.css";

import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("content").innerHTML = content;
};

router.on({

});
router.resolve();