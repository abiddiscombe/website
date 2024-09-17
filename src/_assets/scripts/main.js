// Subtle DOM Tricks for Nerds.

const hoverEffects = (trigger, emoji) => {
    const target = document.querySelector("#icon-target");
    trigger.addEventListener('mouseleave', () => target.innerText = "👨‍💻");
    trigger.addEventListener('mouseenter', () => target.innerText = emoji);
}

hoverEffects(document.querySelector('#icon-trigger-work'), "🗺️");
hoverEffects(document.querySelector('#icon-trigger-github'), "🚀");
hoverEffects(document.querySelector('#icon-trigger-linkedin'), "👋");