// alert(1)
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><img class="mainLogo" src="/resources/logo.png"></span>
                    </a>
                </li>
                <li>
                    <a href="/Html/admin dashboard.html">
                        <span class="icon"><span class="material-symbols-outlined">
                            home_app_logo
                            </span></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="people"></ion-icon></span>
                        <span class="title">Customer</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="chatbubble-ellipses"></ion-icon></span>
                        <span class="title">Message</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="help-circle"></ion-icon></span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="cog"></ion-icon></span>
                        <span class="title">Setting</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <span class="title">Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span class="title">Log Out</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- main -->
        <div class="main">
            <div class="topbar">
                <div class="toggle">
                    
                    <ion-icon name="menu"></ion-icon>
                </div>

                <div class="mainBoxName">
                    <span class="title">Wharehouse<span class="genesis">Genesis</span></span>
                </div>

                <!-- Search -->
                <div class="search">
                    <label>
                        <input type="text" placeholder="Search here">
                        <ion-icon name="search"></ion-icon>
                    </label>
                </div>

                <!-- User -->
                <div class="user">
                    <img src="/resources/login logo1.png">
                </div>
            </div>












        <script>

        // MenuToggle
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');

        toggle.onclick = function(){
            navigation.classList.toggle('active')
            main.classList.toggle('active')
        }

        let list = document.querySelectorAll('.navigation li');
        function activeLink() {
            list.forEach((item) => 
            item.classList.remove('hovered'));
            this.classList.add('hovered') 
        }
        list.forEach((item) =>
        item.addEventListener('mouseover',activeLink));
        </script>
        `
    }
}

customElements.define('my-header', MyHeader)