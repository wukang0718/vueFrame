<template>
    <div
        id="app"
        :style="style"
    >
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                width: 1920,
                height: 1080
            };
        },
        computed: {
            style() {
                return `width: ${this.width}px; height: ${this.height}px`;
            }
        },
        created() {
            this.getStyle();
            window.addEventListener("resize", this.getStyle);
        },
        methods: {
            getStyle() {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            }
        }
    };
</script>
