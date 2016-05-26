// Approximate function for spirit density
// x - original spirit density, t - temperature *C
export function forecastSpiritDensity(t) {
    return (0.000001 * t * t) - (0.000914 * t) + 0.825;
}

// Approximate function for spirit degree
// x - original spirit degree %, t - temperature *C
export function forecastSpiritDegree(x, t) {
    return x * (-(0.0002 * t * t) + (0.218 * t) + 91.666) / 96.0;
}

// Approximate function for water density
// x - original water density, t - temperature *C
export function forecastWaterDensity(t) {
    return (0.000005 * t * t) - (0.000006 * t) + 1;
}

// Calculate final volume solution
export function forecastSolutionVolume(water_vol, water_temp, spirit_vol, spirit_temp, spirit_degree) {
    var spirit_real_degree = forecastSpiritDegree(spirit_degree, spirit_temp),
        spirit_real_vol = spirit_vol * spirit_real_degree / 100,
        water_real_vol = water_vol + spirit_vol - spirit_real_vol,
        spirit_real_density = forecastSpiritDensity(spirit_temp),
        water_real_density = forecastWaterDensity(water_temp),
        full_vol = water_real_vol + spirit_real_vol,
        avg_dens, full_mass;

    avg_dens = (water_real_density * water_real_vol + spirit_real_density * spirit_real_vol) / full_vol;
    full_mass = spirit_real_vol * spirit_real_density + water_real_vol * water_real_density;

    return (full_mass / avg_dens).toFixed(2);
}