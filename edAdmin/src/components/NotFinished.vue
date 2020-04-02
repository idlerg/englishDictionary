<template>
    <div class="no-finished">
        <div class="nf-content">
            <img src="/static/images/comImg/no_finished01.png" alt="正在加班中...">
        </div>
    </div>
</template>
<style scoped>
    .no-finished {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        position: relative;
    }
    .nf-content {
        width: 25%;
        height: 65%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .nf-content img {
        display: block;
        width: 100%;
    }
    
</style>