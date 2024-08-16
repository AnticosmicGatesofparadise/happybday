const dataAniver = new Date("mar 3, 2025 13:00");
const timeStamp = dataAniver.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAniver = timeStamp - timeStampAgora;

    const diaemMS = 1000 * 60 * 60 * 24;
    const horasemMS = 1000 * 60 * 60;
    const minutoemMS = 1000 * 60;

    const diasAniver = Math.floor(distanciaAniver / diaemMS);
    const horasAniver = Math.floor((distanciaAniver % diaemMS) / horasemMS);
    const minateAniver = Math.floor((distanciaAniver % horasemMS) / minutoemMS);
    const segateAniver = Math.floor((distanciaAniver % minutoemMS) / 1000);

    console.log(diasAniver)
    console.log(horasAniver)
    console.log(minateAniver)
    console.log(segateAniver)

    document.getElementById('contador').innerHTML = `${diasAniver}d ${horasAniver}h ${minateAniver}m ${segateAniver}s`
    
    if (distanciaAniver < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado`
    }
}, 1000)