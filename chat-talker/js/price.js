const base_people = 10000;
const base_basic_price = 600;
const base_standard_price = 1600;

// 切換收費方案
function switchMethos(multiple, btn) {
  let basic_people = document.querySelector('.basic .people');
  let basic_price = document.querySelector('.basic .price');
  let standard_people = document.querySelector('.standard .people');
  let standard_price = document.querySelector('.standard .price');
  let units = document.querySelectorAll('.price+.unit');
  let type_btns = document.querySelectorAll('.btn-pricing-type');

  // 將所有按鈕改成為選取
  type_btns.forEach(function (type_btn) {
    type_btn.classList.remove('active');
  });
  // 指定選取按鈕
  let active_btn = btn.parentElement;
  active_btn.classList.add('active');

  if (multiple) {
    basic_people.innerHTML = base_people * multiple;
    basic_price.innerHTML = base_basic_price * multiple;
    standard_people.innerHTML = base_people * multiple;
    standard_price.innerHTML = base_standard_price * multiple;

    // 顯示價格單位
    units.forEach(function (unit) {
      unit.style.display = 'inline';
    });
  } else {
    basic_people.innerHTML = '>25000';
    basic_price.innerHTML = '<span style="font-size:22px;">專人聯繫</span>';
    standard_people.innerHTML = '>25000';
    standard_price.innerHTML = '<span style="font-size:22px;">專人聯繫</span>';

    // 隱藏價格單位
    units.forEach(function (unit) {
      unit.style.display = 'none';
    });
  }
}

// 展開收合 Q & A
function switchQna(qa) {
  let li = qa.parentElement;

  // 未展開 -> 展開
  if (li.className.indexOf('active') === -1) {
    li.classList.add('active');
  }
  // 已展開 -> 收合
  else {
    li.classList.remove('active');
  }
}
