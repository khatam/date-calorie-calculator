// محاسبه بر اساس تعداد خرما
function calculateCaloriesByQuantity() {
  const dateType = document.getElementById("date-type").value;
  const quantity = document.getElementById("quantity").value;
  const resultDiv = document.getElementById("result");

  if (quantity <= 0 || isNaN(quantity)) {
    resultDiv.textContent = "لطفاً تعداد معتبر وارد کنید.";
    resultDiv.classList.remove("d-none", "alert-success");
    resultDiv.classList.add("alert-danger");
    return;
  }

  const calories = dateType * quantity;
  resultDiv.textContent = `مجموع کالری بر اساس تعداد: ${calories} کالری`;
  resultDiv.classList.remove("d-none", "alert-danger");
  resultDiv.classList.add("alert-success");
}

// محاسبه بر اساس وزن خرما
function calculateCaloriesByWeight() {
  const dateTypeWeight = document.getElementById("date-type-weight").value;
  const weight = document.getElementById("weight").value;
  const resultDiv = document.getElementById("result");

  if (weight <= 0 || isNaN(weight)) {
    resultDiv.textContent = "لطفاً وزن معتبر وارد کنید.";
    resultDiv.classList.remove("d-none", "alert-success");
    resultDiv.classList.add("alert-danger");
    return;
  }

  const calories = dateTypeWeight * weight;
  resultDiv.textContent = `مجموع کالری بر اساس وزن: ${calories} کالری`;
  resultDiv.classList.remove("d-none", "alert-danger");
  resultDiv.classList.add("alert-info");
}
