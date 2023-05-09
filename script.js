const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
  
    switch (type) {
      case 'text':
        appendText(label, placeholder)
        break
      case 'radio':
        appendRadio(label, placeholder)
        break
      case 'button':
        appendButton(label)
        break
    }
  }
  
  const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('aria-label', label)
    document.querySelector("#elements").append(el)
  }
  
  const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input');
    el.setAttribute('type', 'radio');
    el.setAttribute('name', 'radio-group');
  
    let labelEl = document.createElement('label');
    labelEl.innerHTML = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
  
    container.appendChild(el);
    container.appendChild(labelEl);
  
    document.querySelector("#elements").appendChild(container);
  };
  
  const appendButton = (label = "No label") => {
    let el = document.createElement('button')
    el.setAttribute('type', 'button')
    el.setAttribute('class', 'btn btn-primary mt-1')
    el.innerText = label
    document.querySelector("#elements").append(el)
  }