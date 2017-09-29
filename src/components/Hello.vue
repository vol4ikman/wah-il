<template>
    <main class="home-page" :class="{isRtl:isRtl}">

        <div class="main-sections-wrapper" v-if="page_data.sections">
            <div class="section-wrapper">
                <div v-for="(item, index) in page_data.sections" class="section content-section image-section">

                    <div class="row" v-if="item.acf_fc_layout != 'text_only'">
                        <div class="large-6 medium-5 columns image-column-wrapper">
                            <div class="image-container">
                                <img :src="item.image.url" :alt="item.image.alt">
                                <div v-if="item.youtube_video_id" class="image-call-to-action">
                                    <button @click="showModal = true" class="call-popup" :data-videoid="item.youtube_video_id">
                                        {{item.video_button_label}}
                                    </button>
                                    <modal v-if="showModal" @close="showModal = false" :videoid="item.youtube_video_id"></modal>
                                </div>
                            </div>
                        </div>
                        <div class="large-6 medium-7 columns content-column-wrapper">
                            <div class="section-title title">
                                <h3 class="title-tag"><span>{{ item.title }}</span></h3>
                            </div>
                            <div class="section-body">
                                <div v-if="item.content" v-html="item.content"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-else="item.acf_fc_layout == 'text_only'">
                        <div class="small-12 columns content-column-wrapper">
                            <div class="section-title title">
                                <h1 class="title-tag"><span>{{ item.section_title }}</span></h1>
                            </div>
                            <div class="section-body">
                                <div v-if="item.section_content" v-html="item.section_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
import modal from './Modal';
export default {
    name: 'hello',
    props: ['page_data'],
    data () {
        return {
            page_title  : 'WP Accessibility Helper - תוסף נגישות של וורדפרס',
            isRtl       : true,
            showModal   : false
        }
    },
    components: {
        modal
    }
}
</script>
