Feature('news');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.see('まん延防止');
    I.see('コロナ');
    I.see('テレワーク');
    I.see('東京');
});
