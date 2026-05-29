// Staging Environment Helper
// This file helps with template development before deploying

(function() {
    // Only run in staging (check for localhost or staging URL)
    if (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1')) {
        
        // Add staging toolbar
        const toolbar = document.createElement('div');
        toolbar.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; right: 0; background: #333; color: white; padding: 8px; text-align: center; font-family: monospace; z-index: 9999; font-size: 12px;">
                🔧 STAGING MODE | Template: ${window.location.pathname.split('/')[2] || 'Unknown'} | 
                <button onclick="localStorage.clear(); location.reload()">Clear Cache</button>
                <button onclick="document.body.style.border = '3px solid red'">Mark Template</button>
                <button onclick="window.print()">Print Layout</button>
            </div>
        `;
        document.body.style.marginTop = '40px';
        document.body.insertBefore(toolbar, document.body.firstChild);
        
        // Add hotkey shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl+Shift+R - Reset template styles
            if (e.ctrlKey && e.shiftKey && e.key === 'R') {
                e.preventDefault();
                location.reload(true);
            }
            
            // Ctrl+Shift+M - Toggle mobile view
            if (e.ctrlKey && e.shiftKey && e.key === 'M') {
                e.preventDefault();
                document.body.classList.toggle('mobile-preview');
                if (document.body.classList.contains('mobile-preview')) {
                    document.body.style.maxWidth = '375px';
                    document.body.style.margin = '0 auto';
                } else {
                    document.body.style.maxWidth = 'none';
                }
            }
        });
        
        console.log('%c🔧 Staging Environment Active', 'color: #ff6b6b; font-size: 14px; font-weight: bold;');
        console.log('%cTemplate Path:', 'color: #4CAF50;', window.location.pathname);
    }
})();