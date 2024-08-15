// To Do List Ödevi

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const list = document.getElementById('list');
  
    function showToast(message, isSuccess = true) {
      const toast = document.querySelector(isSuccess ? '.toast.success' : '.toast.error');
      toast.querySelector('.toast-body').textContent = message;
      $(toast).toast('show');
    }
  
    function newElement() {
      const taskValue = taskInput.value.trim();
      if (taskValue === '') {
        showToast('Listeye boş ekleme yapamazsınız!', false);
        return;
      }
  
      const li = document.createElement('li');
      li.textContent = taskValue;
  
      const closeBtn = document.createElement('span');
      closeBtn.className = 'close';
      closeBtn.textContent = '\u00D7';
      closeBtn.onclick = function () {
        this.parentElement.remove();
      };
  
      li.appendChild(closeBtn);
      list.appendChild(li);
      taskInput.value = '';
  
      showToast('Listeye eklendi.');
    }
  
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    });
  
    document.getElementById('liveToastBtn').onclick = newElement;
  
    // Add close buttons to existing list items
    const existingItems = list.getElementsByTagName('li');
    for (let i = 0; i < existingItems.length; i++) {
      const closeBtn = document.createElement('span');
      closeBtn.className = 'close';
      closeBtn.textContent = '\u00D7';
      closeBtn.onclick = function () {
        this.parentElement.remove();
      };
      existingItems[i].appendChild(closeBtn);
    }
  });  