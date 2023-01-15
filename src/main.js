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

// add highlight js lanugage definition for pea
hljs.registerLanguage('pea', function(hljs) {
    return {
        aliases: ['al'],
        keywords: {
            keyword: 'CODEUNIT BEGIN END VARS ARGS FUNCTION RETURNS IMPORT CALL RETURN IF ELSE WHILE FOR SET TO',
            literal: 'true false',
            built_in: 'uint8 uint16 uint32 uint64 int8 int16 int32 int64 float32 float64 string bool void ptr',
        },
        contains: [
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            hljs.COMMENT('\-\-\-', '\-\-\-'),
            hljs.COMMENT('\-\-', '\n')
        ],
    };
});

hljs.configure({
    ignoreUnescapedHTML: true,
})

setInterval(() => {
    hljs.highlightAll();
}, 500);