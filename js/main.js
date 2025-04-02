// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 添加导航切换功能
  const navItems = document.querySelectorAll('.nav-item');
  
  if (navItems) {
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // 移除所有active类
        navItems.forEach(i => i.classList.remove('active'));
        // 添加active类到当前点击项
        this.classList.add('active');
      });
    });
  }

  // 下拉菜单功能
  const dropdowns = document.querySelectorAll('.dropdown-toggle');
  
  if (dropdowns) {
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = this.nextElementSibling;
        menu.classList.toggle('show');
      });
    });
  }

  // 点击页面其他地方关闭下拉菜单
  document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    if (dropdowns.length > 0) {
      dropdowns.forEach(menu => {
        if (!menu.previousElementSibling.contains(e.target)) {
          menu.classList.remove('show');
        }
      });
    }
  });

  // 模态框功能
  const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
  
  if (modalTriggers) {
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-target');
        const modal = document.querySelector(modalId);
        
        if (modal) {
          modal.classList.add('show');
          document.body.classList.add('modal-open');
        }
      });
    });
  }

  // 关闭模态框
  const closeBtns = document.querySelectorAll('[data-dismiss="modal"]');
  
  if (closeBtns) {
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
      });
    });
  }

  // 点击模态框背景关闭
  const modals = document.querySelectorAll('.modal');
  
  if (modals) {
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('show');
          document.body.classList.remove('modal-open');
        }
      });
    });
  }

  // 标签页切换功能
  const tabTriggers = document.querySelectorAll('[data-toggle="tab"]');
  
  if (tabTriggers) {
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有tabs的active类
        const tabContainer = this.closest('.tabs');
        if (tabContainer) {
          const triggers = tabContainer.querySelectorAll('[data-toggle="tab"]');
          triggers.forEach(t => t.classList.remove('active'));
          
          // 隐藏所有tab内容
          const contents = document.querySelectorAll('.tab-content .tab-pane');
          contents.forEach(c => c.classList.remove('active'));
          
          // 激活当前tab
          this.classList.add('active');
          
          // 显示对应内容
          const target = document.querySelector(this.getAttribute('data-target'));
          if (target) {
            target.classList.add('active');
          }
        }
      });
    });
  }

  // 折叠面板功能
  const collapseTriggers = document.querySelectorAll('[data-toggle="collapse"]');
  
  if (collapseTriggers) {
    collapseTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const target = document.querySelector(targetId);
        
        if (target) {
          target.classList.toggle('show');
          // 切换箭头方向
          this.classList.toggle('collapsed');
        }
      });
    });
  }
}); 