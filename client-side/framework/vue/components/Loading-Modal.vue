<template>
    <div class="modal">

        <div class="modal-background"></div>
        <div class="modal-content">
            <p class="loading-image">
                <img src="your-image-or-placeholder-here" alt="">
            </p>
        </div>
    </div>
</template>

<script>

export default {



}

</script>

<style scoped>

.loading-image{
    background-color: transparent;
}
.modal-content{
    background-color:transparent;
    box-shadow:none;
    border:none;
}
.modal {
    display:flex;
}
img {
    height: 100px;
    width:100px;
    margin:0 auto;
}

</style> 
