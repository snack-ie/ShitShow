const sentry = extend(UnitType, "sentry", {
    type: "Ground",
    speed: 0,
    rotateSpeed: 1,
    rotateShooting: false,
    weapons: []
});

sentry.constructor = () => extend(UnitEntity, {
    
});