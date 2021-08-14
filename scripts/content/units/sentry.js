let pee;
let peeshower;

let getCode = require("utils/getCode").func

if (getCode("dpg")) {

    pee = extend(Liquid, "pee", {
        color: new Color(0.831372549, 0.7529411765, 0.3137254902)
    });

    peeshower = extend(LiquidBulletType, {
        liquid: pee
    });

}

const sentryBulletType = extend(BasicBulletType, {
    damage: 12 /* i rember */,
    lifetime: 105
})

const sentrygun = extend(Weapon, "sentry-gun", {
    name: "shitshow-sentry-gun",
    x: 0,
    y: 5,
    mirror: false,
    reload: 10,
    rotateSpeed: 5,
    bullet: sentryBulletType
});

const sentry = extend(UnitType, "sentry", {
    type: "legs",
    name: "shitshow-sentry",
    speed: 0,
    range: 27,
    rotateSpeed: 5,
    rotateShooting: true,
    engineSize: 0,
    allowLegStep: true,
    legCount: 4,
    legLenth: 9.0,
    legTrns: 0.6,
    legMoveSpace: 1.4
});

if (getCode("dpg")) {
    sentrygun.bullet = peeshower
    sentrygun.reload = 0.01
} 

sentry.weapons.add(sentrygun)

sentry.constructor = () => extend(LegsUnit, {});

const SentryFac = extend(UnitFactory, "sentry-fac", {
    name: "shitshow-sentry-fac",
    size: 3,
    buildVisibility: BuildVisibility.shown,
    category: Category.units
});

SentryFac.plans.add(
    new UnitFactory.UnitPlan(
        sentry, 500, ItemStack.with(Items.silicon, 70, Items.metaglass, 75)
    )
)
SentryFac.consumes.power(1.2)