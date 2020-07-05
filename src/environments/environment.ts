// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  shopUrl: 'http://localhost:8085/gcfashions/shop',
  accountUrl: 'http://localhost:8085/gcfashions',
  salesUrl: 'http://localhost:8085/gcfashions/sales',
  baseUrl: 'http://localhost:8085/gcfashions',
  getProductsURI: '/products',
  getProductsLikeURI: '/products/like/',
  getOpenTransactionURI: '/transactions/open/userid/',
  getCompleteTransactionsLikeURI: '/transactions/complete/like/',
  getAllCompleteTransactionsURI: '/transactions/complete',
  getCartItemsURI: '/transactions/cart/userid/',
  getCategoriesURI: '/categories',
  getCategoryURI: '/categories/',
  getSubcategoryURI: '/subcategories/',
  getTransactionURI: '/transactions/',
  getInventoryURI: '/inventory/',
  getCouponURI: '/transactions/open/coupon/userid/',
  postTransactionURI: '/transactions',
  postCouponURI: '/transactions/open/coupon',
  postCheckoutURI: '/checkout',
  updateTransactionURI: '/checkout',
  instoreRefundURI: '/transactions/refund',
  deleteTransactionURI: '/transactions/open/userid/',
  getUserURI: '/account/users/',
  stripePublishKey: 'pk_test_51GxNidEC7SOZT967Mac1f9zlZaY3Habn9hqA07G1Zds5o5m7JL7VrQW6WYRvld7fveYnS3g98oz8gQOZA2hey6W7006MQxUvcV',
  getUserTransactionsURI: '/transactions',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
