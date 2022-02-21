import { getProInCate } from "../../../Api/products";
import Footer from "../../views/footer";
import Header from "../../views/header";

const ProductList = {
    async render(id) {
        let response; let data;
        const urlStr = window.location.href;
        const url = new URL(urlStr);
        // eslint-disable-next-line no-underscore-dangle
        const _embed = url.searchParams.get("_embed");
        if (_embed) {
            response = await getProInCate(id);
            data = response.data.products;
        } else {
            response = await getProInCate();
            data = response.data;
        }
        return /* html */`
        ${await Header.render()}
        <main class="mt-[10px]">
            <div class="max-w-[1440px] mx-auto">
                <div class="w-[1440px] py-[10px] flex border-b-2 border-[#f2f2f2]">
                    <div class="mx-2 text-[#5d5f6c]">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div class="text-yellow-500">
                        <a href="/blog" class="text-yellow-500 font-semibold">Quay lại trang</a>
                    </div>
                </div>
                <div class="my-[20px]">
                    <div class="grid grid-cols-5 gap-8">
                    ${data.slice(0, 20).map((product) => /* html */ `
                        <div class="border p-3">
                            <a href="/products/${product.id}">
                                <img src="${product.img}" alt="" class="w-[250px] h-[300px]"/>
                            </a>
                            <h3 class="my-3"><a href="/products/${product.id}" class="font-semibold text-lg text-orange-500 ">${product.name}</a></h3>
                            <p>${product.price.toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
                        </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
};
export default ProductList;