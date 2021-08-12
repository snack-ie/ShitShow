/*
name: gemei-cannon
    reload: 350
    x: 0
    y: 0
    mirror: false
    rotate: true
    shots: 1
    rotateSpeed: 1.4
    alternate: false
    shootY: 19
    recoil: 16
    shadow: 50
    bullet:
        {
        type: ShrapnelBulletType
        length: 700
        damage: 2350
        witdh: 65
        lifetime: 100
        serrationLenScl: 100
        serrationSpaceOffset: 500
        serrations: 3
        serrationWidth: 10
        largeHit: true
        fromColor: 84f491
        toColor: 84f491
        healPercent: 25
        collidesTeam: true
        sideAngle: 10
        }
    }
*/
const sentrygun = extend(Weapon, "sentry-gun", {
    name: "shitshow-sentry-gun",
    x: 0,
    y: 5,
    mirror: false,
    reload: 10,
    bullet: Bullets.standardCopper
});
/*
 "type"          : "Ground",
    "name"          : "sentry"
    "speed"         : 0,
    "rotateSpeed"   : 0,
    "rotateShooting": true,
    "engineSize"    : 0,
*/
const sentry = extend(UnitType, "sentry", {
    type: "legs",
    name: "shitshow-sentry",
    speed: 0,
    rotateSpeed: 5,
    rotateShooting: true,
    engineSize: 0,
    allowLegStep: true,
    legCount: 4,
    legLenth: 9.0,
    legTrns: 0.6,
    legMoveSpace: 1.4
});

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