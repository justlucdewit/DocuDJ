import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

window.config = {
};

// Read config.json from vue public folder
const initialize = async () => {
    const configFile = await axios.get(`/config.json`);
    const contentFile = await axios.get(`/docs/_content.json`);

    window.content = contentFile.data;
    window.config = configFile.data;
    
    createApp(App).use(router).mount('#app')
};

initialize();


