

function toggleSidebar() {
  var body = document.body;
  var dashboardContent = document.getElementById("dashboardContent");

  if (body.classList.contains("sidebar-expanded")) {
    body.classList.remove("sidebar-expanded");
    dashboardContent.style.marginLeft = "20%";
  } else {
    body.classList.add("sidebar-expanded");
    dashboardContent.style.marginLeft = "0%";
  }
}


