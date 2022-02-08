import axios from "axios";
import { add } from "../../../api/posts";

const AddPost = {
    render() {
        return /* html */`
            <form id="formAddPost">
                <input type="text" id="title-post" class="border border-black" placeholder="Title" /><br />
                <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
                <button>Tạo bài viết</button>
            </form>
        `;
    },
    afterRender() {
        const formAddPost
    },
};

export default AddPost;