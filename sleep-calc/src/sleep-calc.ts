function calculateSleepCycles(sleepTime: string, wakeTime: string) {
  const [sleepHours, sleepMinutes] = sleepTime.split(":").map(Number);
  const [wakeHours, wakeMinutes] = wakeTime.split(":").map(Number);

  // Converte os horários para minutos desde a meia-noite
  const sleepInMinutes = sleepHours * 60 + sleepMinutes;
  const wakeInMinutes = wakeHours * 60 + wakeMinutes;

  // Calcula a diferença total de tempo em minutos (considerando o ciclo de 24 horas)
  const totalMinutes =
    wakeInMinutes >= sleepInMinutes
      ? wakeInMinutes - sleepInMinutes
      : 24 * 60 - sleepInMinutes + wakeInMinutes;

  const sleepCycles: string[] = [];
  let currentMinutes = sleepInMinutes;

  // Adiciona ciclos de 90 minutos até atingir o horário de acordar
  while (currentMinutes < sleepInMinutes + totalMinutes) {
    const hours = Math.floor(currentMinutes / 60) % 24; // Calcula as horas (formato 24h)
    const minutes = currentMinutes % 60; // Calcula os minutos
    sleepCycles.push(
      `${String(hours)}:${String(minutes == 0 ? "00" : minutes)}`
    );
    currentMinutes += 90; // Adiciona 90 minutos para o próximo ciclo
  }

  return sleepCycles;
}
const sleepTime = "01:30"; // Horário de dormir
const wakeTime = "07:10"; // Horário de acordar

const sleepCycles = calculateSleepCycles(sleepTime, wakeTime);
console.log(sleepCycles);
