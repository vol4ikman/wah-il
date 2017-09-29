<template lang="html">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <div class="iframe-popup-wrapper">
                            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + videoid" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <button class="modal-default-button" @click="$emit('close')">סגור</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',
    props: ['videoid'],
    data(){
        return {
            showModal : false
        }
    }
}
</script>
