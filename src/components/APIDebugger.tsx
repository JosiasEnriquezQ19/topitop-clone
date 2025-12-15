import { useEffect } from 'react';
import config from '../config';

export default function APIDebugger() {
  useEffect(() => {
    console.group('🔍 API Connection Debug Info');
    console.log('📡 Base URL:', config.api.baseUrl);
    console.log('⏱️ Timeout:', config.api.timeout + 'ms');
    console.log('🌍 Environment:', import.meta.env.MODE);
    console.log('🔧 Config:', config);
    
    // Test de conectividad básica
    fetch(config.api.baseUrl + '/api/productos')
      .then(response => {
        console.log('✅ API Response Status:', response.status);
        console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));
        return response.json();
      })
      .then(data => {
        console.log('📦 API Data Sample:', data?.slice?.(0, 2) || data);
      })
      .catch(error => {
        console.error('❌ API Connection Error:', error);
        console.error('🔗 Trying to connect to:', config.api.baseUrl);
        console.error('💡 Make sure your backend is running on port 8092');
      });
      
    console.groupEnd();
  }, []);

  return null; // Este componente no renderiza nada
}