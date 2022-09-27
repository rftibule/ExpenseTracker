// class Expense {
//   constructor(item, date, amount, quantity) {
//     this.item = item;
//     this.date = date;
//     this.amount = amount;
//     this.quantity = quantity;
//   }
// }

const _form = document.querySelector("#myForm");
const _date = document.querySelector("#myDate");

_date.valueAsDate = new Date();

_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const _table = document.querySelector("#myTable");

  const _item = document.querySelector("#myItem");

  const _amount = document.querySelector("#myAmount");
  const _quantity = document.querySelector("#myQuantity");

  const _tr = document.createElement("tr");
  const _tdItem = document.createElement("td");
  const _tdAmount = document.createElement("td");
  const _tdQuantity = document.createElement("td");
  const _tdTotal = document.createElement("td");
  const _tdDate = document.createElement("td");
  const _tdAction = document.createElement("td");
  const _aAction = document.createElement("a");

  _tdItem.textContent = _item.value;
  _tdDate.textContent = new Date(_date.value).toLocaleDateString();
  _tdAmount.textContent = _amount.value;
  _tdQuantity.textContent = _quantity.value;
  _tdTotal.textContent = _amount.value * _quantity.value;
  _aAction.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  _aAction.href = "#";
  _aAction.addEventListener("click", (e) => {
    _aAction.parentElement.parentElement.remove();
  });

  _tdAction.classList.add("actionCell");
  _tdAction.appendChild(_aAction);

  _tr.appendChild(_tdItem);
  _tr.appendChild(_tdAmount);
  _tr.appendChild(_tdQuantity);
  _tr.appendChild(_tdTotal);
  _tr.appendChild(_tdDate);
  _tr.appendChild(_tdAction);

  _table.querySelector("tbody").appendChild(_tr);
});

function Remove(id) {
  alert(id);
}
