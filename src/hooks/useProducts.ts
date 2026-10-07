import { useState, useEffect } from "react";
import type { Product } from "../types/products";

//Endereço do JSON de teste, que contém a lista de produtos.
const PRODUCTS_URL =
  '/api-produtos/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
//Formato da resposta
interface ProductsResponse {
  success: boolean;
  products: Product[];
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect roda um código quando o componente aparece na tela.
  // O [] no final faz isso acontecer só uma vez.
  useEffect(() => {
    // A função de dentro é async porque fetch demora e precisamos esperar a resposta.
    async function loadProducts() {
      // try tenta executar o código. Se algo der errado, o fluxo pula para o catch.
      try {
        // fetch faz a requisição ao endereço e await espera ela terminar.
        const response = await fetch(PRODUCTS_URL);

        // fetch só falha sozinho se a internet cair. Se o servidor responder com
        // erro (como 404 ou 500), eu preciso conferir response.ok por conta própria.
        if (!response.ok) {
          throw new Error(`Erro ${response.status}`);
        }

        // Converte a resposta de texto para um objeto JavaScript.
        const data: ProductsResponse = await response.json();

        // Guarda a lista no estado.
        setProducts(data.products);
      } catch (err) {
        // Qualquer falha cai aqui: guardamos uma mensagem para mostrar na tela.
        console.error("Falha ao buscar produtos: ", err);
        setError("Não foi possível carregar os produtos.");
      } finally {
        // O finally vai rodar sempre, dando certo ou errado.
        // Quando a busca terminar de qualquer jeito, o carregamento acaba aqui.
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return { products, loading, error };
}
