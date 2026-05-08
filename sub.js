// sub.js

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {

  tab.addEventListener('click', () => {

    /* 버튼 active 제거 */
    tabs.forEach((btn) => {
      btn.classList.remove('active');
    });

    /* 갤러리 숨기기 */
    contents.forEach((content) => {
      content.classList.remove('active');
    });

    /* 현재 탭 active */
    tab.classList.add('active');

    /* 해당 갤러리 보여주기 */
    const targetId = tab.dataset.tab;
    const targetContent =
      document.getElementById(targetId);

    targetContent.classList.add('active');

  });

});