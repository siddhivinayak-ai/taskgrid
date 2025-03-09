// sidebar
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');

  menuIcon.addEventListener('click', function() {
      sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('active');
  });
});