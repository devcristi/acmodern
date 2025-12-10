// loader dependinte

(function()
{
    'use strict';

    //* CSS

    const cssLinks = 
    [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'styles/style.css'
    ];

    const jsScripts =
    [
        // Tailwind CSS
        'https://cdn.tailwindcss.com',
        
        // Bootstrap
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
    ];

    // loader

    function LoadCSS()
    {
        cssLinks.forEach( href => 
        {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        });
        console.log('✅ CSS incarcat');
    }

    function loadJS(callback) 
    {
        let loadedCount = 0;
        
        function loadScript(index) 
        {
            if (index >= jsScripts.length) 
            {
                console.log('✅ All JS libraries loaded');
                if (callback) callback();
                return;
            }

            const script = document.createElement('script');
            script.src = jsScripts[index];
            script.onload = () => 
            {
                loadedCount++;
                console.log(`📦 Loaded: ${jsScripts[index].split('/').pop()}`);
                loadScript(index + 1);
            };
            script.onerror = () =>
            {
                console.error(`❌ Failed to load: ${jsScripts[index]}`);
                loadScript(index + 1); // Continue anyway
            };
            document.body.appendChild(script);
        }

        loadScript(0);
    }

    if (document.readyState === 'loading') 
    {
        document.addEventListener('DOMContentLoaded', () => {
            LoadCSS();
            loadJS();
        });
    } 
    else
    {
        LoadCSS();
        loadJS();
    }
})