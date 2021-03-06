import { describe, it } from 'mocha';

/* eslint-disable func-names, prefer-arrow-callback */

describe.skip('Mocha Timeout', function () {
  this.timeout(500);

  // The next two test are showed as pending, but in the book as 'ok/pass'
  it('should take around 300ms', function (done) {
    setTimeout(done, 300);
  });

  it('should take around 250ms', function (done) {
    setTimeout(done, 250);
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
