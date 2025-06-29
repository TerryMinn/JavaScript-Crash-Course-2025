let products = [];

const form = document.getElementById("product-form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const qtyInput = document.getElementById("quantity");
const tbody = document.getElementById("product-body");
const table = document.getElementById("product-table");
const totalValue = document.getElementById("total-value");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);
  const quantity = parseInt(qtyInput.value);

  if (!name || price < 0 || quantity < 1) return;

  products.push({
    id: Date.now(),
    name,
    price,
    quantity,
    editing: false,
  });

  form.reset();
  render();
});

function render() {
  tbody.innerHTML = "";
  let total = 0;

  if (products.length === 0) {
    table.classList.add("hidden");
    return;
  }

  table.classList.remove("hidden");

  products.map((p) => {
    const row = document.createElement("tr");
    const rowTotal = (p.price * p.quantity).toFixed(2);
    total += parseFloat(rowTotal);

    if (p.editing) {
      row.innerHTML = `
        <td><input type="checkbox" /></td>
        <td><input type="text" value="${p.name}" id="edit-name-${p.id}"></td>
        <td><input type="number" value="${p.price}" id="edit-price-${p.id}"></td>
        <td><input type="number" value="${p.quantity}" id="edit-qty-${p.id}"></td>
        <td>$${rowTotal} lee</td>
        <td class="actions">
          <button class="btn btn-primary" onclick="saveEdit(${p.id})">Save</button>
          <button class="btn btn-secondary" onclick="cancelEdit(${p.id})">Cancel</button>
        </td>`;
    } else {
      row.innerHTML = `
        <td><input type="checkbox" /></td>
        <td>${p.name}</td>
        <td>$${p.price.toFixed(2)}</td>
        <td>${p.quantity}</td>
        <td>$${rowTotal}</td>
        <td class="actions">
          <button class="btn btn-primary" onclick="editProduct(${
            p.id
          })">Edit</button>
          <button class="btn btn-danger" onclick="deleteProduct(${
            p.id
          })">Delete</button>
        </td>`;
    }

    tbody.appendChild(row);
  });

  totalValue.textContent = total.toFixed(2);
}

function editProduct(id) {
  products = products.map((p) => (p.id === id ? { ...p, editing: true } : p));
  render();
}

function cancelEdit(id) {
  products = products.map((p) => (p.id === id ? { ...p, editing: false } : p));
  render();
}

function saveEdit(id) {
  const name = document.getElementById(`edit-name-${id}`).value.trim();
  const price = parseFloat(document.getElementById(`edit-price-${id}`).value);
  const quantity = parseInt(document.getElementById(`edit-qty-${id}`).value);

  if (!name || price < 0 || quantity < 1) return;

  products = products.map((p) =>
    p.id === id ? { ...p, name, price, quantity, editing: false } : p
  );
  render();
}

function deleteProduct(id) {
  if (confirm("Delete this product?")) {
    products = products.filter((p) => p.id !== id);
    render();
  }
}
