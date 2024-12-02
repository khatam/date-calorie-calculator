// محاسبه بر اساس تعداد خرما
function calculateCaloriesByQuantity() {
  const dateType = document.getElementById("date-type").value;
  const quantity = document.getElementById("quantity").value;
  const resultDiv = document.getElementById("result");

  // اطلاعات وزن و کالری هر خرما
  const dateData = {
    "رطب مضافتی": { weight: 19, calories: 28 },
    "خرما کبکاب": { weight: 14, calories: 39 },
    "خرما زاهدی": { weight: 8, calories: 24 },
    "خرما خاصویی": { weight: 5, calories: 14 },
    "خرمای پیارم": { weight: 16, calories: 48 },
    "خرمای مجول": { weight: 24, calories: 72 },
    "خرمای شاهانی": { weight: 9, calories: 27 }  // داده جدید
  };

  if (quantity <= 0 || isNaN(quantity)) {
    resultDiv.textContent = "لطفاً تعداد معتبر وارد کنید.";
    resultDiv.classList.remove("d-none", "alert-success");
    resultDiv.classList.add("alert-danger");
    return;
  }

  // دریافت نوع خرما و محاسبه کالری
  const selectedDate = document.getElementById("date-type").options[document.getElementById("date-type").selectedIndex].text;
  const calories = dateData[selectedDate].calories * quantity;

  resultDiv.textContent = `مجموع کالری بر اساس تعداد: ${calories} کالری`;
  resultDiv.classList.remove("d-none", "alert-danger");
  resultDiv.classList.add("alert-success");
}

// محاسبه بر اساس وزن خرما
function calculateCaloriesByWeight() {
  const dateTypeWeight = document.getElementById("date-type-weight").value;
  const weight = document.getElementById("weight").value;
  const resultDiv = document.getElementById("result");

  // اطلاعات کالری در هر گرم
  const dateTypeData = {
    "رطب": 1.5,  // 150 کالری در 100 گرم
    "خرمای خشک": 3   // 300 کالری در 100 گرم
  };

  if (weight <= 0 || isNaN(weight)) {
    resultDiv.textContent = "لطفاً وزن معتبر وارد کنید.";
    resultDiv.classList.remove("d-none", "alert-success");
    resultDiv.classList.add("alert-danger");
    return;
  }

  // محاسبه کالری
  const calories = dateTypeData[dateTypeWeight] * weight;
  resultDiv.textContent = `مجموع کالری بر اساس وزن: ${calories} کالری`;
  resultDiv.classList.remove("d-none", "alert-danger");
  resultDiv.classList.add("alert-info");
}
