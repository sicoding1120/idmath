function luasPersegi(s) {
    if (s !== typeof Number) {
        parseInt(s) * parseInt(s);
    }
    return s * s;
}

function luasPersegiPanjang(p, l) {
    return p * l;
}

function luasLingkaran(jj) {
    // jika nilai jj bertype string
    if (jj !== typeof Number) {
        // jika nilai jj itu 7
        if(jj == 7) {
            return 22 * jj;
        }
        // jika nilai jj itu kelipatan 7
        if (jj % 7 === 0) {
            return 22 / 7 * Math.pow(parseInt(jj), 2);
        } 
        return Math.PI * Math.pow(parseInt(jj), 2);
    }
    // jika nilai jj bertype number
    if (jj == 7) { 
        return 22/7 * Math.pow(jj, 2);
    }
    return Math.PI * Math.pow(jj, 2);
}

function luasTrapesium(alasAtas, alasBawah, tinggi) {
    return 0.5 * (alasAtas + alasBawah) * tinggi;
}

function luasTrapesium(alasAtas, alasBawah, tinggi) {
    return 0.5 * (alasAtas + alasBawah) * tinggi;
}

function volumeKubus(s) {
    return Math.pow(s, 3);
}

function volumeBalok(p, l, t) {
    return p * l * t;
}

function volumeTabung(jj, t) {
    return Math.PI * Math.pow(jj, 2) * t;
}


module.exports = {
    luasPersegi,
    luasPersegiPanjang,
    luasLingkaran,
    luasTrapesium,
    volumeKubus,
    volumeBalok,
    volumeTabung
}