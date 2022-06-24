function fun1(id) {
  const productAvailability = document.getElementById(id);
  const v = productAvailability.getAttribute('value');
  const par = document.querySelector('.par-foie');

  if ( par.innerHTML ===
    `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun1(id); spoiler(id);" value="true">купи.</a>` && v === 'true') {
    par.innerHTML = 'Печень утки разварная с артишоками.';
  } else if ( productAvailability === 'false') {
    par.innerHTML = `Печалька, с фуа-гра закончился.`;
  } else {
    par.innerHTML = `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun1(id); spoiler(id);" value="true">купи.</a>`;
  }
}

function fun2(id){
  const productAvailability = document.getElementById(id);
  const v = productAvailability.getAttribute('value');
  const par = document.querySelector('.par-fish');

  if ( par.innerHTML ===
    `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun2(id); spoiler(id);" value="true">купи.</a>` && v === 'true') {
    par.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
  } else if ( productAvailability === 'false') {
    par.innerHTML = `Печалька, с рыбой закончился.`;
  } else {
    par.innerHTML = `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun2(id); spoiler(id);" value="true">купи.</a>`;
  }
}

function fun3(id) {
  const productAvailability = document.getElementById(id);
  const v = productAvailability.getAttribute('value');
  const par = document.querySelector('.par-chicken');

  if ( par.innerHTML ===
    `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun2(id); spoiler(id);" value="false">купи.</a>` && v === 'true') {
    par.innerHTML = 'Филе из цыплят с трюфелями в бульоне.';
  } else if ( v === 'false' ) {
    par.innerHTML = `Печалька, с курицей закончился.`;
  } else {
    par.innerHTML = `Чего сидишь? Порадуй котэ, <a class="a" onclick="fun3(id);
  spoiler(id);" value="false">купи.</a>`;
  }
}

function spoiler(id) {
  const catID = document.getElementById(id);
  const classes = catID.classList;
  const v = catID.getAttribute('value');

  console.log(v);
  if (classes.contains("border") && v === 'true') {
    classes.toggle('border');
    classes.add('active-border');
  } else if (v === 'false') {
    classes.toggle('active-border')
    classes.toggle('border');
    classes.add('none-border');
  } else {
    classes.toggle('active-border')
    classes.add('border');
  }
}

