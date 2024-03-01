import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()],

        server: {
                    fs: {
                        allow: ['data_jsons','data_jsons_dz', 'data_jsons_dea','data_jsons_dea_2202','data_jsons_dea_2302']
                    }
                }
};



export default config;