// Hiển thị popup chào mừng khi mở trang
window.addEventListener('load', () => {
  alert('Chào bạn! Cảm ơn đã ghé thăm trang giới thiệu của Trùng Khánh!');
});

// Cập nhật năm hiện tại ở footer
const footer = document.querySelector('footer');
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Trùng Khánh. All rights reserved.`;
}

// Thêm sự kiện click cho số điện thoại và email
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(el => {
  el.addEventListener('click', (e) => {
    alert(`Cảm ơn bạn đã liên hệ qua ${el.innerText}!`);
  });
});
