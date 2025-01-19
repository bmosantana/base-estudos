// function sleepCycle(startTime:string, endTime:string) {
//     const results: string[] = [];
//     const [hourStart, minuteStart] = startTime.split(':').map(Number);

//     const [hour, minutesEnd] = endTime.split(':').map(Number);

//     let timeStart = new Date();
//     timeStart.setHours(hourStart, minuteStart, 0, 0);

//     let endTimeDate = new Date();
//     endTimeDate.setHours(hour, minutesEnd, 0, 0);

//     while (timeStart.toTimeString().slice(0, 5) < endTimeDate.toTimeString().slice(0, 5)) {
//         timeStart.setHours(timeStart.getHours() + 90);
//         results.push(timeStart.toTimeString().slice(0, 5));  
//     }

//     return results;
// }

const calculateSleepCycles = (
    sleepTime: string,
    wakeTime: string
  ): string[] => {
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
      sleepCycles.push(`${String(hours)}:${String(minutes)}`);	
      currentMinutes += 90; // Adiciona 90 minutos para o próximo ciclo
    }
  
    return sleepCycles;
  };
  
  // Exemplo de uso
  const sleepTime = "23:00"; // Horário de dormir
  const wakeTime = "07:00"; // Horário de acordar
  
  const sleepCycles = calculateSleepCycles(sleepTime, wakeTime);
  console.log(sleepCycles);
  // Saída: [ '23:00', '00:30', '02:00', '03:30', '05:00', '06:30' ]
  

// console.log(sleepCycle('22:00', '06:00')); // 22:00