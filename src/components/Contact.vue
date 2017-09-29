<template lang="html">
    <main class="contact-page" :class="{isRtl:isRtl}">
        <div class="main-sections-wrapper">
            <div class="section-wrapper">
                <div class="section content-section image-section">
                    <div class="row">
                        <div class="small-12 columns content-column-wrapper">
                            <div class="section-title title">
                                <h1 class="title-tag">
                                    <span>{{page_title}}</span>
                                </h1>
                                <p>שדות מסומנים ב-(*) - שדות חובה. ללא מילוי שדות אלו טופס לא ישלח. תודה.</p>
                            </div>
                        </div>
                    </div>

                    <div class="visible-form-wrapper">

                        <form method="post">

                            <div class="row">
                                <div class="medium-6 columns">
                                    <label>
                                        <span>שם פרטי <span class="error-star">(*)</span></span>
                                        <input type="text" name="user_firstname" v-model="user.firstname" required>
                                    </label>
                                    <span class="error" v-if="errors.firstname">שם פרטי - שדה חובה</span>
                                </div>
                                <div class="medium-6 columns">
                                    <label>
                                        <span>שם משפחה <span class="error-star">(*)</span></span>
                                        <input type="text" name="user_lastname" v-model="user.lastname" required>
                                    </label>
                                    <span class="error" v-if="errors.lastname">שם משפחה - שדה חובה</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="medium-6 columns">
                                    <label>
                                        <span>אימייל <span class="error-star">(*)</span></span>
                                        <input type="text" name="user_email" v-model="user.email" required>
                                    </label>
                                    <span class="error" v-if="errors.email">אימייל - שדה חובה</span>
                                </div>
                                <div class="medium-6 columns">
                                    <label>
                                        <span>טלפון</span>
                                        <input type="text" name="user_phone" v-model="user.phone">
                                    </label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="medium-6 columns">
                                    <label>
                                        <span>נושא <span class="error-star">(*)</span></span>
                                        <select name="user_subject" v-model="user.subject">
                                            <option v-for="subject in user.subjects">{{subject}}</option>
                                        </select>
                                    </label>
                                    <span class="error" v-if="errors.subject">נושא - שדה חובה</span>
                                </div>
                                <div class="medium-6 columns">
                                    <label>
                                        <span>אתר</span>
                                        <input type="text" name="user_website" v-model="user.website">
                                    </label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="medium-12 columns">
                                    <label>
                                        <span>הודעה <span class="error-star">(*)</span></span>
                                        <textarea name="user_message" rows="10" v-model="user.message" required></textarea>
                                    </label>
                                    <span class="error" v-if="errors.message">הודעה - שדה חובה</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="small-12 columns">
                                    <button class="button button-primary" @click.prevent="showPreview">הצג פניה</button>
                                </div>
                            </div>

                        </form>

                    </div>

                    <div v-if="!hidden" class="hidden-form-results">
                        <div class="row">
                            <div class="small-12 columns">
                                <div class="form-preview">
                                    <p><strong>שם פרטי:</strong> {{user.firstname}}</p>
                                    <p><strong>שם משפחה:</strong> {{user.lastname}}</p>
                                    <p><strong>אימייל:</strong> {{user.email}}</p>
                                    <p v-if="user.phone"><strong>טלפון:</strong> {{user.phone}}</p>
                                    <p><strong>נושא פניה:</strong> {{user.subject}}
                                        <span v-if="user.subject == 'תמיכה טכנית'" class="error-message"> -
                                            <strong>משתמש יקר, שירותי תמיכה טכנית ניתנים רק למשתמשים שרכשו גרסת פרו. אם יש בבעלותך רשיון של גרסת פרו אתה מוזמן לפתוח פניה כאן:<br />
                                                <a href="https://accessibility-helper.co.il/support/">
                                                    https://accessibility-helper.co.il/support
                                                </a>
                                            </strong>
                                        </span>
                                    </p>
                                    <p v-if="user.website"><strong>אתר אינטרנט:</strong> {{user.website}}</p>
                                    <p><strong>תוכן ההודעה:</strong> {{user.message}}</p>
                                    <div v-if="user.subject != 'תמיכה טכנית'">
                                        <button type="button" class="button success large" @click="sendForm">שלח פניה</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="message_sent">
                        <div class="small-12 columns">
                            <div class="sent-message">
                                {{message_sent}}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import axios from 'axios';
export default {
    data(){
        return {
            page_title: 'צור קשר',
            isRtl: true,
            hidden: true,
            message_sent : '',
            user : {
                firstname: '',
                lastname : '',
                email    : '',
                phone    : '',
                website  : '',
                subject  : '',
                subjects : ['שאלה כללית', 'שאלה לפני קניה', 'דיווח על שגיאה', 'תמיכה טכנית'],
                message  : ''
            },
            errors : {
                firstname: false,
                lastname : false,
                email    : false,
                message  : false,
                subject  : false
            }
        }
    },
    computed: {
        emailValidation() {
            return {
                email: emailRE.test(this.user.email)
            }
        }
    },
    methods: {
        showPreview(){

            if( !this.user.firstname || this.user.firstname == ' ' ){
                this.errors.firstname = true;
            } else {
                this.errors.firstname = false;
            }

            if( !this.user.lastname || this.user.lastname == ' ' ){
                this.errors.lastname = true;
            } else {
                this.errors.lastname = false;
            }

            if( ! this.emailValidation.email ){
                this.errors.email = true;
            } else {
                this.errors.email = false;
            }

            if( !this.user.subject || this.user.subject == ' ' ){
                this.errors.subject = true;
            } else {
                this.errors.subject = false;
            }

            if( !this.user.message || this.user.message == ' ' ){
                this.errors.message = true;
            } else {
                this.errors.message = false;
            }

            if( this.user.firstname && this.user.lastname && this.user.subjects && this.emailValidation.email ){
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        },
        sendForm(){
            var send_form_ajax = 'https://accessibility-helper.co.il/il/sendForm.php';
            var params = new URLSearchParams();
            params.append('action', 'send_contact_form');
            params.append('firstname', this.user.firstname);
            params.append('lastname', this.user.lastname);
            params.append('email', this.user.email);
            params.append('subject', this.user.subject);
            params.append('message', this.user.message);
            if( this.user.website ){
                params.append('website', this.user.website);
            }
            if( this.user.phone ){
                params.append('phone', this.user.phone);
            }

            axios.post( send_form_ajax, params)
              .then(function (response) {
                    if( response.data.status == 'ok' ){
                        this.message_sent = response.data.html;

                        this.hidden = true;
                        this.user.firstname = '';
                        this.user.lastname  = '';
                        this.user.email     = '';
                        this.user.phone     = '';
                        this.user.website   = '';
                        this.user.subject   = '';
                        this.user.message   = '';
                    }
              }.bind(this))
              .catch(function (error) {
                  console.log(error);
              });
        }
    }
}
</script>
