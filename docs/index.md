---
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}
</style>

```js
const cash = FileAttachment('./data/CashOnHand.csv').csv({typed: true});
const liabilities = FileAttachment("data/Liabilities.csv").csv({typed: true});
const assets = FileAttachment("data/NonCashAssets.csv").csv({typed: true});
```


<div class="hero">
  <h1>Our open journey, in numbers</h1>
  <h2>We keep on evolving what's here, so check back every now and then.</h2>
  <a href="https://www.libscie.org">Visit our main website<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

```js
cash.sort((a, b) => new Date(a.date) - new Date(b.date));
const mostRecentCashValue = cash[cash.length - 1];

liabilities.sort((a, b) => new Date(a.date) - new Date(b.date));
const mostRecentLiabilityValue = liabilities[liabilities.length - 1];

assets.sort((a, b) => new Date(a.date) - new Date(b.date));
const mostRecentAssetValue = assets[assets.length - 1];
```

<div class="grid grid-cols-3">
  <div class="card"><h2>Cash on hand</h2><span class="big">€${(mostRecentCashValue.amount).toLocaleString()}</span></div>
  <div class="card"><h2>Non-cash assets</h2><span class="big">€${(mostRecentAssetValue.amount).toLocaleString()}</span></div>
  <div class="card"><h2>Liabilities</h2><span class="big">€${(mostRecentLiabilityValue.amount).toLocaleString()}</span></div>
</div>

---

## Disclaimer

The information provided on the website https://open.libscie.org is provided for informational purposes only.

We do not guarantee the accuracy of provided information. No rights or obligations can be inferred from the information as a result.

Information may be changed at any time at the sole discretion of Liberate Science GmbH.
