import { useEffect, useState } from 'react';

export function useFetchProducts(url: string) {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState<'idle' | 'error' | 'loading'>('idle');

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setStatus('idle');
      } catch (e) {
        console.error(e);
        setStatus('error');
      }
    };
    fetchProducts();
  }, [url]);

  return { products, status };
}
