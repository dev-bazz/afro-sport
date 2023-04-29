<script setup>
    const props = defineProps({
        player: {
            type: Object,
            required: true,
            default(rawProps) {
                return { message: 'hello' }
            }
        }
    })
</script>

<template>
    <div class="card">
        <div class="card__img">
            <img :src="props.player.dp ?? '/src/pages/Home/assets/player-dp.png'" alt="Player DP">
            <p>{{props.player.price ? `From $${props.player.price}` : "Free"}}</p>
        </div>
        <div class="card__info">
            <h2>{{props.player.name ?? 'Player Name'}}</h2>
            <p>{{props.player.category ?? 'Goalkeeper'}} • {{props.player.club ?? "Free agent"}}</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: 100%;
        border: 1px solid #dcdcdc;
        border-radius: 8px;
        padding: 8px;
        font-family: "Lato", sans-serif;
    }

    .card__img {
        width: 100%;
        position: relative;
    }

    .card__img img {
        width: 100%;
        border-radius: 8px;
    }

    .card__img p {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: #fff;
        padding: 7px;
        border-radius: 23px;
        font-size: 11px;
    }

    .card__info {
        padding-top: 25px;
    }
    .card__info h2{
        font-size: 20px;
        font-weight: 400;
        text-transform: capitalize;
        margin: 0;
        margin-bottom: 10px;
    }

    .card__info p {
        font-size: 18px;
        color: #5A6979;
        margin: 0;
    }
</style>