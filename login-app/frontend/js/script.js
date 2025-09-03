document.addEventListener("DOMContentLoaded", () => {
  const loginContainer = document.getElementById("loginContainer");
  const registerContainer = document.getElementById("registerContainer");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  // Switch to Register
  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
  });

  // Switch to Login
  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  });

  // Handle Login Submit
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login Successful!");
        console.log("Token:", data.token);

        // token localStorage এ save করুন
        localStorage.setItem("token", data.token);

        // Example: redirect to dashboard
        // window.location.href = "/dashboard.html";
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server error");
    }
  });

  // Handle Register Submit
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registered Successfully! Please login now.");
        // Show login page after register
        registerContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error("Register Error:", err);
      alert("Server error");
    }
  });
});
