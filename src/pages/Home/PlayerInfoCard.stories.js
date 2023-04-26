import PlayerInfoCard from "./PlayerInfoCard.vue";


export default {
    title: "Components/Player Info Card",
    component: PlayerInfoCard,
    argTypes: {
        player: {
            dp: '/src/pages/Home/assets/player-dp.png',
            price: '500',
            name: 'Mezut Ozil',
            category: 'Centre Forward',
            club: 'Arsenal'
        }
    },
};

export const Default = {
    args: {
        player: {
            dp: '/src/pages/Home/assets/player-dp.png',
            price: '500',
            name: 'Mezut Ozil',
            category: 'Centre Forward',
            club: 'Arsenal'
        }
    },
};