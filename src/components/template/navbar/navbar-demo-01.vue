<template>
  <div class="body">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
          <ul class="dropdown">
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Our Team</a>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Our Story</a>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Careers</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Services</a>
          <ul class="dropdown">
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Web Design</a>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">SEO</a>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Marketing</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.navbar {
  background-color: #333;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition:
    background-color 0.3s,
    transform 0.3s;
  position: relative;
  z-index: 1;
}

.nav-link:hover {
  background-color: #555;
  transform: scale(1.1);
}

.nav-link::before,
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #3498db;
  transition: all 0.3s;
  z-index: -1;
}

.nav-link::before {
  top: 0;
}

.nav-link::after {
  bottom: 0;
}

.nav-link:hover::before,
.nav-link:hover::after {
  left: 0;
  width: 100%;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 150px;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.dropdown-item {
  position: relative;
}

.dropdown-link {
  display: block;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;
}

.dropdown-link:hover {
  background-color: #666;
}

.nav-item:hover .dropdown {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
</style>
