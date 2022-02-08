const Header = {
    render() {
        return /* html */ `
            <div class="max-w-full mx-auto">
                <header>
                    <div class="bg-white h-[50px] mb-[10px]">
                        <div class="max-w-[1440px] mx-auto text-[15px] leading-[20px]">
                            <div class="grid grid-cols-3 gap-5 mt-4 mb-4">
                                <div class="grid grid-cols-2 mx-auto">
                                    <p class="mr-[10px]">Bạn đang xem giá, tồn kho tại</p>
                                    <div class="location-dropdown">
                                        <div class="location-dropdown-title">
                                            <select class="location_name border-none bg-none text-[#c6992f]">
                                                <option value="1" selected="" class="bg-[#c69a39] text-[#fff]">Hà Nội</option>
                                                <option value="2" class="bg-[#c69a39] text-[#fff]">Hồ Chí Minh</option>
                                                <option value="3" class="bg-[#c69a39] text-[#fff]">Đà Nẵng</option>
                                            </select>
                                        </div>
                                        <div class="location-dropdown-list hidden">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 text-center">
                                    <p>Hotline: <span class="text-[#f1aa0c]">HN: 0969.120.120 - SG: 0965.123.123 - ĐN:
                                            096.123.9797 - CSKH Online
                                            037.462.9999 - 096.539.7966</span></p>
                                </div>
                                <div class="grid grid-cols-1 mx-auto">
                                    <ul class="flex">
                                        <li class="mx-4"><a href="">Đăng kí</a></li>
                                        <li class="mx-4 text-[#f1aa0c]"><a href="">|</a></li>
                                        <li class="mx-4"><a href="">Đăng nhập</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-500 h-[100px]">
                        <h1 class="text-black text-center">Xin chào bạn</h1>
                    </div>
                </header>
        `;
    },
};

export default Header;