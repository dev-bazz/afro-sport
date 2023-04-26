<script setup>
</script>

<template>
    <div class="player-info-card">
        <div class="img">
            <img src="./assets/player-dp.png" alt="Player DP">
            <p>From $29</p>
        </div>
        <div class="info">
            <h2>Player Name</h2>
            <p>Goalkeeper • Club Name</p>
        </div>
    </div>
</template>

<style scoped>
    .player-info-card {
        width: 100%;
        border: 1px solid #dcdcdc;
        border-radius: 8px;
        padding: 8px;
        font-family: "Lato", sans-serif;
    }

    .img {
        width: 100%;
        position: relative;
    }

    .img p {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: #fff;
        padding: 7px;
        border-radius: 23px;
        font-size: 11px;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    .info {
        padding-top: 25px;
    }
    .info h2{
        font-size: 20px;
        font-weight: 400;
        text-transform: capitalize;
        margin: 0;
        margin-bottom: 10px;
    }

    .info p {
        font-size: 18px;
        color: #5A6979;
        margin: 0;
    }
</style>