const $ = document.querySelector.bind(document);

const mainForm = $('form#logo-generator');
const logoText = $('input#logo-text');
const canvas = $('canvas#output-logo');
const ctx = canvas.getContext('2d');

const fontSize = 50;

mainForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    generateLogo(logoText.value.toUpperCase());
});

function generateLogo (text) {
    if (!text) return;

    ctx.font = fontSize + 'px MonsterFriendBack';
    canvas.width = ctx.measureText(text).width;
    canvas.height = fontSize + 5;

    // Changing canvas dimensions resets the font family.

    // First layer
    ctx.font = fontSize + 'px MonsterFriendBack';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText(text, 0, fontSize);

    // Second layer
    ctx.font = fontSize + 'px MonsterFriendCenter';
    ctx.fillStyle = 'red';
    ctx.fillText(text, 0, fontSize);

    // Third layer
    ctx.font = fontSize + 'px MonsterFriendFore';
    ctx.fillStyle = 'white';
    ctx.fillText(text, 0, fontSize);
}