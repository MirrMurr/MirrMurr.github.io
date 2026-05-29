# Pocket Ledger

Pocket Ledger is a ***finance-tracker*** and ***bill-splitter*** application, suitable for friend groups who need a sophisticated and easy way of handling bills that should be split between participants.

<br />

It's core algorithms and logic handles different currencies, different split distributions. When the *ledger* is finalised, a ***graph-algorithm*** collapses the expenses into a tree-like format, where each person only needs to settle their balance with one other person of the group, instead of sending multiple payments to multiple participants.

<br />

It was born out of necessity, since the go-to applications, I have used in the past, changed their monetization plans and were no longer viable to me or my friends. Also, ever since I came across such logic that calculates collapsed expenses, I though to myself: "I think I could do that too!"; so I saw the perfect opportunity. The basic settle-calculation was done in about 2 hours. Then at 3 A.M. the next day I had the working prototype for the collapsing as well.

<!-- <br /> -->
<!--
<pre>
const i = 0;
</pre> -->