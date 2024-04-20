<template>
    <div class="pageTitle">
        <span class="title">{{ title }}</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "PageTitleView",
        props: ['title']
    }
</script>