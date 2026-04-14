function openDetails(name, dept, gpa, email) {
    localStorage.setItem("name", name);
    localStorage.setItem("dept", dept);
    localStorage.setItem("gpa", gpa);
    localStorage.setItem("email", email);

    window.location.href = "details.html";
}

function goBack() {
    window.location.href = "index.html";
}