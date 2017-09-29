<template lang="html">
    <main class="about-page" :class="{isRtl:isRtl}">
        <div class="main-sections-wrapper" v-if="page_data.about">
            <div class="section-wrapper">
                <div class="section content-section image-section ">
                    <div class="row">
                        <div class="small-12 columns content-column-wrapper">
                            <div class="section-title title">
                                <h1 class="title-tag">
                                    <span>{{page_title}}</span>
                                </h1>
                            </div>
                            <div class="section-body" v-html="page_data.about"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'about',
    props: ['page_data'],
    data(){
        return {
            page_title: 'אודות',
            isRtl : true
        }
    }
}
</script>
