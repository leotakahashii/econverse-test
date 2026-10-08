//Criei está pasta para colocar uma função que formata o preço dos produtos, para que fique mais fácil de ler e entender.

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatPrice(price: number): string {
  return priceFormatter.format(price)
}