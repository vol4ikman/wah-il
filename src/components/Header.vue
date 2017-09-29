<template lang="html">
    <header class="site-header nav_bar" :class="{isRtl : isRtl}">

        <div class="row">
            <div class="large-3 medium-6 columns logo-column">

                <button id="nav-icon2" :class="{open : isOpen}" @click="isOpen = ! isOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="logo">
                    <div class="small-wah-logo-container">
                        <a href="https://accessibility-helper.co.il" class="small-wah-logo">
                            <span>W</span><span>A</span><span >H</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="large-6 medium-7 columns hide-for-medium-only hide-for-small-only menu-column">
                <nav>
                    <ul>
                        <li><router-link to="/">ראשי</router-link></li>
                        <li><router-link to="pro">WAH PRO</router-link></li>
                        <li><router-link to="about">אודות</router-link></li>
                        <li><router-link to="contact">צור קשר</router-link></li>
                        <li><a href="https://accessibility-helper.co.il">Eng</a></li>
                    </ul>
                </nav>
            </div>

            <div class="large-3 medium-6 columns slogan-column">
                <div class="slogan">
                    הנגשת אתרי וורדפרס
                </div>
            </div>
        </div>

        <div class="row mobile-menu-row" :class="{open : isOpen}">
            <div class="small-12 columns">
                <nav>
                    <ul>
                        <li><router-link to="/">ראשי</router-link></li>
                        <li><router-link to="pro">WAH PRO</router-link></li>
                        <li><router-link to="about">אודות</router-link></li>
                        <li><router-link to="contact">צור קשר</router-link></li>
                        <li><a href="https://accessibility-helper.co.il">Eng</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    data(){
        return {
            isRtl: true,
            currentLanguage: {
                code: 'il',
                name: 'Hebrew'
            },
            isOpen: false,
            languages: [
                {
                    code: 'en',
                    name: 'English',
                    enabled : true,
                    icon: '',
                },
                {
                    code: 'il',
                    name: 'Hebrew',
                    enabled : true,
                    icon: '',
                },
                {
                    code: 'ru',
                    name: 'Russian',
                    enabled : false,
                    icon: '',
                },
            ]
        }
    }
}
</script>

<style lang="css">
</style>
