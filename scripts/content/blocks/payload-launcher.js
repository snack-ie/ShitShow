// const payloadBulletType = extendContent(bulletType, "payloadBulletType", {
    
// })

const launcher = extendContent(PayloadAcceptor, "payload-launcher", {
    
});

launcher.buildType = () => extendContent(PayloadAcceptor.PayloadAcceptorBuild, launcher, {
    shoot() {
        
    }
});