/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// --- Centralized API Key Management ---

type ServiceName = 'GEMINI' | 'OPENROUTER' | 'HUGGINGFACE' | 'SUPABASE_URL' | 'SUPABASE_ANON_KEY';

/**
 * Retrieves an API key for a given service.
 * It checks for Next.js public environment variables (e.g., process.env.NEXT_PUBLIC_...).
 *
 * @param serviceName - The name of the service to get the key for.
 * @returns The API key string.
 */
export function getApiKey(serviceName: ServiceName): string {
    const keyMap: { [key in ServiceName]: string } = {
        GEMINI: 'API_KEY',
        OPENROUTER: 'OPENROUTER_API_KEY',
        HUGGINGFACE: 'HUGGINGFACE_API_KEY',
        SUPABASE_URL: 'SUPABASE_URL',
        SUPABASE_ANON_KEY: 'SUPABASE_ANON_KEY',
    };

    const baseKeyName = keyMap[serviceName];
    if (!baseKeyName) {
        console.error(`Unknown service name for API key: ${serviceName}`);
        return '';
    }

    const nextKeyName = `NEXT_PUBLIC_${baseKeyName}`;
    const nextKey = process.env[nextKeyName];
    
    if (nextKey) {
        return nextKey;
    }

    const placeholders: { [key in ServiceName]?: string } = {
        GEMINI: 'YOUR_GOOGLE_GEMINI_API_KEY',
        OPENROUTER: 'YOUR_OPENROUTER_API_KEY',
        HUGGINGFACE: 'YOUR_HUGGINGFACE_API_KEY',
        SUPABASE_URL: 'YOUR_SUPABASE_PROJECT_URL',
        SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_PUBLIC_KEY',
    };
    
    const placeholder = placeholders[serviceName];
    if (placeholder) {
        console.warn(`API key for ${serviceName} not found. Ensure the '${nextKeyName}' environment variable is set in your .env.local file.`);
        return `PLACEHOLDER_${placeholder}`;
    }
    
    console.error(`CRITICAL: API key for ${serviceName} is not set.`);
    return '';
}
