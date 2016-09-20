// Approximate function for spirit density due shifting from default temp 20*C
// x - spirit volume, t - temperature *C
export function forecastSpiritVolume(x, t) {
    x = parseFloat(x); t = parseFloat(t);
    return x * ((0.000001 * t * t) - (0.000914 * t) + 0.825) / 0.8069;
}

// Approximate function for water density due shifting from default temp 20*C
// x - water volume, t - temperature *C
export function forecastWaterVolume(x, t) {
    x = parseFloat(x); t = parseFloat(t);
    return x * (-(0.000004 * t * t) - 0.000075 * t + 1.001) / 0.99829;

}

// Approximate function for spirit degree due shifting from default 96%
// x - original spirit degree %, t - temperature *C
export function forecastSpiritDegree(x, t) {
    x = parseFloat(x); t = parseFloat(t);
    return x * (-(0.0002 * t * t) + (0.218 * t) + 91.666) / 96.0;
}

// Approximate function for solution compression during mixing with water (contracting)
// x - result spirit degree %
export function forecastSolutionContracting(x) {
    x = parseFloat(x);
    return -(0.00144 * x * x) + 0.157 * x - 0.606;
}

// Approximate function for solution expansion by heating after mixing
// x - solution volume, t - temperature *C
export function forecastSolutionExpansion(x, t) {
    x = parseFloat(x); t = parseFloat(t);
    return  x * (-(0.000009 * t * t) - 0.00123 * t + 0.996) / 0.9686;
}

// Calculate final volume solution
export function forecastSolutionVolume(water_vol, water_temp, spirit_vol, spirit_temp, spirit_degree, solution_degree) {
    var spirit_real_degree = forecastSpiritDegree(spirit_degree, spirit_temp),
        spirit_real_volume = forecastSpiritVolume(spirit_vol, spirit_temp),
        water_real_volume = forecastWaterVolume(water_vol, water_temp),
        solution_contracting = forecastSolutionContracting(solution_degree),
        spirit_real_vol, water_real_vol, solution_volume, solution_temp;

    spirit_real_vol = spirit_real_volume * spirit_real_degree / 100;
    water_real_vol = water_real_volume + parseFloat(spirit_vol) - spirit_real_vol;

    solution_volume = spirit_real_vol + water_real_vol - solution_contracting;
    solution_temp = (water_temp > spirit_temp ? water_temp : spirit_temp) * 1.1;

    return forecastSolutionExpansion(solution_volume, solution_temp);
}