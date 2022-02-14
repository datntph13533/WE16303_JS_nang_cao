const Nav = {
    render() {
        return /* html */ `
            <div class="bg-[#daab47] h-[50px]">
                <div class="max-w-[1440px] mx-auto">
                    <div class="flex justify-center">
                        <nav class="">
                            <ul class="flex h-[50px] oy-2">
                                <li><a href="" class="menu-item">Trang chủ</a></li>
                                
                                <li class="group">
                                    <a href="" class="menu-item">Điện thoại
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-3 p-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Apple (iPhone) - Quốc tế</a></li>
                                            <li><a href="" class="sub-menu-item">Apple (iPhone) - Lock</a></li>
                                            <li><a href="" class="sub-menu-item">Xiaomi</a></li>
                                            <li><a href="" class="sub-menu-item">OPPO</a></li>
                                            <li><a href="" class="sub-menu-item">Realme</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Samsung</a></li>
                                            <li><a href="" class="sub-menu-item">Vivo</a></li>
                                            <li><a href="" class="sub-menu-item">OnePlus</a></li>
                                            <li><a href="" class="sub-menu-item">Asus</a></li>
                                            <li><a href="" class="sub-menu-item">Nokia</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">BKav</a></li>
                                            <li><a href="" class="sub-menu-item">ZTE (Nubia)</a></li>
                                            <li><a href="" class="sub-menu-item">LG</a></li>
                                            <li><a href="" class="sub-menu-item">Sony</a></li>
                                            <li><a href="" class="sub-menu-item">Google</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="group">
                                    <a href="" class="menu-item">Tablet
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-2 px-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">iPad Pro</a></li>
                                            <li><a href="" class="sub-menu-item">iPad 10.2</a></li>
                                            <li><a href="" class="sub-menu-item">iPad Air</a></li>
                                            <li><a href="" class="sub-menu-item">iPad mini</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Samsung</a></li>
                                            <li><a href="" class="sub-menu-item">Lenovo</a></li>
                                            <li><a href="" class="sub-menu-item">Xiaomi</a></li>
                                            <li><a href="" class="sub-menu-item">Máy đọc sách</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="group">
                                    <a href="" class="menu-item">Laptop, PC, Màn hình
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-3 px-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Mac</a></li>
                                            <li><a href="" class="sub-menu-item">Dell</a></li>
                                            <li><a href="" class="sub-menu-item">Asus</a></li>
                                            <li><a href="" class="sub-menu-item">Acer</a></li>
                                            <li><a href="" class="sub-menu-item">Lenovo</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">HP</a></li>
                                            <li><a href="" class="sub-menu-item">Microsoft Surface</a></li>
                                            <li><a href="" class="sub-menu-item">LG</a></li>
                                            <li><a href="" class="sub-menu-item">Msi</a></li>
                                            <li><a href="" class="sub-menu-item">Gigabyte</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Máy tính để bàn</a></li>
                                            <li><a href="" class="sub-menu-item">Màn hình</a></li>
                                            <li><a href="" class="sub-menu-item">Máy in</a></li>
                                            <li><a href="" class="sub-menu-item">Linh kiện máy tính</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="group">
                                    <a href="" class="menu-item">Đồng hồ
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-2 px-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Apple Watch</a></li>
                                            <li><a href="" class="sub-menu-item">Samsung</a></li>
                                            <li><a href="" class="sub-menu-item">Garmin</a></li>
                                            <li><a href="" class="sub-menu-item">Xiaomi</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Amazfit</a></li>
                                            <li><a href="" class="sub-menu-item">OPPO</a></li>
                                            <li><a href="" class="sub-menu-item">Realme</a></li>
                                            <li><a href="" class="sub-menu-item">Đồng hồ định vị trẻ em</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="group">
                                    <a href="" class="menu-item">Âm thanh
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-1 px-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Loa</a></li>
                                            <li><a href="" class="sub-menu-item">Tai nghe</a></li>
                                            <li><a href="" class="sub-menu-item">Phụ kiện</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="group">
                                    <a href="" class="menu-item">Phụ kiện
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                    <div
                                        class="grid grid-cols-3 px-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Phụ kiện Apple</a></li>
                                            <li><a href="" class="sub-menu-item">Dán màn hình</a></li>
                                            <li><a href="" class="sub-menu-item">Cáp, sạc</a></li>
                                            <li><a href="" class="sub-menu-item">Thiết bị mạng</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Camera</a></li>
                                            <li><a href="" class="sub-menu-item">Bao da, ốp lưng</a></li>
                                            <li><a href="" class="sub-menu-item">Day đeo đồng hồ</a></li>
                                            <li><a href="" class="sub-menu-item">Phụ kiện chụp ảnh</a></li>
                                        </ul>
                                        <ul class="p-2">
                                            <li><a href="" class="sub-menu-item">Chuột, bàn phím</a></li>
                                            <li><a href="" class="sub-menu-item">Thẻ nhớ, USB</a></li>
                                            <li><a href="" class="sub-menu-item">Phụ kiện laptop</a></li>
                                            <li><a href="" class="sub-menu-item">Balo, túi xách</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li><a href="" class="menu-item">Tin tức công nghệ</a></li>
                                <li><a href="" class="menu-item">Liên hệ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        `;
    },
};
export default Nav;