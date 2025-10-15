import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // Правило для изображений
                    if (assetInfo.name && /\.(png|jpe?g|svg|gif|webp)$/i.test(assetInfo.name)) {
                        return 'assets/[name]-[hash][extname]';
                    }
                    // Правило для других типов ресурсов (например, CSS)
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});