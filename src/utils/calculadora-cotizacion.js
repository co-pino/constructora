export function calcularRangoBase(servicio, metrosCuadrados) {
  const m2Efectivos = Math.max(metrosCuadrados, servicio.minimoM2)

  return {
    minimo: servicio.precioMin * m2Efectivos,
    maximo: servicio.precioMax * m2Efectivos,
    usoMinimo: metrosCuadrados < servicio.minimoM2,
  }
}

export function aplicarExtras(rango, extrasSeleccionados, listaExtras) {
  let { minimo, maximo } = rango

  for (const extraId of extrasSeleccionados) {
    const extra = listaExtras.find((e) => e.id === extraId)
    if (!extra) continue

    if (extra.tipo === 'porcentaje') {
      minimo += minimo * extra.valor
      maximo += maximo * extra.valor
    } else {
      minimo += extra.valor
      maximo += extra.valor
    }
  }

  return { minimo: Math.round(minimo), maximo: Math.round(maximo) }
}

export function formatearCLP(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
}