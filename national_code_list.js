const list = []

function national_code_generator() {
    let number_list = [];
    let _sum = 0

    for (let i = 10; i > 1; i--) {
      let _j = Math.floor(Math.random() * Math.floor(10))
      number_list.push(_j);

      _sum += _j * i;
    }

    let _m = _sum % 11;
    if (_m < 2) {
      number_list.push(_m);
    } else if (_m >= 2) {
      number_list.push(11 - _m);
    }

    return number_list.join('')
}

for (let i = 0; i < 100; i++) {
    list.push(national_code_generator());
}

pm.test("get national code List :)", function () {
    pm.environment.set("national_list", list);
   
    pm.expect(pm.environment.get("national_list").length).to.equal(100);
});