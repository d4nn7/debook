        <? require 'db.php' ?> 
        <div class="header">
            <div class="container_head">
                <div class="head_menu_mob">
                    <a href="#" class="mm-trigger">
                        <img src="./img/mm.png" alt="">
                    </a>
                </div>
                <div class="mm-popup">
                    <div class="head_menu_mob">
                        <a href="#" class="mm-trigger">
                            <img src="./img/close.png" alt="">
                        </a>
                    </div>
                    <p class="mm_n">deBOOK</p>
                    <div class="nav_p">
                        <a class="nav-p-item" href="./index.html">Главная</a>
                        <a class="nav-p-item" href="./akcii.html">Акции</a>
                        <a class="nav-p-item" href="./catalog.html">Каталог</a>
                        <a class="nav-p-item" href="./dostavka.html">Доставка</a>
                        <a class="nav-p-item" href="./news.html">Новости</a>
                        <a class="nav-p-item" href="./contacts.html">Контакты</a>
                    </div>
                </div>
                <div class="header_gorod">
                    <img src="./img/svg/🦆 icon _globe_.svg" alt="">
                    <div class="header_gorod_name">
                        <select name="mesto" id="1" class="select">
                            <option value="1" selected>Новосибирск</option>
                            <option value="2">Москва</option>
                            <option value="3">Санкт-Петербург</option>
                        </select>
                    </div>
                </div>

                <div class="name">
                    <a class="home" href="./index.html">deBOOK</a>
                </div>

                <div class="nav">
                    <a class="nav-item" href="./index.html">Главная</a>
                    <a class="nav-item" href="./akcii.html">Акции</a>
                    <a class="nav-item" href="./catalog.html">Каталог</a>
                    <a class="nav-item" href="./dostavka.html">Доставка</a>
                    <a class="nav-item" href="./news.html">Новости</a>
                    <a class="nav-item" href="./contacts.html">Контакты</a>
                </div>
                
                <div class="div_search">
                    <form class="poisk">
                        <input type="text" placeholder="Я ищу...">
                        <div class="button_poisk">
                            <button class="image_button">
                                <img src="./img/svg/🦆 icon _search_.svg" alt=""> 
                            </button>
                        </div>
                        </input>
                    </form>
                </div>

                <div class="header_lkbk">
                    <div class="logo_lk">
                        <a href="#">
                            <img src="./img/svg/🦆 icon _profile circled_.svg" alt="">
                        </a>
                    </div>
                        <div class="text_lk">
                            <a class="nav-item-right" href="#">Личный кабинет</a>
                        </div>
                        <div class="logo_bk">
                            <a href="#" class="cart-trigger">
                                <img src="./img/svg/🦆 icon _cart_.svg" alt="">
                            </a>
                        </div> 

                        <div class="cart-popup">
                            <p class="cart-txt">Корзина</p>
                            <a href="#" class="cart-trigger cart-trigger-close">
                                <img src="./img/close.png" alt="">
                            </a>
                            <div class="cart_wr">
                                <div class="cart_img"><img src="" alt=""></div>
                                <div class="cart_wr_inf">
                                    <p class="cart_nazvan">Название книги</p>
                                    <p class="cart_avtor">Автор</p>
                                    <p class="cart_cena">1000Р</p>
                                    <form class="cart_chbx">
                                        <input type="checkbox">
                                    </form>
                                </div>
                            </div>
                            <div class="cart_opl"><button onclick="window.location.href = 'https://oplata.info';" class="cart_opl_but">Перейти к оплате</button></div>
                        </div> 

                        <div class="text_bk">
                            <a class="nav-item-right cart-trigger" href="#">Корзина</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>