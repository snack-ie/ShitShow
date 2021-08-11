const sentry_weapon = extend(Weapon, "sentry-weapon", {
    name: "test",
    x: 0,
    y: 0,
    rotate: true,
    reload: 10,
    bullet: Bullets.standardCopper
});

const sentry = extend(UnitType, "sentry", {
    type: "Ground",
    speed: 0,
    rotateSpeed: 1,
    rotateShooting: true
});

sentry.weapons.add(sentry_weapon)

sentry.constructor = () => extend(UnitEntity, {
    
});