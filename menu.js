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
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    list-style: none;
    padding: 0;
  }
  .header-main-group {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .header-logo {
    max-height: 35px;
    width: auto;
  }
  .common-nav-link {
    color: #000000;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    transition: opacity 0.2s;
  }
  .common-nav-link:hover {
    opacity: 0.6;
  }
  .header-copyright {
    font-size: 12px;
    color: #333333;
    white-space: nowrap;
    margin: 0;
  }

  /* ★スマートフォン向けの自動縮小・配置調整 (幅768px以下) */
  @media (max-width: 768px) {
    .common-header-bar {
      padding: 8px 10px;
    }
    .common-nav-list {
      flex-direction: column;
      gap: 6px;
    }
    .header-main-group {
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .header-logo {
      max-height: 24px;
    }
    .common-nav-link {
      font-size: 11px;
      padding: 4px 6px;
    }
    .header-copyright {
      font-size: 9px;
      opacity: 0.8;
    }
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
            <div class="header-main-group">
              <img src="logo.png" alt="ロゴ" class="header-logo">
              <a href="prize.html" class="common-nav-link">賞品ショップ</a>
              <a href="mu-card-user.html" class="common-nav-link">会員マイページ</a>
              <a href="index.html" class="common-nav-link">ページトップ</a>
            </div>
            <p class="header-copyright">&copy; HomeMade Tools Project All Rights Reserved.</p>
          </div>
        </nav>
      </header>
    `;
  }
});
