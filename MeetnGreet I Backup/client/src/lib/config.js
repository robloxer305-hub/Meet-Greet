export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || API_BASE_URL || '';

// Production server URL (set your Render URL here once deployed)
if (!API_BASE_URL && typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
  // This will use your Render server URL - update after deployment
  console.log('Production mode - ensure API_BASE_URL env var is set or server is accessible');
}
