 function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedItem = document.getElementById(data);
    if (draggedItem && ev.target.classList.contains('box')) {
      ev.target.appendChild(draggedItem);
    }
  }