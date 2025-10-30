# WooDash

This is a WooCommerce order dashboard.
it is intended to be run locally on any machine.

It has a left column showing pending orders only and a right column for the order selected.
in the order main order column you will see a copy of the order with 3 buttons that directly talk to WooCommerce one to print out a packing list, one to print out a receipt and only to complete the order.

you will need the woocommerce API <br>
-Woocommerce base url (https://example.com)<br>
-customer key (ck_)<br>
-customer secret (cs_)

you will need cross origin for images, and hotlink protection off.

the config file is not encrypted or secured. this is why it is to be kept local only.
i intent to fix this issue soon.