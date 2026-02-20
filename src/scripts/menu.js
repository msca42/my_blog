// 移动端菜单交互脚本 - 处理汉堡菜单的点击事件
// 监听汉堡菜单的点击事件
document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  // 切换导航链接的显示/隐藏状态
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('absolute');
  navLinks.classList.toggle('w-full');
  navLinks.classList.toggle('top-20');
  navLinks.classList.toggle('left-12');
  navLinks.classList.toggle('bg-primary');
  navLinks.classList.toggle('mt-0');
});
