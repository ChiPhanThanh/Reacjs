import React from "react";
function Header() {
  return (
    <div className="header">
      <div className="Logo">
        <img src="img/cart.jpg" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Trang Chủ</a>
        </li>
        <li>
          <a href="#">Đơn Hàng</a>
        </li>
        <li>
          <a href="#">Liên Hệ</a>
        </li>
        <li>
          <a href="#">Sản Phẩm</a>
        </li>
        <li>
          <a href="#">Chúng Tôi</a>
        </li>
      </ul>
      <div className="card">
        <img src="img/shope2.png" alt="card" />
      </div>
    </div>
  );
}
export default Header;
