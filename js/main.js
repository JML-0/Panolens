var panorama_main_image, panorama_troca_image, viewer_main;
var infospot1, infospot2, infospot3, infospot4, infospot5;

// Main panorama
viewer_main = new PANOLENS.Viewer({ enableReticle: false, output: 'console', viewIndicator: true, autoRotate: false, autoRotateSpeed: 2, autoRotateActivationDuration: 5000, dwellTime: 1000 });

const logEvent = ( { type } ) => console.log( type );
viewer_main.reticle.addEventListener('reticle-start', logEvent );
viewer_main.reticle.addEventListener('reticle-update', logEvent );
viewer_main.reticle.addEventListener('reticle-end', logEvent );
viewer_main.reticle.addEventListener('reticle-ripple-start', logEvent );
viewer_main.reticle.addEventListener('reticle-ripple-end', logEvent );

panorama_main_image = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/paris.jpg' );
panorama_main_image.addEventListener( 'progress',function(e){
console.log(e.progress);
});

panorama_troca_image = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/troca.jpg' );
panorama_troca_image.addEventListener( 'progress',function(e){
console.log(e.progress);
});

panorama_main_image.link( panorama_troca_image, new THREE.Vector3( -8000, -3000, -5000 ) );
panorama_troca_image.link( panorama_main_image, new THREE.Vector3( 2630.30, 132.81, 3643.93 ) );

infospot3 = new PANOLENS.Infospot( 100, PANOLENS.DataImage.Info );
infospot3.position.set( 2000, 1000, 0 );
infospot3.addHoverElement( document.getElementById( 'desc-container' ), 200 );

infospot4 = new PANOLENS.Infospot( 100, PANOLENS.DataImage.Info );
infospot4.position.set( 1500, 1000, 0 );
infospot4.addHoverElement( document.getElementById( 'desc-container2' ), 200 );

infospot5 = new PANOLENS.Infospot( 100, PANOLENS.DataImage.Info );
infospot5.position.set( -3000, 100, 2000 );
infospot5.addHoverElement( document.getElementById( 'desc-container3' ), 200 );

infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set( -7000, -1000, -5000 );
infospot2.addHoverText( 'Trocadero' );

infospot1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot1.position.set( -7000, -1000, -5000 );
infospot1.addHoverText( 'Du texte ici' );

infospot6 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot6.position.set( -6000, -1000, -5000 )
infospot6.addHoverElement( document.getElementById( 'desc-container4' ), 200 );

panorama_main_image.add( infospot2, infospot3, infospot4 );
panorama_troca_image.add( infospot5, infospot1, infospot6 );

viewer_main.add( panorama_main_image, panorama_troca_image );

// Test repeated scenario
viewer_main.enableControl( PANOLENS.CONTROLS.DEVICEORIENTATION );
viewer_main.enableEffect( PANOLENS.MODES.CARDBOARD );
viewer_main.enableControl( PANOLENS.CONTROLS.ORBIT );
viewer_main.enableEffect( PANOLENS.MODES.NORMAL );