// WooCommerce Dashboard Configuration
// Instructions: Fill in your WooCommerce site details below

window.WC_CONFIG = {
    // Your WordPress/WooCommerce site URL (without trailing slash)
    siteUrl: 'https://yoursite.com',

    // Your WooCommerce REST API credentials
    // Generate these in WooCommerce > Settings > Advanced > REST API
    consumerKey: 'ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumerSecret: 'cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',

    // Your business/shipping address (used on packing lists and receipts)
    businessAddress: {
        name: 'Your Business Name',
        address1: '123 Main Street',
        address2: 'Suite 100',
        city: 'Your City',
        state: 'ST',
        postcode: '12345',
        country: 'Country',
        phone: '(555) 123-4567',
        email: 'orders@yourbusiness.com'
    }
};
