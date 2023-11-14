import { PluginOption } from "vite";

export default function I18nHotReload(): PluginOption {
    return {
        name: 'cfuenlabs-lit-unocss-hmr',
        handleHotUpdate({ file, server }) {
            if (file.includes('components') && file.endsWith('.mjs')) {
                console.log('Components built')
                server.ws.send({
                    type: "custom",
                    event: "build",
                });
            }
        },
    }
}