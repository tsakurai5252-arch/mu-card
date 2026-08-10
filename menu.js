// 共通メニューのCSSスタイルを適用
const menuStyle = document.createElement('style');
menuStyle.textContent = `
  .common-header-bar {
    background-color: #FFFFFF;
    padding: 12px 20px;
    margin: -20px -20px 20px -20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .common-nav-list {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 12px;
    list-style: none;
    padding: 1;
  }
  .common-nav-link {
    color: #000000;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    transition: background 0.2s;
  }
  .common-nav-link:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
document.head.appendChild(menuStyle);

// 共通メニューのHTML構造を生成して挿入
window.addEventListener('DOMContentLoaded', () => {
  const menuArea = document.getElementById('common-menu-area');
  if (menuArea) {
    menuArea.innerHTML = `
      <header class="common-header-bar">
        <nav>
          <div class="common-nav-list">
           <image src="logo.png">
            <a href="prize.html" class="common-nav-link">賞品ショップ</a>
            <a href="mu-card-user.html" class="common-nav-link">会員マイページ</a>
            <a href="index.html" class="common-nav-link">ページトップ</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>© HomeMade Tools Project All Rights Reserved.</p>
          </div>
        </nav>
      </header>
    `;
  }
});