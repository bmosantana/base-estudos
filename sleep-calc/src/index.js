function calculateSleepCycles(sleepTime, wakeTime) {
    var _a = sleepTime.split(":").map(Number), sleepHours = _a[0], sleepMinutes = _a[1];
    var _b = wakeTime.split(":").map(Number), wakeHours = _b[0], wakeMinutes = _b[1];
    // Converte os horários para minutos desde a meia-noite
    var sleepInMinutes = sleepHours * 60 + sleepMinutes;
    var wakeInMinutes = wakeHours * 60 + wakeMinutes;
    // Calcula a diferença total de tempo em minutos (considerando o ciclo de 24 horas)
    var totalMinutes = wakeInMinutes >= sleepInMinutes
        ? wakeInMinutes - sleepInMinutes
        : 24 * 60 - sleepInMinutes + wakeInMinutes;
    var sleepCycles = [];
    var currentMinutes = sleepInMinutes;
    // Adiciona ciclos de 90 minutos até atingir o horário de acordar
    while (currentMinutes < sleepInMinutes + totalMinutes) {
        var hours = Math.floor(currentMinutes / 60) % 24; // Calcula as horas (formato 24h)
        var minutes = currentMinutes % 60; // Calcula os minutos
        sleepCycles.push("".concat(String(hours), ":").concat(String(minutes == 0 ? "00" : minutes)));
        currentMinutes += 90; // Adiciona 90 minutos para o próximo ciclo
    }
    return sleepCycles;
}
var sleepTime = "01:30"; // Horário de dormir
var wakeTime = "07:10"; // Horário de acordar
var sleepCycles = calculateSleepCycles(sleepTime, wakeTime);
console.log(sleepCycles);
