const soldier = {
    name: 'Бот',
    health: 10,
    weapon: {
        name: 'ak-47',
        bullets: 30,
    },
    supplies: 3,
    fire: function() {
        if (this.weapon.bullets === 0) {
            return console.log('обойма пуста. Перезарядитесь');
        }
        this.weapon.bullets--;
        console.log('бах-бах');
    },
    reload: function() {
        if (this.supplies === 0) {
            return console.log('не осталось припасов');
        }
        this.weapon.bullets = 30;
        this.supplies--;
        console.log('перезарядка...');
    },
    wound: function() {
        this.health--;
        if (this.health === 0) {
            console.log('Ты проиграл');
        }
    },
};