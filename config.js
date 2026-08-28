(function (root) {
    'use strict';

    // Production-safe default: account UI and every Supabase request stay disabled.
    // Deployment configuration may replace these public values; never put a secret or
    // service-role key in this file (GitHub Pages serves it to every visitor).
    root.DreamBoardConfig = Object.freeze({
        authEnabled: true,
        supabaseUrl: 'https://edcnalnojbiwhmqbsnuf.supabase.co',
        supabasePublishableKey: 'sb_publishable_c90SO_OZg2rvGbtulV43GQ_G3HxTWxo',
        turnstileSiteKey: '0x4AAAAAAEfG-QbBMH0FxA4t',
        requireCaptcha: true
    });
})(typeof window !== 'undefined' ? window : globalThis);
