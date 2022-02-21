import Footer from "../../views/footer";
import Header from "../../views/header";

const cartPage = {
    async render() {
        return /* html */`
        ${await Header.render()}


        ${Footer.render()}
        `;
    },
};
export default cartPage;