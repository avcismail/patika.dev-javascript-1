let name = window.prompt("İsminiz nedir?");
document.getElementById("name").innerHTML = name;

function tarihSaat() {
    let tarih = new Date().toLocaleTimeString();
    let gun = new Date();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    document.getElementById("hour").innerHTML = tarih;
    document.getElementById("day").innerHTML = gunler[gun.getDay()];
}

tarihSaat()
setInterval(()=>{
    tarihSaat()
}, 1000)