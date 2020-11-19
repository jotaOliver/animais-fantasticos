export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.classActive = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.classActive);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.classActive, direcao);
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          this.activeTab(index);
        });
      });
    }
  }
}
